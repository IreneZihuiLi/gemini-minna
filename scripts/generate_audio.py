#!/usr/bin/env python3
"""Generate pronunciation audio for every Japanese text in the app with an
LLM-based TTS model (OpenAI gpt-4o-mini-tts by default, or Gemini TTS).

Output: public/audio/a_<sha1-16>.m4a (one file per unique text, same naming
scheme the mini program uses) plus miniprogram/utils/speech.js.

Usage:
  python3 scripts/generate_audio.py                                   # all missing texts, OpenAI
  python3 scripts/generate_audio.py --limit 20                        # first 20 missing texts
  python3 scripts/generate_audio.py --voice nova --out /tmp/x --text "こんにちは"
  python3 scripts/generate_audio.py --provider gemini --voice Kore
Keys are read from the environment or from .env.local
(OPENAI_API_KEY=... / GEMINI_API_KEY=...).
"""
import argparse
import concurrent.futures
import hashlib
import json
import os
import random
import re
import subprocess
import sys
import threading
import time

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DEFAULT_OUT = os.path.join(ROOT, "public", "audio")
SPEECH_FILE = os.path.join(ROOT, "miniprogram", "utils", "speech.js")
MANIFEST_NAME = "manifest.json"


def load_env_file():
    env_path = os.path.join(ROOT, ".env.local")
    if not os.path.exists(env_path):
        return
    with open(env_path, encoding="utf-8") as f:
        for line in f:
            line = line.strip()
            if not line or line.startswith("#") or "=" not in line:
                continue
            k, v = line.split("=", 1)
            k, v = k.strip(), v.strip().strip('"').strip("'")
            if k and k not in os.environ:
                os.environ[k] = v


def list_texts():
    out = subprocess.run(["node", os.path.join(ROOT, "scripts", "list_audio_texts.cjs")],
                         check=True, capture_output=True)
    return json.loads(out.stdout.decode("utf-8"))


def headword_readings():
    """headword (as displayed) -> kana reading, from data/staticLessons.ts"""
    out = subprocess.run(["node", os.path.join(ROOT, "scripts", "list_audio_texts.cjs"), "--kana"],
                         check=True, capture_output=True)
    return json.loads(out.stdout.decode("utf-8"))


def file_hash(text):
    return hashlib.sha1(text.encode("utf-8")).hexdigest()[:16]


def tts_text(text, readings=None):
    """Turn a headword / sentence as displayed into something worth reading aloud.

    Vocabulary headwords are read from their kana (so 空きます is すきます, 方 is
    かた, JL is ジェーエル); sentences are read as written.
    """
    t = text
    if readings and text.strip() in readings:
        t = readings[text.strip()]
    t = t.replace("～", "").replace("〜", "")
    t = t.replace("［", "").replace("］", "").replace("[", "").replace("]", "")
    t = re.sub(r"[（(][^）)]*[）)]", "", t)          # drop parenthesised notes
    t = t.replace("／", "、").replace("/", "、")      # alternatives: read both
    t = t.replace("→", "、")                          # 「かきます → かかれます」
    t = t.replace("×", "").replace("○", "")
    t = t.replace("……", "。").replace("…", "。")      # pause between Q and A
    t = re.sub(r"[「」『』]", "", t)
    t = re.sub(r"。+", "。", t)
    t = re.sub(r"\s*、\s*", "、", t)
    t = re.sub(r"\s+", " ", t).strip(" 、。")
    return t or text


def normalize_mime(mime):
    m = re.search(r"rate=(\d+)", mime or "")
    return int(m.group(1)) if m else 24000


def pcm_to_m4a(pcm, rate, path, trim=True):
    tmp = path + ".tmp.m4a"
    cmd = ["ffmpeg", "-y", "-loglevel", "error",
           "-f", "s16le", "-ar", str(rate), "-ac", "1", "-i", "pipe:0"]
    if trim:
        cmd += ["-af", "silenceremove=start_periods=1:start_silence=0.15:start_threshold=-45dB,"
                       "areverse,silenceremove=start_periods=1:start_silence=0.25:start_threshold=-45dB,areverse"]
    cmd += ["-c:a", "aac", "-b:a", "40k", "-ar", "24000", tmp]
    subprocess.run(cmd, input=pcm, check=True)
    os.replace(tmp, path)


def duration_of(path):
    out = subprocess.run(["ffprobe", "-v", "error", "-show_entries", "format=duration",
                          "-of", "default=noprint_wrappers=1:nokey=1", path],
                         capture_output=True, text=True)
    try:
        return float(out.stdout.strip())
    except ValueError:
        return 0.0


OPENAI_DEFAULT_INSTRUCTIONS = (
    "You are recording audio for a Japanese textbook (Minna no Nihongo). "
    "Read the text exactly as written, in standard Tokyo Japanese, clearly and at a natural, "
    "slightly slow pace suitable for learners. Do not add, translate or explain anything."
)


class OpenAIGenerator:
    """OpenAI gpt-4o-mini-tts / tts-1 backend via the REST API; returns 24 kHz 16-bit mono PCM."""

    def __init__(self, model, voice, style):
        import requests
        self.requests = requests
        self.session = requests.Session()
        self.session.headers.update({
            "Authorization": f"Bearer {os.environ['OPENAI_API_KEY']}",
            "Content-Type": "application/json",
        })
        self.model = model
        self.voice = voice
        self.instructions = style or OPENAI_DEFAULT_INSTRUCTIONS
        self.lock = threading.Lock()
        self.pause_until = 0.0

    def synthesize(self, text):
        payload = {"model": self.model, "voice": self.voice, "input": text, "response_format": "pcm"}
        if self.model.startswith("gpt-4o"):
            payload["instructions"] = self.instructions
        attempt = 0
        while True:
            wait = self.pause_until - time.time()
            if wait > 0:
                time.sleep(wait)
            try:
                r = self.session.post("https://api.openai.com/v1/audio/speech", json=payload, timeout=120)
                if r.status_code == 200:
                    data = r.content
                    if not data or len(data) < 2000:
                        raise RuntimeError(f"no audio returned for {text!r}")
                    return data, 24000
                code = r.status_code
                msg = r.text[:300]
                retriable = code in (408, 409, 429, 500, 502, 503, 504)
                err = RuntimeError(f"HTTP {code}: {msg}")
                err.status_code = code
                if not retriable:
                    raise err
                raise err
            except Exception as e:  # noqa: BLE001
                attempt += 1
                code = getattr(e, "status_code", None)
                msg = str(e)
                retriable = code in (408, 409, 429, 500, 502, 503, 504) \
                    or "no audio returned" in msg or "timed out" in msg.lower() or "connection" in msg.lower()
                if not retriable or attempt >= 8:
                    raise
                retry_after = None
                delay = min(90, (2 ** attempt) + random.uniform(0, 3))
                if code == 429:
                    with self.lock:
                        self.pause_until = max(self.pause_until, time.time() + delay)
                time.sleep(delay)


class GeminiGenerator:
    def __init__(self, model, voice, style):
        from google import genai
        from google.genai import types
        self.types = types
        self.errors = genai.errors
        self.client = genai.Client(api_key=os.environ["GEMINI_API_KEY"])
        self.model = model
        self.voice = voice
        self.style = style
        self.lock = threading.Lock()
        self.pause_until = 0.0

    def synthesize(self, text):
        types = self.types
        prompt = f"{self.style}\n\n{text}" if self.style else text
        config = types.GenerateContentConfig(
            response_modalities=["AUDIO"],
            speech_config=types.SpeechConfig(
                voice_config=types.VoiceConfig(
                    prebuilt_voice_config=types.PrebuiltVoiceConfig(voice_name=self.voice)
                )
            ),
        )
        attempt = 0
        while True:
            wait = self.pause_until - time.time()
            if wait > 0:
                time.sleep(wait)
            try:
                resp = self.client.models.generate_content(model=self.model, contents=prompt, config=config)
                parts = resp.candidates[0].content.parts if resp.candidates else []
                for part in parts:
                    if part.inline_data and part.inline_data.data:
                        return part.inline_data.data, normalize_mime(part.inline_data.mime_type)
                raise RuntimeError(f"no audio returned for {text!r}")
            except Exception as e:  # noqa: BLE001
                attempt += 1
                code = getattr(e, "code", None) or getattr(e, "status_code", None)
                msg = str(e)
                retriable = code in (429, 500, 502, 503, 504) or "429" in msg or "RESOURCE_EXHAUSTED" in msg \
                    or "503" in msg or "UNAVAILABLE" in msg or "no audio returned" in msg
                if not retriable or attempt >= 8:
                    raise
                delay = min(90, (2 ** attempt) + random.uniform(0, 3))
                if code == 429 or "429" in msg or "RESOURCE_EXHAUSTED" in msg:
                    with self.lock:
                        self.pause_until = max(self.pause_until, time.time() + delay)
                time.sleep(delay)


def write_speech_js(entries):
    body = "const LOCAL_AUDIO = " + json.dumps(entries, ensure_ascii=False, indent=2) + ";\n"
    body += """
function playPronunciation(text, audioKey) {
  const src = LOCAL_AUDIO[audioKey] || LOCAL_AUDIO[text];

  if (!src) {
    wx.showToast({
      title: "没有找到本地音频",
      icon: "none"
    });
    return;
  }

  const sources = src.startsWith("/") ? [src, src.slice(1)] : [src, `/${src}`];
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
"""
    with open(SPEECH_FILE, "w", encoding="utf-8") as f:
        f.write(body)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--provider", choices=["openai", "gemini"], default=os.environ.get("TTS_PROVIDER", "openai"))
    ap.add_argument("--model", default=os.environ.get("TTS_MODEL", ""),
                    help="default: gpt-4o-mini-tts (openai) / gemini-2.5-flash-preview-tts (gemini)")
    ap.add_argument("--voice", default=os.environ.get("TTS_VOICE", ""),
                    help="default: nova (openai) / Kore (gemini)")
    ap.add_argument("--style", default=os.environ.get("TTS_STYLE", ""),
                    help="reading instructions (openai: `instructions` field; gemini: prepended to the text)")
    ap.add_argument("--out", default=DEFAULT_OUT)
    ap.add_argument("--workers", type=int, default=int(os.environ.get("AUDIO_JOBS", "4")))
    ap.add_argument("--limit", type=int, default=0, help="only generate the first N missing texts")
    ap.add_argument("--text", action="append", help="generate only these texts (repeatable)")
    ap.add_argument("--force", action="store_true", help="regenerate even if the file exists")
    ap.add_argument("--no-speech-js", action="store_true")
    ap.add_argument("--no-kana", action="store_true", help="read headwords as written instead of from their kana")
    ap.add_argument("--headwords-only", action="store_true", help="only (re)generate vocabulary headwords")
    args = ap.parse_args()

    load_env_file()
    if args.provider == "openai":
        args.model = args.model or "gpt-4o-mini-tts"
        args.voice = args.voice or "nova"
        if not os.environ.get("OPENAI_API_KEY"):
            sys.exit("OPENAI_API_KEY is not set (put OPENAI_API_KEY=... into .env.local)")
    else:
        args.model = args.model or "gemini-2.5-flash-preview-tts"
        args.voice = args.voice or "Kore"
        if not os.environ.get("GEMINI_API_KEY"):
            sys.exit("GEMINI_API_KEY is not set (put GEMINI_API_KEY=... into .env.local)")

    os.makedirs(args.out, exist_ok=True)
    manifest_path = os.path.join(args.out, MANIFEST_NAME)
    manifest = {}
    if os.path.exists(manifest_path):
        with open(manifest_path, encoding="utf-8") as f:
            manifest = json.load(f)

    texts = args.text if args.text else list_texts()
    readings = {} if args.no_kana else headword_readings()
    entries = {}
    todo = []
    if args.headwords_only:
        texts = [t for t in texts if t.strip() in readings]
    for text in texts:
        filename = f"a_{file_hash(text)}.m4a"
        entries[text] = f"/assets/audio/{filename}"
        path = os.path.join(args.out, filename)
        if args.force or not os.path.exists(path):
            todo.append((text, filename, path))
    if args.limit:
        todo = todo[: args.limit]
    print(f"texts: {len(texts)}  to generate: {len(todo)}  model={args.model} voice={args.voice} workers={args.workers}")

    gen = OpenAIGenerator(args.model, args.voice, args.style) if args.provider == "openai" \
        else GeminiGenerator(args.model, args.voice, args.style)
    done = 0
    failed = []
    started = time.time()
    lock = threading.Lock()

    def work(item):
        text, filename, path = item
        spoken = tts_text(text, readings)
        dur = 0.0
        for attempt in range(3):
            pcm, rate = gen.synthesize(spoken)
            pcm_to_m4a(pcm, rate, path)
            dur = duration_of(path)
            if dur >= 0.25:
                break
            # very quiet / very short output: keep it untrimmed rather than empty, then retry
            pcm_to_m4a(pcm, rate, path, trim=False)
            dur = duration_of(path)
            if dur >= 0.25:
                break
        if dur < 0.25:
            os.remove(path)
            raise RuntimeError(f"empty audio for {text!r} after 3 attempts")
        return text, filename, spoken, dur

    with concurrent.futures.ThreadPoolExecutor(max_workers=args.workers) as ex:
        futures = {ex.submit(work, item): item for item in todo}
        for fut in concurrent.futures.as_completed(futures):
            item = futures[fut]
            try:
                text, filename, spoken, dur = fut.result()
            except Exception as e:  # noqa: BLE001
                failed.append((item[0], str(e)[:200]))
                print(f"FAILED {item[0]!r}: {str(e)[:200]}", flush=True)
                continue
            with lock:
                manifest[text] = {"file": filename, "spoken": spoken, "duration": round(dur, 2),
                                  "voice": args.voice, "model": args.model, "provider": args.provider}
                done += 1
                if done % 25 == 0 or done == len(todo):
                    elapsed = time.time() - started
                    with open(manifest_path, "w", encoding="utf-8") as f:
                        json.dump(manifest, f, ensure_ascii=False, indent=1)
                    print(f"generated {done}/{len(todo)}  ({elapsed/60:.1f} min, {done/elapsed*60:.1f}/min)", flush=True)

    with open(manifest_path, "w", encoding="utf-8") as f:
        json.dump(manifest, f, ensure_ascii=False, indent=1)
    if not args.no_speech_js and not args.text:
        all_entries = {t: f"/assets/audio/a_{file_hash(t)}.m4a" for t in list_texts()}
        write_speech_js(all_entries)
    # sanity: clips that are suspiciously long for their text (instruction read aloud?) or empty
    odd = [(t, m["duration"], len(m["spoken"])) for t, m in manifest.items()
           if m["duration"] < 0.3 or m["duration"] > 2.5 + 0.35 * len(m["spoken"])]
    if odd:
        print(f"check these {len(odd)} clips (duration vs length):")
        for t, d, n in odd[:30]:
            print(f"  {d:5.1f}s {n:3d}ch {t}")
    if failed:
        print(f"{len(failed)} texts failed; rerun the script to retry them.")
        sys.exit(1)
    print("done")


if __name__ == "__main__":
    main()
