const crypto = require("crypto");
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const miniRoot = path.join(root, "miniprogram");
const sourceAudioDir = path.join(miniRoot, "assets", "audio");

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

function hashText(text) {
  return crypto.createHash("sha1").update(text).digest("hex").slice(0, 16);
}

function lessonTexts(lessonId, lessons, grammar, content) {
  const texts = new Set();
  for (const word of lessons[lessonId] || []) {
    addText(texts, word.kanji);
    for (const sentence of word.sentences || []) addText(texts, sentence.ja);
  }
  for (const point of grammar[lessonId] || []) {
    for (const example of point.examples || []) addText(texts, example.ja);
  }
  const lessonContent = content[lessonId] || { examples: [], texts: [] };
  for (const example of lessonContent.examples || []) addText(texts, example.ja);
  for (const text of lessonContent.texts || []) {
    for (const line of text.lines || []) addText(texts, line.ja);
  }
  return Array.from(texts).sort((a, b) => a.localeCompare(b, "ja"));
}

function copyFile(from, to) {
  fs.mkdirSync(path.dirname(to), { recursive: true });
  fs.copyFileSync(from, to);
}

const lessons = loadTsObject("data/staticLessons.ts", "STATIC_LESSONS");
const grammar = loadTsObject("data/staticGrammar.ts", "STATIC_GRAMMAR");
const content = loadTsObject("data/staticLessonContent.ts", "STATIC_LESSON_CONTENT");

const lessonPageDir = path.join(miniRoot, "pages", "lesson");
const baseWxml = path.join(lessonPageDir, "lesson.wxml");
const baseWxss = path.join(lessonPageDir, "lesson.wxss");
const baseJson = path.join(lessonPageDir, "lesson.json");
const baseJs = fs.readFileSync(path.join(lessonPageDir, "lesson.js"), "utf8")
  .replace('require("../../utils/lessonData")', 'require("../../../utils/lessonData")')
  .replace('const { playPronunciation } = require("../../utils/speech");', 'const { playPronunciation, getAudioPath } = require("../../utils/speech");')
  .replace('require("../../utils/collection")', 'require("../../../utils/collection")')
  .replace(
    "sourceMeaning: word.meaning\n    });",
    "sourceMeaning: word.meaning,\n      sourceLessonId: this.data.lessonId,\n      audioPath: getAudioPath(sentence.ja)\n    });"
  );

const subPackages = [];

for (let lessonId = 1; lessonId <= 30; lessonId++) {
  const lessonCode = String(lessonId).padStart(2, "0");
  const packageRoot = `pkg_l${lessonCode}`;
  const packageDir = path.join(miniRoot, packageRoot);
  fs.rmSync(packageDir, { recursive: true, force: true });

  copyFile(baseWxml, path.join(packageDir, "pages", "lesson", "lesson.wxml"));
  copyFile(baseWxss, path.join(packageDir, "pages", "lesson", "lesson.wxss"));
  copyFile(baseJson, path.join(packageDir, "pages", "lesson", "lesson.json"));
  fs.writeFileSync(path.join(packageDir, "pages", "lesson", "lesson.js"), baseJs);

  const audioMap = {};
  for (const text of lessonTexts(lessonId, lessons, grammar, content)) {
    const filename = `a_${hashText(text)}.m4a`;
    const source = path.join(sourceAudioDir, filename);
    if (!fs.existsSync(source)) {
      throw new Error(`Missing audio for lesson ${lessonId}: ${text}`);
    }
    copyFile(source, path.join(packageDir, "assets", "audio", filename));
    audioMap[text] = `/${packageRoot}/assets/audio/${filename}`;
  }

  const speechSource = `const LOCAL_AUDIO = ${JSON.stringify(audioMap, null, 2)};

function getAudioPath(text) {
  return LOCAL_AUDIO[text] || "";
}

function playSource(src) {
  const sources = src.startsWith("/") ? [src, src.slice(1)] : [src, \`/\${src}\`];
  let index = 0;

  const playNext = () => {
    const audio = wx.createInnerAudioContext();
    audio.src = sources[index];
    audio.obeyMuteSwitch = false;
    audio.onError((error) => {
      console.warn("Audio playback failed", sources[index], error);
      audio.destroy();
      index += 1;
      if (index < sources.length) {
        playNext();
      } else {
        wx.showToast({ title: "音频播放失败", icon: "none" });
      }
    });
    audio.onEnded(() => audio.destroy());
    audio.play();
  };

  playNext();
}

function playPronunciation(text, audioKey, directPath) {
  const src = directPath || LOCAL_AUDIO[audioKey] || LOCAL_AUDIO[text];
  if (!src) {
    wx.showToast({ title: "没有找到本地音频", icon: "none" });
    return;
  }
  playSource(src);
}

module.exports = {
  getAudioPath,
  playPronunciation
};
`;
  fs.mkdirSync(path.join(packageDir, "utils"), { recursive: true });
  fs.writeFileSync(path.join(packageDir, "utils", "speech.js"), speechSource);

  subPackages.push({
    root: packageRoot,
    pages: ["pages/lesson/lesson"]
  });
}

const appJson = {
  pages: [
    "pages/home/home",
    "pages/collection/collection"
  ],
  subpackages: subPackages,
  window: {
    navigationBarTitleText: "みんなの日本語",
    navigationBarBackgroundColor: "#f8fafc",
    navigationBarTextStyle: "black",
    backgroundColor: "#f8fafc"
  },
  style: "v2",
  sitemapLocation: "sitemap.json"
};

fs.writeFileSync(path.join(miniRoot, "app.json"), `${JSON.stringify(appJson, null, 2)}\n`);
fs.rmSync(sourceAudioDir, { recursive: true, force: true });

console.log(`Built ${subPackages.length} lesson subpackages and removed main-package audio.`);
