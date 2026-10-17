"use client";

import { useEffect, useState } from "react";
import { LESSONS, MODULES, questionById, questionToDrill } from "@/lib/content";
import { lastAttempt, lessonMastery, markLessonSeen, useStore } from "@/lib/store";
import type { Level } from "@/lib/types";
import Drill from "./Drill";
import { ListenCheck, ShadowLine } from "./Listening";
import { Meter, Rich, Say } from "./ui";

export const MASTERY_PASS = 70;

export default function Lessons({ openId, onOpen }: { openId: string | null; onOpen: (id: string | null) => void }) {
  const s = useStore();
  if (openId) return <LessonView id={openId} onOpen={onOpen} />;
  return (
    <div className="page">
      <header className="page-head">
        <h2>Aulas</h2>
        <p className="muted">Seis módulos, do básico ao nível de entrevista. Uma lição fica <strong>dominada</strong> quando a média das perguntas dela passa de {MASTERY_PASS}.</p>
      </header>
      {MODULES.map((m) => (
        <section key={m.module} className="module">
          <h3>
            <span className="eyebrow">Módulo {m.module}</span> {m.titlePt} <span className="muted small">· {m.title}</span>
          </h3>
          <div className="lesson-grid">
            {[...m.lessons].sort((a, b) => a.order - b.order).map((l) => {
              const mast = lessonMastery(s, l.questionIds);
              const done = mast.pct >= MASTERY_PASS;
              return (
                <button key={l.id} className={`lesson-card ${done ? "done" : ""}`} onClick={() => onOpen(l.id)}>
                  <span className="lesson-title">{l.titlePt}</span>
                  <span className="muted small">{l.title}</span>
                  <Meter value={mast.pct} label={`Domínio de ${l.titlePt}`} />
                  <span className="small">
                    {done ? "✓ Dominada" : s.lessonsSeen[l.id] ? `${mast.pct}% · ${mast.answered}/${l.questionIds.length} perguntas` : "Não iniciada"}
                  </span>
                </button>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}

function LessonView({ id, onOpen }: { id: string; onOpen: (id: string | null) => void }) {
  const s = useStore();
  const idx = LESSONS.findIndex((l) => l.id === id);
  const l = LESSONS[idx];
  const [qi, setQi] = useState<number | null>(null);
  const [level, setLevel] = useState<Level | "auto">("auto");
  const [warnNext, setWarnNext] = useState(false);
  useEffect(() => {
    if (l) markLessonSeen(l.id);
    setQi(null);
    setWarnNext(false);
  }, [id]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!l) return null;
  const qs = l.questionIds.map(questionById).filter((q): q is NonNullable<typeof q> => !!q);
  const mast = lessonMastery(s, l.questionIds);
  const next = LESSONS[idx + 1];
  const startLevel = s.diagnostic?.startLevel ?? 1;

  return (
    <div className="page">
      <div className="crumbs">
        <button className="btn btn-ghost btn-sm" onClick={() => onOpen(null)}>← Aulas</button>
        <span className="muted small">Módulo {l.module} · Lição {l.order}</span>
      </div>
      <header className="page-head">
        <h2>{l.titlePt}</h2>
        <p className="muted">{l.title}</p>
        <div className="mastery-row">
          <Meter value={mast.pct} label="Domínio da lição" />
          <span className="small">{mast.pct}% de domínio</span>
        </div>
      </header>

      <section className="card">
        <h3>1. Entenda (em português)</h3>
        <div className="prose"><Rich text={l.explainPt} /></div>
      </section>

      <section className="card">
        <h3>2. Termos em inglês</h3>
        <ul className="terms">
          {l.terms.map((t) => (
            <li key={t.en}>
              <div className="term-head">
                <strong>{t.en}</strong>
                {t.say && <span className="say">/{t.say}/</span>}
                <Say text={t.en} rate={0.8} label="Ouvir" />
              </div>
              <span className="small">{t.pt}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="card">
        <h3>3. Exemplo real</h3>
        <div className="prose"><Rich text={l.example} /></div>
      </section>

      <section className="card">
        <h3>4. Ouça sem ler</h3>
        <div className="stack">
          {l.listen.map((it, i) => <ListenCheck key={i} id={`${l.id}-listen-${i}`} item={it} rate={0.9} />)}
        </div>
      </section>

      <section className="card">
        <h3>5. Repita em voz alta</h3>
        <div className="stack">
          {l.shadow.map((t) => <ShadowLine key={t} text={t} rate={0.85} />)}
        </div>
      </section>

      <section className="card">
        <h3>6. Perguntas de entrevista por voz</h3>
        <div className="toolbar">
          <label htmlFor="lvl">Resposta modelo e velocidade</label>
          <select id="lvl" value={level} onChange={(e) => setLevel(e.target.value === "auto" ? "auto" : (Number(e.target.value) as Level))}>
            <option value="auto">Automático (nível da pergunta)</option>
            <option value={1}>Básico (fala lenta)</option>
            <option value={2}>Intermediário</option>
            <option value={3}>Profissional</option>
          </select>
        </div>
        <ol className="qlist">
          {qs.map((q, i) => {
            const a = lastAttempt(s, q.id);
            return (
              <li key={q.id}>
                <button className={`qitem ${qi === i ? "active" : ""}`} onClick={() => setQi(i)}>
                  <span>Pergunta {i + 1} <span className="muted small">· nível {q.level}</span></span>
                  <span className={`pill ${a ? (a.scores.total >= MASTERY_PASS ? "tone-good" : "tone-mid") : ""}`}>{a ? a.scores.total : "—"}</span>
                </button>
              </li>
            );
          })}
        </ol>
        {qi !== null && qs[qi] && (
          <Drill
            key={qs[qi].id}
            item={questionToDrill(qs[qi], level === "auto" ? (Math.max(qs[qi].level, startLevel) as Level) : level)}
            mode="lesson"
            onNext={qi + 1 < qs.length ? () => setQi(qi + 1) : undefined}
          />
        )}
      </section>

      <div className="lesson-foot">
        {warnNext && mast.pct < MASTERY_PASS && (
          <p className="warn" role="status">
            Você ainda não domina esta lição ({mast.pct}%). Recomendo responder às perguntas até passar de {MASTERY_PASS} antes de avançar.
            <button className="btn btn-sm btn-ghost" onClick={() => next && onOpen(next.id)}>Avançar mesmo assim</button>
          </p>
        )}
        {next && (
          <button className="btn btn-primary" onClick={() => (mast.pct >= MASTERY_PASS ? onOpen(next.id) : setWarnNext(true))}>
            Próxima lição: {next.titlePt} →
          </button>
        )}
      </div>
    </div>
  );
}
