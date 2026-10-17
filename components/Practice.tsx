"use client";

import { useMemo, useState } from "react";
import { EXERCISES, MODULES, QUESTIONS, exerciseToDrill, questionToDrill, shuffle } from "@/lib/content";
import { lastAttempt, useStore } from "@/lib/store";
import type { Level, Question } from "@/lib/types";
import Drill from "./Drill";

type Mode = "review" | "weak" | "random" | "module";

/** Spaced repetition queue: due items first, then weak ones, then surprise questions. */
export default function Practice() {
  const s = useStore();
  const [mode, setMode] = useState<Mode>("review");
  const [mod, setMod] = useState(1);
  const [lvl, setLvl] = useState<Level | 0>(0);
  const [seed, setSeed] = useState(0);
  const [i, setI] = useState(0);

  const queue: Question[] = useMemo(() => {
    const now = Date.now();
    const byLevel = (q: Question) => !lvl || q.level === lvl;
    if (mode === "review") {
      const due = QUESTIONS.filter((q) => s.srs[q.id] && s.srs[q.id].due <= now && byLevel(q));
      return due.sort((a, b) => s.srs[a.id].box - s.srs[b.id].box);
    }
    if (mode === "weak") {
      return QUESTIONS.filter((q) => {
        const a = lastAttempt(s, q.id);
        return a && a.scores.total < 70 && byLevel(q);
      }).sort((a, b) => (lastAttempt(s, a.id)?.scores.total ?? 0) - (lastAttempt(s, b.id)?.scores.total ?? 0));
    }
    if (mode === "module") return shuffle(QUESTIONS.filter((q) => q.module === mod && byLevel(q)));
    return shuffle(QUESTIONS.filter(byLevel)).slice(0, 15);
    // seed forces a reshuffle; s.srs changes should not reshuffle mid-session
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode, mod, lvl, seed]);

  const q = queue[i];
  const dueCount = QUESTIONS.filter((x) => s.srs[x.id] && s.srs[x.id].due <= Date.now()).length;

  return (
    <div className="page">
      <header className="page-head">
        <h2>Treino livre</h2>
        <p className="muted">Repetição espaçada: perguntas em que você foi bem voltam em 1, 2, 4, 7 e 15 dias. As que você errou voltam no mesmo dia.</p>
      </header>
      <div className="toolbar">
        {([
          ["review", `Revisão do dia (${dueCount})`],
          ["weak", "Minhas mais fracas"],
          ["random", "Perguntas surpresa"],
          ["module", "Por módulo"],
        ] as [Mode, string][]).map(([m, label]) => (
          <button key={m} className={`chip ${mode === m ? "active" : ""}`} aria-pressed={mode === m} onClick={() => { setMode(m); setI(0); setSeed(seed + 1); }}>
            {label}
          </button>
        ))}
        {mode === "module" && (
          <select aria-label="Módulo" value={mod} onChange={(e) => { setMod(Number(e.target.value)); setI(0); }}>
            {MODULES.map((m) => <option key={m.module} value={m.module}>Módulo {m.module}: {m.titlePt}</option>)}
          </select>
        )}
        <select aria-label="Nível" value={lvl} onChange={(e) => { setLvl(Number(e.target.value) as Level | 0); setI(0); }}>
          <option value={0}>Todos os níveis</option>
          <option value={1}>Nível 1</option>
          <option value={2}>Nível 2</option>
          <option value={3}>Nível 3</option>
          <option value={4}>Nível 4</option>
        </select>
      </div>
      {!q ? (
        <div className="card empty">
          {mode === "review" ? <p>Nada para revisar agora. Responda perguntas nas Aulas ou use "Perguntas surpresa". Elas entram na revisão automaticamente.</p> : mode === "weak" ? <p>Nenhuma pergunta abaixo de 70 ainda.</p> : <p>Nenhuma pergunta com esse filtro.</p>}
        </div>
      ) : (
        <section className="card">
          <p className="small muted">{i + 1} de {queue.length} · Módulo {q.module} · nível {q.level}</p>
          <Drill key={q.id + i} item={questionToDrill(q)} mode="practice" onNext={i + 1 < queue.length ? () => setI(i + 1) : undefined} />
        </section>
      )}
    </div>
  );
}

export function Exercises() {
  const s = useStore();
  const [i, setI] = useState<number | null>(null);
  const [filter, setFilter] = useState<"all" | "pairwise" | "single" | "code">("all");
  const list = EXERCISES.filter((x) => filter === "all" || x.type === filter);
  const x = i !== null ? list[i] : null;
  return (
    <div className="page">
      <header className="page-head">
        <h2>Exercícios de avaliação</h2>
        <p className="muted">Leia o prompt e as respostas na tela. O professor faz a pergunta em voz alta e você justifica falando, como em um teste real de LLM evaluation.</p>
      </header>
      <section className="card template">
        <h3>Estrutura para justificar em voz alta</h3>
        <ol className="prose">
          <li><strong>Veredito:</strong> "I prefer Response A." / "Both are similar, but…"</li>
          <li><strong>Motivo principal:</strong> "First, A is more accurate. B says … , which is wrong."</li>
          <li><strong>Segundo critério:</strong> "Second, A follows the instruction to … ."</li>
          <li><strong>Ponto justo:</strong> "However, B is better at … ."</li>
          <li><strong>Conclusão:</strong> "Overall, A is more helpful because … ."</li>
        </ol>
        <p className="small muted">Evite justificativas genéricas como "A is better because it is more detailed". Cite o problema concreto.</p>
      </section>
      <div className="toolbar">
        {(["all", "pairwise", "single", "code"] as const).map((f) => (
          <button key={f} className={`chip ${filter === f ? "active" : ""}`} aria-pressed={filter === f} onClick={() => { setFilter(f); setI(null); }}>
            {{ all: "Todos", pairwise: "Comparar A vs B", single: "Avaliar uma resposta", code: "Código" }[f]}
          </button>
        ))}
      </div>
      <ol className="qlist">
        {list.map((e, k) => {
          const a = lastAttempt(s, e.id);
          return (
            <li key={e.id}>
              <button className={`qitem ${i === k ? "active" : ""}`} onClick={() => setI(k)}>
                <span>{e.prompt.length > 80 ? e.prompt.slice(0, 80) + "…" : e.prompt} <span className="muted small">· {e.type} · nível {e.level}</span></span>
                <span className={`pill ${a ? (a.scores.total >= 70 ? "tone-good" : "tone-mid") : ""}`}>{a ? a.scores.total : "—"}</span>
              </button>
            </li>
          );
        })}
      </ol>
      {x && (
        <section className="card">
          <Drill key={x.id} item={exerciseToDrill(x)} mode="exercise" onNext={i! + 1 < list.length ? () => setI(i! + 1) : undefined} />
          {lastAttempt(s, x.id) && <p className="small muted">Gabarito: {x.better ? (x.better === "tie" ? "empate" : `Response ${x.better}`) : "avaliação individual"} </p>}
        </section>
      )}
    </div>
  );
}
