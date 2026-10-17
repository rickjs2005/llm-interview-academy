// Common mistakes Brazilian speakers make in English, detected on the transcript.
// Speech recognition tends to "fix" grammar toward likely phrases, so this catches
// only part of the real errors. The feedback says so.

export interface GrammarRule {
  id: string;
  re: RegExp;
  wrong: string;
  right: string;
  pt: string;
}

export const GRAMMAR_RULES: GrammarRule[] = [
  { id: "age-have", re: /\bi have \d+ years old\b/, wrong: "I have 30 years old", right: "I am 30 years old", pt: "Idade usa o verbo *to be*: \"I am 30\", não \"I have 30\"." },
  { id: "people-is", re: /\bpeople is\b/, wrong: "people is", right: "people are", pt: "*People* é plural em inglês: \"people are\"." },
  { id: "3rd-dont", re: /\b(he|she|it|the model|the user|the response|the code) don'?t\b/, wrong: "it don't", right: "it doesn't", pt: "Na 3ª pessoa do singular use *doesn't*: \"it doesn't work\"." },
  { id: "3rd-s", re: /\b(he|she|it|the model|the user|the response|the code|the answer) (want|need|have|make|give|use|say|know|work|follow|answer|explain|contain|show)\b/, wrong: "the model have", right: "the model has", pt: "Na 3ª pessoa do singular o verbo leva *-s*: \"the model has\", \"the user wants\"." },
  { id: "am-agree", re: /\bi am agree\b|\bi'm agree\b/, wrong: "I am agree", right: "I agree", pt: "*Agree* já é verbo: diga \"I agree\", sem *am*." },
  { id: "depends-of", re: /\bdepends? of\b/, wrong: "depends of", right: "depends on", pt: "Em inglês é \"depends **on**\", não \"of\"." },
  { id: "explain-me", re: /\bexplain me\b/, wrong: "explain me", right: "explain to me", pt: "Use \"explain **to** me\" ou \"explain it to me\"." },
  { id: "since-years", re: /\bsince \d+ (years|months)\b|\bsince (two|three|four|five|six|ten) (years|months)\b/, wrong: "since 3 years", right: "for 3 years", pt: "Duração usa *for*: \"for 3 years\". *Since* é para ponto de início: \"since 2021\"." },
  { id: "uncountable", re: /\b(informations|softwares|feedbacks|advices|knowledges|researches|equipments)\b/, wrong: "informations", right: "information", pt: "Essas palavras são incontáveis em inglês: information, software, feedback, advice (sem -s)." },
  { id: "make-question", re: /\bmake (a|one) question\b/, wrong: "make a question", right: "ask a question", pt: "Em inglês você *ask* uma pergunta: \"ask a question\"." },
  { id: "more-better", re: /\bmore (better|easier|faster|bigger|worse)\b/, wrong: "more better", right: "better", pt: "*Better/easier* já são comparativos. Não use *more* junto." },
  { id: "more-short-adj", re: /\bmore (easy|fast|big|small|cheap|short|long|simple|clear)\b/, wrong: "more easy", right: "easier", pt: "Adjetivos curtos fazem comparativo com *-er*: easier, faster, simpler, clearer." },
  { id: "pretend", re: /\bi pretend to\b/, wrong: "I pretend to", right: "I intend to / I plan to", pt: "Falso cognato: *pretend* = fingir. Para \"pretendo\", diga \"I plan to\" ou \"I intend to\"." },
  { id: "assist-watch", re: /\bassist (videos|classes|movies|lectures)\b/, wrong: "assist videos", right: "watch videos", pt: "Falso cognato: \"assistir vídeos\" = *watch videos*. *Assist* = ajudar." },
  { id: "in-internet", re: /\bin the internet\b/, wrong: "in the internet", right: "on the internet", pt: "Diga \"**on** the internet\"." },
  { id: "discuss-about", re: /\bdiscuss about\b/, wrong: "discuss about", right: "discuss", pt: "*Discuss* não leva *about*: \"discuss the problem\"." },
  { id: "according-with", re: /\baccording with\b/, wrong: "according with", right: "according to", pt: "É \"according **to**\"." },
  { id: "have-doubt", re: /\bi have (a )?doubt\b/, wrong: "I have a doubt", right: "I have a question", pt: "\"Tenho uma dúvida\" = *I have a question*. *Doubt* soa como desconfiança." },
  { id: "modal-to", re: /\b(can|will|should|must|could|would) to\b/, wrong: "I can to explain", right: "I can explain", pt: "Depois de *can/will/should* o verbo vem sem *to*." },
  { id: "its-depend", re: /\bit'?s depends?\b/, wrong: "it's depend", right: "it depends", pt: "Diga simplesmente \"it depends\"." },
  { id: "double-negative", re: /\b(don'?t|didn'?t|can'?t) (know|have|see|find) nothing\b/, wrong: "I don't know nothing", right: "I don't know anything", pt: "Em inglês não se usa dupla negação: \"I don't know **anything**\"." },
  { id: "for-to", re: /\bfor to\b/, wrong: "for to", right: "to", pt: "\"Para fazer\" = *to do*, não \"for to do\"." },
  { id: "how-called", re: /\bhow (is|it'?s) called\b/, wrong: "how is called", right: "what is it called", pt: "\"Como se chama\" = *what is it called?*" },
  { id: "work-since", re: /\bi (work|am working) (here |there |with \w+ )?since\b/, wrong: "I work with React since 2020", right: "I have worked with React since 2020", pt: "Ação que começou no passado e continua: use *present perfect*: \"I have worked... since\"." },
];

export function findGrammarIssues(transcript: string): GrammarRule[] {
  const t = " " + transcript.toLowerCase() + " ";
  return GRAMMAR_RULES.filter((r) => r.re.test(t));
}

export function ruleById(id: string) {
  return GRAMMAR_RULES.find((r) => r.id === id);
}

// Words that signal the learner switched to Portuguese.
const PT_WORDS = new Set(
  "é não que então tipo porque eu isso uma um mas também como para pra com sim ele ela nós você vocês está estou muito mais quando onde coisa aí né assim ou ser ter fazer sobre modelo resposta pergunta exemplo".split(" "),
);
// Words shared by both languages are excluded above where ambiguous ("a", "no", "me").

export function portugueseRatio(words: string[]): number {
  if (!words.length) return 0;
  const n = words.filter((w) => PT_WORDS.has(w)).length;
  return n / words.length;
}
