"use client";

import { useEffect, useState } from "react";
import Dashboard from "@/components/Dashboard";
import Diagnostic from "@/components/Diagnostic";
import Lessons from "@/components/Lessons";
import Practice, { Exercises } from "@/components/Practice";
import Simulation from "@/components/Simulation";
import Listening from "@/components/Listening";
import Glossary from "@/components/Glossary";
import Plan from "@/components/Plan";
import Progress from "@/components/Progress";
import Settings from "@/components/Settings";
import { loadVoices, stopSpeaking } from "@/lib/speech";

const TABS = [
  { id: "home", label: "Início" },
  { id: "diagnostic", label: "Diagnóstico" },
  { id: "plan", label: "Plano 30 dias" },
  { id: "lessons", label: "Aulas" },
  { id: "practice", label: "Treino" },
  { id: "exercises", label: "Exercícios" },
  { id: "listening", label: "Escuta" },
  { id: "sim", label: "Simulado" },
  { id: "glossary", label: "Glossário" },
  { id: "progress", label: "Evolução" },
  { id: "settings", label: "Configurações" },
] as const;

export default function Home() {
  const [tab, setTab] = useState<string>("home");
  const [lesson, setLesson] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    loadVoices();
    const h = location.hash.slice(1);
    if (TABS.some((t) => t.id === h)) setTab(h);
  }, []);

  const go = (t: string) => {
    stopSpeaking();
    setTab(t);
    if (t !== "lessons") setLesson(null);
    history.replaceState(null, "", `#${t}`);
    window.scrollTo({ top: 0 });
  };
  const openLesson = (id: string | null) => {
    stopSpeaking();
    setLesson(id);
    setTab("lessons");
    history.replaceState(null, "", "#lessons");
    window.scrollTo({ top: 0 });
  };

  return (
    <div className="shell">
      <nav className="nav" aria-label="Seções">
        <div className="brand">
          <span className="brand-mark" aria-hidden="true" />
          <span>LLM Interview <strong>Academy</strong></span>
        </div>
        <ul>
          {TABS.map((t) => (
            <li key={t.id}>
              <button className={tab === t.id ? "active" : ""} aria-current={tab === t.id ? "page" : undefined} onClick={() => go(t.id)}>
                {t.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <main className="main">
        {!mounted ? null : (
          <>
            {tab === "home" && <Dashboard onGo={go} onLesson={openLesson} />}
            {tab === "diagnostic" && <Diagnostic onGo={go} />}
            {tab === "plan" && <Plan onGo={go} onLesson={openLesson} />}
            {tab === "lessons" && <Lessons openId={lesson} onOpen={openLesson} />}
            {tab === "practice" && <Practice />}
            {tab === "exercises" && <Exercises />}
            {tab === "listening" && <Listening />}
            {tab === "sim" && <Simulation />}
            {tab === "glossary" && <Glossary />}
            {tab === "progress" && <Progress />}
            {tab === "settings" && <Settings />}
          </>
        )}
      </main>
    </div>
  );
}
