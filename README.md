# LLM Interview Academy

Treino **por voz** para entrevistas em inglês de LLM evaluation, AI training, AI response evaluation e coding evaluation.
O professor faz a pergunta em áudio, você responde pelo microfone, o app avalia e corrige em português, toca uma resposta melhor e você repete até melhorar.

## Como rodar no Windows (5 minutos)

1. Instale o **Node.js 20 ou mais novo** (https://nodejs.org). Você já deve ter, por ser dev.
2. Descompacte esta pasta, abra um terminal nela e rode:
   ```
   npm install
   npm run build
   npm start
   ```
   (Para desenvolver, use `npm run dev`.)
3. Abra **http://localhost:3000** no **Google Chrome** (ou no Edge).
4. Quando o Chrome pedir, **permita o microfone**. Use fone de ouvido.
5. Comece pelo **Diagnóstico**.

> Precisa ser `localhost` (ou https). Abrir o arquivo HTML direto não libera o microfone de forma estável.

## O que tem dentro

| Recurso | Onde |
|---|---|
| Diagnóstico: quiz técnico em PT, escuta com áudio real, repetição, 5 respostas faladas | Diagnóstico |
| Plano de 30 dias, rotina de 2h e extensão para 4h, ajustado ao diagnóstico | Plano 30 dias |
| 6 módulos e 51 lições: explicação em PT, termos em EN com pronúncia, exemplo, escuta, shadowing, perguntas | Aulas |
| 156 perguntas de entrevista (níveis 1 a 4), cada uma com respostas modelo básica, intermediária e profissional | Aulas, Treino, Simulado |
| 21 exercícios de avaliação: A vs B, nota de resposta única, comparação de código | Exercícios |
| Repetição espaçada (1, 2, 4, 7, 15 dias), perguntas surpresa, suas mais fracas | Treino |
| Escuta: ouvir sem ler, escolher o significado, shadowing com medida de inteligibilidade | Escuta |
| Simulados nos níveis 1 a 4. O nível 4 tem voz natural, só inglês, follow-ups, tempo limite e perguntas sobre o seu currículo | Simulado |
| 175 termos com flashcards por voz | Glossário |
| Evolução: gráfico diário, notas por critério, erros recorrentes, palavras a praticar, relatório | Evolução |
| Banco de perguntas e glossário em Markdown | `docs/` |
| Pesquisa sobre plataformas e formatos de seleção, com fontes | `content/RESEARCH.md` |

## Arquitetura de áudio (100% gratuita)

```
 Chrome (localhost:3000)
 ├─ Voz do professor ── speechSynthesis (Web Speech API)
 │                      vozes "Google" (online) ou "Microsoft" (offline, Windows)
 ├─ Sua voz → texto ─── webkitSpeechRecognition (Web Speech API)
 │                      no Chrome o áudio vai para o serviço do Google: grátis, sem chave, precisa de internet
 ├─ Gravação ────────── MediaRecorder (só com o seu consentimento; fica na memória da aba)
 ├─ Avaliação ───────── regras locais (lib/scoring.ts + lib/grammar.ts)
 ├─ Progresso ───────── localStorage (backup em JSON nas Configurações)
 └─ IA opcional ─────── Ollama local via /api/evaluate (grátis, offline)
                        ou "Copiar para avaliação no Claude" (cole na sua conversa)
```

### Opções avaliadas

| Opção | Custo | Por que (não) foi usada |
|---|---|---|
| **Web Speech API (Chrome)** | Grátis | **Escolhida.** Funciona no Windows + Chrome sem instalar nada e tem boa precisão em inglês com sotaque. |
| Whisper no navegador (transformers.js) | Grátis, offline | Download de ~75–250 MB e mais lento em PCs comuns. Bom candidato para uma versão 2 offline. |
| Ollama (Llama/Qwen local) para corrigir | Grátis | Integrado como **opcional**: precisa de 8 GB+ de RAM. |
| OpenAI Realtime, Azure Speech, Deepgram, ElevenLabs | Pagos | Não usados, como você pediu. Azure tem avaliação de pronúncia de verdade e só seria integrado com sua autorização. |
| Página hospedada no claude.ai | Grátis | Não dá acesso ao microfone, por isso o app roda local. |

## Como a nota (0–100) é calculada

| Critério | Pontos | Medido como |
|---|---|---|
| Conhecimento técnico | 30 | conceitos-chave presentes na resposta (sinônimos aceitos) |
| Compreensão auditiva | 25 | **só** se a pergunta tocou em áudio e o texto não foi aberto antes; resposta no tema = entendeu; replays extras custam pontos, pedir "Could you repeat?" em voz alta não |
| Responder em inglês | 20 | tamanho da resposta para o nível, tempo até começar a falar, manter-se no inglês |
| Clareza e organização | 15 | conectores (first, because, for example…), repetição, hesitações |
| Pronúncia / inteligibilidade | 10 | **só** quando você repete uma frase conhecida: % das palavras que o reconhecimento entendeu. Nunca pela resposta livre. |

Critérios não medidos aparecem como **N/A** e não entram no total.

**Limites, sem exagero:** a nota é uma estimativa por regras. O reconhecimento de voz tende a "corrigir" sua gramática, então alguns erros não aparecem. "Inteligibilidade" mede se uma máquina entende você, o que é parecido com, mas não igual a, um ouvinte humano. Para uma correção de conteúdo mais inteligente, use o Ollama ou o botão de copiar para o Claude.

## Estrutura

```
app/            Next.js (App Router): página única + rota /api/evaluate (proxy do Ollama)
components/     Drill (núcleo do treino por voz), Lessons, Diagnostic, Simulation, ...
lib/            speech (TTS/STT), scoring, grammar, store, plan, content
content/        m1..m6.json (lições, perguntas, exercícios), glossary.json, RESEARCH.md, SCHEMA.md
scripts/        validate-content.mjs, build-docs.mjs
docs/           BANCO-DE-PERGUNTAS.md, GLOSSARIO.md
```

`npm run validate` confere o conteúdo. `node scripts/build-docs.mjs` regenera os Markdown.
