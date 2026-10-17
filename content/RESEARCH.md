# Pesquisa: como brasileiros são contratados para trabalho remoto de treinamento/avaliação de IA (2025–2026)

> **Data da pesquisa:** 17/10/2026. **Método:** buscas na web (o fetch direto das páginas oficiais falhou por erro de DNS no ambiente; as informações vêm dos trechos indexados pelos buscadores, com a URL da página de origem). Datas de fontes são citadas quando aparecem; quando não aparecem, está escrito "sem data".
>
> **Legenda de confiabilidade usada em todo o documento:**
> - **[OFICIAL]** = site, help center, documentação ou vaga publicada pela própria empresa.
> - **[RELATO]** = relato de candidato (Reddit, Glassdoor, Trustpilot, LinkedIn, Taro, blogs pessoais).
> - **[TERCEIRO]** = agregador de vagas, blog de SEO ou guia de terceiros (confiabilidade baixa/média).
> - **[INCERTO]** = não foi possível confirmar; fontes conflitantes ou ausentes.
>
> Nada aqui foi inventado. Onde não há fonte, está escrito "não encontrado".

---

## 1. Resumo executivo

Para um(a) dev brasileiro(a) de React/TypeScript com inglês básico:

1. **A porta de entrada mais comum agora é uma entrevista falada com IA, em inglês, com câmera ligada.** Mercor (≈20 min, até 3 tentativas), micro1 (Zara, 20–40 min, com desafio de código em vagas técnicas) e Alignerr/Labelbox (Zara, ≈15 min no fluxo generalista) usam esse formato [OFICIAL para Mercor e micro1; OFICIAL+TERCEIRO para Alignerr]. Inglês falado claro e respostas concretas sobre o próprio currículo viram requisito eliminatório na prática.
2. **Brasil é aceito oficialmente na Mercor** (lista de países suportados; pagamento via Wise) e há vagas abertas para o Brasil na **Outlier**, **Turing**, **Meridial/Invisible**, **TELUS Digital** e **Appen/CrowdGen** [OFICIAL/vagas]. **DataAnnotation.tech** é o caso mais duvidoso: o FAQ citado pela comunidade (fev/2024) lista só EUA, Canadá, Austrália, NZ, Reino Unido e Irlanda [RELATO/INCERTO]. **Handshake AI** é focado em quem está nos EUA [OFICIAL]. **Remotasks** bloqueia cadastro a partir do Brasil e redireciona para a Outlier (teste de ago/2026) [TERCEIRO].
3. **O que é testado, de forma consistente:** (a) comparar duas respostas de modelo e justificar qual é melhor com base em um rubric; (b) identificar erros factuais/de código e requisitos não atendidos; (c) escrever justificativas específicas (não genéricas); (d) seguir instruções longas em inglês; (e) para vagas de código, revisar/avaliar código gerado por IA — a Outlier cita explicitamente HTML, CSS, JavaScript e **React** como relevantes [OFICIAL].
4. **Motivos de reprovação mais relatados:** rubric mal interpretado, pressa, justificativa vaga ("A é melhor porque é mais detalhada"), citar no currículo/entrevista ferramentas que não sabe explicar a fundo (a IA "puxa o fio"), problemas técnicos na entrevista com IA, e rejeição sem feedback [RELATO/TERCEIRO].
5. **Inglês básico é o maior gargalo.** Quase todas as vagas para o Brasil pedem inglês fluente ou B2 (TELUS: "English (B2)"; Meridial: "fluent English (written and verbal)"; Mindrift: currículo em inglês + nível declarado) [OFICIAL/vagas]. Há vagas em português (Outlier pt-BR, Mercor bilíngue pt-BR, Turing pt-BR), mas mesmo nelas as instruções são em inglês.

---

## 2. Tabela de plataformas

| Plataforma | Aceita Brasil? | Triagem (formato) | Competências testadas | Projetos típicos | Confiabilidade |
|---|---|---|---|---|---|
| **Mercor** | **Sim** — Brasil na lista de regiões suportadas; pagamento via Wise (Brasil não está na lista Stripe) [OFICIAL] | Entrevista com IA por vídeo (≈20 min, câmera, microfone, às vezes compartilhamento de tela de tela cheia; até 3 tentativas) + assessments (alguns cronometrados) + às vezes "work trial" [OFICIAL] | Conhecimento de domínio, comunicação; perguntas baseadas no currículo [OFICIAL glossário + RELATO] | Avaliador generalista bilíngue pt-BR, escritor bilíngue pt-BR, especialistas (médico, jurídico, marketing) residentes no Brasil [OFICIAL vagas] | Alta |
| **micro1** | Provável, não confirmado oficialmente para o Brasil. Vagas remotas aparecem em agregadores BR (nov/2025) [TERCEIRO/INCERTO] | Entrevista falada com IA "Zara", 20–40 min (≈7 min por skill); perguntas abertas, cenários, **desafio de código** (vagas técnicas), **exercício de dados humanos** (anotadores); gravada e com proctoring; depois entrevistas humanas [OFICIAL] | Skill técnica escolhida, raciocínio, comunicação; para anotadores: seguir instruções, atenção a detalhes, raciocínio lógico [OFICIAL] | Engenharia de software, anotação de dados/vídeo, AI trainer de marketing [OFICIAL/TERCEIRO] | Alta (formato); Média (Brasil) |
| **Outlier (Scale AI)** | **Sim, por projeto** — vagas pt-BR (redator a US$10/h Brasil e Portugal; avaliador de voz pt 2026), vagas para Brasil de programadores e matemáticos [OFICIAL vagas]. Elegibilidade varia por projeto | Onboarding de 30–90 min: escolha de áreas, *skill screenings*, verificação de identidade; depois onboarding específico do projeto. Vagas de código: "Pass a skills assessment or interview" [OFICIAL] | Comparar respostas de IA, achar problemas factuais, requisitos faltantes, justificar decisão [TERCEIRO]; front-end: HTML/CSS/JS/React, acessibilidade, layout responsivo [OFICIAL] | Revisão/melhoria de código gerado por IA, escrita, avaliação de voz [OFICIAL] | Alta (Brasil); Média (formato do teste) |
| **DataAnnotation.tech** | **Duvidoso** — FAQ comunitário (fev/2024) cita 6 países (EUA, CA, AU, NZ, UK, IE) [RELATO]; vagas sindicadas antigas incluem Brasil [TERCEIRO]; brasileiro no Reddit relatou não receber assessment [RELATO] | Starter Assessment (≈1h, sem timer visível, sem retake) + Core/assessment de área (ex.: coding) + verificação de ID; resultado não é comunicado [TERCEIRO; "sem retake" atribuído ao FAQ oficial] | Gramática, compreensão de texto, aplicar rubric, comparar saídas de modelo, escrever "golden response" [TERCEIRO] | Avaliação de chatbot, código, escrita [TERCEIRO] | Baixa/Incerta |
| **Alignerr (Labelbox)** | **Incerto** — restrições geográficas ("Not Available Here Yet") relatadas; brasileiros relatam ter trabalhado [TERCEIRO/RELATO] | Login Google, currículo/LinkedIn, ID via Persona, **entrevista com IA "Zara" (~15 min)**, assessments de domínio conforme vaga [TERCEIRO]; Labelbox confirma Zara como entrevistadora IA em tempo real, multilíngue [OFICIAL] | Comportamental (generalista); técnica (domínio) [TERCEIRO]; conversa sobre currículo [RELATO dez/2024] | Coding, áudio, rotulagem especializada [OFICIAL blog] | Média |
| **Turing** | **Sim, por vaga** — vagas "must be eligible to work in Brazil" (anotação de voz pt-BR, US$18/h; Business Analyst pt-BR) [TERCEIRO reproduzindo vaga] | Perfil, testes automatizados, entrevista com IA, avaliações práticas [TERCEIRO a partir de vagas] | Programação (Python, JS etc.); raciocínio; inglês [TERCEIRO] | Avaliação de respostas de LLM, desafios de raciocínio, avaliação de código [TERCEIRO] | Média |
| **Invisible / Meridial** | **Sim, por vaga** — "Coding Specialist (Fluent in Portuguese - Brazil)" e "Mathematics Specialist (pt-BR)": elegível para trabalhar no Brasil + inglês fluente escrito e falado [TERCEIRO reproduzindo vaga] | Aplicação detalhada, testes de lógica e escrita em várias etapas, entrevista em vídeo (assíncrona ou ao vivo; Glassdoor cita vídeo com pontuação por IA), oferta; 3–6 semanas [TERCEIRO/RELATO]. Adquiriu a WeCP (plataforma de testes técnicos) [OFICIAL blog] | Inglês (leitura, escrita, escuta), lógica, psicométrico, tarefas SFT [RELATO] | Coding, matemática, SFT [RELATO/vagas] | Média |
| **Mindrift (Toloka)** | **Não confirmado** — Brasil não está na lista de países sancionados, mas há exclusões operacionais não nomeadas [OFICIAL]; vaga de dev Ruby em Belo Horizonte (agregador) [TERCEIRO] | Aplicação + testes de qualificação por trilha + verificação de ID/credenciais [TERCEIRO]; "English proficiency & logic tests" para tutores [TERCEIRO]; currículo em inglês + nível de inglês [vaga] | Inglês, lógica, domínio [TERCEIRO] | Coding (Java QA, Python, Ruby), escrita, design [OFICIAL páginas de projeto] | Média/Baixa |
| **Appen / CrowdGen** | **Sim, por projeto** — "Transcription Specialist – Portuguese (Brazil)" (US$38,50/h na listagem) [OFICIAL vaga Lever] | Exames de qualificação por projeto após cadastro no CrowdGen [OFICIAL vaga, sem detalhe] | Português nativo, ≥98% precisão verbatim (projeto Lupin) [TERCEIRO] | Transcrição, avaliação de voz, avaliação de anúncios [OFICIAL vagas] | Média |
| **TELUS Digital AI Community** | **Sim** — "Internet Rater – Portuguese Speakers" exige residência no Brasil (3–5 anos), ~US$3,50–5/h estimado; "AI BR Writer Analyst" exige inglês B2 (prazo 18/09/2025) [OFICIAL careers-page/jobs.telusdigital.com] | Avaliação de idioma + exame de qualificação "open book" (material fornecido antes) + ID [OFICIAL vagas, outros países] | Relevância de busca, gramática/tom, seguir guidelines [OFICIAL vagas] | Search rating, escrita/análise [OFICIAL] | Alta |
| **Prolific** | **Provavelmente não** — participantes em "most OECD countries" (Brasil não é membro da OCDE) [OFICIAL; listas conflitantes] | Cadastro + verificação de ID; estudos individuais | — | Pesquisas acadêmicas, algumas tarefas de IA | Média |
| **Remotasks** | **Não** para novos cadastros do Brasil — bloqueio com recomendação de usar a Outlier (teste ago/2026) [TERCEIRO]; saída do Quênia/Nigéria/Paquistão em 2024 [Rest of World] | — | — | Migrado para Outlier | Média |
| **Handshake AI (ex-MOVE)** | **Não, em regra** — aberto a estudantes/graduados **nos EUA** com autorização de trabalho [OFICIAL]; fora dos EUA só vagas por país (Índia, Canadá) ou convite [TERCEIRO] | — | — | Validação de modelos por especialistas (US$30–125/h) [OFICIAL] | Alta |
| **Outros com vagas pt-BR** | RWS TrainAI, Welocalize/Welo Data ("Portuguese AI Data Annotator (Brazil)"), Anyone AI, Toloka (R$6/h em SP) [vagas/agregadores] | Varia | Português nativo | Anotação em português | Média |

---

## 3. Formatos de avaliação

### 3.1 Entrevistas faladas com IA (destaque)

**Mercor — AI Interview** [OFICIAL, talent.docs.mercor.com, sem data]
- "Role-specific screen": uma IA faz perguntas, gera transcrição e pontua as respostas para a vaga. Maioria dura **~20 minutos**.
- Glossário oficial: "automated, on-camera interview used to assess your domain knowledge and communication skills".
- **Sala de espera** verifica microfone, rosto no enquadramento, iluminação, câmera e câmera estável; "Start interview" fica bloqueado se um check obrigatório falhar. Compartilhamento de tela só em algumas entrevistas, e só tela cheia.
- **Retakes:** até **3 vezes no total, somando todas as candidaturas**; retake reseta o progresso da candidatura. Motivos incluem "Improve performance" e "Different domain or language" (para entrevistas em idioma estrangeiro).
- Cada entrevista única só precisa ser feita uma vez e o resultado é reaproveitado em outras vagas que pedem a mesma entrevista.
- **Conflito na documentação [INCERTO]:** uma página diz que a entrevista simulada (mock/practice) "foi descontinuada"; outra descreve uma "Practice Interview" gratuita que não afeta oportunidades. Verificar no painel.
- Não é possível fazer por chat ou telefone.
- Vaga bilíngue pt-BR descreve etapa de ~25 min sobre formação, experiência e motivação, e exige entender instruções em inglês [OFICIAL vaga].
- Relatos: perguntas de follow-up partem de afirmações específicas do currículo [RELATO/TERCEIRO]; um candidato brasileiro (SWE, nov/2025, Taro) relatou entrevista de system design conduzida só por IA, com permissões de câmera, microfone e tela; sem oferta [RELATO].

**micro1 — Zara** [OFICIAL, micro1.ai/ai-interview-guide e kb.micro1.ai, sem data]
- Entrevista **ao vivo e falada**, perguntas abertas respondidas em voz alta; **20 a 40 min** dependendo do número de skills (~7 min por skill). Páginas de prep citam ~18–20 min.
- Tipos de pergunta: técnicas abertas sobre o cargo, **cenários** (como pensa, resolve e comunica), **desafio de código** (vagas técnicas), **exercício de dados humanos** (vagas de anotação).
- Gravada; **proctoring** ativado por padrão e gravação de tela em avaliações técnicas (API e política de privacidade). No desafio de código, linguagem selecionável e sem bibliotecas externas.
- Resultado em tempo real indicando se atingiu o critério de certificação; pode pedir feedback se não atingir. Zara **não decide sozinha**: recrutadores humanos revisam e há rodadas humanas depois.
- Recomendação oficial: escolher **uma** skill central para ser avaliado e usar a ferramenta "Interview Prep" para simular.
- Zara foi construída sobre GPT-4o (artigo de pesquisadores da micro1, arXiv 2507.02869, jul/2025).

**Alignerr (Labelbox) — Zara** [OFICIAL: Labelbox; detalhes TERCEIRO/RELATO]
- Labelbox descreve Zara como entrevistadora IA que conduz conversa em tempo real adaptada às habilidades do candidato, em vários idiomas.
- Guia de terceiro: ~15 min no modo generalista (comportamental) e versão mais longa de domínio para vagas técnicas; webcam também usada para comparar com o documento de identidade.
- Reddit (dez/2024): conversa tranquila, por webcam, sobre currículo e experiência.

**Turing** — vagas citam "AI-powered interview" no processo de vetting [TERCEIRO]. **Invisible/Meridial** — Glassdoor relata vídeo com perguntas pré-definidas e pontuação por IA [RELATO].

### 3.2 Avaliações escritas / de rubric
- **Outlier:** "skill screenings" no onboarding [OFICIAL]. Guias de terceiros descrevem: comparar duas respostas de IA, identificar problemas factuais, notar requisitos ausentes, explicar a decisão com clareza [TERCEIRO].
- **DataAnnotation:** Starter (~1h, guias dizem planejar 90 min–3h) + assessment de área; tipos de tarefa citados: gramática, compreensão de leitura, aplicação de rubric, comparação de saídas de modelo, criação de "golden response" [TERCEIRO]. Sem retake [atribuído ao FAQ oficial].
- **TELUS Digital:** teste de idioma + **exame de qualificação open-book** com guidelines entregues antes; prazo para fazer, mas o candidato escolhe quando [OFICIAL vagas].
- **Mercor assessments:** maioria sem limite de tempo; os cronometrados mostram tela inicial e o timer não pausa; alguns têm checagem de câmera/microfone/tela; recomenda-se não recarregar a aba e guardar backup de respostas longas [OFICIAL].
- **Invisible/Meridial:** testes de lógica e escrita; Glassdoor cita compreensão de leitura, escrita e escuta; teste psicométrico; tarefa tipo SFT [RELATO].
- **Mindrift:** testes de qualificação por trilha; inglês e lógica para tutores [TERCEIRO].

### 3.3 Testes de código
- **Outlier:** página de front-end lista "Pass a skill assessment" como etapa; Glassdoor relata checagem inicial de código com câmera ligada + vídeo gravado explicando o raciocínio [OFICIAL + RELATO].
- **micro1:** desafio de código dentro da entrevista com Zara; em algumas vagas, avaliação técnica extra se o GitHub não comprovar a expertise [OFICIAL vaga].
- **DataAnnotation:** existe assessment de coding, mas **não foi encontrada** descrição pública confiável do critério [INCERTO].
- **Atenção:** relatos de "HackerRank com algoritmos/SQL", "take-home de 72h" e "rodada final de 5h" referem-se ao processo de **contratação de funcionários da própria Mercor**, não ao marketplace de contractors [TERCEIRO]. Não confundir.

### 3.4 Exemplos públicos de tipos de questão (documentados, não inventados)
- micro1 (página de prep para anotadores) [OFICIAL]: como lidar com rótulos ambíguos — resposta-modelo enfatiza seguir regras de decisão claras para casos incertos; destaca que os erros mais danosos são os **sistemáticos**, não os aleatórios.
- micro1 publica páginas de perguntas de entrevista por cargo, incluindo **Front-End Developer** (micro1.ai/interview-prep/front-end-developer-interview-questions) [OFICIAL].
- Outlier (vaga front-end): "Reviewing and evaluating code generated by AI in JavaScript, React, and other modern front-end frameworks" [OFICIAL].
- Formato de rating lado a lado (A vs. B + justificativa) é descrito por guias e pelo subreddit r/outlier_ai ("create prompts, rate responses, and rate justifications") [TERCEIRO/RELATO]. **Não foi encontrado** exemplo oficial publicado de questão de assessment da Outlier ou da DataAnnotation.

### 3.5 Motivos de reprovação relatados
| Motivo | Plataforma | Fonte |
|---|---|---|
| Interpretou mal o rubric; respondeu por preferência pessoal em vez do critério | Outlier | [TERCEIRO] remoteworkunion, remotestack |
| Pressa; precisão vale mais que velocidade | Outlier, DataAnnotation | [TERCEIRO] |
| Justificativa genérica ("A é melhor porque é mais detalhada") em vez de citar o erro concreto | Outlier | [TERCEIRO] annotation.academy |
| Citar ferramentas no currículo que não sabe explicar a fundo — a IA "ouve uma palavra-chave e cava" | micro1 | [RELATO] LinkedIn (candidato que reprovou 5 vezes) |
| Instruções erradas no desafio de código; perguntas repetidas; IA não entendeu a fala; reprovação sem motivo | micro1 | [RELATO] Glassdoor, prachub |
| Rejeição mesmo após passar no teste de código; pouco feedback | Mercor | [RELATO] r/mercor_ai |
| Respostas não concisas / falta de preparo para perguntas sobre o currículo | Mercor | [RELATO] GeeksforGeeks (2024) |
| Usar VPN ou estar fora dos países aprovados → assessment não aparece | DataAnnotation | [RELATO] Reddit FAQ (2024) |
| Nenhum resultado comunicado; após 3–4 semanas sem resposta, considerar reprovado | DataAnnotation | [TERCEIRO] |
| Sem resposta após etapa de vídeo | Invisible | [RELATO] Glassdoor |

Sotaque: **nenhuma fonte encontrada** associa sotaque a reprovação; uma avaliação no Trustpilot comenta positivamente o sotaque da Zara [RELATO].

---

## 4. Competências exigidas

| Competência | Evidência | Onde |
|---|---|---|
| **Inglês falado** (entrevistas com IA) | Entrevistas faladas, com câmera | Mercor, micro1, Alignerr, Turing [OFICIAL/TERCEIRO] |
| **Inglês escrito/leitura** (B2+) | "English (B2)", "fluent English (written and verbal)", currículo em inglês | TELUS, Meridial, Mindrift [vagas] |
| **Aplicação de rubric / guidelines** | Exame open-book; rubric no Starter | TELUS [OFICIAL], DataAnnotation [TERCEIRO] |
| **Comparação de respostas (A vs. B)** e justificativa específica | Guias e subreddit | Outlier, DataAnnotation [TERCEIRO] |
| **Fact-checking** / detecção de erros e requisitos faltantes | Guias | Outlier [TERCEIRO] |
| **Revisão de código gerado por IA** (JS/React/TS) | Vaga e blog oficiais | Outlier [OFICIAL] |
| **Resolver desafio de código ao vivo** | Zara | micro1 [OFICIAL] |
| **Comunicação de raciocínio** (explicar em voz alta) | Cenários na Zara; vídeo explicando raciocínio | micro1 [OFICIAL], Outlier [RELATO] |
| **Conhecimento profundo do próprio currículo** | Perguntas baseadas no CV | Mercor [OFICIAL/RELATO], micro1 [RELATO] |
| **Atenção a detalhes, raciocínio lógico, consistência** | Prep para anotadores | micro1 [OFICIAL], Invisible [RELATO] |
| **Escrita de qualidade** ("golden response", SFT) | Guias e Glassdoor | DataAnnotation [TERCEIRO], Invisible [RELATO] |
| **Português nativo** (vantagem competitiva) | Vagas pt-BR | Outlier, Mercor, Turing, Meridial, Appen, TELUS [vagas] |

---

## 5. Implicações para o plano de estudos

1. **Prioridade 1 — inglês falado técnico.** A primeira barreira em Mercor/micro1/Alignerr é uma conversa de 15–40 min em inglês. Treinar: apresentar o próprio currículo em 60–90 s; explicar 2–3 projetos React/TS com decisões, trade-offs e números; responder "por quê?" encadeado (a IA aprofunda em palavras-chave).
2. **Currículo honesto e defensável.** Remover do CV tecnologias que não sabe explicar com profundidade (relato micro1). Preparar para cada item: o que fez, como, problema enfrentado, resultado.
3. **Escolher uma skill central** (ex.: "Front-End / React / TypeScript") ao fazer a Zara, como a própria micro1 recomenda; menos skills = entrevista mais curta e focada.
4. **Treinar o formato "pensar em voz alta" com código.** Desafio de código ao vivo sem bibliotecas externas (micro1) e vídeo explicando raciocínio (Outlier, relato). Praticar exercícios de JS/TS narrando a solução em inglês.
5. **Treinar avaliação de respostas de LLM (A vs. B).** Exercícios: dado um prompt e duas respostas (incluindo código React/TS), (a) checar se rodam/estão corretas, (b) listar requisitos não atendidos, (c) verificar fatos, (d) escrever justificativa específica citando a linha/erro, (e) dar nota em escala seguindo um rubric dado — nunca pela preferência pessoal.
6. **Leitura de guidelines longas em inglês** (estilo exame open-book da TELUS): praticar com documentos de 10–20 páginas e questões de aplicação.
7. **Logística da entrevista com IA:** câmera, iluminação, microfone, rosto enquadrado, conexão estável, tela cheia para compartilhamento; não recarregar a aba; lembrar que a Mercor permite só 3 tentativas no total — não "queimar" tentativas sem preparo.
8. **Alvos realistas por elegibilidade:** começar por Mercor (Brasil oficialmente suportado), Outlier (vagas pt-BR e front-end), micro1, Turing e Meridial; tratar DataAnnotation, Prolific, Handshake e Remotasks como baixa probabilidade a partir do Brasil.
9. **Usar o português como diferencial** (vagas bilíngues pt-BR), mas sabendo que instruções e entrevistas continuam em inglês.
10. **Expectativas:** relatos frequentes de rejeição sem feedback, demora (semanas) e oferta de trabalho irregular após aprovação — o plano deve prever aplicar em várias plataformas em paralelo.

---

## 6. Fontes

Acesso de todas as fontes: 17/10/2026 (via buscador). Datas indicadas quando conhecidas.

**Mercor**
- [OFICIAL] AI Interview (help): https://talent.docs.mercor.com/support/ai-interview — sem data
- [OFICIAL] Prepare for AI interview: https://talent.docs.mercor.com/how-to/prepare-for-ai-interview — sem data
- [OFICIAL] Assessments: https://talent.docs.mercor.com/how-to/assessments — sem data
- [OFICIAL] Glossary: https://talent.docs.mercor.com/support/glossary — sem data
- [OFICIAL] Work Trials: https://talent.docs.mercor.com/how-to/work-trial — sem data
- [OFICIAL] Supported countries: https://www.mercor.com/supported-countries/ e https://talent.docs.mercor.com/policies/supported-countries — sem data
- [OFICIAL] Vaga Bilingual Writer – Portuguese (Brazil): https://work.mercor.com/jobs/list_AAABoGrsxlOwlscUlUdGdJmZ
- [OFICIAL] Vaga Bilingual Portuguese Generalist Evaluator Expert: https://work.mercor.com/jobs/list_AAABnFoF-D7KIiKNteFIlbgL/bilingual-portuguese-generalist-evaluator-expert
- [OFICIAL] Vagas Bilingual Portuguese Medical/Legal/Marketing Expert: https://work.mercor.com/jobs/list_AAABmTXCx5jDfrZhjDNHJIw4 , https://work.mercor.com/jobs/list_AAABmTYwLFhGj0NhYV1Gjqep/bilingual-portuguese-legal-expert , https://work.mercor.com/jobs/list_AAABmTZEDL9nw9m6PvNKr4bS/bilingual-portuguese-marketing-expert
- [OFICIAL] Cross-Border Financial Services Expert (Brazil ↔ USA): https://work.mercor.com/jobs/list_AAABn19w_cF2vrrtt1pJcp1j/cross-border-financial-services-expert-brazil-usa
- [RELATO] Taro – SWE Brazil, nov/2025, sem oferta: https://www.jointaro.com/interviews/companies/mercor/experiences/software-engineer-brazil-november-1-2025-no-offer-negative-a65033d2/
- [RELATO] Glassdoor (FR): https://fr.glassdoor.ca/Entretien/Mercor-Entretien-E9031572-RVW100314407.htm
- [RELATO] r/mercor_ai (mirror): https://r.datuan.dev/r/mercor_ai/new
- [RELATO] GeeksforGeeks – Mercor AI interview experience (2024): https://geeksforgeeks.org/mercors-ai-interview-experience
- [RELATO] Exponent – Data Scientist: https://www.tryexponent.com/experiences/mercor-data-scientist-interview-13cdc3
- [TERCEIRO] techinterview.org (processo interno de funcionários, 2026): https://www.techinterview.org/companies/mercor-interview-guide/
- [TERCEIRO] SocialTalent (fim de take-homes no processo interno): https://www.socialtalent.com/blog/latest-news/mercor-take-home-test-whiteboard-interviews-ai
- [TERCEIRO] HR Portugal (entrevista em vídeo por IA): https://hrportugal.sapo.pt/candidatos-a-emprego-descobrem-nova-fonte-de-rendimento-com-muita-procura-e-viva-serem-substituidos/
- [TERCEIRO] Forbes Brasil, set/2025: https://forbes.com.br/carreira/2025/09/o-proximo-emprego-da-ia-recrutar-pessoas-para-treinar-maquinas/

**micro1**
- [OFICIAL] AI interview guide: https://www.micro1.ai/ai-interview-guide
- [OFICIAL] KB – AI interviewer: https://kb.micro1.ai/kb/use-cases/ai-interviewer
- [OFICIAL] Interview questions: https://www.micro1.ai/interview-questions
- [OFICIAL] Prep – data annotation: https://www.micro1.ai/interview-prep/data-annotation
- [OFICIAL] Prep – Front-End Developer: https://www.micro1.ai/interview-prep/front-end-developer-interview-questions
- [OFICIAL] API – create interview (proctoring, coding): https://ai-recruiter.micro1.ai/api-reference/interview/create-a-new-interview
- [OFICIAL] Privacy notice candidates: https://www.micro1.ai/legal/privacy-notice-candidates
- [OFICIAL] Vaga Software Engineer (Open Source): https://jobs.micro1.ai/post/f29dc369-f46f-443e-986b-7120eebe9225
- [OFICIAL] Pesquisa "Better Together": https://www.micro1.ai/research/quantifying-the-benefits-of-ai-assisted-recruitment
- [OFICIAL/acadêmico] arXiv 2507.02869 (jul/2025): https://arxiv.org/html/2507.02869v1
- [TERCEIRO] SF Standard, 31/03/2025: https://sfstandard.com/2025/03/31/zara-ai-recruiter-job-interviews
- [RELATO] Glassdoor: https://www.glassdoor.com.ar/Entrevista/Micro1-Entrevista-E7558526-RVW95001301.htm , https://fr.glassdoor.ca/Entretien/Micro1-Entretien-E7558526-RVW96175733.htm (mar/2025), https://www.glassdoor.es/Entrevista/Micro1-Entrevista-E7558526-RVW96007279.htm (mar/2025)
- [RELATO] PracHub – instabilidade do assessment: https://prachub.com/interview-experiences/micro1-software-engineer-interview-ai-assessment-instability-f018cacf4e
- [RELATO] LinkedIn (reprovou 5x): https://ke.linkedin.com/in/kiplimo-stephen-4527b141
- [RELATO] Trustpilot: https://nl-be.trustpilot.com/review/micro1.ai?page=7
- [TERCEIRO] Remotar (vaga, 04/11/2025): https://remotar.com.br/job/110749/micro1/marketing-and-communication

**Outlier / Remotasks (Scale AI)**
- [OFICIAL] Outlier pt-BR: https://outlier.ai/languages/pt-br
- [OFICIAL] FAQ: https://outlier.ai/faq
- [OFICIAL] About: https://outlier.ai/about-us
- [OFICIAL] Blog front-end code expert (2025): https://outlier.ai/blog/working-as-a-front-end-code-expert
- [OFICIAL] Front-end coding: https://outlier.ai/coding/inf/front-end
- [OFICIAL] Experto en Código – LATAM: https://app.outlier.ai/en/expert/opportunities/4477549005
- [OFICIAL] Vagas Greenhouse Brasil: https://job-boards.greenhouse.io/outlier/jobs/4506476005 , https://job-boards.greenhouse.io/outlier/jobs/4505013005
- [TERCEIRO] Vagas pt-BR reproduzidas: https://remowork.life/jobs/6a43f79741b9af7acf0b901a/portuguese-brazil-freelance-writer , https://remowork.life/jobs/6a7a6d4b413a2a759fa569b0/voice-conversation-evaluator-portuguese
- [RELATO] Glassdoor: https://www.glassdoor.com/Interview/Outlier-AI-Interview-E2858115-RVW99455078.htm
- [TERCEIRO] remoteworkunion: https://www.remoteworkunion.com/blog/outlier-ai-assessment-failed-next-test
- [TERCEIRO] remotestack (2026): https://remotestack.in/blog/how-to-pass-outlier-ai-assessment-2026
- [TERCEIRO] annotation.academy (rubrics): https://annotation.academy/blog/ai-evaluation-rubrics-explained
- [TERCEIRO] Techpoint Africa: https://techpoint.africa/guide/outlier-ai-review/
- [TERCEIRO] VISU – Remotasks é confiável (ago/2026): https://visu.network/br/artigos/remotasks-e-confiavel/
- [TERCEIRO/jornalismo] Rest of World (2024): https://restofworld.org/2024/scale-ai-remotasks-banned-workers/

**DataAnnotation.tech**
- [RELATO] FAQ comunitário r/DataAnnotationTech (fev/2024): https://reddit.fabiomanganiello.com/r/DataAnnotationTech/comments/1agg5is/dataannotation_faq_welcome_thread_part_2_read/kohx87o
- [RELATO] Subreddit (brasileiro sem assessment): https://red.127.pp.ua/r/DataAnnotationTech/hot
- [TERCEIRO] Vagas sindicadas com Brasil: https://en.devjobs.de/job/21dcd9fef220b6bfd0ff9a274dd21a00
- [TERCEIRO] Review 2026: https://www.aitrainingjobsfinder.com/blog/dataannotation-review-2026
- [TERCEIRO] aitrainer.work (legit review e assessment): https://aitrainer.work/guides/is-dataannotation-legit-review , https://aitrainer.work/guides/dataannotation-assessment-what-to-expect
- [TERCEIRO] annotation.academy: https://annotation.academy/blog/what-is-data-annotation-tech-assessment-like
- [TERCEIRO] VISU (pt): https://visu.network/br/artigos/dataannotation-vale-a-pena/ ; (es): https://visu.network/es/articulos/dataannotation-opiniones/

**Alignerr / Labelbox**
- [OFICIAL] Alignerr Connect: https://labelbox.com/services/alignerr-connect/
- [OFICIAL] Blog jan releases: https://labelbox.com/blog/labelbox-january-releases-for-coding-audio-alignerr/
- [OFICIAL] Docs: https://docs.labelbox.com/docs/alignerr ; Help: https://intercom.help/alignerr/en/articles/9554816-what-is-labelbox
- [RELATO] Reddit "AI interview with Zara" (dez/2024): https://redlib.hbubli.cc/r/alignerr/comments/1hbjc2d/ai_interview_with_zara
- [TERCEIRO] aitrainer.work guide: https://aitrainer.work/guides/alignerr-ai-interview-guide
- [TERCEIRO] remowork.life: https://remowork.life/companies/alignerr
- [TERCEIRO] aigigjobs: https://www.aigigjobs.com/platforms/alignerr

**Turing**
- [OFICIAL] work.turing.com: https://work.turing.com/r/A0XcWUKI63
- [OFICIAL] Greenhouse: https://job-boards.greenhouse.io/turingportal/jobs/5586602004
- [TERCEIRO] Vaga voz pt-BR: https://aitrainer.work/jobs/turing/audiovoiceannotation-trainer-portuguese-brazil-language
- [TERCEIRO] Business Analyst pt-BR: https://remowork.life/jobs/6a5fe65ddc6098851d8107dd/business-analyst-portuguese-brazil
- [TERCEIRO] remowork.life Turing: https://remowork.life/companies/turing/about

**Invisible / Meridial**
- [OFICIAL] Meridial – aquisição WeCP: https://www.meridial.ai/blog/invisible-acquires-wecp
- [TERCEIRO] Vagas pt-BR: https://aitrainer.work/jobs/meridial/coding-specialist-fluent-in-portuguese-brazil-freelance-ai-trainer-project-11 , https://aitrainer.work/jobs/meridial/mathematics-specialist-fluent-in-portuguese-brazil-freelance-ai-trainer-project-9
- [TERCEIRO] aitrainer.work: https://aitrainer.work/platforms/meridial-invisible , https://aitrainer.work/guides/invisible-technologies
- [RELATO] Glassdoor: https://www.glassdoor.com.mx/Entrevista/Invisible-Technologies-Entrevista-E2342977-RVW89430110.htm , https://www2.glassdoor.com.au/Interview/Invisible-Technologies-Interview-E2342977-RVW99212865.htm , https://www.glassdoor.com.br/Entrevista/Invisible-Technologies-Entrevista-E2342977-RVW89430110.htm

**Mindrift / Toloka**
- [OFICIAL] Eligibility and Geographic Restrictions: https://mindrift.ai/legal/eligibility-and-geographic-restrictions
- [OFICIAL] How it works: https://mindrift.ai/how ; About: https://mindrift.ai/about-us ; Code projects: https://mindrift.ai/project/code
- [TERCEIRO] Vaga Ruby (Belo Horizonte): https://www.overseasjobs.com/job/details/43046937/freelance-software-developer-ruby-ai-trainer
- [TERCEIRO] remowork.life review: https://remowork.life/blog/mindrift-review-how-it-works-pay-rates-and-how-to-get-started
- [TERCEIRO] aitrainer.work (atualizado 04/10/2026): https://aitrainer.work/compare/mindrift-vs-sovrano

**Appen / CrowdGen**
- [OFICIAL] Transcription Specialist – Portuguese (Brazil): https://jobs.lever.co/appen/e2730044-212f-4d65-aa98-ebeb0e222524
- [OFICIAL] Social Media Ads Evaluator: https://jobs.lever.co/appen/5ce6c3e1-4517-4978-b64f-4e2770d7353f
- [TERCEIRO] Projeto Lupin: https://seoulstart.com/ai-training-jobs/crowdgen-09ea18b6-cf3e-400c-a94c-bf329ebbc23d

**TELUS Digital**
- [OFICIAL] Internet Rater Portuguese Speakers: https://www.careers-page.com/telus-international/job/L57W9VVR
- [OFICIAL] Online Task Contributor – Portuguese: https://www.careers-page.com/telus-international/job/QW96736W
- [OFICIAL] AI BR Writer Analyst (prazo 18/09/2025): https://jobs.telusdigital.com/pt_BR/MoroccoCareers/PipelineDetail/AI-BR-Writer-Analyst-Port-English-Home-office-Brazil/56002
- [TERCEIRO] US Rater (formato do exame): https://www.workingnomads.com/jobs/us-rater-telus-digital
- [TERCEIRO] Personalized Internet Assessor – Brazil: https://themuse.com/jobs/telusinternationalaiinc/personalized-internet-assessor-freelance-opportunity-in-brazil

**Prolific**
- [OFICIAL] Who can participate: https://participant-help.prolific.com/en/articles/445007-who-can-participate-in-studies-on-prolific
- [OFICIAL] Who are the participants: https://researcher-help.prolific.com/en/articles/445224-who-are-the-participants-on-prolific
- [OFICIAL] Participants FAQ: https://www.prolific.com/participants-frequently-asked-questions

**Handshake AI**
- [OFICIAL] Handshake AI Fellowship FAQs: https://support.joinhandshake.com/hc/en-us/articles/32264709473303-Handshake-AI-Fellowship-Overview-FAQs-for-EDU-Partners
- [OFICIAL] Introduction to the MOVE Program: https://support.joinhandshake.com/hc/en-us/articles/31620022060055-Introduction-to-the-MOVE-Program
- [TERCEIRO] aitrainer.work guide: https://aitrainer.work/guides/handshake-ai-fellowship-guide
- [TERCEIRO] UW ECE advising (25/06/2025): https://advisingblog.ece.uw.edu/2025/06/25/handshake-model-validation-expert-move-fellowship-posted-6-25/

**Outros (vagas pt-BR)**
- RWS TrainAI: https://jobs.lever.co/rws/1e5dc82a-21c4-45a6-8d33-422858292139
- Welo Data: https://domains.recooty.com/welo-data/portuguese-ai-data-annotator-brazil-we144
- InfoJobs (avaliações Outlier): https://www.infojobs.com.br/availacoes-outlier-ai__-12329345.aspx

---

### Limitações
- As páginas oficiais não puderam ser abertas diretamente (erro de DNS no ambiente); o conteúdo vem dos trechos indexados. Recomenda-se reconferir as páginas de elegibilidade (Mercor, DataAnnotation, Mindrift, Alignerr, Prolific) antes de decisões.
- Vagas mudam rapidamente; várias listadas podem estar encerradas.
- Agregadores (aitrainer.work, remowork.life etc.) reproduzem vagas mas não são fonte primária.
