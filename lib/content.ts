import m1 from "@/content/m1.json";
import m2 from "@/content/m2.json";
import m3 from "@/content/m3.json";
import m4 from "@/content/m4.json";
import m5 from "@/content/m5.json";
import m6 from "@/content/m6.json";
import glossaryJson from "@/content/glossary.json";
import type { DrillItem, Exercise, GlossaryEntry, Lesson, Level, ModuleContent, Question } from "./types";

export const MODULES = [m1, m2, m3, m4, m5, m6] as unknown as ModuleContent[];
export const GLOSSARY = glossaryJson as GlossaryEntry[];

export const LESSONS: Lesson[] = MODULES.flatMap((m) => [...m.lessons].sort((a, b) => a.order - b.order));
export const QUESTIONS: Question[] = MODULES.flatMap((m) => m.questions);
export const EXERCISES: Exercise[] = MODULES.flatMap((m) => m.exercises ?? []);

const qById = new Map(QUESTIONS.map((q) => [q.id, q]));
const xById = new Map(EXERCISES.map((x) => [x.id, x]));
export const questionById = (id: string) => qById.get(id);
export const exerciseById = (id: string) => xById.get(id);
export const lessonById = (id: string) => LESSONS.find((l) => l.id === id);

/** Model answer matched to the level being trained. */
export function modelAnswer(q: Question, level: Level): string {
  return level <= 1 ? q.a1 : level === 2 ? q.a2 : q.a3;
}

export function questionToDrill(q: Question, level: Level = q.level): DrillItem {
  return {
    id: q.id,
    q: q.q,
    qPt: q.qPt,
    keys: q.keys,
    keysPt: q.keysPt,
    model: modelAnswer(q, level),
    tipPt: q.tipPt,
    level,
    followUp: q.followUp,
  };
}

export function exerciseToDrill(x: Exercise): DrillItem {
  return {
    id: x.id,
    q: x.question,
    keys: x.keys,
    keysPt: x.keysPt,
    model: x.modelAnswer,
    tipPt: x.explainPt,
    level: x.level,
    exercise: x,
  };
}

export function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
