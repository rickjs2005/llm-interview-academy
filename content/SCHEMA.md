# Content schema (LLM Interview Academy)

Learner: Brazilian web developer (React/Next.js/TS), BASIC English, preparing for spoken interviews
for remote LLM evaluation / AI training / coding evaluation work. Answers are SPOKEN and transcribed
by Chrome speech recognition (lowercase, no punctuation, numbers may appear as digits).

Each module file `content/mN.json` is ONE JSON object:
{ "module": N, "title": "...", "titlePt": "...", "lessons": [...], "questions": [...], "exercises": [...] }

## Lesson
{
  "id": "m1-l01", "module": 1, "order": 1,
  "title": "Tokens and tokenization", "titlePt": "Tokens e tokenização",
  "explainPt": "Explicação em português acessível, 2-4 parágrafos curtos separados por \n\n. Tecnicamente correta.",
  "terms": [ { "en": "token", "pt": "token: pedaço de texto que o modelo processa", "say": "TOH-ken" } ],   // 4-8 terms; "say" = simple pronunciation hint for a Brazilian speaker, optional
  "example": "A concrete real-world example (may mix PT explanation and EN text).",
  "shadow": [ "Short English sentence to repeat aloud.", "...", "..." ],   // 3-4 sentences, 6-16 words each, simple, interview-useful
  "listen": [ { "en": "An English sentence the learner will HEAR (not read).", "options": ["significado A em PT", "B", "C"], "correct": 0 } ],  // exactly 2; vary the correct index; distractors plausible
  "questionIds": ["m1-q01", "m1-q02"]   // ids of questions in this file practicing this lesson
}

## Question (spoken interview question)
{
  "id": "m1-q01", "module": 1, "lesson": "m1-l01",
  "level": 1,            // 1 Beginner (short, simple), 2 Intermediate, 3 Professional, 4 Real interview (harder, scenario, follow-ups)
  "kind": "concept",     // concept | scenario | behavioral | intro | practical
  "q": "What is a token in a language model?",
  "qPt": "O que é um token em um modelo de linguagem?",
  "keys": [ ["piece","part","chunk","unit"], ["text","word","words","subword"], ["model","process","input"] ],   // 3-5 concept groups; each group = lowercase synonyms/word stems the learner may SAY; group matched if any synonym appears as substring in transcript. Include simple words a basic speaker would use.
  "keysPt": [ "token é um pedaço/unidade", "de texto (palavra ou parte de palavra)", "que o modelo processa" ],   // same length/order as keys
  "a1": "Basic answer: 1-2 very simple sentences (A2 English).",
  "a2": "Intermediate answer: 2-3 sentences, clear.",
  "a3": "Professional answer: 3-5 sentences, precise, natural interview tone.",
  "tipPt": "Dica curta em português: o que o entrevistador quer ouvir / erro comum.",
  "followUp": "A natural follow-up question in English."
}
Answers must be technically correct, natural spoken English (contractions OK), no markdown.

## Exercise (only modules 3, 4, 5) — shown on screen, answered by voice
{
  "id": "m3-x01", "module": 3, "level": 2,
  "type": "pairwise",     // pairwise | single | code
  "prompt": "The user prompt given to the AI.",
  "responseA": "Response A text (for code type, include code with \n newlines).",
  "responseB": "Response B text (omit or empty string for single).",
  "better": "A",          // "A" | "B" | "tie" | null for single
  "question": "Which response is better and why?",   // spoken to the learner
  "keys": [[...]], "keysPt": [...],                  // same rules as questions
  "modelAnswer": "Spoken justification in simple, structured English (4-6 sentences) using evaluation vocabulary.",
  "explainPt": "Explicação em português do porquê."
}

Rules:
- Do NOT claim any question was used by a specific company. These are simulated, realistic questions.
- Technically accurate as of 2026 (RLHF, DPO, SFT, context windows, etc.).
- Valid JSON only (no comments, no trailing commas). Escape quotes and newlines properly.
