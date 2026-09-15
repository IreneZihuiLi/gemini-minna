// Plays the pre-generated pronunciation clips in public/audio (created by
// scripts/generate_gemini_audio.py). Clips are named a_<sha1(text)[0:16]>.m4a,
// the same scheme the WeChat mini program uses. If a clip is missing or cannot
// be played, the browser's own Japanese voice is used instead.

let currentAudio: HTMLAudioElement | null = null;
const hashCache = new Map<string, string>();

async function sha1Hex(text: string): Promise<string> {
  const cached = hashCache.get(text);
  if (cached) return cached;
  const digest = await crypto.subtle.digest('SHA-1', new TextEncoder().encode(text));
  const hex = Array.from(new Uint8Array(digest)).map(b => b.toString(16).padStart(2, '0')).join('');
  hashCache.set(text, hex);
  return hex;
}

export async function audioUrlFor(text: string): Promise<string> {
  const hash = (await sha1Hex(text.trim())).slice(0, 16);
  return `${import.meta.env.BASE_URL}audio/a_${hash}.m4a`;
}

export function stopAudio() {
  if (currentAudio) {
    currentAudio.onended = null;
    currentAudio.onerror = null;
    currentAudio.pause();
    currentAudio = null;
  }
  if (window.speechSynthesis) window.speechSynthesis.cancel();
}

function speakWithBrowserVoice(text: string, onEnd: () => void) {
  const synth = window.speechSynthesis;
  if (!synth) { onEnd(); return; }
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'ja-JP';
  utterance.rate = 0.85;
  const voices = synth.getVoices();
  const jaVoice = voices.find(v => v.lang === 'ja-JP' && !v.name.includes('Compact')) ||
                  voices.find(v => v.lang.includes('ja'));
  if (jaVoice) utterance.voice = jaVoice;
  utterance.onend = onEnd;
  utterance.onerror = onEnd;
  synth.speak(utterance);
}

export interface PlayOptions {
  onStart?: () => void;
  onEnd?: () => void;
}

/** Play the recorded clip for `text`; falls back to the browser voice. */
export async function playText(text: string, { onStart, onEnd }: PlayOptions = {}) {
  stopAudio();
  const finish = () => {
    if (currentAudio === audio) currentAudio = null;
    onEnd?.();
  };
  const fallback = () => {
    if (currentAudio === audio) currentAudio = null;
    speakWithBrowserVoice(text, () => onEnd?.());
  };
  const audio = new Audio();
  currentAudio = audio;
  audio.preload = 'auto';
  audio.onended = finish;
  audio.onerror = fallback;
  onStart?.();
  try {
    audio.src = await audioUrlFor(text);
    await audio.play();
  } catch {
    if (currentAudio === audio) fallback();
  }
}
