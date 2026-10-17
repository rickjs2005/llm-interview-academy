"use client";

import { useEffect, useState } from "react";
import { speak, stopSpeaking, LEVEL_RATE } from "@/lib/speech";
import { useStore } from "@/lib/store";
import { CRITERION_PT, MAX, band } from "@/lib/scoring";
import type { Criterion, Scores } from "@/lib/types";

export function useRate(level: number) {
  const s = useStore();
  return (LEVEL_RATE[level] ?? 1) * s.settings.rateMul;
}

/** Small play button for any English text. */
export function Say({ text, rate = 0.9, label = "Ouvir", lang }: { text: string; rate?: number; label?: string; lang?: string }) {
  const s = useStore();
  const [on, setOn] = useState(false);
  useEffect(() => () => { if (on) stopSpeaking(); }, [on]);
  return (
    <button
      type="button"
      className="btn btn-ghost btn-sm"
      aria-label={`${label}: ${text.slice(0, 40)}`}
      onClick={async () => {
        if (on) {
          stopSpeaking();
          setOn(false);
          return;
        }
        setOn(true);
        await speak(text, { rate: rate * s.settings.rateMul, voiceName: s.settings.voiceName, lang });
        setOn(false);
      }}
    >
      <span aria-hidden="true">{on ? "■" : "▶"}</span> {on ? "Parar" : label}
    </button>
  );
}

export function ScoreBreakdown({ scores }: { scores: Scores }) {
  const b = band(scores.total);
  const keys = Object.keys(MAX) as Criterion[];
  return (
    <div className="score">
      <div className="score-head">
        <div className={`score-total tone-${b.tone}`}>
          <span className="num">{scores.total}</span>
          <span className="of">/100</span>
        </div>
        <div>
          <div className={`pill tone-${b.tone}`}>{b.label}</div>
          <p className="muted small">Nota automática por regras. Os critérios marcados N/A não entram no total.</p>
        </div>
      </div>
      <div className="bars">
        {keys.map((k) => {
          const v = scores[k];
          return (
            <div className="bar-row" key={k}>
              <span className="bar-label">{CRITERION_PT[k]}</span>
              <div className="bar-track" aria-hidden="true">
                {v !== null && <div className="bar-fill" style={{ width: `${(v / MAX[k]) * 100}%` }} />}
              </div>
              <span className="bar-val">{v === null ? "N/A" : `${v}/${MAX[k]}`}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function Meter({ value, label }: { value: number; label?: string }) {
  return (
    <div className="meter" role="meter" aria-valuenow={value} aria-valuemin={0} aria-valuemax={100} aria-label={label}>
      <div className="meter-fill" style={{ width: `${Math.max(0, Math.min(100, value))}%` }} />
    </div>
  );
}

export function MicPulse({ active }: { active: boolean }) {
  return <span className={`mic ${active ? "mic-on" : ""}`} aria-hidden="true" />;
}

export function Rich({ text }: { text: string }) {
  // Minimal formatting: paragraphs and *emphasis*.
  return (
    <>
      {text.split(/\n\n+/).map((p, i) => (
        <p key={i}>
          {p.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g).map((seg, j) =>
            seg.startsWith("**") ? <strong key={j}>{seg.slice(2, -2)}</strong> : seg.startsWith("*") && seg.length > 2 ? <em key={j}>{seg.slice(1, -1)}</em> : seg,
          )}
        </p>
      ))}
    </>
  );
}
