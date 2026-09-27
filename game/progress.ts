// Per-word typing progress kept in localStorage: a five-box Leitner ladder
// (box 0-4). A correct answer moves the word up one box, a wrong answer sends
// it back to box 0. Only the 普通 and 默写 modes record results.

export interface WordStat {
  box: number;
  correct: number;
  wrong: number;
  lastAt: number;
  lastCorrect: boolean;
}

export type ProgressMap = Record<string, WordStat>;

const PROGRESS_KEY = 'minna_app_typing_progress';
const SETTINGS_KEY = 'minna_app_typing_settings';
export const MAX_BOX = 4;

export function loadProgress(): ProgressMap {
  try {
    const raw = localStorage.getItem(PROGRESS_KEY);
    const parsed = raw ? JSON.parse(raw) : {};
    return parsed && typeof parsed === 'object' ? parsed : {};
  } catch {
    return {};
  }
}

function saveProgress(progress: ProgressMap) {
  try {
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
  } catch {
    // storage unavailable
  }
}

/** Record one round's results and return the updated map. */
export function recordResults(results: { id: string; correct: boolean }[]): ProgressMap {
  const progress = loadProgress();
  const now = Date.now();
  for (const { id, correct } of results) {
    const stat = progress[id] || { box: 0, correct: 0, wrong: 0, lastAt: 0, lastCorrect: false };
    if (correct) {
      stat.box = Math.min(MAX_BOX, stat.box + 1);
      stat.correct += 1;
    } else {
      stat.box = 0;
      stat.wrong += 1;
    }
    stat.lastAt = now;
    stat.lastCorrect = correct;
    progress[id] = stat;
  }
  saveProgress(progress);
  return progress;
}

/** A word that has been answered wrong and has not climbed back up yet. */
export function isWeak(stat?: WordStat): boolean {
  return Boolean(stat && stat.wrong > 0 && stat.box <= 1);
}

export function isMastered(stat?: WordStat): boolean {
  return Boolean(stat && stat.box >= 3);
}

// Bumped when saved settings must be corrected: v2 switched everyone back to fuzzy matching.
const SETTINGS_VERSION = 2;

export function loadSettings<T extends object>(fallback: T): T {
  try {
    const raw = localStorage.getItem(SETTINGS_KEY);
    if (!raw) return fallback;
    const saved = JSON.parse(raw) as Partial<T> & { v?: number };
    if ((saved.v ?? 1) < SETTINGS_VERSION) {
      delete (saved as { matching?: unknown }).matching;
    }
    return { ...fallback, ...saved };
  } catch {
    return fallback;
  }
}

export function saveSettings<T extends object>(settings: T) {
  try {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify({ ...settings, v: SETTINGS_VERSION }));
  } catch {
    // ignore
  }
}
