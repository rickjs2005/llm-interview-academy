"use client";

// Thin wrappers around the browser's free Web Speech API.
// TTS: speechSynthesis (works offline with local Windows voices; "Google" voices need internet).
// STT: webkitSpeechRecognition (Chrome/Edge). In Chrome the audio is sent to Google's
// recognition service: free, no key, but requires internet.

export interface SpeechSupport {
  tts: boolean;
  stt: boolean;
  recorder: boolean;
}

export function getSupport(): SpeechSupport {
  if (typeof window === "undefined") return { tts: false, stt: false, recorder: false };
  const w = window as any;
  return {
    tts: "speechSynthesis" in window,
    stt: Boolean(w.SpeechRecognition || w.webkitSpeechRecognition),
    recorder: typeof w.MediaRecorder !== "undefined" && !!navigator.mediaDevices,
  };
}

// ---------- TTS ----------

let voicesCache: SpeechSynthesisVoice[] = [];

export function loadVoices(): Promise<SpeechSynthesisVoice[]> {
  return new Promise((resolve) => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return resolve([]);
    const list = speechSynthesis.getVoices();
    if (list.length) {
      voicesCache = list;
      return resolve(list);
    }
    const done = () => {
      voicesCache = speechSynthesis.getVoices();
      resolve(voicesCache);
    };
    speechSynthesis.addEventListener("voiceschanged", done, { once: true });
    setTimeout(done, 1500);
  });
}

export function englishVoices(voices: SpeechSynthesisVoice[]) {
  return voices.filter((v) => v.lang.toLowerCase().startsWith("en"));
}

export function pickVoice(preferredName?: string | null): SpeechSynthesisVoice | undefined {
  const en = englishVoices(voicesCache);
  if (preferredName) {
    const v = en.find((x) => x.name === preferredName);
    if (v) return v;
  }
  const order = [/Google US English/i, /Natural/i, /Aria|Jenny|Guy/i, /Zira|David|Mark/i, /Samantha|Alex/i];
  for (const re of order) {
    const v = en.find((x) => re.test(x.name) && x.lang.toLowerCase().startsWith("en-us"));
    if (v) return v;
  }
  return en.find((x) => x.lang.toLowerCase() === "en-us") ?? en[0];
}

/** Rates per interview level: slow for beginners, natural for the real interview. */
export const LEVEL_RATE: Record<number, number> = { 1: 0.78, 2: 0.9, 3: 1.0, 4: 1.06 };

// Chrome cuts Google voices after ~15 s of continuous speech, so long text is spoken
// sentence by sentence.
function chunk(text: string): string[] {
  const parts = text.match(/[^.!?]+[.!?]*\s*/g) ?? [text];
  const out: string[] = [];
  let cur = "";
  for (const p of parts) {
    if ((cur + p).length > 180 && cur) {
      out.push(cur.trim());
      cur = p;
    } else cur += p;
  }
  if (cur.trim()) out.push(cur.trim());
  return out;
}

let speakToken = 0;

export function stopSpeaking() {
  speakToken++;
  if (typeof window !== "undefined" && "speechSynthesis" in window) speechSynthesis.cancel();
}

export function speak(
  text: string,
  opts: { rate?: number; voiceName?: string | null; lang?: string } = {},
): Promise<void> {
  return new Promise((resolve) => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return resolve();
    stopSpeaking();
    const token = speakToken;
    const voice = opts.lang?.startsWith("pt") ? undefined : pickVoice(opts.voiceName);
    const chunks = chunk(text);
    let i = 0;
    const next = () => {
      if (token !== speakToken || i >= chunks.length) return resolve();
      const u = new SpeechSynthesisUtterance(chunks[i++]);
      if (voice) u.voice = voice;
      u.lang = opts.lang ?? voice?.lang ?? "en-US";
      u.rate = opts.rate ?? 1;
      u.onend = next;
      u.onerror = next;
      speechSynthesis.speak(u);
    };
    next();
  });
}

// ---------- STT ----------

export interface ListenResult {
  transcript: string;
  confidence: number | null;
  /** ms from start() until the first recognized word, or null if nothing was heard. */
  firstSpeechMs: number | null;
  durationMs: number;
  error?: string;
}

export interface Listener {
  stop: () => void;
  result: Promise<ListenResult>;
}

export const STT_ERRORS_PT: Record<string, string> = {
  "not-allowed": "O Chrome bloqueou o microfone. Clique no cadeado da barra de endereço e permita o microfone.",
  "service-not-allowed": "O reconhecimento de voz não está disponível. Use o Google Chrome ou o Microsoft Edge.",
  network: "O reconhecimento de voz do Chrome precisa de internet. Verifique sua conexão.",
  "audio-capture": "Nenhum microfone encontrado. Conecte um microfone e tente de novo.",
  "no-speech": "Não ouvi nada. Fale mais perto do microfone.",
};

/**
 * Starts recognition. Ends when stop() is called, or (autoStopMs) after that much
 * silence following speech, or at maxMs.
 */
export function listen(opts: {
  onInterim?: (text: string) => void;
  autoStopMs?: number;
  maxMs?: number;
  lang?: string;
} = {}): Listener {
  const w = window as any;
  const Rec = w.SpeechRecognition || w.webkitSpeechRecognition;
  let stopFn = () => {};
  const result = new Promise<ListenResult>((resolve) => {
    if (!Rec) {
      resolve({ transcript: "", confidence: null, firstSpeechMs: null, durationMs: 0, error: "service-not-allowed" });
      return;
    }
    const startedAt = performance.now();
    const finals: string[] = [];
    const confs: number[] = [];
    let interim = "";
    let firstSpeechMs: number | null = null;
    let active = true;
    let error: string | undefined;
    let silenceTimer: ReturnType<typeof setTimeout> | undefined;
    let maxTimer: ReturnType<typeof setTimeout> | undefined;
    let rec: any;

    const finish = () => {
      if (!active) return;
      active = false;
      clearTimeout(silenceTimer);
      clearTimeout(maxTimer);
      try {
        rec?.stop();
      } catch {}
      // Give the engine a moment to flush the last final result.
      setTimeout(() => {
        const transcript = [...finals, interim].join(" ").replace(/\s+/g, " ").trim();
        resolve({
          transcript,
          confidence: confs.length ? confs.reduce((a, b) => a + b, 0) / confs.length : null,
          firstSpeechMs,
          durationMs: performance.now() - startedAt,
          error: transcript ? undefined : error,
        });
      }, 350);
    };
    stopFn = finish;

    const start = () => {
      rec = new Rec();
      rec.lang = opts.lang ?? "en-US";
      rec.continuous = true;
      rec.interimResults = true;
      rec.maxAlternatives = 1;
      rec.onresult = (e: any) => {
        if (firstSpeechMs === null) firstSpeechMs = performance.now() - startedAt;
        interim = "";
        for (let i = e.resultIndex; i < e.results.length; i++) {
          const r = e.results[i];
          if (r.isFinal) {
            finals.push(r[0].transcript.trim());
            if (typeof r[0].confidence === "number" && r[0].confidence > 0) confs.push(r[0].confidence);
          } else interim += r[0].transcript;
        }
        opts.onInterim?.([...finals, interim].join(" ").trim());
        if (opts.autoStopMs) {
          clearTimeout(silenceTimer);
          silenceTimer = setTimeout(finish, opts.autoStopMs);
        }
      };
      rec.onerror = (e: any) => {
        if (e.error !== "no-speech" && e.error !== "aborted") error = e.error;
        if (e.error === "not-allowed" || e.error === "audio-capture" || e.error === "service-not-allowed") finish();
      };
      // Chrome ends sessions on its own after a pause; restart while we're still active.
      rec.onend = () => {
        if (active && !error) {
          if (interim) {
            finals.push(interim.trim());
            interim = "";
          }
          try {
            start();
          } catch {
            finish();
          }
        } else if (active) finish();
      };
      rec.start();
    };

    try {
      start();
    } catch (err) {
      error = "service-not-allowed";
      finish();
    }
    maxTimer = setTimeout(finish, opts.maxMs ?? 180000);
  });
  return { stop: () => stopFn(), result };
}

// ---------- Recording (only with consent) ----------

export interface Recorder {
  stop: () => Promise<string | null>;
}

export async function startRecording(): Promise<Recorder | null> {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const mr = new MediaRecorder(stream);
    const chunks: Blob[] = [];
    mr.ondataavailable = (e) => e.data.size && chunks.push(e.data);
    mr.start();
    return {
      stop: () =>
        new Promise((resolve) => {
          mr.onstop = () => {
            stream.getTracks().forEach((t) => t.stop());
            resolve(chunks.length ? URL.createObjectURL(new Blob(chunks, { type: mr.mimeType })) : null);
          };
          try {
            mr.stop();
          } catch {
            resolve(null);
          }
        }),
    };
  } catch {
    return null;
  }
}
