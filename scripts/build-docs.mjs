// Generates docs/BANCO-DE-PERGUNTAS.md and docs/GLOSSARIO.md from content/. Run: node scripts/build-docs.mjs
import { readFileSync, writeFileSync } from "node:fs";
const read = (f) => JSON.parse(readFileSync(new URL(`../content/${f}`, import.meta.url)));
let out = `# Banco de perguntas: LLM Interview Academy\n\nTodas as perguntas são **simuladas**, escritas para treino, com base nas competências pedidas em vagas de AI training e LLM evaluation. Nenhuma foi atribuída a uma empresa específica. Para formatos de seleção documentados publicamente, veja \`content/RESEARCH.md\`.\n\nNíveis: 1 Beginner · 2 Intermediate · 3 Professional · 4 Real interview. Cada pergunta tem respostas modelo em três níveis de inglês.\n`;
let n = 0;
for (let m = 1; m <= 6; m++) {
  const d = read(`m${m}.json`);
  out += `\n## Módulo ${m}: ${d.titlePt} (${d.title})\n`;
  for (const q of d.questions) {
    n++;
    out += `\n### ${n}. ${q.q}\n*${q.qPt}* · nível ${q.level} · ${q.kind}\n\n- **Básico:** ${q.a1}\n- **Intermediário:** ${q.a2}\n- **Profissional:** ${q.a3}\n- **Dica:** ${q.tipPt}\n- **Follow-up:** ${q.followUp}\n`;
  }
  for (const x of d.exercises ?? []) {
    out += `\n### Exercício ${x.id} (${x.type}, nível ${x.level})\n**Prompt:** ${x.prompt}\n\n**Response A:**\n\n\`\`\`\n${x.responseA}\n\`\`\`\n${x.responseB ? `\n**Response B:**\n\n\`\`\`\n${x.responseB}\n\`\`\`\n` : ""}\n**Pergunta:** ${x.question}\n\n**Resposta modelo:** ${x.modelAnswer}\n\n**Por quê:** ${x.explainPt}\n`;
  }
}
writeFileSync(new URL("../docs/BANCO-DE-PERGUNTAS.md", import.meta.url), out);
const g = read("glossary.json");
writeFileSync(new URL("../docs/GLOSSARIO.md", import.meta.url), `# Glossário inglês–português (${g.length} termos)\n\n| Inglês | Pronúncia | Português | Definição | Exemplo |\n|---|---|---|---|---|\n` + g.map((t) => `| **${t.en}** | ${t.say ?? ""} | ${t.pt} | ${t.defPt} | *${t.exampleEn}* |`).join("\n") + "\n");
console.log(`${n} questions written`);
