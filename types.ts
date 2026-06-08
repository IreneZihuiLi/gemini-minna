
export interface Sentence {
  ja: string;
  zh: string;
}

export interface VerbConjugations {
  masu: string;      // e.g., おきます
  dictionary: string; // e.g., おく
  te: string;         // e.g., おいて
  nai?: string;        // e.g., おかない
  ta?: string;         // e.g., おいた
}

export interface VocabularyItem {
  id: string; // Unique ID for keying
  category: string; // Part of speech (Noun, Verb, etc.)
  grammarType?: string; // e.g. "Group I", "na-adj"
  kanji: string;
  kana: string;
  romaji: string;
  meaning: string;
  sentences: Sentence[];
  audioUrl?: string; // Cache the generated audio URL
  isCustom?: boolean; // Flag for user-added words
  conjugations?: VerbConjugations; // NEW: For verb forms
}

export interface GrammarExample {
  ja: string;
  zh: string;
  note?: string;
}

export interface GrammarPoint {
  id: string;
  title: string;
  pattern: string;
  meaning: string;
  usage: string;
  tip?: string;
  examples: GrammarExample[];
}

export interface LessonExampleBlock {
  id: string;
  kind: 'pattern' | 'example';
  title: string;
  ja: string;
  zh: string;
}

export interface DialogueLine {
  speaker: string;
  ja: string;
  zh: string;
}

export interface LessonText {
  id: string;
  title: string;
  subtitle?: string;
  lines: DialogueLine[];
}

export interface LessonContent {
  examples: LessonExampleBlock[];
  texts: LessonText[];
}

export interface CollectedSentence extends Sentence {
  id: string;
  sourceKanji: string;
  sourceMeaning: string;
}

export interface LessonData {
  lessonId: number;
  words: VocabularyItem[];
}

export enum AppState {
  HOME = 'HOME',
  LESSON = 'LESSON',
  COLLECTION = 'COLLECTION',
}
