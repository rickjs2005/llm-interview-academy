"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { EXERCISES, QUESTIONS, exerciseToDrill, questionToDrill, shuffle } from "@/lib/content";
import { speak, stopSpeaking } from "@/lib/speech";
import { CRITERION_PT, MAX } from "@/lib/scoring";
import { criterionAverages, update, useStore } from "@/lib/store";
import { copyText, sessionReportPrompt } from "@/lib/export";
import type { Attempt, Criterion, DrillItem, Level } from "@/lib/types";
import Drill from "./Drill";
import { Say, ScoreBreakdown, useRate } from "./ui";

interface LevelCfg {
  title: string;
  desc: string;
  strict: boolean;
  defer: boolean;
  timeLimit?: number;
  followUps: boolean;
}

export const SIM_LEVELS: Record<Level, LevelCfg> = {
  1: { title: "Beginner", desc: "5 perguntas curtas, inglês simples, fala lenta. Correção em português depois de cada resposta.", strict: false, defer: false, followUps: false },
  2: { title: "Intermediate", desc: "6 perguntas técnicas sobre LLMs e avaliação. Velocidade moderada. Correção depois de cada resposta.", strict: false, defer: false, followUps: false },
  3: { title: "Professional", desc: "8 itens só em inglês: apresentação, técnica, comportamental, um exercício de avaliação e um de código. Avaliação só no final. 2 min por resposta.", strict: true, defer: true, timeLimit: 120, followUps: false },
  4: { title: "Real Interview", desc: "Entrevista rigorosa no estilo dos entrevistadores de IA usados por plataformas de AI training: voz natural, sem texto, sem tradução, perguntas de acompanhamento, perguntas inesperadas, 90 s por resposta. Relatório final em português.", strict: true, defer: true, timeLimit: 90, followUps: true },
};

const PROJECT_KEYS = [
  ["problem", "solve", "users", "client", "need"],
  ["i built", "i created", "i developed", "my role", "responsible", "i made", "i worked"],
  ["react", "next", "typescript", "javascript", "api", "database", "node"],
  ["result", "improve", "faster", "learned", "challenge", "difficult", "hard"],
];

function projectDrills(projects: string, level: Level): DrillItem[] {
  return projects
    .split(/[,;\n]/)
    .map((p) => p.trim())
    .filter(Boolean)
    .slice(0, 2)
    .map((p, i) => ({
      id: `profile-project-${i}`,
      q: `I see "${p}" on your resume. What problem did it solve, and what exactly was your role?`,
      keys: PROJECT_KEYS,
      keysPt: ["o problema que o projeto resolvia", "o SEU papel (I built / I was responsible for)", "tecnologias usadas", "resultado ou desafio/aprendizado"],
      model: `It was a [type of app] for [users]. The problem was [problem]. I was responsible for [your part], using React, Next.js and TypeScript. The hardest part was [challenge], and I solved it by [solution]. In the end, [result].`,
      tipPt: "Entrevistadores de IA aprofundam o que está no seu currículo. Prepare 2 projetos com: problema, seu papel, tecnologia, desafio, resultado.",
      level,
      followUp: "Why did you choose that technology instead of an alternative?",
    }));
}

function buildInterview(level: Level, projects: string): DrillItem[] {
  const pick = (f: (q: (typeof QUESTIONS)[number]) => boolean, n: number) => shuffle(QUESTIONS.filter(f)).slice(0, n);
  const ex = (types: string[], n: number) => shuffle(EXERCISES.filter((x) => types.includes(x.type) && x.level <= Math.max(2, level))).slice(0, n);
  if (level === 1) return pick((q) => q.level === 1, 5).map((q) => questionToDrill(q, 1));
  if (level === 2) return pick((q) => q.level <= 2 && q.module !== 5, 6).map((q) => questionToDrill(q, 2));
  const intro = pick((q) => q.module === 6 && (q.kind === "intro" || q.lesson.endsWith("l01")), 1);
  if (level === 3) {
    return [
      ...intro.map((q) => questionToDrill(q, 3)),
      ...pick((q) => q.module >= 1 && q.module <= 4 && (q.level === 2 || q.level === 3), 4).map((q) => questionToDrill(q, 3)),
      ...pick((q) => q.module === 6 && q.kind === "behavioral", 1).map((q) => questionToDrill(q, 3)),
      ...ex(["pairwise", "single"], 1).map(exerciseToDrill),
      ...ex(["code"], 1).map(exerciseToDrill),
    ];
  }
  return [
    ...intro.map((q) => questionToDrill(q, 3)),
    ...projectDrills(projects, 3),
    ...pick((q) => q.module <= 4 && q.level >= 3, 3).map((q) => questionToDrill(q, 3)),
    ...ex(["pairwise"], 1).map(exerciseToDrill),
    ...pick((q) => q.module === 5 && q.level >= 3, 1).map((q) => questionToDrill(q, 3)),
    ...ex(["code"], 1).map(exerciseToDrill),
    ...pick((q) => q.module === 6 && q.kind === "behavioral" && q.level >= 2, 1).map((q) => questionToDrill(q, 3)),
    // The unexpected one: any hard question from anywhere.
    ...pick((q) => q.level === 4, 1).map((q) => questionToDrill(q, 3)),
  ].slice(0, 10);
}

function followUpDrill(parent: DrillItem): DrillItem | null {
  if (!parent.followUp) return null;
  return { ...parent, id: `${parent.id}-fu`, q: parent.followUp, qPt: undefined, tipPt: "Pergunta de acompanhamento: o entrevistador aprofunda sua resposta anterior. Responda direto, com um exemplo.", exercise: undefined };
}

type Row = { item: DrillItem; a: Attempt };

export default function Simulation() {
  const s = useStore();
  const [level, setLevel] = useState<Level>(s.diagnostic?.startLevel ?? 1);
  const [queue, setQueue] = useState<DrillItem[] | null>(null);
  const [idx, setIdx] = useState(0);
  const [rows, setRows] = useState<Row[]>([]);
  const [answered, setAnswered] = useState(false);
  const [finished, setFinished] = useState(false);
  const [intro, setIntro] = useState(false);
  const [copied, setCopied] = useState(false);
  const handsFree = s.settings.handsFree;
  const cfg = SIM_LEVELS[level];
  const rate = useRate(level);
  const advanceTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => { stopSpeaking(); if (advanceTimer.current) clearTimeout(advanceTimer.current); }, []);

  async function start() {
    const q = buildInterview(level, s.settings.profileProjects);
    setQueue(q);
    setIdx(0);
    setRows([]);
    setAnswered(false);
    setFinished(false);
    setCopied(false);
    setIntro(true);
    const greet =
      level >= 3
        ? "Hi, thanks for joining today. I'm going to ask you some questions about your background, about language models, and about evaluating AI responses. Take your time, and feel free to ask me to repeat. Let's begin."
        : "Hi! Let's practice. I will ask you some short questions. Answer in simple English. Ready? Let's start.";
    await speak(greet, { rate, voiceName: s.settings.voiceName });
    setIntro(false);
  }

  function next() {
    if (!queue) return;
    setAnswered(false);
    if (idx + 1 >= queue.length) {
      void finish();
    } else setIdx(idx + 1);
  }

  async function finish() {
    setFinished(true);
    const all = rows.map((r) => r.a);
    const avg = criterionAverages(all);
    const total = all.length ? Math.round(all.reduce((x, y) => x + y.scores.total, 0) / all.length) : 0;
    update((st) => ({ ...st, sims: [...st.sims, { at: Date.now(), level, total, avg, count: all.length }] }));
    await speak("That's all from me. Thank you for your time. We'll be in touch.", { rate, voiceName: s.settings.voiceName });
  }

  function onDone(item: DrillItem, a: Attempt) {
    setRows((r) => [...r, { item, a }]);
    setAnswered(true);
    // Real interview: sometimes dig deeper into the same answer.
    if (cfg.followUps && queue && !item.id.endsWith("-fu") && a.words >= 6 && Math.random() < 0.5) {
      const fu = followUpDrill(item);
      if (fu) setQueue((q) => (q ? [...q.slice(0, idx + 1), fu, ...q.slice(idx + 1)] : q));
    }
    if (handsFree && cfg.defer) advanceTimer.current = setTimeout(() => nextRef.current(), 900);
  }
  const nextRef = useRef(next);
  nextRef.current = next;

  const avg = useMemo(() => criterionAverages(rows.map((r) => r.a)), [rows]);
  const total = rows.length ? Math.round(rows.reduce((x, y) => x + y.a.scores.total, 0) / rows.length) : 0;

  if (!queue) {
    return (
      <div className="page">
        <header className="page-head">
          <h2>Simulado de entrevista</h2>
          <p className="muted">Escolha o nível. {s.diagnostic ? `Seu diagnóstico recomenda o nível ${s.diagnostic.startLevel}.` : "Faça o diagnóstico para receber uma recomendação."}</p>
        </header>
        <div className="level-grid">
          {([1, 2, 3, 4] as Level[]).map((l) => (
            <button key={l} className={`level-card ${level === l ? "active" : ""}`} onClick={() => setLevel(l)} aria-pressed={level === l}>
              <span className="eyebrow">Nível {l}</span>
              <span className="lesson-title">{SIM_LEVELS[l].title}</span>
              <span className="small">{SIM_LEVELS[l].desc}</span>
            </button>
          ))}
        </div>
        {level === 4 && !s.settings.profileProjects && (
          <p className="warn">Dica: em Configurações, escreva 1 ou 2 projetos do seu currículo. O Nível 4 vai fazer perguntas sobre eles, como fazem os entrevistadores reais.</p>
        )}
        <div className="controls">
          <button className="btn btn-primary btn-lg" onClick={start}>Iniciar entrevista nível {level}</button>
          <span className="small muted">Modo mãos livres: {handsFree ? "ligado (o microfone abre sozinho depois de cada pergunta)" : "desligado (ative em Configurações)"}</span>
        </div>
      </div>
    );
  }

  if (finished) {
    const worst = [...rows].sort((a, b) => a.a.scores.total - b.a.scores.total).slice(0, 3);
    return (
      <div className="page">
        <header className="page-head">
          <h2>Relatório do simulado: nível {level} ({cfg.title})</h2>
          <p className="muted">{rows.length} respostas avaliadas automaticamente.</p>
        </header>
        <section className="card">
          <div className="diag-grid">
            <div className="stat"><span className="stat-num">{total}</span><span className="stat-label">Média geral</span></div>
            {(Object.keys(MAX) as Criterion[]).map((k) => (
              <div className="stat" key={k}>
                <span className="stat-num">{avg[k] ?? "N/A"}</span>
                <span className="stat-label">{CRITERION_PT[k]}</span>
                {avg[k] === undefined && <span className="small">sem medição neste simulado</span>}
              </div>
            ))}
          </div>
          <p className="small muted">Pronúncia só é medida quando você faz a repetição (shadowing) depois da correção. Por isso ela costuma aparecer como N/A nos simulados de nível 3 e 4.</p>
        </section>
        <section className="card">
          <h3>Respostas para melhorar primeiro</h3>
          <div className="stack">
            {worst.map((r) => (
              <div key={r.a.at} className="review">
                <p className="q-en">{r.item.q}</p>
                {r.item.qPt && <p className="muted small">{r.item.qPt}</p>}
                <p className="small"><strong>Você disse:</strong> <em>"{r.a.transcript || "(nada)"}"</em> · nota {r.a.scores.total}</p>
                {r.a.missingKeys.length > 0 && <p className="small"><strong>Faltou:</strong> {r.a.missingKeys.join("; ")}</p>}
                <div className="model-head">
                  <p className="model-text">{r.item.model}</p>
                  <Say text={r.item.model} rate={rate} label="Ouvir" />
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="card">
          <h3>Todas as respostas</h3>
          <div className="stack">
            {rows.map((r) => (
              <details key={r.a.at}>
                <summary>{r.item.q} · <strong>{r.a.scores.total}</strong></summary>
                <ScoreBreakdown scores={r.a.scores} />
                <p className="small"><em>"{r.a.transcript}"</em></p>
              </details>
            ))}
          </div>
        </section>
        <div className="controls">
          <button className="btn btn-primary" onClick={() => setQueue(null)}>Novo simulado</button>
          <button className="btn btn-ghost" onClick={async () => setCopied(await copyText(sessionReportPrompt(`Simulado nível ${level}`, rows.map((r) => ({ q: r.item.q, a: r.a })))))}>
            {copied ? "Copiado ✓" : "Copiar sessão para avaliação no Claude"}
          </button>
        </div>
      </div>
    );
  }

  const item = queue[idx];
  return (
    <div className="page sim">
      <div className="sim-head">
        <span className="eyebrow">{cfg.strict ? `Level ${level} · ${cfg.title}` : `Nível ${level} · ${cfg.title}`}</span>
        <span className="tabular small">{cfg.strict ? "Question" : "Pergunta"} {idx + 1}/{queue.length}</span>
        <button className="btn btn-ghost btn-sm" onClick={() => { stopSpeaking(); if (rows.length) void finish(); else setQueue(null); }}>
          {cfg.strict ? "End interview" : "Encerrar"}
        </button>
      </div>
      <div className="interviewer" aria-hidden="true">
        <div className={`avatar ${intro ? "talking" : ""}`}>AI</div>
      </div>
      {intro ? (
        <p className="muted center">{cfg.strict ? "The interviewer is introducing the session…" : "O entrevistador está se apresentando…"}</p>
      ) : (
        <Drill
          key={item.id + idx}
          item={item}
          mode={item.exercise ? "exercise" : "simulation"}
          strict={cfg.strict}
          deferFeedback={cfg.defer}
          handsFree={handsFree}
          autoPlay
          preface={idx === 0 ? undefined : item.id.endsWith("-fu") ? "Okay. Follow-up question." : level >= 3 ? "Thank you. Next question." : "Next question."}
          timeLimitSec={cfg.timeLimit}
          onDone={(a) => onDone(item, a)}
          onNext={cfg.defer ? undefined : next}
        />
      )}
      {answered && cfg.defer && (
        <div className="controls center">
          <button className="btn btn-primary" onClick={() => { if (advanceTimer.current) clearTimeout(advanceTimer.current); next(); }}>
            {idx + 1 >= queue.length ? "Finish" : "Next question →"}
          </button>
        </div>
      )}
    </div>
  );
}
