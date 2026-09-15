// Regenerates miniprogram/utils/lessonData.js from the three TypeScript data
// files so the WeChat mini program ships the same lessons as the web app.
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
const content = loadTsObject("data/staticLessonContent.ts", "STATIC_LESSON_CONTENT");

const out = `// Generated from data/staticLessons.ts, data/staticGrammar.ts, and data/staticLessonContent.ts
// by scripts/build_miniprogram_data.cjs. Do not edit by hand.
// Keep this file local to the WeChat Mini Program; it contains no API calls.

const STATIC_LESSONS = ${JSON.stringify(lessons, null, 2)};

const STATIC_GRAMMAR = ${JSON.stringify(grammar, null, 2)};

const STATIC_LESSON_CONTENT = ${JSON.stringify(content, null, 2)};

module.exports = {
  STATIC_LESSONS,
  STATIC_GRAMMAR,
  STATIC_LESSON_CONTENT,
};
`;

const target = path.join(root, "miniprogram", "utils", "lessonData.js");
fs.writeFileSync(target, out);
const lessonIds = Object.keys(lessons).map(Number);
console.log(`Wrote ${path.relative(root, target)}: lessons ${Math.min(...lessonIds)}-${Math.max(...lessonIds)}, ${(out.length / 1024 / 1024).toFixed(2)} MB`);
