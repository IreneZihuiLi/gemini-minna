// Game configuration: modes, difficulty presets and round building for the
// vocabulary typing game. No DOM here so the logic can be reused elsewhere.
import { VocabularyItem } from '../types';
import { ProgressMap, isWeak } from './progress';
import { cleanKana, kanaVariants, stripPunctuation, tokenize } from './romaji';

export type StageMode = 'shadow' | 'normal' | 'dictation' | 'recall';
export type GameMode = StageMode | 'ladder';
export type Difficulty = 'easy' | 'standard' | 'hard';
export type RoundSize = 10 | 20 | 'all';

export type Matching = 'lenient' | 'strict';

export interface GameConfig {
  mode: GameMode;
  difficulty: Difficulty;
  size: RoundSize;
  matching: Matching;
}

export const DEFAULT_CONFIG: GameConfig = { mode: 'normal', difficulty: 'standard', size: 10, matching: 'lenient' };

export const MATCHING_INFO: Record<Matching, { label: string; desc: string }> = {
  lenient: { label: '宽松', desc: '动词打 ます形、辞书形、て形、ない形、た形都算对；［］里的部分可省略；／两种读法都行。' },
  strict: { label: '严格', desc: '必须和词表上的写法一致。' },
};
export const LADDER_STAGES: StageMode[] = ['shadow', 'normal', 'dictation', 'recall'];
export const PASS_RATE = 0.8;

export const MODE_INFO: Record<GameMode, { label: string; short: string; desc: string }> = {
  shadow: { label: '跟打模式', short: '跟打', desc: '显示提示，也显示单词，有发音，照着打，先混个脸熟。' },
  normal: { label: '普通模式', short: '普通', desc: '显示提示，不显示单词，有发音，凭记忆打出来。' },
  dictation: { label: '听写模式', short: '听写', desc: '不显示提示，不显示单词，只听发音，把听到的词打出来。' },
  recall: { label: '默写模式', short: '默写', desc: '只给中文意思，没有发音，全凭记忆打出日语。答完才播读音。' },
  ladder: { label: '闯关模式', short: '闯关', desc: '同一组词依次跟打、普通、听写、默写，正确率 80% 过关。' },
};

export interface Preset {
  label: string;
  desc: string;
  /** What the word area shows in 跟打 mode. */
  shadowLayers: 'kanji-kana-romaji' | 'kanji-kana' | 'kanji';
  /** Placeholder slots for the hidden word: one per kana (shows the length) or nothing. */
  slots: 'length' | 'none';
  /** Peeks (reveal kana + romaji for a moment) per word; null = unlimited. */
  peeks: number | null;
  /** Show an example sentence with the word blanked out. */
  sentenceHint: boolean;
  /** Wrong keystrokes before the word counts as wrong and is revealed; null = unlimited. */
  maxMistakes: number | null;
  /** Playback speed of the pronunciation clip. */
  rate: number;
  /** Extra plays after the automatic one; null = unlimited. */
  replays: number | null;
}

export const PRESETS: Record<Difficulty, Preset> = {
  easy: {
    label: '简单',
    desc: '汉字＋假名＋罗马音；给出词长；例句挖空提示；错了只标红；发音 0.75×，可无限重播和偷看。',
    shadowLayers: 'kanji-kana-romaji', slots: 'length', peeks: null, sentenceHint: true,
    maxMistakes: null, rate: 0.75, replays: null,
  },
  standard: {
    label: '标准',
    desc: '汉字＋假名；只给词长；错 3 次显示答案并记错；发音 1×，最多重播 3 次，Tab 偷看 1 次。',
    shadowLayers: 'kanji-kana', slots: 'length', peeks: 1, sentenceHint: false,
    maxMistakes: 3, rate: 1, replays: 3,
  },
  hard: {
    label: '困难',
    desc: '跟打只给汉字；不给词长；错 1 次即判错；发音 1.25×，只播一次。',
    shadowLayers: 'kanji', slots: 'none', peeks: 0, sentenceHint: false,
    maxMistakes: 1, rate: 1.25, replays: 0,
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

const KANJI = /[\u4e00-\u9fff々]/;

/**
 * Kana readings of a verb's other forms (辞書形, て形, ない形, た形). The data
 * gives them in kanji, so the kanji prefix of the headword is mapped to the
 * kana prefix by aligning the common okurigana suffix (書きます/かきます →
 * 書 = か, so 書いて → かいて). 来 changes reading in 来る/来ない.
 */
export function verbFormsKana(word: VocabularyItem): string[] {
  const c = word.conjugations;
  if (!c) return [];
  const kanaHead = cleanKana(word.kana);
  // 測ります／量ります: each kanji spelling gives its own prefix mapping
  const mappings = stripPunctuation(word.kanji.replace(/［[^］]*］|（[^）]*）/g, '')).split(/[／/]/).map(kanjiHead => {
    let suffix = 0;
    while (suffix < kanjiHead.length && suffix < kanaHead.length &&
      kanjiHead[kanjiHead.length - 1 - suffix] === kanaHead[kanaHead.length - 1 - suffix]) suffix += 1;
    return { kanjiPrefix: kanjiHead.slice(0, kanjiHead.length - suffix), kanaPrefix: kanaHead.slice(0, kanaHead.length - suffix) };
  });
  const out: string[] = [];
  for (const raw of [c.dictionary, c.te, c.nai, c.ta]) {
    if (!raw) continue;
    for (const alternative of raw.split(/[／/]/)) {
      const form = stripPunctuation(alternative.replace(/［[^］]*］|（[^）]*）/g, ''));
      let kana: string | null = form;
      if (KANJI.test(form)) {
        kana = null;
        for (const { kanjiPrefix, kanaPrefix } of mappings) {
          if (!kanjiPrefix || !form.startsWith(kanjiPrefix)) continue;
          let candidate = kanaPrefix + form.slice(kanjiPrefix.length);
          if (/来る$/.test(form)) candidate = candidate.replace(/きる$/, 'くる');
          if (/来ない$/.test(form)) candidate = candidate.replace(/きない$/, 'こない');
          if (!KANJI.test(candidate)) { kana = candidate; break; }
        }
      }
      if (kana && kana !== kanaHead && !out.includes(kana)) out.push(kana);
    }
  }
  return out;
}

/** Spellings accepted for a word: the listed reading first, then the lenient alternatives. */
export function wordTargets(word: VocabularyItem, matching: Matching): string[] {
  const primary = cleanKana(word.kana);
  if (matching === 'strict') return [primary];
  const targets = [primary];
  for (const alt of [...kanaVariants(word.kana), ...verbFormsKana(word)]) {
    if (alt && !targets.includes(alt)) targets.push(alt);
  }
  return targets;
}

export function accuracy(results: RoundResult[]): number {
  if (results.length === 0) return 0;
  return results.filter(result => result.correct).length / results.length;
}
