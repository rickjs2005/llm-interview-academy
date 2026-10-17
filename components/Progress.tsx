"use client";

import { useState } from "react";
import { questionById, exerciseById } from "@/lib/content";
import { ruleById } from "@/lib/grammar";
import { CRITERION_PT } from "@/lib/scoring";
import { criterionAverages, useStore } from "@/lib/store";
import { copyText } from "@/lib/export";
import type { Criterion } from "@/lib/types";
import { Meter } from "./ui";

function Trend({ values }: { values: number[] }) {
  // Daily averages, drawn to a fixed 0-100 scale.
  if (values.length < 2) return <p className="muted small">O gráfico aparece depois de 2 dias de treino.</p>;
  const W = 600, H = 160, P = 28;
  const x = (i: number) => P + (i * (W - P * 2)) / (values.length - 1);
  const y = (v: number) => H - P - (v / 100) * (H - P * 2);
  const d = values.map((v, i) => `${i ? "L" : "M"}${x(i).toFixed(1)},${y(v).toFixed(1)}`).join(" ");
  return (
    <div className="chart-wrap">
      <svg viewBox={`0 0 ${W} ${H}`} className="chart" role="img" aria-label="Média diária das notas">
        {[0, 50, 100].map((t) => (
          <g key={t}>
            <line x1={P} x2={W - P} y1={y(t)} y2={y(t)} className="grid" />
            <text x={4} y={y(t) + 4} className="axis">{t}</text>
          </g>
        ))}
        <path d={`${d} L${x(values.length - 1)},${y(0)} L${x(0)},${y(0)} Z`} className="area" />
        <path d={d} className="line" fill="none" />
        <circle cx={x(values.length - 1)} cy={y(values[values.length - 1])} r={4} className="dot" />
      </svg>
    </div>
  );
}

export default function Progress() {
  const s = useStore();
  const [copied, setCopied] = useState(false);
  const at = s.attempts;
  const avg = criterionAverages(at);
  const recent = criterionAverages(at.slice(-30));

  const byDay = new Map<string, number[]>();
  for (const a of at) {
    const k = new Date(a.at).toISOString().slice(0, 10);
    byDay.set(k, [...(byDay.get(k) ?? []), a.scores.total]);
  }
  const daily = [...byDay.entries()].sort().map(([, v]) => Math.round(v.reduce((x, y) => x + y, 0) / v.length));

  const gram = new Map<string, number>();
  at.forEach((a) => a.grammarIds.forEach((g) => gram.set(g, (gram.get(g) ?? 0) + 1)));
  const topGram = [...gram.entries()].sort((a, b) => b[1] - a[1]).slice(0, 6);

  const miss = new Map<string, number>();
  at.slice(-80).forEach((a) => a.missingKeys.forEach((k) => miss.set(k, (miss.get(k) ?? 0) + 1)));
  const topMiss = [...miss.entries()].sort((a, b) => b[1] - a[1]).slice(0, 6);

  const missedWords = new Map<string, number>();
  s.shadows.slice(-100).forEach((x) => x.missed.forEach((w) => missedWords.set(w, (missedWords.get(w) ?? 0) + 1)));
  const topWords = [...missedWords.entries()].sort((a, b) => b[1] - a[1]).slice(0, 12);

  const listenPct = s.listenChecks.length ? Math.round((s.listenChecks.filter((x) => x.correct).length / s.listenChecks.length) * 100) : null;
  const shadowPct = s.shadows.length ? Math.round((s.shadows.reduce((x, y) => x + y.match, 0) / s.shadows.length) * 100) : null;
  const slowest = at.filter((a) => a.latencyMs !== null).slice(-30);
  const latency = slowest.length ? Math.round(slowest.reduce((x, y) => x + (y.latencyMs ?? 0), 0) / slowest.length / 1000) : null;

  const report = () => {
    const lines = (Object.keys(CRITERION_PT) as Criterion[]).map((k) => `- ${CRITERION_PT[k]}: geral ${avg[k] ?? "N/A"}%, últimas 30 ${recent[k] ?? "N/A"}%`);
    return `Relatório de evolução (LLM Interview Academy)
Respostas faladas: ${at.length} · Simulados: ${s.sims.length} · Exercícios de escuta: ${s.listenChecks.length} (acerto ${listenPct ?? "N/A"}%) · Repetições: ${s.shadows.length} (inteligibilidade ${shadowPct ?? "N/A"}%)
Tempo médio para começar a responder: ${latency ?? "N/A"} s
${lines.join("\n")}
Erros de inglês recorrentes: ${topGram.map(([g, n]) => `${ruleById(g)?.wrong} (${n}x)`).join(", ") || "nenhum detectado"}
Conceitos que mais faltam: ${topMiss.map(([k, n]) => `${k} (${n}x)`).join("; ") || "-"}
Palavras que o reconhecimento não entende: ${topWords.map(([w]) => w).join(", ") || "-"}
Simulados: ${s.sims.map((x) => `N${x.level}=${x.total}`).join(", ") || "-"}

Analise minha evolução e ajuste meu treino da próxima semana.`;
  };

  return (
    <div className="page">
      <header className="page-head">
        <h2>Evolução</h2>
        <p className="muted">Tudo fica salvo só neste navegador. Faça backup em Configurações.</p>
      </header>
      <section className="card">
        <div className="diag-grid">
          <div className="stat"><span className="stat-num">{at.length}</span><span className="stat-label">Respostas faladas</span></div>
          <div className="stat"><span className="stat-num">{listenPct ?? "—"}</span><span className="stat-label">Acerto na escuta (%)</span></div>
          <div className="stat"><span className="stat-num">{shadowPct ?? "—"}</span><span className="stat-label">Inteligibilidade média (%)</span></div>
          <div className="stat"><span className="stat-num">{latency ?? "—"}</span><span className="stat-label">Segundos até começar a falar</span></div>
        </div>
      </section>
      <section className="card">
        <h3>Média diária</h3>
        <Trend values={daily} />
      </section>
      <section className="card">
        <h3>Por critério (geral → últimas 30 respostas)</h3>
        <div className="bars">
          {(Object.keys(CRITERION_PT) as Criterion[]).map((k) => (
            <div className="bar-row" key={k}>
              <span className="bar-label">{CRITERION_PT[k]}</span>
              <Meter value={recent[k] ?? 0} label={CRITERION_PT[k]} />
              <span className="bar-val tabular">{avg[k] ?? "N/A"} → {recent[k] ?? "N/A"}</span>
            </div>
          ))}
        </div>
      </section>
      <section className="card cols">
        <div>
          <h3>Erros de inglês recorrentes</h3>
          {topGram.length ? (
            <ul className="grammar">
              {topGram.map(([g, n]) => {
                const r = ruleById(g);
                return r ? <li key={g}><span className="wrong">{r.wrong}</span> → <span className="right">{r.right}</span> <span className="muted small">({n}x)</span></li> : null;
              })}
            </ul>
          ) : <p className="muted small">Nenhum erro típico detectado ainda.</p>}
          <h3>Palavras para praticar</h3>
          <p className="small">{topWords.length ? topWords.map(([w, n]) => `${w} (${n})`).join(" · ") : "—"}</p>
        </div>
        <div>
          <h3>Conceitos que mais faltam</h3>
          {topMiss.length ? <ul className="notes">{topMiss.map(([k, n]) => <li key={k}>{k} <span className="muted small">({n}x)</span></li>)}</ul> : <p className="muted small">—</p>}
        </div>
      </section>
      <section className="card">
        <h3>Simulados</h3>
        {s.sims.length ? (
          <table className="table">
            <thead><tr><th>Data</th><th>Nível</th><th>Média</th><th>Respostas</th></tr></thead>
            <tbody>
              {[...s.sims].reverse().map((x) => (
                <tr key={x.at}><td>{new Date(x.at).toLocaleDateString("pt-BR")}</td><td>{x.level}</td><td className="tabular">{x.total}</td><td className="tabular">{x.count}</td></tr>
              ))}
            </tbody>
          </table>
        ) : <p className="muted small">Nenhum simulado ainda.</p>}
      </section>
      <section className="card">
        <h3>Últimas respostas</h3>
        <div className="table-wrap">
          <table className="table">
            <thead><tr><th>Quando</th><th>Pergunta</th><th>Nota</th></tr></thead>
            <tbody>
              {[...at].reverse().slice(0, 15).map((a) => (
                <tr key={a.at}>
                  <td className="small">{new Date(a.at).toLocaleString("pt-BR", { dateStyle: "short", timeStyle: "short" })}</td>
                  <td className="small">{questionById(a.itemId)?.q ?? exerciseById(a.itemId)?.question ?? a.itemId}</td>
                  <td className="tabular">{a.scores.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <div className="controls">
        <button className="btn btn-primary" onClick={async () => setCopied(await copyText(report()))}>{copied ? "Copiado ✓" : "Copiar relatório de evolução para o Claude"}</button>
      </div>
    </div>
  );
}
