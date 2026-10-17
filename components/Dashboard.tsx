"use client";

import { LESSONS, QUESTIONS } from "@/lib/content";
import { criterionAverages, lessonMastery, useStore } from "@/lib/store";
import { CRITERION_PT } from "@/lib/scoring";
import type { Criterion } from "@/lib/types";
import { MASTERY_PASS } from "./Lessons";
import { Meter } from "./ui";

export default function Dashboard({ onGo, onLesson }: { onGo: (tab: string) => void; onLesson: (id: string) => void }) {
  const s = useStore();
  const due = QUESTIONS.filter((q) => s.srs[q.id] && s.srs[q.id].due <= Date.now()).length;
  const nextLesson = LESSONS.find((l) => lessonMastery(s, l.questionIds).pct < MASTERY_PASS);
  const mastered = LESSONS.filter((l) => lessonMastery(s, l.questionIds).pct >= MASTERY_PASS).length;
  const recent = criterionAverages(s.attempts.slice(-30));
  const day = Math.min(30, Math.floor((Date.now() - s.startedAt) / 86400000) + 1);
  const lastSim = s.sims[s.sims.length - 1];

  return (
    <div className="page">
      <header className="hero">
        <p className="eyebrow">Dia {day} de 30</p>
        <h1>Responda em voz alta, em inglês, como na entrevista.</h1>
        <p className="muted">O professor faz a pergunta em áudio, você responde pelo microfone e recebe a correção em português. Depois, repete até melhorar.</p>
      </header>

      {!s.diagnostic ? (
        <section className="card callout">
          <div>
            <h3>Primeiro passo: diagnóstico (15 min)</h3>
            <p className="small">Teste do microfone, quiz técnico, escuta com áudio real, repetição e 5 respostas faladas. O plano e os simulados se ajustam ao resultado.</p>
          </div>
          <button className="btn btn-primary btn-lg" onClick={() => onGo("diagnostic")}>Começar diagnóstico</button>
        </section>
      ) : (
        <section className="today">
          <h3>Hoje</h3>
          <div className="today-grid">
            <button className="task" onClick={() => onGo("practice")}>
              <span className="task-num tabular">{due}</span>
              <span>perguntas para revisar</span>
            </button>
            {nextLesson && (
              <button className="task" onClick={() => onLesson(nextLesson.id)}>
                <span className="eyebrow">Próxima lição</span>
                <span className="task-title">{nextLesson.titlePt}</span>
                <span className="small muted">Módulo {nextLesson.module}</span>
              </button>
            )}
            <button className="task" onClick={() => onGo("listening")}>
              <span className="eyebrow">20 min</span>
              <span className="task-title">Escuta e repetição</span>
            </button>
            <button className="task" onClick={() => onGo("sim")}>
              <span className="eyebrow">Simulado</span>
              <span className="task-title">Nível {s.diagnostic.startLevel}{lastSim ? ` · última nota ${lastSim.total}` : ""}</span>
            </button>
          </div>
        </section>
      )}

      <section className="card">
        <h3>Seu progresso</h3>
        <div className="progress-row">
          <span className="small">Lições dominadas</span>
          <Meter value={(mastered / LESSONS.length) * 100} label="Lições dominadas" />
          <span className="tabular small">{mastered}/{LESSONS.length}</span>
        </div>
        {s.attempts.length > 0 ? (
          <div className="bars">
            {(Object.keys(CRITERION_PT) as Criterion[]).map((k) => (
              <div className="bar-row" key={k}>
                <span className="bar-label">{CRITERION_PT[k]}</span>
                <Meter value={recent[k] ?? 0} label={CRITERION_PT[k]} />
                <span className="bar-val tabular">{recent[k] ?? "N/A"}</span>
              </div>
            ))}
          </div>
        ) : (
          <p className="muted small">Suas notas por critério aparecem aqui depois das primeiras respostas.</p>
        )}
      </section>

      <section className="card how">
        <h3>Como a nota funciona (0–100)</h3>
        <table className="table">
          <tbody>
            <tr><td>Conhecimento técnico</td><td className="tabular">30</td><td className="small muted">conceitos-chave presentes na resposta</td></tr>
            <tr><td>Compreensão auditiva</td><td className="tabular">25</td><td className="small muted">só quando a pergunta tocou em áudio e você não abriu o texto antes</td></tr>
            <tr><td>Responder em inglês</td><td className="tabular">20</td><td className="small muted">tamanho, tempo até começar, manter-se no inglês</td></tr>
            <tr><td>Clareza e organização</td><td className="tabular">15</td><td className="small muted">conectores, repetição, hesitações</td></tr>
            <tr><td>Pronúncia / inteligibilidade</td><td className="tabular">10</td><td className="small muted">só com repetição de uma frase conhecida, nunca pela resposta livre</td></tr>
          </tbody>
        </table>
        <p className="small muted">A nota é calculada por regras no seu navegador: é uma estimativa útil para treinar, não um julgamento humano. Para uma correção feita por IA, use "Copiar para avaliação no Claude" ou configure o Ollama.</p>
      </section>
    </div>
  );
}
