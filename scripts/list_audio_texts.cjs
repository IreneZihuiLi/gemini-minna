// Prints (as JSON) every unique Japanese string the apps can play:
// vocabulary headwords, vocabulary example sentences, grammar examples,
// 文型/例文 lines and dialogue lines. Used by scripts/generate_audio.py.
// Both data sets are included: data/*.ts (original sentences, used by the
// mini program) and data/textbook/*.ts (textbook sentences, used by the web
// app), because GitHub Pages serves the clips for both apps.
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

function addText(set, value) {
  if (typeof value === "string") {
    const text = value.trim();
    if (text) set.add(text);
  }
}

const content = loadTsObject("data/staticLessonContent.ts", "STATIC_LESSON_CONTENT");
const texts = new Set();
const kana = {};

for (const dir of ["data", "data/textbook"]) {
  const lessons = loadTsObject(`${dir}/staticLessons.ts`, "STATIC_LESSONS");
  const grammar = loadTsObject(`${dir}/staticGrammar.ts`, "STATIC_GRAMMAR");
  for (const words of Object.values(lessons)) {
    for (const word of words) {
      addText(texts, word.kanji);
      if (word.kanji && word.kana && !kana[word.kanji.trim()]) kana[word.kanji.trim()] = word.kana.trim();
      for (const sentence of word.sentences || []) addText(texts, sentence.ja);
    }
  }
  for (const points of Object.values(grammar)) {
    for (const point of points) {
      for (const example of point.examples || []) addText(texts, example.ja);
    }
  }
}
for (const lessonContent of Object.values(content)) {
  for (const example of lessonContent.examples || []) addText(texts, example.ja);
  for (const text of lessonContent.texts || []) {
    for (const line of text.lines || []) addText(texts, line.ja);
  }
}

if (process.argv.includes("--kana")) {
  // headword -> kana reading, so the TTS reads 空きます as すきます, 方 as かた, JL as ジェーエル
  process.stdout.write(JSON.stringify(kana));
} else {
  process.stdout.write(JSON.stringify(Array.from(texts).sort((a, b) => a.localeCompare(b, "ja"))));
}
