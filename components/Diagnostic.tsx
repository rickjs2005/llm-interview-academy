"use client";

import { useMemo, useRef, useState } from "react";
import { QUESTIONS, questionToDrill } from "@/lib/content";
import { LISTEN_DIAG, ORAL_DIAG_MODULES, SHADOW_DIAG, TECH_QUIZ, listenLevelLabel, startLevelFor, techLevelLabel } from "@/lib/diagnostic";
import { getSupport, listen, speak, STT_ERRORS_PT } from "@/lib/speech";
import { missedWords, wordMatch } from "@/lib/scoring";
import { recordListen, recordShadow, update, useStore, type DiagnosticResult } from "@/lib/store";
import { copyText } from "@/lib/export";
import type { Attempt } from "@/lib/types";
import Drill from "./Drill";
import { MicPulse } from "./ui";

type Step = "intro" | "quiz" | "listen" | "shadow" | "oral" | "result";
const STEPS: { id: Step; label: string }[] = [
  { id: "intro", label: "Microfone" },
  { id: "quiz", label: "Conhecimento" },
  { id: "listen", label: "Escuta" },
  { id: "shadow", label: "Repetição" },
  { id: "oral", label: "Respostas faladas" },
  { id: "result", label: "Resultado" },
];

export default function Diagnostic({ onGo }: { onGo: (tab: string) => void }) {
  const s = useStore();
  const [step, setStep] = useState<Step>(s.diagnostic ? "result" : "intro");
  const [quiz, setQuiz] = useState<(number | null)[]>(TECH_QUIZ.map(() => null));
  const [li, setLi] = useState(0);
  const [listenAns, setListenAns] = useState<boolean[]>([]);
  const [played, setPlayed] = useState(0);
  const [si, setSi] = useState(0);
  const [shadowRes, setShadowRes] = useState<number[]>([]);
  const [shadowState, setShadowState] = useState<{ on: boolean; last?: { match: number; said: string; missed: string[] }; error?: string }>({ on: false });
  const [oi, setOi] = useState(0);
  const oralScores = useRef<Attempt[]>([]);
  const [mic, setMic] = useState<{ state: "idle" | "on" | "ok" | "fail"; text?: string }>({ state: "idle" });
  const [copied, setCopied] = useState(false);
  const support = getSupport();

  const oralQs = useMemo(
    () => ORAL_DIAG_MODULES.map((m) => QUESTIONS.find((q) => q.module === m && q.level === 1)).filter((q): q is NonNullable<typeof q> => !!q),
    [],
  );

  function finish() {
    const techQuiz = Math.round((quiz.filter((a, i) => a === TECH_QUIZ[i].correct).length / TECH_QUIZ.length) * 100);
    const listening = Math.round((listenAns.filter(Boolean).length / LISTEN_DIAG.length) * 100);
    const intelligibility = Math.round((shadowRes.reduce((a, b) => a + b, 0) / Math.max(1, shadowRes.length)) * 100);
    const oral = Math.round(oralScores.current.reduce((a, b) => a + b.scores.total, 0) / Math.max(1, oralScores.current.length));
    const focus: string[] = [];
    if (listening < 60) focus.push("Compreensão auditiva");
    if (oral < 50) focus.push("Formular respostas em inglês");
    if (techQuiz < 60) focus.push("Base técnica de LLMs");
    if (intelligibility < 70) focus.push("Inteligibilidade da fala");
    if (!focus.length) focus.push("Simulados e respostas profissionais");
    const d: DiagnosticResult = {
      at: Date.now(),
      techQuiz,
      listening,
      intelligibility,
      oral,
      techLevel: techLevelLabel(techQuiz),
      listenLevel: listenLevelLabel(listening),
      startLevel: startLevelFor(listening, oral),
      focus,
    };
    update((st) => ({ ...st, diagnostic: d }));
    setStep("result");
  }

  async function testMic() {
    setMic({ state: "on" });
    const r = await listen({ autoStopMs: 2000, maxMs: 15000 }).result;
    if (r.transcript) setMic({ state: "ok", text: r.transcript });
    else setMic({ state: "fail", text: STT_ERRORS_PT[r.error ?? "no-speech"] ?? r.error });
  }

  const stepIdx = STEPS.findIndex((x) => x.id === step);
  const d = s.diagnostic;

  return (
    <div className="page">
      <header className="page-head">
        <h2>Diagnóstico inicial</h2>
        <p className="muted">Cerca de 15 minutos. Mede separadamente seu conhecimento técnico, sua compreensão auditiva (com áudio real), sua inteligibilidade e sua capacidade de responder falando.</p>
      </header>
      <ol className="steps" aria-label="Etapas">
        {STEPS.map((x, i) => (
          <li key={x.id} className={i === stepIdx ? "current" : i < stepIdx ? "past" : ""}>{x.label}</li>
        ))}
      </ol>

      {step === "intro" && (
        <section className="card">
          <h3>Teste o microfone e o som</h3>
          <ol className="prose">
            <li>Use o <strong>Google Chrome</strong> no computador, com fone de ouvido se possível (evita que o microfone capte a voz do professor).</li>
            <li>Aperte "Ouvir" e confira o volume.</li>
            <li>Aperte "Testar microfone", permita o acesso e diga: <em>"Hello, my name is …"</em></li>
          </ol>
          <div className="controls">
            <button className="btn btn-primary" onClick={() => speak("Hello! Welcome to your interview practice. Can you hear me well?", { rate: 0.9, voiceName: s.settings.voiceName })}>▶ Ouvir</button>
            <button className="btn btn-accent" onClick={testMic} disabled={mic.state === "on" || !support.stt}>
              <MicPulse active={mic.state === "on"} /> {mic.state === "on" ? "Ouvindo…" : "Testar microfone"}
            </button>
          </div>
          {mic.state === "ok" && <p className="good">Funcionou! Entendi: <em>"{mic.text}"</em></p>}
          {mic.state === "fail" && <p className="error">{mic.text}</p>}
          {!support.stt && <p className="error">Este navegador não tem reconhecimento de voz. Abra no Google Chrome.</p>}
          <div className="controls">
            <button className="btn btn-primary" onClick={() => setStep("quiz")}>Começar diagnóstico →</button>
          </div>
        </section>
      )}

      {step === "quiz" && (
        <section className="card">
          <h3>Parte 1: conhecimento técnico (em português)</h3>
          <p className="muted small">Aqui o objetivo é medir o que você sabe, sem a barreira do inglês. Se não souber, escolha "não sei". Chutar distorce o plano.</p>
          <div className="stack">
            {TECH_QUIZ.map((item, i) => (
              <fieldset key={i} className="quiz">
                <legend>{i + 1}. {item.q}</legend>
                {[...item.options, "Não sei"].map((o, j) => {
                  const val = j === item.options.length ? -1 : j;
                  return (
                    <label key={j} className="radio">
                      <input type="radio" name={`q${i}`} id={`q${i}-${j}`} checked={quiz[i] === val} onChange={() => setQuiz(quiz.map((x, k) => (k === i ? val : x)))} />
                      {o}
                    </label>
                  );
                })}
              </fieldset>
            ))}
          </div>
          <div className="controls">
            <button className="btn btn-primary" disabled={quiz.some((x) => x === null)} onClick={() => setStep("listen")}>
              {quiz.some((x) => x === null) ? `Responda todas (${quiz.filter((x) => x !== null).length}/${TECH_QUIZ.length})` : "Próxima parte →"}
            </button>
          </div>
        </section>
      )}

      {step === "listen" && li < LISTEN_DIAG.length && (
        <section className="card">
          <h3>Parte 2: compreensão auditiva ({li + 1}/{LISTEN_DIAG.length})</h3>
          <p className="muted small">Você vai ouvir uma frase em inglês. O texto não aparece. Pode ouvir no máximo 2 vezes. A velocidade aumenta a cada frase.</p>
          <div className="controls">
            <button
              className="btn btn-primary"
              disabled={played >= 2}
              onClick={async () => {
                await speak(LISTEN_DIAG[li].en, { rate: LISTEN_DIAG[li].rate * s.settings.rateMul, voiceName: s.settings.voiceName });
                setPlayed(played + 1);
              }}
            >
              ▶ {played === 0 ? "Ouvir frase" : played === 1 ? "Ouvir mais uma vez" : "Limite atingido"}
            </button>
          </div>
          {played > 0 && (
            <div className="options">
              {[...LISTEN_DIAG[li].options, "Não entendi"].map((o, j) => (
                <button
                  key={j}
                  className="option"
                  onClick={() => {
                    const ok = j === LISTEN_DIAG[li].correct;
                    recordListen(`diag-listen-${li}`, ok, LISTEN_DIAG[li].rate);
                    setListenAns([...listenAns, ok]);
                    setPlayed(0);
                    if (li + 1 >= LISTEN_DIAG.length) setStep("shadow");
                    setLi(li + 1);
                  }}
                >
                  {o}
                </button>
              ))}
            </div>
          )}
        </section>
      )}

      {step === "shadow" && si < SHADOW_DIAG.length && (
        <section className="card">
          <h3>Parte 3: repita a frase ({si + 1}/{SHADOW_DIAG.length})</h3>
          <p className="muted small">Ouça e repita em voz alta. Medimos quanto do que você disse o reconhecimento de voz entendeu (inteligibilidade). Sotaque não é problema.</p>
          <p className="shadow-text">{SHADOW_DIAG[si]}</p>
          <div className="controls">
            <button className="btn btn-primary" onClick={() => speak(SHADOW_DIAG[si], { rate: 0.85 * s.settings.rateMul, voiceName: s.settings.voiceName })}>▶ Ouvir</button>
            <button
              className="btn btn-accent"
              disabled={shadowState.on}
              onClick={async () => {
                setShadowState({ on: true });
                const r = await listen({ autoStopMs: 1800, maxMs: 20000 }).result;
                if (!r.transcript) {
                  setShadowState({ on: false, error: STT_ERRORS_PT[r.error ?? "no-speech"] });
                  return;
                }
                const match = wordMatch(SHADOW_DIAG[si], r.transcript);
                const missed = missedWords(SHADOW_DIAG[si], r.transcript);
                recordShadow(SHADOW_DIAG[si], match, missed);
                setShadowState({ on: false, last: { match, said: r.transcript, missed } });
              }}
            >
              <MicPulse active={shadowState.on} /> {shadowState.on ? "Ouvindo…" : "Repetir"}
            </button>
          </div>
          {shadowState.error && <p className="error">{shadowState.error}</p>}
          {shadowState.last && (
            <>
              <p className="small">
                {Math.round(shadowState.last.match * 100)}% entendido · ouvi: <em>"{shadowState.last.said}"</em>
              </p>
              <button
                className="btn btn-primary"
                onClick={() => {
                  setShadowRes([...shadowRes, shadowState.last!.match]);
                  setShadowState({ on: false });
                  if (si + 1 >= SHADOW_DIAG.length) setStep("oral");
                  setSi(si + 1);
                }}
              >
                Próxima →
              </button>
            </>
          )}
        </section>
      )}

      {step === "oral" && oralQs[oi] && (
        <section className="card">
          <h3>Parte 4: responda falando ({oi + 1}/{oralQs.length})</h3>
          <p className="muted small">Perguntas curtas, voz lenta. Responda como conseguir: frases simples já valem. Se não entender, diga "Could you repeat, please?".</p>
          <Drill
            key={oralQs[oi].id}
            item={questionToDrill(oralQs[oi], 1)}
            mode="diagnostic"
            deferFeedback
            onDone={(a) => {
              oralScores.current.push(a);
            }}
          />
          <div className="controls">
            <button
              className="btn btn-primary"
              onClick={() => {
                if (oi + 1 >= oralQs.length) finish();
                else setOi(oi + 1);
              }}
            >
              {oi + 1 >= oralQs.length ? "Ver resultado →" : "Próxima pergunta →"}
            </button>
          </div>
        </section>
      )}

      {step === "result" && d && (
        <section className="card">
          <h3>Seu resultado</h3>
          <div className="diag-grid">
            <div className="stat"><span className="stat-num">{d.techQuiz}</span><span className="stat-label">Conhecimento técnico (quiz em PT)</span><span className="small">{d.techLevel}</span></div>
            <div className="stat"><span className="stat-num">{d.listening}</span><span className="stat-label">Compreensão auditiva (áudio real)</span><span className="small">{d.listenLevel}</span></div>
            <div className="stat"><span className="stat-num">{d.intelligibility}</span><span className="stat-label">Inteligibilidade (repetição)</span><span className="small">quanto o reconhecimento entendeu</span></div>
            <div className="stat"><span className="stat-num">{d.oral}</span><span className="stat-label">Respostas faladas (nota automática)</span><span className="small">média de {oralQs.length} perguntas</span></div>
          </div>
          <p><strong>Prioridades:</strong> {d.focus.join(" · ")}</p>
          <p><strong>Nível inicial nos simulados:</strong> {d.startLevel} de 4</p>
          <p className="muted small">Limites: a nota das respostas faladas é por regras (palavras-chave, tamanho, tempo, conectores). A inteligibilidade mede o reconhecimento automático, não um ouvido humano. Para uma análise mais fina, copie o relatório e cole na conversa com o Claude.</p>
          <div className="controls">
            <button className="btn btn-primary" onClick={() => onGo("plan")}>Ver meu plano de 30 dias →</button>
            <button className="btn" onClick={() => onGo("lessons")}>Começar a primeira aula</button>
            <button
              className="btn btn-ghost"
              onClick={async () => {
                const oral = oralScores.current.map((a, i) => `Q${i + 1}: "${oralQs[i]?.q}"\nResposta: "${a.transcript}" (nota ${a.scores.total})`).join("\n");
                setCopied(
                  await copyText(
                    `Resultado do meu diagnóstico no LLM Interview Academy:\n- Quiz técnico (PT): ${d.techQuiz}/100 (${d.techLevel})\n- Compreensão auditiva: ${d.listening}/100 (${d.listenLevel})\n- Inteligibilidade: ${d.intelligibility}/100\n- Respostas faladas: ${d.oral}/100\n- Prioridades: ${d.focus.join(", ")}\n\n${oral}\n\nCom base nisso, ajuste meu plano de 30 dias e diga o que treinar primeiro.`,
                  ),
                );
              }}
            >
              {copied ? "Copiado ✓" : "Copiar relatório para o Claude"}
            </button>
            <button className="btn btn-ghost" onClick={() => { setStep("intro"); setLi(0); setSi(0); setOi(0); setListenAns([]); setShadowRes([]); oralScores.current = []; setQuiz(TECH_QUIZ.map(() => null)); }}>
              Refazer diagnóstico
            </button>
          </div>
        </section>
      )}
    </div>
  );
}
