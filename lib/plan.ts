import { LESSONS } from "./content";
import type { DiagnosticResult } from "./store";
import type { Level } from "./types";

export interface PlanDay {
  day: number;
  week: number;
  title: string;
  lessonIds: string[];
  mock?: Level;
  review?: boolean;
}

export interface Block {
  min: number;
  what: string;
  where: string;
}

export const ROUTINE_2H: Block[] = [
  { min: 15, what: "Revisão espaçada: perguntas que vencem hoje", where: "Treino → Revisão do dia" },
  { min: 20, what: "Escuta: ouvir frases sem ler e repetir em voz alta (shadowing)", where: "Escuta" },
  { min: 40, what: "Aula do dia: explicação em PT, termos em EN, exemplo", where: "Aulas" },
  { min: 30, what: "Drill oral: responder às perguntas da aula até passar de 70", where: "Aulas → Perguntas" },
  { min: 15, what: "Flashcards e revisão dos seus erros recorrentes", where: "Glossário + Progresso" },
];

export const ROUTINE_EXTRA_2H: Block[] = [
  { min: 30, what: "Exercícios de avaliação: comparar respostas e justificar em voz alta", where: "Exercícios" },
  { min: 30, what: "Mini-simulado no seu nível atual (modo mãos livres)", where: "Simulado" },
  { min: 30, what: "Gravar respostas, ouvir a si mesmo e regravar a pior", where: "Treino (gravação ligada)" },
  { min: 30, what: "Escuta livre: vídeo técnico em inglês com legenda em inglês, repetindo frases", where: "Fora do app" },
];

// Week 1 foundations, week 2 how LLMs work, week 3 evaluation + annotation,
// week 4 coding evaluation + annotation. Interview English (module 6) runs every day,
// starting with the self-introduction on day 1.
export function buildPlan(): PlanDay[] {
  const byModule = (m: number) => LESSONS.filter((l) => l.module === m).map((l) => l.id);
  const studyDays: Record<number, number[]> = {
    1: [1, 2, 3, 4, 5, 6],
    2: [8, 9, 10, 11, 12, 13],
    3: [15, 16, 17, 18, 19, 20],
    4: [17, 18, 19, 20, 22, 23, 24, 25],
    5: [22, 23, 24, 25, 26, 27],
  };
  const days: Map<number, PlanDay> = new Map();
  const get = (d: number) => {
    if (!days.has(d)) days.set(d, { day: d, week: Math.ceil(d / 7), title: "", lessonIds: [] });
    return days.get(d)!;
  };
  for (const [mod, ds] of Object.entries(studyDays)) {
    const ls = byModule(Number(mod));
    ls.forEach((id, i) => get(ds[Math.floor((i * ds.length) / ls.length)]).lessonIds.push(id));
  }
  const allStudy = [1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 15, 16, 17, 18, 19, 20, 22, 23, 24, 25, 26, 27];
  const m6 = byModule(6);
  m6.forEach((id, i) => get(allStudy[Math.floor((i * allStudy.length) / Math.max(m6.length, 1)) % allStudy.length]).lessonIds.unshift(id));

  const mocks: Record<number, Level> = { 7: 1, 14: 2, 21: 3, 28: 3, 30: 4 };
  const titles: Record<number, string> = {
    1: "Fundamentos", 2: "Funcionamento dos LLMs", 3: "Avaliação + anotação", 4: "Avaliação de código + revisão",
  };
  const out: PlanDay[] = [];
  for (let d = 1; d <= 30; d++) {
    const p = get(d);
    if (mocks[d]) {
      p.mock = mocks[d];
      p.title = d === 30 ? "Entrevista real (Nível 4) e relatório final" : `Simulado semanal: Nível ${mocks[d]}`;
    } else if (d === 29) {
      p.review = true;
      p.title = "Revisão das lições mais fracas";
    } else p.title = titles[Math.min(4, Math.ceil(d / 7))];
    out.push(p);
  }
  return out;
}

/** Plan adjustments from the diagnostic and from recurring weaknesses. */
export function personalNotes(diag: DiagnosticResult | null, weak: { listening?: number; speaking?: number; technical?: number; pronunciation?: number }): string[] {
  const notes: string[] = [];
  if (!diag) {
    notes.push("Faça o diagnóstico para o plano se ajustar ao seu nível.");
    return notes;
  }
  if (diag.listening < 50 || (weak.listening ?? 100) < 55)
    notes.push("Compreensão auditiva é seu ponto fraco: troque 15 min da aula por mais escuta lenta (velocidade 0.8) e repita cada frase 3 vezes.");
  if (diag.oral < 45 || (weak.speaking ?? 100) < 55)
    notes.push("Responder em inglês ainda trava: comece cada resposta com uma frase pronta (\"Sure. In simple terms, ...\") e responda em 2 frases antes de tentar respostas longas.");
  if (diag.techQuiz < 60 || (weak.technical ?? 100) < 55)
    notes.push("Conteúdo técnico precisa de base: leia a explicação em português duas vezes antes de responder e use o modelo de resposta nível básico.");
  if (diag.intelligibility < 60 || (weak.pronunciation ?? 100) < 60)
    notes.push("Inteligibilidade: pratique as frases de shadowing devagar, articulando os finais das palavras (-s, -ed, -th).");
  if (diag.techQuiz >= 75)
    notes.push("Você já tem boa base técnica: priorize a fala, os módulos 3 (avaliação) e 5 (código), e os simulados.");
  notes.push(`Nível inicial recomendado para os simulados: ${diag.startLevel}.`);
  return notes;
}
