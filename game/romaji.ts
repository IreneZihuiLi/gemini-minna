// Romaji-to-kana typing engine for the vocabulary typing game.
// Pure functions, no DOM: a kana string is split into typing units (one kana,
// a 拗音 pair such as きゃ, or っ merged with the next unit), each with every
// romaji spelling we accept, and keystrokes are matched unit by unit the way a
// Japanese IME or a typing game would.

export interface KanaUnit {
  /** The kana as displayed (original hiragana/katakana). */
  kana: string;
  /** Acceptable romaji spellings, preferred one first. */
  options: string[];
  /** ん: a single "n" is enough before most consonants. */
  n?: boolean;
}

const VOWELS = 'aiueo';
const SMALL = new Set('ぁぃぅぇぉゃゅょゎ');

const BASE: Record<string, string[]> = {
  あ: ['a'], い: ['i', 'yi'], う: ['u', 'wu', 'whu'], え: ['e'], お: ['o'],
  か: ['ka', 'ca'], き: ['ki'], く: ['ku', 'cu', 'qu'], け: ['ke'], こ: ['ko', 'co'],
  さ: ['sa'], し: ['shi', 'si', 'ci'], す: ['su'], せ: ['se', 'ce'], そ: ['so'],
  た: ['ta'], ち: ['chi', 'ti'], つ: ['tsu', 'tu'], て: ['te'], と: ['to'],
  な: ['na'], に: ['ni'], ぬ: ['nu'], ね: ['ne'], の: ['no'],
  は: ['ha'], ひ: ['hi'], ふ: ['fu', 'hu'], へ: ['he'], ほ: ['ho'],
  ま: ['ma'], み: ['mi'], む: ['mu'], め: ['me'], も: ['mo'],
  や: ['ya'], ゆ: ['yu'], よ: ['yo'],
  ら: ['ra'], り: ['ri'], る: ['ru'], れ: ['re'], ろ: ['ro'],
  わ: ['wa'], ゐ: ['wi'], ゑ: ['we'], を: ['wo'],
  が: ['ga'], ぎ: ['gi'], ぐ: ['gu'], げ: ['ge'], ご: ['go'],
  ざ: ['za'], じ: ['ji', 'zi'], ず: ['zu'], ぜ: ['ze'], ぞ: ['zo'],
  だ: ['da'], ぢ: ['di'], づ: ['du'], で: ['de'], ど: ['do'],
  ば: ['ba'], び: ['bi'], ぶ: ['bu'], べ: ['be'], ぼ: ['bo'],
  ぱ: ['pa'], ぴ: ['pi'], ぷ: ['pu'], ぺ: ['pe'], ぽ: ['po'],
  ゔ: ['vu'],
  ぁ: ['xa', 'la'], ぃ: ['xi', 'li'], ぅ: ['xu', 'lu'], ぇ: ['xe', 'le'], ぉ: ['xo', 'lo'],
  ゃ: ['xya', 'lya'], ゅ: ['xyu', 'lyu'], ょ: ['xyo', 'lyo'], ゎ: ['xwa', 'lwa'],
  っ: ['xtu', 'ltu', 'xtsu', 'ltsu'],
  ー: ['-'],
};

const COMBO: Record<string, string[]> = {
  きゃ: ['kya'], きゅ: ['kyu'], きょ: ['kyo'],
  しゃ: ['sha', 'sya'], しゅ: ['shu', 'syu'], しょ: ['sho', 'syo'], しぇ: ['she', 'sye'],
  ちゃ: ['cha', 'tya', 'cya'], ちゅ: ['chu', 'tyu', 'cyu'], ちょ: ['cho', 'tyo', 'cyo'], ちぇ: ['che', 'tye'],
  にゃ: ['nya'], にゅ: ['nyu'], にょ: ['nyo'],
  ひゃ: ['hya'], ひゅ: ['hyu'], ひょ: ['hyo'],
  みゃ: ['mya'], みゅ: ['myu'], みょ: ['myo'],
  りゃ: ['rya'], りゅ: ['ryu'], りょ: ['ryo'],
  ぎゃ: ['gya'], ぎゅ: ['gyu'], ぎょ: ['gyo'],
  じゃ: ['ja', 'zya', 'jya'], じゅ: ['ju', 'zyu', 'jyu'], じょ: ['jo', 'zyo', 'jyo'], じぇ: ['je', 'zye'],
  ぢゃ: ['dya'], ぢゅ: ['dyu'], ぢょ: ['dyo'],
  びゃ: ['bya'], びゅ: ['byu'], びょ: ['byo'],
  ぴゃ: ['pya'], ぴゅ: ['pyu'], ぴょ: ['pyo'],
  てぃ: ['thi'], てゅ: ['thu'], でぃ: ['dhi'], でゅ: ['dhu'],
  とぅ: ['twu'], どぅ: ['dwu'],
  ふぁ: ['fa'], ふぃ: ['fi'], ふぇ: ['fe'], ふぉ: ['fo'], ふゅ: ['fyu'],
  うぃ: ['wi'], うぇ: ['we'], うぉ: ['who'],
  ゔぁ: ['va'], ゔぃ: ['vi'], ゔぇ: ['ve'], ゔぉ: ['vo'],
  つぁ: ['tsa'], つぃ: ['tsi'], つぇ: ['tse'], つぉ: ['tso'],
  いぇ: ['ye'], くぁ: ['qa', 'kwa'], ぐぁ: ['gwa'],
};

function toHiragana(text: string): string {
  return text.replace(/[ァ-ヶ]/g, ch => String.fromCharCode(ch.charCodeAt(0) - 0x60));
}

/** Remove ～ and punctuation that is never typed. */
export function stripPunctuation(text: string): string {
  return text.replace(/[～〜~\s、。，,．.・「」『』!！?？:：;；]/g, '');
}

/**
 * The part of a dictionary kana field that is actually typed: drops ～,
 * optional parts in ［］, alternative readings in （）, keeps the first of
 * "／"-separated alternatives and removes punctuation.
 */
export function cleanKana(kana: string): string {
  let s = kana.replace(/［[^］]*］|\[[^\]]*\]/g, '').replace(/（[^）]*）|\([^)]*\)/g, '');
  const alternatives = s.split(/[／/]/);
  if (alternatives.length > 1) s = alternatives[0];
  return stripPunctuation(s);
}

/**
 * Every reading a kana field allows: each "／" alternative, with and without
 * the optional ［］ part, and a （） alternative reading on its own.
 * The first entry is the primary reading (same as cleanKana).
 */
export function kanaVariants(kana: string): string[] {
  const out: string[] = [];
  const push = (text: string) => {
    const cleaned = stripPunctuation(text);
    if (cleaned && !out.includes(cleaned)) out.push(cleaned);
  };
  const noParen = (text: string) => text.replace(/（[^）]*）|\([^)]*\)/g, '');
  for (const alternative of kana.split(/[／/]/)) {
    push(noParen(alternative.replace(/［[^］]*］|\[[^\]]*\]/g, '')));
    push(noParen(alternative.replace(/［([^］]*)］|\[([^\]]*)\]/g, (_m, a, b) => a ?? b ?? '')));
    const paren = alternative.match(/（([^）]*)）|\(([^)]*)\)/);
    if (paren) push(paren[1] ?? paren[2] ?? '');
  }
  return out;
}

function unitAt(hira: string, display: string, i: number): { unit: KanaUnit; length: number } {
  const ch = hira[i];
  if (ch === 'ん') return { unit: { kana: display[i], options: ['nn', "n'", 'xn'], n: true }, length: 1 };
  const pair = hira.slice(i, i + 2);
  if (pair.length === 2 && SMALL.has(pair[1])) {
    const explicit = (BASE[ch] || []).flatMap(b => (BASE[pair[1]] || []).map(s => b + s));
    const combo = COMBO[pair] || [];
    if (combo.length || explicit.length) {
      return { unit: { kana: display.slice(i, i + 2), options: [...combo, ...explicit] }, length: 2 };
    }
  }
  const base = BASE[ch];
  if (!base) throw new Error(`Unsupported kana: ${ch}`);
  return { unit: { kana: display[i], options: [...base] }, length: 1 };
}

/** Split a kana string into typing units. Throws on characters it cannot type. */
export function tokenize(kana: string): KanaUnit[] {
  const display = cleanKana(kana);
  const hira = toHiragana(display);
  const units: KanaUnit[] = [];
  let i = 0;
  while (i < hira.length) {
    if (hira[i] === 'っ' && i + 1 < hira.length && hira[i + 1] !== 'っ' && hira[i + 1] !== 'ん') {
      // っ + next unit: the consonant is doubled (kka), or っ is typed explicitly (xtuka)
      const { unit: next, length } = unitAt(hira, display, i + 1);
      const doubled = next.options
        .filter(o => !VOWELS.includes(o[0]) && o[0] !== 'n' && o[0] !== '-')
        .map(o => o[0] + o);
      const explicit = BASE['っ'].flatMap(x => next.options.map(o => x + o));
      units.push({ kana: display.slice(i, i + 1 + length), options: [...doubled, ...explicit] });
      i += 1 + length;
      continue;
    }
    const { unit, length } = unitAt(hira, display, i);
    units.push(unit);
    i += length;
  }
  return units;
}

export interface TypingState {
  units: KanaUnit[];
  /** Index of the unit being typed. */
  index: number;
  /** Romaji typed so far for the current unit. */
  buffer: string;
  /** Every accepted keystroke. */
  typed: string;
}

export type KeyResult = 'accepted' | 'unit' | 'complete' | 'miss';

export function createState(kana: string): TypingState {
  return { units: tokenize(kana), index: 0, buffer: '', typed: '' };
}

export function isComplete(state: TypingState): boolean {
  return state.index >= state.units.length;
}

function advance(state: TypingState, key: string): { state: TypingState; result: KeyResult } {
  const index = state.index + 1;
  const next = { ...state, index, buffer: '', typed: state.typed + key };
  return { state: next, result: index >= state.units.length ? 'complete' : 'unit' };
}

/** Feed one keystroke. Unknown or wrong keys return 'miss' and leave the state unchanged. */
export function pressKey(state: TypingState, rawKey: string): { state: TypingState; result: KeyResult } {
  const key = rawKey.toLowerCase();
  if (!/^[a-z'\-]$/.test(key) || isComplete(state)) return { state, result: 'miss' };
  const unit = state.units[state.index];
  const nextUnit = state.units[state.index + 1];

  if (unit.n) {
    if (state.buffer === '') {
      if (key === 'n' || key === 'x') return { state: { ...state, buffer: key, typed: state.typed + key }, result: 'accepted' };
      return { state, result: 'miss' };
    }
    if (state.buffer === 'x') {
      return key === 'n' ? advance(state, key) : { state, result: 'miss' };
    }
    // buffer === 'n'
    if (key === 'n' || key === "'") return advance(state, key);
    const consonantNext = nextUnit && !VOWELS.includes(key) && key !== 'y' && key !== 'n' &&
      nextUnit.options.some(o => o[0] === key);
    if (consonantNext) {
      // "n" alone completes ん; the key starts the next unit
      const after = { ...state, index: state.index + 1, buffer: '' };
      return pressKey(after, key);
    }
    return { state, result: 'miss' };
  }

  const attempt = state.buffer + key;
  const matches = unit.options.filter(o => o.startsWith(attempt));
  if (matches.length === 0) return { state, result: 'miss' };
  if (matches.includes(attempt)) return advance(state, key);
  return { state: { ...state, buffer: attempt, typed: state.typed + key }, result: 'accepted' };
}

/** Preferred spelling of one unit, given what follows it (ん → "n" before a consonant). */
function preferred(units: KanaUnit[], i: number): string {
  const unit = units[i];
  if (unit.n) {
    const next = units[i + 1];
    const first = next ? next.options[0][0] : '';
    return next && !VOWELS.includes(first) && first !== 'y' && first !== 'n' && first !== '-' ? 'n' : 'nn';
  }
  return unit.options[0];
}

/** Full romaji for the word (preferred spellings), e.g. がっこう → gakkou. */
export function romajiFor(kana: string): string {
  const units = tokenize(kana);
  return units.map((_, i) => preferred(units, i)).join('');
}

/** What still has to be typed, continuing from the current buffer. */
export function remainingRomaji(state: TypingState): string {
  if (isComplete(state)) return '';
  const { units, index, buffer } = state;
  const unit = units[index];
  let current: string;
  if (unit.n) {
    current = buffer === 'x' ? 'n' : buffer === 'n' ? (preferred(units, index) === 'n' ? '' : 'n') : preferred(units, index);
  } else {
    const option = unit.options.find(o => o.startsWith(buffer)) || unit.options[0];
    current = option.slice(buffer.length);
  }
  const rest = units.slice(index + 1).map((_, j) => preferred(units, index + 1 + j)).join('');
  return current + rest;
}

export interface UnitView {
  kana: string;
  status: 'done' | 'current' | 'todo';
}

export function unitViews(state: TypingState): UnitView[] {
  return state.units.map((unit, i) => ({
    kana: unit.kana,
    status: i < state.index ? 'done' : i === state.index ? 'current' : 'todo',
  }));
}

// ---------------------------------------------------------------- several accepted spellings

/**
 * Several target spellings typed at once (for example ます形 and 辞書形 of a
 * verb): every track consistent with the keystrokes so far stays alive, a key
 * is a miss only when no track accepts it, and the first track to finish wins.
 * tracks[0] is what the UI shows: the primary spelling until it dies.
 */
export interface MultiState {
  tracks: TypingState[];
}

export function createMultiState(targets: string[]): MultiState {
  const tracks: TypingState[] = [];
  const seen = new Set<string>();
  for (const target of targets) {
    if (seen.has(target)) continue;
    seen.add(target);
    try {
      const state = createState(target);
      if (state.units.length > 0) tracks.push(state);
    } catch {
      // not typeable, skip this spelling
    }
  }
  if (tracks.length === 0) throw new Error('No typeable spelling');
  return { tracks };
}

export function pressKeyMulti(state: MultiState, key: string): { state: MultiState; result: KeyResult } {
  const survivors: TypingState[] = [];
  let result: KeyResult = 'miss';
  for (const track of state.tracks) {
    const outcome = pressKey(track, key);
    if (outcome.result === 'miss') continue;
    if (outcome.result === 'complete') return { state: { tracks: [outcome.state] }, result: 'complete' };
    survivors.push(outcome.state);
    if (result === 'miss') result = outcome.result;
  }
  if (survivors.length === 0) return { state, result: 'miss' };
  return { state: { tracks: survivors }, result };
}

export function activeTrack(state: MultiState): TypingState {
  return state.tracks[0];
}

export function isMultiComplete(state: MultiState): boolean {
  return isComplete(state.tracks[0]);
}

/** The kana of a track, e.g. the spelling the learner actually typed. */
export function trackKana(track: TypingState): string {
  return track.units.map(unit => unit.kana).join('');
}

// ---------------------------------------------------------------- free typing (judge on Enter)

// romaji option -> kana, for converting free input the way an IME shows it.
// COMBO first so that e.g. "wi" shows うぃ rather than ゐ.
const REVERSE = new Map<string, string>();
for (const [pair, options] of Object.entries(COMBO)) for (const option of options) if (!REVERSE.has(option)) REVERSE.set(option, pair);
for (const [kana, options] of Object.entries(BASE)) for (const option of options) if (!REVERSE.has(option)) REVERSE.set(option, kana);
const LONGEST_OPTION = 4;

/**
 * Convert freely typed romaji to kana like an IME preview: "gakkou" → がっこう,
 * "kon" → こ + pending "n". Whatever cannot form a syllable yet is returned as
 * `pending` so it can be shown as romaji.
 */
export function romajiToKana(input: string): { kana: string; pending: string } {
  const s = input.toLowerCase();
  let out = '';
  let i = 0;
  while (i < s.length) {
    const ch = s[i];
    if (ch === 'n') {
      const next = s[i + 1];
      if (next === 'n' || next === "'") { out += 'ん'; i += 2; continue; }
      if (next !== undefined && !VOWELS.includes(next) && next !== 'y') { out += 'ん'; i += 1; continue; }
    }
    if (!VOWELS.includes(ch) && ch !== 'n' && ch !== '-' && ch !== "'" && s[i + 1] === ch && s.length > i + 2) {
      out += 'っ';
      i += 1;
      continue;
    }
    let matched = false;
    for (let len = Math.min(LONGEST_OPTION, s.length - i); len >= 1; len--) {
      const kana = REVERSE.get(s.slice(i, i + len));
      if (kana) { out += kana; i += len; matched = true; break; }
    }
    if (!matched) break;
  }
  return { kana: out, pending: s.slice(i) };
}

/**
 * Whether a freely typed romaji string spells one of the target readings,
 * using exactly the same acceptance rules as live typing. A lone final "n"
 * counts as ん, as an IME would convert it on Enter.
 */
export function acceptsSpelling(targets: string[], romaji: string): boolean {
  let s = romaji.toLowerCase().replace(/[^a-z'\-]/g, '');
  if (/(^|[^n])n$/.test(s)) s += 'n';
  if (!s) return false;
  let state: MultiState;
  try {
    state = createMultiState(targets);
  } catch {
    return false;
  }
  for (const ch of s) {
    const outcome = pressKeyMulti(state, ch);
    if (outcome.result === 'miss') return false;
    state = outcome.state;
  }
  return isMultiComplete(state);
}
