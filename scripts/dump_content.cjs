// Prints a compact listing of words and grammar points for the given lessons,
// used when rewriting example sentences and explanations.
//   node scripts/dump_content.cjs 1 10
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
const lessons = loadTsObject("data/staticLessons.ts", "STATIC_LESSONS");
const grammar = loadTsObject("data/staticGrammar.ts", "STATIC_GRAMMAR");
const from = Number(process.argv[2] || 1), to = Number(process.argv[3] || from);
for (let n = from; n <= to; n++) {
  console.log(`## L${n} words`);
  for (const w of lessons[n] || []) console.log(`${w.id}|${w.kanji}|${w.kana}|${w.meaning}|${w.category}${w.grammarType ? "/" + w.grammarType : ""}`);
  console.log(`## L${n} grammar`);
  for (const g of grammar[n] || []) console.log(`${g.id}|${g.title}|${g.pattern}|${(g.meaning || "").slice(0, 60)}`);
}
