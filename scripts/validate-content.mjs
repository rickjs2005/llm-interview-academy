// Checks every content file against content/SCHEMA.md. Run: npm run validate
import { readFileSync } from "node:fs";
const errors = [];
let nq = 0, nl = 0, nx = 0;
for (let m = 1; m <= 6; m++) {
  const d = JSON.parse(readFileSync(new URL(`../content/m${m}.json`, import.meta.url)));
  const qids = new Set(d.questions.map((q) => q.id));
  for (const l of d.lessons) {
    nl++;
    if (l.listen?.length !== 2) errors.push(`${l.id}: listen must have 2 items`);
    for (const it of l.listen ?? []) if (!(it.correct >= 0 && it.correct < it.options.length)) errors.push(`${l.id}: bad listen.correct`);
    for (const id of l.questionIds) if (!qids.has(id)) errors.push(`${l.id}: missing question ${id}`);
    if (!l.shadow?.length) errors.push(`${l.id}: no shadow sentences`);
  }
  for (const q of [...d.questions, ...(d.exercises ?? [])]) {
    q.question ? nx++ : nq++;
    if (q.keys.length !== q.keysPt.length) errors.push(`${q.id}: keys/keysPt length mismatch`);
    for (const g of q.keys) for (const k of g) if (k !== k.toLowerCase() || !k.trim()) errors.push(`${q.id}: key "${k}" must be lowercase and non-empty`);
    if (q.q && !(q.a1 && q.a2 && q.a3)) errors.push(`${q.id}: missing model answers`);
    if (q.question && !q.modelAnswer) errors.push(`${q.id}: missing modelAnswer`);
  }
}
const g = JSON.parse(readFileSync(new URL("../content/glossary.json", import.meta.url)));
console.log(`${nl} lessons, ${nq} questions, ${nx} exercises, ${g.length} glossary terms`);
if (errors.length) { console.error(errors.join("\n")); process.exit(1); }
console.log("content OK");
