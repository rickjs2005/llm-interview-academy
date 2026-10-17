"use client";

import { useMemo } from "react";
import { lessonById } from "@/lib/content";
import { buildPlan, personalNotes, ROUTINE_2H, ROUTINE_EXTRA_2H } from "@/lib/plan";
import { criterionAverages, lessonMastery, useStore } from "@/lib/store";
import { MASTERY_PASS } from "./Lessons";

export default function Plan({ onLesson, onGo }: { onLesson: (id: string) => void; onGo: (tab: string) => void }) {
  const s = useStore();
  const plan = useMemo(buildPlan, []);
  const day = Math.min(30, Math.max(1, Math.floor((Date.now() - s.startedAt) / 86400000) + 1));
  const recent = criterionAverages(s.attempts.slice(-40));
  const notes = personalNotes(s.diagnostic, recent);

  return (
    <div className="page">
      <header className="page-head">
        <h2>Plano intensivo de 30 dias</h2>
        <p className="muted">Você está no <strong>dia {day}</strong>. O plano avança pelo calendário, mas o critério para seguir em frente é dominar cada lição (≥{MASTERY_PASS}).</p>
      </header>

      <section className="card">
        <h3>Ajustes para você</h3>
        <ul className="notes">{notes.map((n, i) => <li key={i}>{n}</li>)}</ul>
        {!s.diagnostic && <button className="btn btn-primary" onClick={() => onGo("diagnostic")}>Fazer diagnóstico</button>}
      </section>

      <section className="card routine">
        <div>
          <h3>Rotina diária: 2 horas</h3>
          <table className="table">
            <tbody>
              {ROUTINE_2H.map((b) => (
                <tr key={b.what}><td className="tabular">{b.min} min</td><td>{b.what}</td><td className="muted small">{b.where}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <h3>Ampliação para 4 horas (+2h)</h3>
          <table className="table">
            <tbody>
              {ROUTINE_EXTRA_2H.map((b) => (
                <tr key={b.what}><td className="tabular">{b.min} min</td><td>{b.what}</td><td className="muted small">{b.where}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {[1, 2, 3, 4, 5].map((w) => (
        <section key={w} className="week">
          <h3>Semana {w}</h3>
          <div className="days">
            {plan.filter((d) => d.week === w).map((d) => (
              <div key={d.day} className={`day ${d.day === day ? "today" : ""} ${d.mock ? "mock" : ""}`}>
                <div className="day-head">
                  <span className="day-num tabular">Dia {d.day}</span>
                  {d.day === day && <span className="pill tone-good">hoje</span>}
                </div>
                <div className="day-title">{d.title}</div>
                {d.mock ? (
                  <button className="btn btn-sm btn-primary" onClick={() => onGo("sim")}>Fazer simulado nível {d.mock}</button>
                ) : d.review ? (
                  <button className="btn btn-sm" onClick={() => onGo("practice")}>Abrir minhas mais fracas</button>
                ) : (
                  <ul className="day-lessons">
                    {d.lessonIds.map((id) => {
                      const l = lessonById(id);
                      if (!l) return null;
                      const m = lessonMastery(s, l.questionIds);
                      return (
                        <li key={id}>
                          <button className="linkish" onClick={() => onLesson(id)}>
                            {m.pct >= MASTERY_PASS ? "✓ " : ""}{l.titlePt}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
