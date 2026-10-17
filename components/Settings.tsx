"use client";

import { useEffect, useState } from "react";
import { englishVoices, getSupport, loadVoices, speak } from "@/lib/speech";
import { exportBackup, importBackup, resetAll, setSettings, useStore } from "@/lib/store";
import { copyText } from "@/lib/export";

export default function Settings() {
  const s = useStore();
  const st = s.settings;
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [backup, setBackup] = useState("");
  const [msg, setMsg] = useState<string | null>(null);
  const [confirmReset, setConfirmReset] = useState(false);
  const support = getSupport();

  useEffect(() => {
    loadVoices().then((v) => setVoices(englishVoices(v)));
  }, []);

  return (
    <div className="page">
      <header className="page-head">
        <h2>Configurações</h2>
      </header>

      <section className="card">
        <h3>Compatibilidade deste navegador</h3>
        <ul className="checks">
          <li className={support.tts ? "ok" : "miss"}>{support.tts ? "✓" : "✗"} Voz do professor (síntese de voz)</li>
          <li className={support.stt ? "ok" : "miss"}>{support.stt ? "✓" : "✗"} Reconhecimento da sua voz {support.stt ? "" : ": use o Google Chrome ou o Edge"}</li>
          <li className={support.recorder ? "ok" : "miss"}>{support.recorder ? "✓" : "✗"} Gravação de áudio</li>
        </ul>
        <p className="small muted">No Chrome, o reconhecimento de voz envia o áudio para o serviço do Google. É gratuito, mas precisa de internet. A voz do professor e todo o resto rodam no seu computador.</p>
      </section>

      <section className="card">
        <h3>Voz do professor</h3>
        <div className="form-row">
          <label htmlFor="voice">Voz em inglês</label>
          <select id="voice" value={st.voiceName ?? ""} onChange={(e) => setSettings({ voiceName: e.target.value || null })}>
            <option value="">Automática (prefere "Google US English")</option>
            {voices.map((v) => <option key={v.name} value={v.name}>{v.name} ({v.lang}){v.localService ? "" : " · online"}</option>)}
          </select>
        </div>
        <div className="form-row">
          <label htmlFor="rate">Ajuste de velocidade: {st.rateMul.toFixed(2)}×</label>
          <input id="rate" type="range" min={0.7} max={1.3} step={0.05} value={st.rateMul} onChange={(e) => setSettings({ rateMul: Number(e.target.value) })} />
        </div>
        <button className="btn btn-primary btn-sm" onClick={() => speak("Hi! Can you tell me about a project you are proud of?", { rate: st.rateMul, voiceName: st.voiceName })}>▶ Testar voz</button>
        <p className="small muted">No Windows, as vozes "Google" do Chrome soam mais naturais. As vozes "Microsoft" funcionam sem internet.</p>
      </section>

      <section className="card">
        <h3>Treino</h3>
        <label className="check">
          <input id="handsfree" type="checkbox" checked={st.handsFree} onChange={(e) => setSettings({ handsFree: e.target.checked })} />
          <span><strong>Modo mãos livres (conversa contínua)</strong>: nos simulados, o microfone abre sozinho depois de cada pergunta e fecha depois de ~2,5 s de silêncio. Use fone de ouvido.</span>
        </label>
        <label className="check">
          <input id="live" type="checkbox" checked={st.showLive} onChange={(e) => setSettings({ showLive: e.target.checked })} />
          <span><strong>Mostrar transcrição ao vivo</strong> enquanto eu falo (começa desligado para simular a entrevista real).</span>
        </label>
        <label className="check">
          <input id="rec" type="checkbox" checked={st.recordConsent} onChange={(e) => setSettings({ recordConsent: e.target.checked })} />
          <span><strong>Gravar minhas respostas</strong> para eu ouvir depois. As gravações ficam só na memória desta aba e somem ao fechar. Nada é enviado.</span>
        </label>
      </section>

      <section className="card">
        <h3>Meu currículo (para o simulado nível 4)</h3>
        <div className="form-row">
          <label htmlFor="projects">Seus projetos principais, separados por vírgula</label>
          <textarea id="projects" rows={3} placeholder="Ex.: e-commerce em Next.js com Stripe, dashboard de analytics em React" value={st.profileProjects} onChange={(e) => setSettings({ profileProjects: e.target.value })} />
        </div>
        <p className="small muted">Entrevistadores de IA (como os usados por plataformas de AI training) costumam aprofundar o que está no currículo. O nível 4 vai perguntar sobre esses projetos.</p>
      </section>

      <section className="card">
        <h3>Avaliação por IA local (opcional, grátis)</h3>
        <p className="small">Se você instalar o <a href="https://ollama.com" target="_blank" rel="noreferrer">Ollama</a> no seu PC, o app pode pedir a um modelo local uma correção mais inteligente das suas respostas. Nada sai do seu computador. Precisa de um PC com pelo menos 8 GB de RAM. Exemplo: <code>ollama pull qwen2.5:7b</code>.</p>
        <div className="form-row">
          <label htmlFor="ollamaUrl">URL do Ollama</label>
          <input id="ollamaUrl" type="text" placeholder="http://localhost:11434" value={st.ollamaUrl} onChange={(e) => setSettings({ ollamaUrl: e.target.value.trim() })} />
        </div>
        <div className="form-row">
          <label htmlFor="ollamaModel">Modelo</label>
          <input id="ollamaModel" type="text" placeholder="qwen2.5:7b" value={st.ollamaModel} onChange={(e) => setSettings({ ollamaModel: e.target.value.trim() })} />
        </div>
        <p className="small muted">Sem Ollama, use o botão "Copiar para avaliação no Claude" depois de cada resposta e cole na sua conversa com o Claude.</p>
      </section>

      <section className="card">
        <h3>Backup do progresso</h3>
        <div className="controls">
          <button className="btn btn-sm" onClick={async () => { const b = exportBackup(); setBackup(b); setMsg((await copyText(b)) ? "Backup copiado. Cole em um arquivo .json para guardar." : "Backup gerado abaixo. Selecione e copie."); }}>Exportar</button>
          <button className="btn btn-sm" onClick={() => setMsg(importBackup(backup) ? "Backup importado." : "Não consegui ler esse backup.")}>Importar do campo abaixo</button>
        </div>
        <textarea id="backup" rows={4} value={backup} onChange={(e) => setBackup(e.target.value)} placeholder="Cole aqui um backup para importar" />
        {msg && <p className="small" role="status">{msg}</p>}
        <div className="controls">
          {!confirmReset ? (
            <button className="btn btn-sm btn-ghost danger" onClick={() => setConfirmReset(true)}>Apagar todo o progresso…</button>
          ) : (
            <>
              <span className="small">Tem certeza? Isso não pode ser desfeito.</span>
              <button className="btn btn-sm danger" onClick={() => { resetAll(); setConfirmReset(false); setMsg("Progresso apagado."); }}>Sim, apagar</button>
              <button className="btn btn-sm" onClick={() => setConfirmReset(false)}>Cancelar</button>
            </>
          )}
        </div>
      </section>
    </div>
  );
}
