"use client";

import { useEffect, useRef, useState } from "react";
import type { Attempt, DrillItem } from "@/lib/types";
import { listen, speak, stopSpeaking, startRecording, STT_ERRORS_PT, getSupport, type Listener, type Recorder } from "@/lib/speech";
import { evaluate, isRepeatRequest, wordMatch, missedWords, MAX, type Evaluation } from "@/lib/scoring";
import { recordAttempt, recordShadow, update, useStore } from "@/lib/store";
import { claudeReviewPrompt, copyText } from "@/lib/export";
import { MicPulse, Rich, Say, ScoreBreakdown, useRate } from "./ui";

type Phase = "idle" | "asking" | "ready" | "listening" | "processing" | "feedback" | "done";

export interface DrillProps {
  item: DrillItem;
  mode: Attempt["mode"];
  /** Real-interview rules: no text, no Portuguese until the end. */
  strict?: boolean;
  /** Simulations: evaluate silently and hand the result to the parent. */
  deferFeedback?: boolean;
  handsFree?: boolean;
  autoPlay?: boolean;
  timeLimitSec?: number;
  /** Speak this before the question (e.g. "Next question."). */
  preface?: string;
  onDone?: (a: Attempt, ev: Evaluation) => void;
  onNext?: () => void;
}

function shadowTarget(model: string): string {
  const sentences = model.match(/[^.!?]+[.!?]+/g) ?? [model];
  let out = "";
  for (const s of sentences) {
    if (out && (out + s).split(/\s+/).length > 26) break;
    out += s;
  }
  return out.trim();
}

export default function Drill({ item, mode, strict, deferFeedback, handsFree, autoPlay, timeLimitSec, preface, onDone, onNext }: DrillProps) {
  const s = useStore();
  const rate = useRate(item.level);
  const [phase, setPhase] = useState<Phase>("idle");
  const [heard, setHeard] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const [replays, setReplays] = useState(0);
  const [polite, setPolite] = useState(0);
  const [interim, setInterim] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [ev, setEv] = useState<Evaluation | null>(null);
  const [attempt, setAttempt] = useState<Attempt | null>(null);
  const [recUrl, setRecUrl] = useState<string | null>(null);
  const [elapsed, setElapsed] = useState(0);
  const [shadow, setShadow] = useState<{ phase: "idle" | "listening" | "done"; match?: number; missed?: string[]; said?: string }>({ phase: "idle" });
  const [aiText, setAiText] = useState<string | null>(null);
  const [aiBusy, setAiBusy] = useState(false);
  const [copied, setCopied] = useState(false);

  const askEnd = useRef<number | null>(null);
  const listener = useRef<Listener | null>(null);
  const recorder = useRef<Recorder | null>(null);
  const politeRef = useRef(0);
  const replaysRef = useRef(0);
  const revealedRef = useRef(false);
  const alive = useRef(true);
  const support = getSupport();

  useEffect(() => {
    alive.current = true;
    return () => {
      alive.current = false;
      stopSpeaking();
      listener.current?.stop();
      recorder.current?.stop();
    };
  }, []);

  // Reset when the item changes.
  useEffect(() => {
    setPhase("idle");
    setHeard(false);
    setRevealed(false);
    revealedRef.current = false;
    askEnd.current = null;
    setReplays(0);
    setPolite(0);
    politeRef.current = 0;
    replaysRef.current = 0;
    setInterim("");
    setError(null);
    setEv(null);
    setAttempt(null);
    setRecUrl(null);
    setShadow({ phase: "idle" });
    setAiText(null);
    setCopied(false);
    if (autoPlay) {
      const t = setTimeout(() => ask(true), 400);
      return () => clearTimeout(t);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [item.id]);

  useEffect(() => {
    if (phase !== "listening") return;
    const start = Date.now();
    const t = setInterval(() => setElapsed(Math.round((Date.now() - start) / 1000)), 250);
    return () => clearInterval(t);
  }, [phase]);

  async function ask(first = false, slower = false) {
    setError(null);
    setPhase("asking");
    if (!first || heard) {
      replaysRef.current += 1;
      setReplays(replaysRef.current);
    }
    const text = first && preface ? `${preface} ${item.q}` : item.q;
    await speak(text, { rate: slower ? rate * 0.8 : rate, voiceName: s.settings.voiceName });
    if (!alive.current) return;
    setHeard(true);
    askEnd.current = performance.now();
    setPhase("ready");
    if (handsFree) answer();
  }

  async function answer() {
    if (!support.stt) {
      setError(STT_ERRORS_PT["service-not-allowed"]);
      return;
    }
    stopSpeaking();
    setInterim("");
    setPhase("listening");
    const listenStart = performance.now();
    if (s.settings.recordConsent && support.recorder) recorder.current = await startRecording();
    const l = listen({
      onInterim: setInterim,
      autoStopMs: handsFree ? 2600 : undefined,
      maxMs: (timeLimitSec ?? 180) * 1000,
    });
    listener.current = l;
    const r = await l.result;
    listener.current = null;
    const url = recorder.current ? await recorder.current.stop() : null;
    recorder.current = null;
    if (!alive.current) return;
    if (url) setRecUrl(url);

    if (r.error && !r.transcript) {
      setError(STT_ERRORS_PT[r.error] ?? `Erro no reconhecimento de voz: ${r.error}`);
      setPhase(askEnd.current !== null ? "ready" : "idle");
      return;
    }
    if (isRepeatRequest(r.transcript)) {
      politeRef.current += 1;
      setPolite(politeRef.current);
      await speak(strict ? "Sure." : "Sure, no problem.", { rate, voiceName: s.settings.voiceName });
      ask(false, /slow/.test(r.transcript.toLowerCase()));
      return;
    }

    setPhase("processing");
    const latency = askEnd.current !== null && r.firstSpeechMs !== null ? listenStart - askEnd.current + r.firstSpeechMs : null;
    const evaluation = evaluate({
      transcript: r.transcript,
      keys: item.keys,
      question: item.q,
      level: item.level,
      heardAudio: askEnd.current !== null,
      textRevealed: revealedRef.current,
      replays: replaysRef.current,
      politeRepeatRequests: politeRef.current,
      latencyMs: latency,
      shadowMatch: null,
    });
    const a: Attempt = {
      at: Date.now(),
      itemId: item.id,
      mode,
      level: item.level,
      transcript: r.transcript,
      scores: evaluation.scores,
      missingKeys: item.keysPt.filter((_, i) => !evaluation.matched[i]),
      grammarIds: evaluation.grammar.map((g) => g.id),
      heardAudio: askEnd.current !== null,
      textRevealed: revealedRef.current,
      replays: replaysRef.current,
      latencyMs: latency,
      words: evaluation.words,
    };
    recordAttempt(a);
    setEv(evaluation);
    setAttempt(a);
    onDone?.(a, evaluation);
    setPhase(deferFeedback ? "done" : "feedback");
  }

  function stopAnswer() {
    listener.current?.stop();
  }

  async function doShadow() {
    const target = shadowTarget(item.model);
    setShadow({ phase: "listening" });
    const r = await listen({ autoStopMs: 2200, maxMs: 30000 }).result;
    if (!alive.current) return;
    const match = wordMatch(target, r.transcript);
    const missed = missedWords(target, r.transcript);
    recordShadow(target, match, missed);
    setShadow({ phase: "done", match, missed, said: r.transcript });
    if (attempt && ev) {
      // Pronunciation now has real spoken evidence for this attempt: recompute the total.
      const pron = Math.round(MAX.pronunciation * match);
      const sc = { ...attempt.scores, pronunciation: pron };
      const keys = ["technical", "listening", "speaking", "clarity", "pronunciation"] as const;
      let got = 0;
      let max = 0;
      for (const k of keys) if (sc[k] !== null) { got += sc[k] as number; max += MAX[k]; }
      sc.total = Math.round((got / max) * 100);
      const patched = { ...attempt, scores: sc };
      setAttempt(patched);
      setEv({ ...ev, scores: sc });
      update((st) => ({ ...st, attempts: st.attempts.map((x) => (x.at === attempt.at && x.itemId === attempt.itemId ? patched : x)) }));
    }
  }

  async function askOllama() {
    if (!attempt) return;
    setAiBusy(true);
    setAiText(null);
    try {
      const r = await fetch("/api/evaluate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          url: s.settings.ollamaUrl,
          model: s.settings.ollamaModel,
          question: item.q,
          transcript: attempt.transcript,
          keysPt: item.keysPt,
          modelAnswer: item.model,
          level: item.level,
        }),
      });
      const data = await r.json();
      setAiText(data.text || data.error || "Sem resposta.");
    } catch {
      setAiText("Não consegui chamar o avaliador local.");
    }
    setAiBusy(false);
  }

  const en = strict;
  const showText = revealed || phase === "feedback";
  const x = item.exercise;

  return (
    <div className="drill">
      {x && (
        <div className="exercise">
          <div className="ex-prompt">
            <span className="label">{en ? "User prompt" : "Prompt do usuário"}</span>
            <p>{x.prompt}</p>
          </div>
          <div className={`ex-grid ${x.responseB ? "two" : ""}`}>
            <div className="ex-resp">
              <span className="label">{x.responseB ? "Response A" : "Response"}</span>
              <pre>{x.responseA}</pre>
            </div>
            {x.responseB && (
              <div className="ex-resp">
                <span className="label">Response B</span>
                <pre>{x.responseB}</pre>
              </div>
            )}
          </div>
        </div>
      )}

      <div className="stage">
        <div className="stage-row">
          <MicPulse active={phase === "listening"} />
          <div className="stage-status" aria-live="polite">
            {phase === "idle" && (en ? "Press play to hear the question." : "Aperte ▶ para ouvir a pergunta. O texto fica escondido.")}
            {phase === "asking" && (en ? "Listen…" : "Ouça com atenção…")}
            {phase === "ready" && (en ? "Your turn. Press Answer and speak." : "Sua vez. Aperte Responder e fale em inglês.")}
            {phase === "listening" && (
              <>
                {en ? "Listening… " : "Ouvindo… "}
                <span className="tabular">{elapsed}s{timeLimitSec ? ` / ${timeLimitSec}s` : ""}</span>
                {handsFree ? (en ? " (stops after a pause)" : " (para sozinho após uma pausa)") : ""}
              </>
            )}
            {phase === "processing" && (en ? "Thinking…" : "Avaliando…")}
            {phase === "done" && (en ? "Answer recorded." : "Resposta registrada.")}
            {phase === "feedback" && "Veja sua avaliação abaixo."}
          </div>
        </div>

        <div className="controls">
          {(phase === "idle" || phase === "ready" || phase === "feedback") && (
            <button className="btn btn-primary" onClick={() => ask(!heard)} disabled={!support.tts}>
              ▶ {heard ? (en ? "Repeat question" : "Ouvir de novo") : en ? "Play question" : "Ouvir pergunta"}
            </button>
          )}
          {phase === "ready" && !strict && (
            <button className="btn" onClick={() => ask(false, true)}>
              🐢 {en ? "Slower" : "Mais devagar"}
            </button>
          )}
          {(phase === "ready" || (phase === "idle" && !strict)) && (
            <button className="btn btn-accent" onClick={answer}>
              🎙 {en ? "Answer" : "Responder"}
            </button>
          )}
          {phase === "listening" && (
            <button className="btn btn-accent" onClick={stopAnswer}>
              ■ {en ? "Done" : "Terminei"}
            </button>
          )}
          {phase === "asking" && (
            <button className="btn" onClick={() => { stopSpeaking(); setHeard(true); askEnd.current = performance.now(); setPhase("ready"); }}>
              {en ? "Skip audio" : "Pular áudio"}
            </button>
          )}
          {!strict && phase !== "feedback" && !revealed && (
            <button className="btn btn-ghost" onClick={() => { revealedRef.current = true; setRevealed(true); }} title="Ao abrir o texto antes de responder, a compreensão auditiva não é pontuada">
              {en ? "Show text" : "Mostrar texto"}
            </button>
          )}
        </div>

        {!strict && <p className="muted small">Dica: se não entender, diga em voz alta <em>"Could you repeat the question, please?"</em>. O professor repete sem perder pontos.</p>}

        {showText && (
          <div className="qtext">
            <p className="q-en">{item.q}</p>
            {item.qPt && !strict && <p className="muted">{item.qPt}</p>}
          </div>
        )}

        {phase === "listening" && s.settings.showLive && <p className="live">{interim || "…"}</p>}
        {error && <p className="error" role="alert">{error}</p>}
        {!support.stt && <p className="error">Reconhecimento de voz indisponível neste navegador. Use o Google Chrome (ou Edge) no computador.</p>}
      </div>

      {phase === "feedback" && ev && attempt && (
        <div className="feedback">
          <ScoreBreakdown scores={ev.scores} />

          <section>
            <h4>O que o reconhecimento de voz entendeu</h4>
            <blockquote>{attempt.transcript || "(nada)"}</blockquote>
            {recUrl && (
              <div className="rec">
                <span className="small muted">Sua gravação:</span>
                <audio controls src={recUrl} />
              </div>
            )}
          </section>

          <section className="cols">
            <div>
              <h4>Conteúdo técnico</h4>
              <ul className="checks">
                {item.keysPt.map((k, i) => (
                  <li key={i} className={ev.matched[i] ? "ok" : "miss"}>
                    <span aria-hidden="true">{ev.matched[i] ? "✓" : "✗"}</span> {k}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4>Seu inglês</h4>
              {ev.grammar.length === 0 ? (
                <p className="small">Nenhum erro típico detectado. O reconhecimento de voz pode ter corrigido alguns erros, então não é garantia de gramática perfeita.</p>
              ) : (
                <ul className="grammar">
                  {ev.grammar.map((g) => (
                    <li key={g.id}>
                      <span className="wrong">{g.wrong}</span> → <span className="right">{g.right}</span>
                      <div className="small"><Rich text={g.pt} /></div>
                    </li>
                  ))}
                </ul>
              )}
              {ev.notes.length > 0 && (
                <ul className="notes">
                  {ev.notes.map((n, i) => <li key={i}>{n}</li>)}
                </ul>
              )}
            </div>
          </section>

          {item.tipPt && (
            <section className="tip">
              <h4>Dica do professor</h4>
              <Rich text={item.tipPt} />
            </section>
          )}

          <section className="model">
            <div className="model-head">
              <h4>Resposta melhor (inglês simples e natural)</h4>
              <Say text={item.model} rate={rate} label="Ouvir resposta" />
            </div>
            <p className="model-text">{item.model}</p>
            <div className="shadow">
              <p className="small">
                <strong>Repita em voz alta</strong> o começo da resposta: <em>"{shadowTarget(item.model)}"</em>
              </p>
              <div className="controls">
                <button className="btn" onClick={doShadow} disabled={shadow.phase === "listening"}>
                  🎙 {shadow.phase === "listening" ? "Ouvindo…" : "Repetir e medir inteligibilidade"}
                </button>
              </div>
              {shadow.phase === "done" && (
                <p className="small">
                  O reconhecimento entendeu <strong>{Math.round((shadow.match ?? 0) * 100)}%</strong> das palavras.
                  {shadow.missed && shadow.missed.length > 0 && <> Pratique: <strong>{shadow.missed.join(", ")}</strong>.</>}
                  {" "}Isso mede se você é compreendido, não exige sotaque nativo.
                </p>
              )}
            </div>
          </section>

          {aiText && (
            <section className="ai">
              <h4>Avaliação do Ollama (local)</h4>
              <pre className="ai-text">{aiText}</pre>
            </section>
          )}

          <div className="controls">
            <button className="btn btn-primary" onClick={() => { setEv(null); setAttempt(null); setShadow({ phase: "idle" }); setAiText(null); setRevealed(false); revealedRef.current = false; replaysRef.current = 0; politeRef.current = 0; ask(false); }}>
              ↻ Responder de novo
            </button>
            {onNext && <button className="btn btn-accent" onClick={onNext}>Próxima →</button>}
            <button className="btn btn-ghost" onClick={async () => setCopied(await copyText(claudeReviewPrompt(item, attempt)))}>
              {copied ? "Copiado ✓" : "Copiar para avaliação no Claude"}
            </button>
            {s.settings.ollamaUrl && s.settings.ollamaModel && (
              <button className="btn btn-ghost" onClick={askOllama} disabled={aiBusy}>
                {aiBusy ? "Avaliando…" : "Avaliar com Ollama"}
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
