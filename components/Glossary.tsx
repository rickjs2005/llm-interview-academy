"use client";

import { useMemo, useState } from "react";
import { GLOSSARY, shuffle } from "@/lib/content";
import { listen, speak } from "@/lib/speech";
import { wordMatch } from "@/lib/scoring";
import { recordFlash, useStore } from "@/lib/store";
import { MicPulse, Say } from "./ui";

const CATS: Record<string, string> = {
  all: "Todos", ai: "IA", llm: "LLM", training: "Treinamento", evaluation: "Avaliação", annotation: "Anotação", coding: "Código", interview: "Entrevista",
};

export default function Glossary() {
  const [tab, setTab] = useState<"list" | "cards">("cards");
  const [cat, setCat] = useState("all");
  const [q, setQ] = useState("");
  const list = GLOSSARY.filter((g) => (cat === "all" || g.cat === cat) && (!q || (g.en + g.pt).toLowerCase().includes(q.toLowerCase())));
  return (
    <div className="page">
      <header className="page-head">
        <h2>Glossário e flashcards</h2>
        <p className="muted">{GLOSSARY.length} termos técnicos inglês–português com pronúncia.</p>
      </header>
      <div className="toolbar">
        <button className={`chip ${tab === "cards" ? "active" : ""}`} aria-pressed={tab === "cards"} onClick={() => setTab("cards")}>Flashcards por voz</button>
        <button className={`chip ${tab === "list" ? "active" : ""}`} aria-pressed={tab === "list"} onClick={() => setTab("list")}>Lista</button>
        <select aria-label="Categoria" value={cat} onChange={(e) => setCat(e.target.value)}>
          {Object.entries(CATS).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
        </select>
        {tab === "list" && <input id="gsearch" type="search" placeholder="Buscar termo" value={q} onChange={(e) => setQ(e.target.value)} />}
      </div>
      {tab === "cards" ? <Cards cat={cat} /> : (
        <div className="gloss">
          {list.map((g) => (
            <div key={g.en} className="gloss-row">
              <div className="term-head">
                <strong>{g.en}</strong>
                {g.say && <span className="say">/{g.say}/</span>}
                <Say text={g.en} rate={0.8} />
              </div>
              <div className="small"><strong>{g.pt}</strong>: {g.defPt}</div>
              <div className="small muted ex-line">
                <em>{g.exampleEn}</em> <Say text={g.exampleEn} rate={0.9} label="Exemplo" />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function Cards({ cat }: { cat: string }) {
  const s = useStore();
  const deck = useMemo(() => {
    const now = Date.now();
    const pool = GLOSSARY.filter((g) => cat === "all" || g.cat === cat);
    const due = pool.filter((g) => !s.flash[g.en] || s.flash[g.en].due <= now);
    return shuffle(due).slice(0, 20);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cat]);
  const [i, setI] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [said, setSaid] = useState<{ text: string; match: number } | null>(null);
  const [on, setOn] = useState(false);
  const g = deck[i];
  if (!g) return <div className="card empty"><p>Nenhum cartão para revisar agora nesta categoria. Volte amanhã ou escolha outra categoria.</p></div>;
  const nextCard = (knew: boolean) => {
    recordFlash(g.en, knew);
    setFlipped(false);
    setSaid(null);
    setI(i + 1);
  };
  return (
    <section className="card flash">
      <p className="small muted">Cartão {i + 1}/{deck.length} · ouça o termo, diga em voz alta, depois vire o cartão.</p>
      <div className="flash-face">
        <div className="flash-term">{g.en}</div>
        {g.say && <div className="say">/{g.say}/</div>}
      </div>
      <div className="controls center">
        <button className="btn btn-primary" onClick={() => speak(g.en, { rate: 0.8 * s.settings.rateMul, voiceName: s.settings.voiceName })}>▶ Ouvir</button>
        <button
          className="btn btn-accent"
          disabled={on}
          onClick={async () => {
            setOn(true);
            const r = await listen({ autoStopMs: 1500, maxMs: 8000 }).result;
            setOn(false);
            setSaid({ text: r.transcript, match: wordMatch(g.en, r.transcript) });
          }}
        >
          <MicPulse active={on} /> {on ? "Ouvindo…" : "Dizer o termo"}
        </button>
        <button className="btn" onClick={() => setFlipped(true)}>Virar cartão</button>
      </div>
      {said && (
        <p className="small center">
          Entendi <em>"{said.text || "(nada)"}"</em> · <strong className={said.match >= 0.99 ? "good" : "mid"}>{said.match >= 0.99 ? "perfeito" : `${Math.round(said.match * 100)}%`}</strong>
        </p>
      )}
      {flipped && (
        <div className="flash-back">
          <p><strong>{g.pt}</strong>: {g.defPt}</p>
          <p className="small"><em>{g.exampleEn}</em> <Say text={g.exampleEn} rate={0.9} label="Exemplo" /></p>
          <div className="controls center">
            <button className="btn" onClick={() => nextCard(false)}>Não sabia</button>
            <button className="btn btn-primary" onClick={() => nextCard(true)}>Sabia ✓</button>
          </div>
        </div>
      )}
    </section>
  );
}
