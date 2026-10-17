import type { Level } from "./types";

// Part A: technical quiz in Portuguese, so LLM knowledge is measured apart from English.
export interface QuizItem {
  q: string;
  options: string[];
  correct: number;
  topic: string;
}

export const TECH_QUIZ: QuizItem[] = [
  { topic: "Fundamentos", q: "O que um LLM faz, na essência, ao gerar texto?", options: ["Busca a resposta pronta em um banco de dados", "Prevê o próximo token com base no contexto", "Executa regras escritas por programadores", "Copia trechos da internet em tempo real"], correct: 1 },
  { topic: "Tokens", q: "Um token é…", options: ["Sempre uma palavra inteira", "Uma senha de acesso à API", "Um pedaço de texto (palavra, parte de palavra ou símbolo)", "Uma frase completa"], correct: 2 },
  { topic: "Context window", q: "A context window define…", options: ["Quantos tokens o modelo considera de uma vez (entrada + saída)", "O tamanho da tela do chat", "Quantos usuários usam o modelo ao mesmo tempo", "A velocidade de resposta"], correct: 0 },
  { topic: "Parâmetros", q: "Aumentar a temperature normalmente deixa as respostas…", options: ["Mais curtas", "Mais determinísticas e repetitivas", "Mais variadas e menos previsíveis", "Mais corretas"], correct: 2 },
  { topic: "Treinamento", q: "Qual é a ordem típica do treinamento de um assistente como o ChatGPT ou o Claude?", options: ["RLHF → pretraining → SFT", "Pretraining → SFT → RLHF (ou método de preferência)", "SFT → pretraining → inference", "Inference → fine-tuning → pretraining"], correct: 1 },
  { topic: "RLHF", q: "No RLHF, o que os humanos normalmente fornecem?", options: ["Código-fonte do modelo", "Comparações/rankings entre respostas", "Novos servidores", "Traduções do dataset"], correct: 1 },
  { topic: "Alucinação", q: "Uma hallucination é quando o modelo…", options: ["Recusa responder", "Responde devagar", "Gera informação falsa apresentada como verdadeira", "Repete a pergunta"], correct: 2 },
  { topic: "Avaliação", q: "Um prompt pede \"responda em até 50 palavras\". A resposta A tem 120 palavras e está correta; a B tem 45 e está correta. Qual critério diferencia as duas?", options: ["Safety", "Instruction following", "Truthfulness", "Nenhum, são iguais"], correct: 1 },
  { topic: "Avaliação", q: "Em pairwise comparison, o avaliador…", options: ["Dá nota a uma resposta isolada", "Compara duas respostas e escolhe/justifica a melhor", "Reescreve o prompt", "Treina o modelo diretamente"], correct: 1 },
  { topic: "Anotação", q: "As diretrizes não cobrem um caso ambíguo. A melhor atitude é…", options: ["Escolher aleatoriamente", "Pular sem avisar", "Aplicar o espírito da guideline, documentar o raciocínio e escalar se necessário", "Inventar uma regra nova e aplicar sempre"], correct: 2 },
  { topic: "Código", q: "Qual é a complexidade de tempo de dois loops aninhados sobre o mesmo array de tamanho n?", options: ["O(n)", "O(log n)", "O(n²)", "O(1)"], correct: 2 },
  { topic: "Segurança", q: "Usar element.innerHTML = userInput em uma página é arriscado porque…", options: ["É lento", "Pode permitir XSS (execução de script injetado)", "Não funciona no Chrome", "Apaga o DOM"], correct: 1 },
];

// Part B: real listening. Sentences are played as audio (text hidden). Rates rise.
export interface ListenDiagItem {
  en: string;
  rate: number;
  options: string[];
  correct: number;
}

export const LISTEN_DIAG: ListenDiagItem[] = [
  { rate: 0.8, en: "Tell me about yourself.", options: ["Fale sobre você.", "Conte-me sobre seu último emprego.", "Você pode se apresentar depois?"], correct: 0 },
  { rate: 0.85, en: "What is a large language model?", options: ["Qual é o maior modelo de linguagem?", "O que é um grande modelo de linguagem?", "Quanto custa um modelo de linguagem?"], correct: 1 },
  { rate: 0.95, en: "Which response follows the instructions better, and why?", options: ["Qual resposta é mais longa?", "Por que a resposta tem instruções?", "Qual resposta segue melhor as instruções, e por quê?"], correct: 2 },
  { rate: 1.0, en: "How would you handle a task when the guidelines are unclear?", options: ["Como você lidaria com uma tarefa quando as diretrizes não estão claras?", "Por que as diretrizes são importantes?", "Você já escreveu diretrizes para uma equipe?"], correct: 0 },
  { rate: 1.05, en: "Can you walk me through how you'd check this code for edge cases?", options: ["Você pode reescrever esse código mais rápido?", "Você pode me explicar passo a passo como verificaria casos extremos neste código?", "Você pode andar comigo até a sala de código?"], correct: 1 },
  { rate: 1.1, en: "If the model sounds confident but cites a source that doesn't exist, what would you flag?", options: ["Se o modelo não tiver confiança, qual fonte você usaria?", "Qual fonte o modelo deveria citar primeiro?", "Se o modelo parece confiante mas cita uma fonte inexistente, o que você apontaria?"], correct: 2 },
];

// Part C: repeat after me (intelligibility to a speech recognizer).
export const SHADOW_DIAG = [
  "I am a software developer from Brazil.",
  "I work with React, Next.js and TypeScript.",
  "Response A is more accurate and follows the instructions.",
  "The model made up a fact, so this is a hallucination.",
];

// Part D: spoken answers. One beginner question per module, picked from the bank at runtime.
export const ORAL_DIAG_MODULES = [6, 1, 2, 3, 5];

export function techLevelLabel(pct: number): string {
  if (pct >= 85) return "Avançado";
  if (pct >= 65) return "Intermediário";
  if (pct >= 40) return "Básico";
  return "Iniciante";
}

export function listenLevelLabel(pct: number): string {
  if (pct >= 85) return "Boa (entende fala natural)";
  if (pct >= 60) return "Intermediária (entende fala moderada)";
  if (pct >= 35) return "Básica (entende fala lenta)";
  return "Inicial (precisa de fala muito lenta)";
}

export function startLevelFor(listening: number, oral: number): Level {
  const m = Math.min(listening, oral + 15);
  if (m >= 80) return 3;
  if (m >= 55) return 2;
  return 1;
}
