// Game configuration: modes, difficulty presets and round building for the
// vocabulary typing game. No DOM here so the logic can be reused elsewhere.
import { VocabularyItem } from '../types';
import { ProgressMap, isWeak } from './progress';
import { cleanKana, tokenize } from './romaji';

export type StageMode = 'shadow' | 'normal' | 'dictation';
export type GameMode = StageMode | 'ladder';
export type Difficulty = 'easy' | 'standard' | 'hard';
export type RoundSize = 10 | 20 | 'all';

export interface GameConfig {
  mode: GameMode;
  difficulty: Difficulty;
  size: RoundSize;
}

export const DEFAULT_CONFIG: GameConfig = { mode: 'normal', difficulty: 'standard', size: 10 };
export const LADDER_STAGES: StageMode[] = ['shadow', 'normal', 'dictation'];
export const PASS_RATE = 0.8;

export const MODE_INFO: Record<GameMode, { label: string; short: string; desc: string }> = {
  shadow: { label: '跟打模式', short: '跟打', desc: '显示提示，也显示单词，照着打，先混个脸熟。' },
  normal: { label: '普通模式', short: '普通', desc: '显示提示，不显示单词，凭记忆打出来。' },
  dictation: { label: '默写模式', short: '默写', desc: '不显示提示，不显示单词，只听发音，听写。' },
  ladder: { label: '闯关模式', short: '闯关', desc: '同一组词依次跟打、普通、默写，正确率 80% 过关。' },
};

export interface Preset {
  label: string;
  desc: string;
  /** What the word area shows in 跟打 mode. */
  shadowLayers: 'kanji-kana-romaji' | 'kanji-kana' | 'kanji';
  /** Placeholder slots for the hidden word: length and first kana, length only, or nothing. */
  slots: 'first' | 'length' | 'none';
  /** Peeks (reveal kana + romaji for a moment) per word; null = unlimited. */
  peeks: number | null;
  /** Show an example sentence with the word blanked out. */
  sentenceHint: boolean;
  /** Wrong keystrokes before the word counts as wrong and is revealed; null = unlimited. */
  maxMistakes: number | null;
  /** Seconds per word; null = no timer. */
  timeLimit: number | null;
  /** Playback speed of the pronunciation clip. */
  rate: number;
  /** Extra plays after the automatic one; null = unlimited. */
  replays: number | null;
}

export const PRESETS: Record<Difficulty, Preset> = {
  easy: {
    label: '简单',
    desc: '汉字＋假名＋罗马音；给出词长和首个假名；例句挖空提示；错了只标红；发音 0.75×，可无限重播和偷看。',
    shadowLayers: 'kanji-kana-romaji', slots: 'first', peeks: null, sentenceHint: true,
    maxMistakes: null, timeLimit: null, rate: 0.75, replays: null,
  },
  standard: {
    label: '标准',
    desc: '汉字＋假名；只给词长；错 3 次显示答案并记错；发音 1×，最多重播 3 次，Tab 偷看 1 次。',
    shadowLayers: 'kanji-kana', slots: 'length', peeks: 1, sentenceHint: false,
    maxMistakes: 3, timeLimit: null, rate: 1, replays: 3,
  },
  hard: {
    label: '困难',
    desc: '跟打只给汉字；不给词长；错 1 次即判错；每词限时 10 秒；发音 1.25×，只播一次。',
    shadowLayers: 'kanji', slots: 'none', peeks: 0, sentenceHint: false,
    maxMistakes: 1, timeLimit: 10, rate: 1.25, replays: 0,
  },
};

export interface RoundResult {
  word: VocabularyItem;
  correct: boolean;
  mistakes: number;
  ms: number;
}

export function canType(word: VocabularyItem): boolean {
  try {
    return tokenize(word.kana).length > 0;
  } catch {
    return false;
  }
}

export function shuffle<T>(items: T[]): T[] {
  const list = [...items];
  for (let i = list.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [list[i], list[j]] = [list[j], list[i]];
  }
  return list;
}

/**
 * Choose the words for a round: weak words first (box 0-1), then words never
 * practised, then the rest; a little randomness inside each tier, and the
 * final order is shuffled.
 */
export function pickWords(words: VocabularyItem[], progress: ProgressMap, size: RoundSize, onlyWeak = false): VocabularyItem[] {
  const pool = words.filter(canType).filter(word => !onlyWeak || isWeak(progress[word.id]));
  const scored = pool.map(word => {
    const stat = progress[word.id];
    const tier = stat ? stat.box : 1.5;
    return { word, score: tier + Math.random() * 0.9 };
  });
  scored.sort((a, b) => a.score - b.score);
  const count = size === 'all' ? scored.length : Math.min(size, scored.length);
  return shuffle(scored.slice(0, count).map(entry => entry.word));
}

/** Example sentence with the target word blanked out, or null if none contains it. */
export function blankSentence(word: VocabularyItem): { ja: string; zh: string } | null {
  const forms = new Set<string>();
  const head = word.kanji.replace(/［[^］]*］|（[^）]*）/g, '').replace(/[～〜~\s]/g, '');
  if (head) forms.add(head);
  const c = word.conjugations;
  if (c) {
    for (const form of [c.dictionary, c.te, c.ta, c.nai, c.masu]) if (form) forms.add(form);
    if (c.masu && c.masu.endsWith('ます')) forms.add(c.masu.slice(0, -2));
  }
  const kana = cleanKana(word.kana);
  if (kana.length >= 2) forms.add(kana);
  const candidates = [...forms].filter(form => form.length >= 2 || forms.size === 1).sort((a, b) => b.length - a.length);
  for (const sentence of word.sentences || []) {
    for (const form of candidates) {
      if (form && sentence.ja.includes(form)) {
        return { ja: sentence.ja.replace(form, '＿＿＿'), zh: sentence.zh };
      }
    }
  }
  return null;
}

export function accuracy(results: RoundResult[]): number {
  if (results.length === 0) return 0;
  return results.filter(result => result.correct).length / results.length;
}
