<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# 艾酱的日语助手 (Japanese Study App)

This is a local Japanese study app for vocabulary, grammar cards, examples, texts, verb forms, romaji, and pronunciation. The app itself makes no API calls: pronunciation clips are generated once with an LLM-based TTS model (OpenAI gpt-4o-mini-tts, see below) and shipped as static files.

The vocabulary lists and grammar points follow the lesson order of *Minna no Nihongo Shokyu I/II* (2nd edition). There are two data sets:

- `data/textbook/staticLessons.ts`, `data/textbook/staticGrammar.ts`: the textbook-faithful version (example sentences and explanations as in the book). **The web app (GitHub Pages) uses these.**
- `data/staticLessons.ts`, `data/staticGrammar.ts`: the same words and grammar points, but every example sentence, grammar explanation and grammar example is written independently for this app. **The WeChat mini program uses these** (`scripts/build_miniprogram_data.cjs`). `scripts/dump_content.cjs` lists the entries per lesson and `scripts/apply_rewrite.cjs <dir>` merges `L<n>.json` rewrite files back into them.

`data/staticLessonContent.ts` (文型/例文 and 会話) is shared by both.

## Run Locally

**Prerequisites:**  Node.js

1. Install dependencies:
   `npm install`
2. Run the web app:
   `npm run dev`

## WeChat Mini Program

Open the `miniprogram/` folder in WeChat Developer Tools. Lesson data is bundled (`miniprogram/utils/lessonData.js`, regenerate it with `node scripts/build_miniprogram_data.cjs` after editing `data/*.ts`).

Pronunciation clips are **not** bundled (they would exceed the package size limits). The mini program streams each clip from `AUDIO_BASE_URL` in `miniprogram/utils/config.js` (by default the GitHub Pages copy of `public/audio/`) and, where `wx.downloadFile` is allowed, caches it in local storage for next time.

- In WeChat DevTools tick 不校验合法域名 (project.config.json already sets `urlCheck: false`).
- For a published mini program the audio host must be listed under 服务器域名 → downloadFile 合法域名 and be ICP-filed, so upload `public/audio/` to your own server/CDN and change `AUDIO_BASE_URL`.

## Pronunciation audio

Every headword, example sentence, grammar example and dialogue line of both data sets has a clip in `public/audio/` named `a_<sha1(text)[0:16]>.m4a` (`node scripts/list_audio_texts.cjs` lists them all). The web app plays these files and falls back to the browser's Japanese voice if a clip is missing; the mini program streams the same files from `AUDIO_BASE_URL`.

To (re)generate the clips (OpenAI by default; `--provider gemini` also works):

1. Put your key in `.env.local`: `OPENAI_API_KEY=...` (or `GEMINI_API_KEY=...`)
2. `python3 scripts/generate_audio.py` (only missing clips are generated; `--voice nova`, `--limit N`, `--force` are available)
3. Commit and push; GitHub Pages publishes `public/audio/` for both the web app and the mini program.
