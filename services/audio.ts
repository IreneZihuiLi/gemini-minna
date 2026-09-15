// Plays the pre-generated pronunciation clips in public/audio (created by
// scripts/generate_audio.py). Clips are named a_<sha1(text)[0:16]>.m4a,
// the same scheme the WeChat mini program uses. If a clip is missing or cannot
// be played, the browser's own Japanese voice is used instead.
//
// Playback speed is a user setting (0.75x - 1.5x) applied through
// HTMLMediaElement.playbackRate, so the clips themselves never change.

export const PLAYBACK_RATES = [0.75, 1, 1.25, 1.5] as const;
export type PlaybackRate = (typeof PLAYBACK_RATES)[number];
const RATE_STORAGE_KEY = 'minna_app_playback_rate';

let currentAudio: HTMLAudioElement | null = null;
const hashCache = new Map<string, string>();
const rateListeners = new Set<() => void>();

function loadPlaybackRate(): PlaybackRate {
  try {
    const stored = Number(localStorage.getItem(RATE_STORAGE_KEY));
    const match = PLAYBACK_RATES.find(rate => rate === stored);
    if (match) return match;
  } catch {
    // storage unavailable (private mode etc.)
  }
  return 1;
}

let playbackRate: PlaybackRate = loadPlaybackRate();

export function getPlaybackRate(): PlaybackRate {
  return playbackRate;
}

/** Change the speed for every clip from now on, including the one playing. */
export function setPlaybackRate(rate: PlaybackRate) {
  playbackRate = rate;
  try {
    localStorage.setItem(RATE_STORAGE_KEY, String(rate));
  } catch {
    // ignore
  }
  if (currentAudio) applyRate(currentAudio);
  rateListeners.forEach(listener => listener());
}

/** Subscribe to speed changes (for React's useSyncExternalStore). */
export function subscribePlaybackRate(listener: () => void) {
  rateListeners.add(listener);
  return () => {
    rateListeners.delete(listener);
  };
}

function applyRate(audio: HTMLAudioElement) {
  // The load algorithm resets playbackRate to defaultPlaybackRate, so set both.
  audio.defaultPlaybackRate = playbackRate;
  audio.playbackRate = playbackRate;
  // Keep the voice's pitch natural when the speed changes.
  audio.preservesPitch = true;
  const legacy = audio as HTMLAudioElement & { webkitPreservesPitch?: boolean };
  if ('webkitPreservesPitch' in legacy) legacy.webkitPreservesPitch = true;
}

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
  utterance.rate = 0.9 * playbackRate;
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
  applyRate(audio);
  audio.onended = finish;
  audio.onerror = fallback;
  onStart?.();
  try {
    audio.src = await audioUrlFor(text);
    await audio.play();
    applyRate(audio);
  } catch {
    if (currentAudio === audio) fallback();
  }
}
