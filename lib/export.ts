import type { Attempt, DrillItem } from "./types";
import { CRITERION_PT } from "./scoring";

/**
 * Builds a prompt the learner can paste into Claude (claude.ai) for a real LLM review.
 * Free within their plan; no API key involved.
 */
export function claudeReviewPrompt(item: DrillItem, a: Attempt): string {
  const crit = (Object.keys(CRITERION_PT) as (keyof typeof CRITERION_PT)[])
    .map((k) => `- ${CRITERION_PT[k]}: ${a.scores[k] ?? "N/A"}`)
    .join("\n");
  return `Você é meu avaliador de entrevista em inglês para vagas de LLM evaluation / AI training.
Avalie minha resposta FALADA (transcrita pelo reconhecimento de voz do Chrome, sem pontuação; erros de transcrição são possíveis).

Pergunta (ouvida em áudio${a.textRevealed ? ", mas eu li o texto antes" : ""}): "${item.q}"
${item.exercise ? `Contexto do exercício: prompt="${item.exercise.prompt}"\nResposta A: ${item.exercise.responseA}\nResposta B: ${item.exercise.responseB ?? "-"}\n` : ""}
Minha resposta transcrita: "${a.transcript || "(nada reconhecido)"}"
Tempo até começar a falar: ${a.latencyMs === null ? "?" : Math.round(a.latencyMs / 1000) + " s"} · Palavras: ${a.words} · Replays da pergunta: ${a.replays}

Nota automática do app (por regras, estimativa):
${crit}
- Total: ${a.scores.total}/100

Responda em português:
1. Precisão técnica: o que está certo, errado ou faltando.
2. Inglês: erros de gramática e vocabulário (frase errada → frase correta).
3. Clareza: como organizar melhor.
4. Uma resposta melhor em inglês simples e natural (nível ${a.level}/4), que eu consiga falar.
5. Uma pergunta de acompanhamento (follow-up) que um entrevistador faria.
Não avalie pronúncia: você só tem a transcrição.`;
}

export function sessionReportPrompt(title: string, rows: { q: string; a: Attempt }[]): string {
  const body = rows
    .map((r, i) => `${i + 1}. Q: "${r.q}"\n   Minha resposta: "${r.a.transcript || "(nada)"}"\n   Nota automática: ${r.a.scores.total}/100`)
    .join("\n");
  return `Você é meu avaliador de entrevistas em inglês para vagas de LLM evaluation / AI training.
Abaixo está a transcrição (voz → texto pelo Chrome) de "${title}". Avalie em português:
- pontos fortes e fracos técnicos;
- erros de inglês recorrentes (errado → certo);
- as 3 respostas que mais precisam melhorar, com versão melhor em inglês simples;
- o que eu devo treinar nos próximos 3 dias.
Não avalie pronúncia (você só tem a transcrição).

${body}`;
}

export async function copyText(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}
