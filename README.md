<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Minna no Nihongo Study App

This is a local Japanese study app for vocabulary, grammar cards, examples, texts, verb forms, romaji, and pronunciation. The app itself makes no API calls: pronunciation clips are generated once with an LLM-based TTS model (OpenAI gpt-4o-mini-tts, see below) and shipped as static files.

## Run Locally

**Prerequisites:**  Node.js

1. Install dependencies:
   `npm install`
2. Run the web app:
   `npm run dev`

## WeChat Mini Program

Open the `miniprogram/` folder in WeChat Developer Tools. The mini program reads the local files in `miniprogram/utils/lessonData.js`.

## Pronunciation audio

Every headword, example sentence, grammar example and dialogue line has a clip in `public/audio/` named `a_<sha1(text)[0:16]>.m4a`. The web app plays these files and falls back to the browser's Japanese voice if a clip is missing; the mini program subpackages get a copy of the clips for their lesson.

To (re)generate the clips (OpenAI by default; `--provider gemini` also works):

1. Put your key in `.env.local`: `OPENAI_API_KEY=...` (or `GEMINI_API_KEY=...`)
2. `python3 scripts/generate_audio.py` (only missing clips are generated; `--voice nova`, `--limit N`, `--force` are available)
3. `node scripts/build_miniprogram_subpackages.cjs` to copy the clips into `miniprogram/pkg_l*/`
