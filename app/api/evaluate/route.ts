import { NextResponse } from "next/server";

// Optional, free, local LLM review through Ollama (https://ollama.com) running on the
// learner's own PC. The browser cannot call Ollama directly because of CORS, so this
// route forwards the request. Nothing leaves the machine.

export async function POST(req: Request) {
  const { url, model, question, transcript, keysPt, modelAnswer, level } = await req.json();
  if (!url || !model) return NextResponse.json({ error: "Configure a URL e o modelo do Ollama em Configurações." }, { status: 400 });
  let base: URL;
  try {
    base = new URL(url);
  } catch {
    return NextResponse.json({ error: "URL do Ollama inválida." }, { status: 400 });
  }
  if (!["localhost", "127.0.0.1", "::1", "[::1]"].includes(base.hostname))
    return NextResponse.json({ error: "Por segurança, só é permitido Ollama em localhost." }, { status: 400 });

  const prompt = `You are an interview coach for LLM evaluation / AI training jobs. The candidate is Brazilian with basic English.
Question: "${question}"
Key ideas expected: ${(keysPt ?? []).join("; ")}
Reference answer: "${modelAnswer}"
Candidate's SPOKEN answer (speech-to-text, no punctuation): "${transcript}"

Write the feedback in Brazilian Portuguese, short, in this format:
Técnico: (o que está certo/errado/faltando)
Inglês: (até 3 erros, "errado" → "certo")
Clareza: (1 dica)
Resposta melhor (em inglês simples, nível ${level}/4): (2-4 frases)
Do not rate pronunciation.`;

  try {
    const r = await fetch(new URL("/api/chat", base), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model, stream: false, messages: [{ role: "user", content: prompt }], options: { temperature: 0.3 } }),
    });
    if (!r.ok) return NextResponse.json({ error: `Ollama respondeu ${r.status}. O modelo "${model}" está instalado? (ollama pull ${model})` }, { status: 502 });
    const data = await r.json();
    return NextResponse.json({ text: data?.message?.content ?? "" });
  } catch {
    return NextResponse.json({ error: "Não consegui falar com o Ollama. Ele está aberto? (ollama serve)" }, { status: 502 });
  }
}
