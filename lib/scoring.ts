import type { Criterion, Level, Scores } from "./types";
import { findGrammarIssues, portugueseRatio, type GrammarRule } from "./grammar";

// Rule-based scoring. It is an automatic estimate, not a human or LLM judgment.
// Max points per criterion, as defined in the study plan (total 100).
export const MAX: Record<Criterion, number> = {
  technical: 30,
  listening: 25,
  speaking: 20,
  clarity: 15,
  pronunciation: 10,
};

export const CRITERION_PT: Record<Criterion, string> = {
  technical: "Conhecimento técnico",
  listening: "Compreensão auditiva",
  speaking: "Responder em inglês",
  clarity: "Clareza e organização",
  pronunciation: "Pronúncia / inteligibilidade",
};

const NUM: Record<string, string> = {
  "0": "zero", "1": "one", "2": "two", "3": "three", "4": "four", "5": "five",
  "6": "six", "7": "seven", "8": "eight", "9": "nine", "10": "ten",
};
const CONTRACTIONS: [RegExp, string][] = [
  [/\bit's\b/g, "it is"], [/\bthat's\b/g, "that is"], [/\bi'm\b/g, "i am"], [/\byou're\b/g, "you are"],
  [/\bdon't\b/g, "do not"], [/\bdoesn't\b/g, "does not"], [/\bisn't\b/g, "is not"], [/\bcan't\b/g, "can not"],
  [/\bcannot\b/g, "can not"], [/\bi've\b/g, "i have"], [/\bwe're\b/g, "we are"], [/\bthey're\b/g, "they are"],
  [/\bwon't\b/g, "will not"], [/\bi'd\b/g, "i would"], [/\blet's\b/g, "let us"], [/\bthere's\b/g, "there is"],
  [/\bwhat's\b/g, "what is"], [/\baren't\b/g, "are not"], [/\bdidn't\b/g, "did not"], [/\bi'll\b/g, "i will"],
];

export function normalize(text: string): string {
  let t = text.toLowerCase().replace(/[’`]/g, "'");
  for (const [re, rep] of CONTRACTIONS) t = t.replace(re, rep);
  t = t.replace(/[^a-z0-9'\s-]/g, " ").replace(/-/g, " ");
  return t
    .split(/\s+/)
    .filter(Boolean)
    .map((w) => NUM[w] ?? w)
    .join(" ");
}

export function words(text: string): string[] {
  return normalize(text).split(" ").filter(Boolean);
}

export function matchKeys(transcript: string, keys: string[][]): boolean[] {
  const t = " " + normalize(transcript) + " ";
  return keys.map((group) =>
    group.some((syn) => {
      const s = normalize(syn);
      if (!s) return false;
      // Short tokens must match whole words ("ai" should not match "said").
      return s.length <= 3 ? t.includes(" " + s + " ") : t.includes(s);
    }),
  );
}

/** Fraction of target words said in order (LCS), for repeat-after-me tasks. */
export function wordMatch(target: string, said: string): number {
  const a = words(target);
  const b = words(said);
  if (!a.length) return 0;
  const dp: number[][] = Array.from({ length: a.length + 1 }, () => new Array(b.length + 1).fill(0));
  for (let i = 1; i <= a.length; i++)
    for (let j = 1; j <= b.length; j++)
      dp[i][j] = a[i - 1] === b[j - 1] ? dp[i - 1][j - 1] + 1 : Math.max(dp[i - 1][j], dp[i][j - 1]);
  return dp[a.length][b.length] / a.length;
}

/** Target words the recognizer did not catch: these are the words to practice. */
export function missedWords(target: string, said: string): string[] {
  const got = new Set(words(said));
  return [...new Set(words(target).filter((w) => w.length > 2 && !got.has(w)))];
}

const MARKERS = [
  "first", "second", "third", "finally", "because", "for example", "for instance", "so ", "also",
  "however", "but ", "in summary", "overall", "on the other hand", "which means", "that is why",
  "in my opinion", "i think", "i would", "the reason", "in short", "another", "then",
];
const FILLERS = /\b(uh|um|erm|hmm|ah|eh)\b/g;
const TARGET_WORDS: Record<Level, number> = { 1: 12, 2: 25, 3: 40, 4: 55 };

export interface EvalInput {
  transcript: string;
  keys: string[][];
  question: string;
  level: Level;
  heardAudio: boolean;
  textRevealed: boolean;
  replays: number;
  politeRepeatRequests: number;
  latencyMs: number | null;
  /** 0..1 from a repeat-after-me attempt in the same drill, if any. */
  shadowMatch: number | null;
}

export interface Evaluation {
  scores: Scores;
  matched: boolean[];
  grammar: GrammarRule[];
  words: number;
  ptRatio: number;
  markersUsed: string[];
  fillerCount: number;
  notes: string[];
}

export function evaluate(inp: EvalInput): Evaluation {
  const w = words(inp.transcript);
  const n = w.length;
  const matched = matchKeys(inp.transcript, inp.keys);
  const hits = matched.filter(Boolean).length;
  const notes: string[] = [];

  // Technical (30)
  const needed = Math.max(1, Math.ceil(inp.keys.length * 0.75));
  const technical = inp.keys.length ? Math.round(MAX.technical * Math.min(1, hits / needed)) : null;

  // Listening (25): only when the question was really played as audio and the text
  // stayed hidden until after answering.
  let listening: number | null = null;
  if (inp.heardAudio && !inp.textRevealed) {
    const qWords = new Set(words(inp.question).filter((x) => x.length > 4));
    const overlap = w.filter((x) => qWords.has(x)).length;
    const understood = n >= 4 && (hits >= 1 || overlap >= 2);
    if (!n) listening = 0;
    else if (!understood) {
      listening = 8;
      notes.push("Sua resposta parece não tratar do que foi perguntado. Talvez você não tenha entendido o áudio. Peça para repetir: \"Could you repeat the question, please?\"");
    } else {
      const extra = Math.max(0, inp.replays - inp.politeRepeatRequests - 1);
      listening = Math.max(12, MAX.listening - extra * 3);
    }
  } else if (inp.textRevealed) {
    notes.push("Você abriu o texto antes de responder, então a compreensão auditiva não foi pontuada nesta tentativa.");
  }

  // Speaking in English (20)
  let speaking = 0;
  const ptRatio = portugueseRatio(w);
  if (n) {
    speaking += 12 * Math.min(1, n / TARGET_WORDS[inp.level]);
    if (inp.latencyMs === null) speaking += 2;
    else speaking += 4 * Math.max(0, Math.min(1, (20000 - inp.latencyMs) / 16000));
    speaking += 4 * (1 - Math.min(1, ptRatio * 4));
    if (ptRatio > 0.1) notes.push("Detectei palavras em português. Na entrevista, tente manter tudo em inglês, mesmo que seja simples.");
    if (n < TARGET_WORDS[inp.level] * 0.5)
      notes.push(`Resposta curta (${n} palavras). Para este nível, tente falar cerca de ${TARGET_WORDS[inp.level]} palavras.`);
    if (inp.latencyMs !== null && inp.latencyMs > 8000)
      notes.push("Você demorou para começar. Use uma frase para ganhar tempo: \"That's a good question. Let me think for a second.\"");
  }

  // Clarity (15)
  const t = " " + normalize(inp.transcript) + " ";
  const markersUsed = MARKERS.filter((m) => t.includes(" " + m.trim() + " "));
  const fillerCount = (t.match(FILLERS) ?? []).length;
  let clarity = 0;
  if (n >= 3) {
    clarity += Math.min(6, markersUsed.length * 2);
    clarity += n >= TARGET_WORDS[inp.level] * 0.6 ? 3 : 1;
    const unique = new Set(w).size / n;
    clarity += unique >= 0.45 ? 3 : Math.round(unique * 6);
    clarity += Math.max(0, 3 - fillerCount);
    if (markersUsed.length === 0)
      notes.push("Organize a resposta com conectores: \"First... Also... For example... So...\"");
  }

  const pronunciation = inp.shadowMatch === null ? null : Math.round(MAX.pronunciation * inp.shadowMatch);

  const parts: [Criterion, number | null][] = [
    ["technical", technical],
    ["listening", listening],
    ["speaking", Math.round(speaking)],
    ["clarity", Math.round(clarity)],
    ["pronunciation", pronunciation],
  ];
  let got = 0;
  let max = 0;
  for (const [c, v] of parts) {
    if (v === null) continue;
    got += v;
    max += MAX[c];
  }
  const scores: Scores = {
    technical,
    listening,
    speaking: Math.round(speaking),
    clarity: Math.round(clarity),
    pronunciation,
    total: max ? Math.round((got / max) * 100) : 0,
  };
  return { scores, matched, grammar: findGrammarIssues(inp.transcript), words: n, ptRatio, markersUsed, fillerCount, notes };
}

/** Detects "could you repeat that?" style requests so the interviewer can replay the question. */
export function isRepeatRequest(transcript: string): boolean {
  const t = normalize(transcript);
  if (words(t).length > 12) return false;
  return /\b(repeat|say that again|say it again|one more time|pardon|didn t catch|did not catch|again please|slower|slowly)\b/.test(t);
}

export function band(total: number): { label: string; tone: "bad" | "mid" | "good" } {
  if (total >= 80) return { label: "Pronto para entrevista", tone: "good" };
  if (total >= 60) return { label: "Bom, falta polir", tone: "mid" };
  if (total >= 40) return { label: "Em desenvolvimento", tone: "mid" };
  return { label: "Precisa de prática", tone: "bad" };
}
