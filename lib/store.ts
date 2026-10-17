"use client";

import { useSyncExternalStore } from "react";
import type { Attempt, Criterion, Level } from "./types";

// All progress lives in this browser's localStorage (nothing is sent anywhere).
// Settings > Backup exports/imports it as JSON.

export interface Settings {
  voiceName: string | null;
  rateMul: number;
  recordConsent: boolean;
  showLive: boolean;
  handsFree: boolean;
  ollamaUrl: string;
  ollamaModel: string;
  profileProjects: string;
}

export interface DiagnosticResult {
  at: number;
  techQuiz: number; // 0..100, quiz in Portuguese (knowledge independent of English)
  listening: number; // 0..100, from audio comprehension items
  intelligibility: number; // 0..100, repeat-after-me match
  oral: number; // 0..100, average total of spoken answers
  techLevel: string;
  listenLevel: string;
  startLevel: Level;
  focus: string[];
}

export interface SimRecord {
  at: number;
  level: Level;
  total: number;
  avg: Partial<Record<Criterion, number>>;
  count: number;
}

export interface State {
  version: 1;
  settings: Settings;
  attempts: Attempt[];
  srs: Record<string, { box: number; due: number }>;
  listenChecks: { at: number; id: string; correct: boolean; rate: number }[];
  shadows: { at: number; target: string; match: number; missed: string[] }[];
  flash: Record<string, { box: number; due: number }>;
  sims: SimRecord[];
  lessonsSeen: Record<string, number>;
  diagnostic: DiagnosticResult | null;
  startedAt: number;
}

const KEY = "llm-interview-academy:v1";
const DAY = 86400000;
export const SRS_DAYS = [0, 1, 2, 4, 7, 15];

function initial(): State {
  return {
    version: 1,
    settings: { voiceName: null, rateMul: 1, recordConsent: false, showLive: false, handsFree: false, ollamaUrl: "", ollamaModel: "", profileProjects: "" },
    attempts: [],
    srs: {},
    listenChecks: [],
    shadows: [],
    flash: {},
    sims: [],
    lessonsSeen: {},
    diagnostic: null,
    startedAt: Date.now(),
  };
}

let state: State = initial();
let loaded = false;
const subs = new Set<() => void>();

function load() {
  if (loaded || typeof window === "undefined") return;
  loaded = true;
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      const base = initial();
      state = { ...base, ...parsed, settings: { ...base.settings, ...parsed.settings } };
    }
  } catch {}
}

function persist() {
  try {
    localStorage.setItem(KEY, JSON.stringify(state));
  } catch {}
}

export function getState(): State {
  load();
  return state;
}

export function update(fn: (s: State) => State) {
  load();
  state = fn(state);
  persist();
  subs.forEach((f) => f());
}

const serverSnapshot = initial();
export function useStore(): State {
  return useSyncExternalStore(
    (cb) => {
      subs.add(cb);
      return () => subs.delete(cb);
    },
    getState,
    () => serverSnapshot,
  );
}

export function setSettings(patch: Partial<Settings>) {
  update((s) => ({ ...s, settings: { ...s.settings, ...patch } }));
}

export function recordAttempt(a: Attempt) {
  update((s) => {
    const prev = s.srs[a.itemId] ?? { box: 0, due: 0 };
    const box = a.scores.total >= 75 ? Math.min(5, prev.box + 1) : a.scores.total < 50 ? 0 : prev.box;
    return {
      ...s,
      attempts: [...s.attempts, a].slice(-3000),
      srs: { ...s.srs, [a.itemId]: { box, due: Date.now() + SRS_DAYS[box] * DAY } },
    };
  });
}

export function recordListen(id: string, correct: boolean, rate: number) {
  update((s) => ({ ...s, listenChecks: [...s.listenChecks, { at: Date.now(), id, correct, rate }].slice(-3000) }));
}

export function recordShadow(target: string, match: number, missed: string[]) {
  update((s) => ({ ...s, shadows: [...s.shadows, { at: Date.now(), target, match, missed }].slice(-3000) }));
}

export function recordFlash(term: string, knew: boolean) {
  update((s) => {
    const prev = s.flash[term] ?? { box: 0, due: 0 };
    const box = knew ? Math.min(5, prev.box + 1) : 0;
    return { ...s, flash: { ...s.flash, [term]: { box, due: Date.now() + SRS_DAYS[box] * DAY } } };
  });
}

export function markLessonSeen(id: string) {
  update((s) => ({ ...s, lessonsSeen: { ...s.lessonsSeen, [id]: Date.now() } }));
}

export function lastAttempt(s: State, itemId: string): Attempt | undefined {
  for (let i = s.attempts.length - 1; i >= 0; i--) if (s.attempts[i].itemId === itemId) return s.attempts[i];
}

/** Lesson mastery: average of the latest score on each of its questions (unanswered count as 0). */
export function lessonMastery(s: State, questionIds: string[]): { pct: number; answered: number } {
  if (!questionIds.length) return { pct: 0, answered: 0 };
  let sum = 0;
  let answered = 0;
  for (const id of questionIds) {
    const a = lastAttempt(s, id);
    if (a) {
      sum += a.scores.total;
      answered++;
    }
  }
  return { pct: Math.round(sum / questionIds.length), answered };
}

export function criterionAverages(attempts: Attempt[]): Partial<Record<Criterion, number>> {
  const keys: Criterion[] = ["technical", "listening", "speaking", "clarity", "pronunciation"];
  const max: Record<Criterion, number> = { technical: 30, listening: 25, speaking: 20, clarity: 15, pronunciation: 10 };
  const out: Partial<Record<Criterion, number>> = {};
  for (const k of keys) {
    const vals = attempts.map((a) => a.scores[k]).filter((v): v is number => v !== null);
    if (vals.length) out[k] = Math.round((vals.reduce((x, y) => x + y, 0) / vals.length / max[k]) * 100);
  }
  return out;
}

export function exportBackup(): string {
  return JSON.stringify(getState(), null, 2);
}

export function importBackup(json: string): boolean {
  try {
    const parsed = JSON.parse(json);
    if (parsed?.version !== 1) return false;
    update(() => ({ ...initial(), ...parsed, settings: { ...initial().settings, ...parsed.settings } }));
    return true;
  } catch {
    return false;
  }
}

export function resetAll() {
  update(() => initial());
}
