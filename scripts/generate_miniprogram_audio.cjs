const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
const { spawn } = require("child_process");

const root = path.resolve(__dirname, "..");
const audioDir = path.join(root, "miniprogram", "assets", "audio");
const speechFile = path.join(root, "miniprogram", "utils", "speech.js");
const tempDir = path.join(root, "node_modules", ".cache", "miniprogram-audio");

function assertHasAudioData(file, text) {
  const stats = fs.statSync(file);
  if (stats.size <= 4096) {
    throw new Error(`System voice produced an empty audio file for "${text}". Run this script outside the sandbox.`);
  }
}

function run(command, args, timeoutMs = 45000) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, { stdio: ["ignore", "pipe", "pipe"] });
    let stdout = "";
    let stderr = "";
    const timer = setTimeout(() => {
      child.kill("SIGKILL");
      reject(new Error(`${command} timed out after ${timeoutMs}ms`));
    }, timeoutMs);
    child.stdout.on("data", (chunk) => {
      stdout += chunk;
    });
    child.stderr.on("data", (chunk) => {
      stderr += chunk;
    });
    child.on("error", reject);
    child.on("close", (code) => {
      clearTimeout(timer);
      if (code === 0) {
        resolve({ stdout, stderr });
      } else {
        reject(new Error(`${command} failed with code ${code}: ${stderr || stdout}`));
      }
    });
  });
}

async function withRetries(fn, label, attempts = 3) {
  let lastError;
  for (let attempt = 1; attempt <= attempts; attempt++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error;
      if (attempt < attempts) {
        console.warn(`${label} failed on attempt ${attempt}; retrying...`);
      }
    }
  }
  throw lastError;
}

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

const lessons = loadTsObject("data/staticLessons.ts", "STATIC_LESSONS");
const grammar = loadTsObject("data/staticGrammar.ts", "STATIC_GRAMMAR");
const content = loadTsObject("data/staticLessonContent.ts", "STATIC_LESSON_CONTENT");
const texts = new Set();

for (const words of Object.values(lessons)) {
  for (const word of words) {
    addText(texts, word.kanji);
    for (const sentence of word.sentences || []) addText(texts, sentence.ja);
  }
}

for (const points of Object.values(grammar)) {
  for (const point of points) {
    for (const example of point.examples || []) addText(texts, example.ja);
  }
}

for (const lessonContent of Object.values(content)) {
  for (const example of lessonContent.examples || []) addText(texts, example.ja);
  for (const text of lessonContent.texts || []) {
    for (const line of text.lines || []) addText(texts, line.ja);
  }
}

fs.mkdirSync(audioDir, { recursive: true });
fs.mkdirSync(tempDir, { recursive: true });

const entries = {};
const sortedTexts = Array.from(texts).sort((a, b) => a.localeCompare(b, "ja"));
const tasks = [];

for (const text of sortedTexts) {
  const hash = crypto.createHash("sha1").update(text).digest("hex").slice(0, 16);
  const filename = `a_${hash}.m4a`;
  const outputPath = path.join(audioDir, filename);
  entries[text] = `/assets/audio/${filename}`;

  if (!fs.existsSync(outputPath)) {
    const tempWav = path.join(tempDir, `a_${hash}.wav`);
    tasks.push(async () => {
      try {
        await withRetries(() => run("say", [
            "-v",
            "Kyoko",
            "-r",
            "165",
            "-o",
            tempWav,
            "--data-format=LEI16@22050",
            text
          ]),
          `say "${text}"`
        );

        assertHasAudioData(tempWav, text);

        await withRetries(() => run("ffmpeg", [
            "-y",
            "-loglevel",
            "error",
            "-i",
            tempWav,
            "-c:a",
            "aac",
            "-b:a",
            "24k",
            outputPath
          ], 20000),
          `ffmpeg "${text}"`
        );
      } catch (error) {
        throw new Error(`Audio generation failed for "${text}": ${error.message}`);
      } finally {
        fs.rmSync(tempWav, { force: true });
      }
    });
  }
}

const speechSource = `const LOCAL_AUDIO = ${JSON.stringify(entries, null, 2)};

function playPronunciation(text, audioKey) {
  const src = LOCAL_AUDIO[audioKey] || LOCAL_AUDIO[text];

  if (!src) {
    wx.showToast({
      title: "没有找到本地音频",
      icon: "none"
    });
    return;
  }

  const sources = src.startsWith("/") ? [src, src.slice(1)] : [src, \`/\${src}\`];
  let index = 0;

  const playSource = () => {
    const audio = wx.createInnerAudioContext();
    audio.src = sources[index];
    audio.obeyMuteSwitch = false;
    audio.onError((error) => {
      console.warn("Audio playback failed", sources[index], error);
      audio.destroy();
      index += 1;
      if (index < sources.length) {
        playSource();
      } else {
        wx.showToast({
          title: "音频播放失败",
          icon: "none"
        });
      }
    });
    audio.onEnded(() => audio.destroy());
    audio.play();
  };

  playSource();
}

module.exports = {
  playPronunciation
};
`;

fs.writeFileSync(speechFile, speechSource);

async function runQueue(queue, concurrency) {
  let nextIndex = 0;
  let done = 0;
  const workers = Array.from({ length: concurrency }, async () => {
    while (nextIndex < queue.length) {
      const index = nextIndex++;
      await queue[index]();
      done++;
      if (done % 50 === 0 || done === queue.length) {
        console.log(`Audio generated: ${done}/${queue.length}`);
      }
    }
  });
  await Promise.all(workers);
}

runQueue(tasks, Number(process.env.AUDIO_JOBS || 6))
  .then(() => {
    fs.writeFileSync(speechFile, speechSource);
    console.log(`Generated ${sortedTexts.length} local audio mappings. ${tasks.length} files created.`);
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
