// Merges rewritten example sentences and grammar explanations into the data
// files and re-serialises them in one consistent style.
//   node scripts/apply_rewrite.cjs <dir-with-L*.json>
// Each JSON file: { "words": { "<id>": [[ja, zh], ...] },
//                   "grammar": { "<id>": { "meaning": ..., "usage": ..., "tip": ..., "examples": [[ja, zh], ...] } } }
const fs = require("fs");
const path = require("path");
const root = path.resolve(__dirname, "..");

function loadTsObject(file, name) {
  let code = fs.readFileSync(path.join(root, file), "utf8");
  code = code.replace(/^import[^\n]+\n/gm, "");
  code = code.replace(new RegExp(`export\\s+const\\s+${name}\\s*:[^=]+=`), `const ${name} =`);
  code = code.replace(/;\s*$/g, "");
  return Function(`${code}; return ${name};`)();
}
const q = (s) => "'" + String(s).replace(/\\/g, "\\\\").replace(/'/g, "\\'") + "'";

const lessons = loadTsObject("data/staticLessons.ts", "STATIC_LESSONS");
const grammar = loadTsObject("data/staticGrammar.ts", "STATIC_GRAMMAR");
const wordIndex = {}, grammarIndex = {};
for (const n of Object.keys(lessons)) for (const w of lessons[n]) wordIndex[w.id] = w;
for (const n of Object.keys(grammar)) for (const g of grammar[n]) grammarIndex[g.id] = g;

const dir = process.argv[2];
let words = 0, points = 0, missing = [];
for (const file of fs.readdirSync(dir).filter((f) => /^L\d+\.json$/.test(f)).sort()) {
  const data = JSON.parse(fs.readFileSync(path.join(dir, file), "utf8"));
  for (const [id, sentences] of Object.entries(data.words || {})) {
    if (!wordIndex[id]) { missing.push(id); continue; }
    wordIndex[id].sentences = sentences.map(([ja, zh]) => ({ ja, zh }));
    words++;
  }
  for (const [id, g] of Object.entries(data.grammar || {})) {
    if (!grammarIndex[id]) { missing.push(id); continue; }
    const target = grammarIndex[id];
    if (g.title) target.title = g.title;
    if (g.pattern) target.pattern = g.pattern;
    target.meaning = g.meaning;
    target.usage = g.usage || "";
    if (g.tip) target.tip = g.tip; else delete target.tip;
    target.examples = g.examples.map(([ja, zh]) => ({ ja, zh }));
    points++;
  }
}

function serialiseWord(w) {
  const parts = [`id: ${q(w.id)}`, `category: ${q(w.category)}`];
  if (w.grammarType) parts.push(`grammarType: ${q(w.grammarType)}`);
  parts.push(`kanji: ${q(w.kanji)}`, `kana: ${q(w.kana)}`, `romaji: ${q(w.romaji)}`, `meaning: ${q(w.meaning)}`);
  if (w.conjugations) {
    const c = w.conjugations;
    const cparts = [`dictionary: ${q(c.dictionary)}`, `masu: ${q(c.masu)}`, `te: ${q(c.te)}`];
    if (c.nai) cparts.push(`nai: ${q(c.nai)}`);
    if (c.ta) cparts.push(`ta: ${q(c.ta)}`);
    parts.push(`conjugations: { ${cparts.join(", ")} }`);
  }
  parts.push(`sentences: [${w.sentences.map((s) => `{ ja: ${q(s.ja)}, zh: ${q(s.zh)} }`).join(", ")}]`);
  return `    { ${parts.join(", ")} }`;
}
function serialiseGrammar(g) {
  let s = "    {\n";
  s += `      id: ${q(g.id)},\n      title: ${q(g.title)},\n      pattern: ${q(g.pattern)},\n      meaning: ${q(g.meaning)},\n      usage: ${q(g.usage || "")},\n`;
  if (g.tip) s += `      tip: ${q(g.tip)},\n`;
  s += "      examples: [\n" + g.examples.map((e) => `        { ja: ${q(e.ja)}, zh: ${q(e.zh)}${e.note ? `, note: ${q(e.note)}` : ""} }`).join(",\n") + "\n      ]\n    }";
  return s;
}
const ids = (o) => Object.keys(o).map(Number).sort((a, b) => a - b);
const lessonsTs = "\nimport { VocabularyItem } from '../types';\n\nexport const STATIC_LESSONS: Record<number, VocabularyItem[]> = {\n" +
  ids(lessons).map((n) => `  ${n}: [\n${lessons[n].map(serialiseWord).join(",\n")}\n  ]`).join(",\n") + "\n};\n";
const grammarTs = "import { GrammarPoint } from '../types';\n\nexport const STATIC_GRAMMAR: Record<number, GrammarPoint[]> = {\n" +
  ids(grammar).map((n) => `  ${n}: [\n${grammar[n].map(serialiseGrammar).join(",\n")}\n  ]`).join(",\n") + "\n};\n";
fs.writeFileSync(path.join(root, "data/staticLessons.ts"), lessonsTs);
fs.writeFileSync(path.join(root, "data/staticGrammar.ts"), grammarTs);
console.log(`applied: ${words} words, ${points} grammar points; unknown ids: ${missing.length ? missing.join(", ") : "none"}`);
