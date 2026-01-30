
export interface Sentence {
  ja: string;
  zh: string;
}

export interface VerbConjugations {
  masu: string;      // e.g., おきます
  dictionary: string; // e.g., おく
  te: string;         // e.g., おいて
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
