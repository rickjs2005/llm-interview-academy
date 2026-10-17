export type Level = 1 | 2 | 3 | 4;

export interface Term {
  en: string;
  pt: string;
  say?: string;
}

export interface ListenItem {
  en: string;
  options: string[];
  correct: number;
}

export interface Lesson {
  id: string;
  module: number;
  order: number;
  title: string;
  titlePt: string;
  explainPt: string;
  terms: Term[];
  example: string;
  shadow: string[];
  listen: ListenItem[];
  questionIds: string[];
}

export interface Question {
  id: string;
  module: number;
  lesson: string;
  level: Level;
  kind: "concept" | "scenario" | "behavioral" | "intro" | "practical";
  q: string;
  qPt: string;
  keys: string[][];
  keysPt: string[];
  a1: string;
  a2: string;
  a3: string;
  tipPt: string;
  followUp: string;
}

export interface Exercise {
  id: string;
  module: number;
  level: Level;
  type: "pairwise" | "single" | "code";
  prompt: string;
  responseA: string;
  responseB?: string;
  better: "A" | "B" | "tie" | null;
  question: string;
  keys: string[][];
  keysPt: string[];
  modelAnswer: string;
  explainPt: string;
}

export interface ModuleContent {
  module: number;
  title: string;
  titlePt: string;
  lessons: Lesson[];
  questions: Question[];
  exercises: Exercise[];
}

export interface GlossaryEntry {
  en: string;
  pt: string;
  defPt: string;
  exampleEn: string;
  say?: string;
  cat: string;
}

/** Anything the learner can answer by voice and get scored on. */
export interface DrillItem {
  id: string;
  q: string;
  qPt?: string;
  keys: string[][];
  keysPt: string[];
  model: string;
  tipPt?: string;
  level: Level;
  followUp?: string;
  /** Exercise context shown on screen (responses to compare). */
  exercise?: Exercise;
}

export type Criterion = "technical" | "listening" | "speaking" | "clarity" | "pronunciation";

export interface Scores {
  technical: number | null;
  listening: number | null;
  speaking: number | null;
  clarity: number | null;
  pronunciation: number | null;
  total: number;
}

export interface Attempt {
  at: number;
  itemId: string;
  mode: "lesson" | "practice" | "diagnostic" | "simulation" | "exercise";
  level: Level;
  transcript: string;
  scores: Scores;
  missingKeys: string[];
  grammarIds: string[];
  heardAudio: boolean;
  textRevealed: boolean;
  replays: number;
  latencyMs: number | null;
  words: number;
}
