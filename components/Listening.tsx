"use client";

import { useMemo, useState } from "react";
import { LESSONS, shuffle } from "@/lib/content";
import { listen, speak, STT_ERRORS_PT } from "@/lib/speech";
import { missedWords, wordMatch } from "@/lib/scoring";
import { recordListen, recordShadow, useStore } from "@/lib/store";
import type { ListenItem } from "@/lib/types";
import { MicPulse } from "./ui";

/** Hear a sentence (text hidden), pick the meaning. A direct listening measure. */
export function ListenCheck({ id, item, rate }: { id: string; item: ListenItem; rate: number }) {
  const s = useStore();
  const [played, setPlayed] = useState(false);
  const [picked, setPicked] = useState<number | null>(null);
  const play = async (slow = false) => {
    await speak(item.en, { rate: (slow ? 0.75 : rate) * s.settings.rateMul, voiceName: s.settings.voiceName });
    setPlayed(true);
  };
  return (
    <div className="listen-check">
      <div className="controls">
        <button className="btn btn-primary btn-sm" onClick={() => play()}>▶ {played ? "Ouvir de novo" : "Ouvir frase"}</button>
        {played && picked === null && <button className="btn btn-sm" onClick={() => play(true)}>🐢 Devagar</button>}
      </div>
      {played && (
        <div className="options" role="radiogroup" aria-label="O que a frase significa?">
          {item.options.map((o, i) => {
            const state = picked === null ? "" : i === item.correct ? "right" : i === picked ? "wrong" : "";
            return (
              <button
                key={i}
                role="radio"
                aria-checked={picked === i}
                className={`option ${state}`}
                disabled={picked !== null}
                onClick={() => {
                  setPicked(i);
                  recordListen(id, i === item.correct, rate);
                }}
              >
                {o}
              </button>
            );
          })}
        </div>
      )}
      {picked !== null && (
        <p className="small">
          {picked === item.correct ? "Certo! " : "Ainda não. "}
          A frase era: <em>"{item.en}"</em>
        </p>
      )}
    </div>
  );
}

/** Hear a sentence, repeat it, see how much the recognizer understood. */
export function ShadowLine({ text, rate }: { text: string; rate: number }) {
  const s = useStore();
  const [state, setState] = useState<"idle" | "listening" | "done">("idle");
  const [res, setRes] = useState<{ match: number; missed: string[]; said: string; error?: string } | null>(null);
  const [hide, setHide] = useState(false);
  return (
    <div className="shadow-line">
      <div className="shadow-text">{hide ? <span className="muted">(texto escondido: repita só de ouvido)</span> : text}</div>
      <div className="controls">
        <button className="btn btn-sm btn-primary" onClick={() => speak(text, { rate: rate * s.settings.rateMul, voiceName: s.settings.voiceName })}>▶ Ouvir</button>
        <button
          className="btn btn-sm btn-accent"
          disabled={state === "listening"}
          onClick={async () => {
            setState("listening");
            const r = await listen({ autoStopMs: 1800, maxMs: 20000 }).result;
            const match = wordMatch(text, r.transcript);
            const missed = missedWords(text, r.transcript);
            if (r.transcript) recordShadow(text, match, missed);
            setRes({ match, missed, said: r.transcript, error: r.error });
            setState("done");
          }}
        >
          <MicPulse active={state === "listening"} /> {state === "listening" ? "Ouvindo…" : "Repetir"}
        </button>
        <button className="btn btn-sm btn-ghost" onClick={() => setHide(!hide)}>{hide ? "Mostrar" : "Esconder"} texto</button>
      </div>
      {res && (
        <p className="small">
          {res.error && !res.said ? (
            <span className="error">{STT_ERRORS_PT[res.error] ?? res.error}</span>
          ) : (
            <>
              <strong className={res.match >= 0.85 ? "good" : res.match >= 0.6 ? "mid" : "bad"}>{Math.round(res.match * 100)}%</strong> entendido · ouvi: <em>"{res.said}"</em>
              {res.missed.length > 0 && <> · pratique: <strong>{res.missed.join(", ")}</strong></>}
            </>
          )}
        </p>
      )}
    </div>
  );
}

/** Dictation-free listening gym built from every lesson's material. */
export default function Listening() {
  const [speed, setSpeed] = useState(0.9);
  const [seed, setSeed] = useState(0);
  const items = useMemo(
    () => shuffle(LESSONS.flatMap((l) => l.listen.map((it, i) => ({ id: `${l.id}-listen-${i}`, it, lesson: l.titlePt })))).slice(0, 8),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [seed],
  );
  const shadows = useMemo(() => shuffle(LESSONS.flatMap((l) => l.shadow)).slice(0, 6), [seed]);
  return (
    <div className="page">
      <header className="page-head">
        <h2>Escuta e repetição</h2>
        <p className="muted">Treine o ouvido sem ler. Primeiro ouça, depois escolha o significado. Em seguida, repita frases úteis em voz alta.</p>
      </header>
      <div className="toolbar">
        <label htmlFor="speed">Velocidade da voz</label>
        <select id="speed" value={speed} onChange={(e) => setSpeed(Number(e.target.value))}>
          <option value={0.75}>Lenta (0.75)</option>
          <option value={0.9}>Moderada (0.9)</option>
          <option value={1}>Normal (1.0)</option>
          <option value={1.1}>Rápida (1.1)</option>
        </select>
        <button className="btn btn-sm" onClick={() => setSeed(seed + 1)}>Novas frases</button>
      </div>
      <section className="card">
        <h3>1. Compreensão: o que você ouviu?</h3>
        <div className="stack">
          {items.map((x) => (
            <div key={x.id + seed} className="listen-item">
              <span className="eyebrow">{x.lesson}</span>
              <ListenCheck id={x.id} item={x.it} rate={speed} />
            </div>
          ))}
        </div>
      </section>
      <section className="card">
        <h3>2. Shadowing: ouça e repita</h3>
        <p className="muted small">A porcentagem mostra quanto do que você disse o reconhecimento de voz entendeu. É uma medida de inteligibilidade, não de sotaque.</p>
        <div className="stack">
          {shadows.map((t, i) => <ShadowLine key={t + seed + i} text={t} rate={speed} />)}
        </div>
      </section>
    </div>
  );
}
