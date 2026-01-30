
import { VocabularyItem, CollectedSentence } from '../types';

const STORAGE_PREFIX = 'minna_app_lesson_';
const CUSTOM_PREFIX = 'minna_app_custom_';
const COLLECTION_KEY = 'minna_app_collection';

export const saveLessonData = (lessonId: number, data: VocabularyItem[]) => {
  try {
    localStorage.setItem(`${STORAGE_PREFIX}${lessonId}`, JSON.stringify(data));
  } catch (e) {
    console.error("Failed to save lesson to local storage", e);
  }
};

export const getCachedLessonData = (lessonId: number): VocabularyItem[] | null => {
  try {
    const json = localStorage.getItem(`${STORAGE_PREFIX}${lessonId}`);
    return json ? JSON.parse(json) : null;
  } catch (e) {
    console.error("Failed to load lesson from local storage", e);
    return null;
  }
};

export const isLessonCached = (lessonId: number): boolean => {
  return !!localStorage.getItem(`${STORAGE_PREFIX}${lessonId}`);
};

export const saveCustomWord = (lessonId: number, word: VocabularyItem) => {
  try {
    const existing = getCustomWords(lessonId);
    // Avoid duplicates
    if (!existing.find(w => w.kanji === word.kanji)) {
      existing.push({ ...word, isCustom: true });
      localStorage.setItem(`${CUSTOM_PREFIX}${lessonId}`, JSON.stringify(existing));
    }
  } catch (e) {
    console.error("Failed to save custom word", e);
  }
};

export const deleteCustomWord = (lessonId: number, wordId: string) => {
  try {
    const existing = getCustomWords(lessonId);
    const updated = existing.filter(w => w.id !== wordId);
    localStorage.setItem(`${CUSTOM_PREFIX}${lessonId}`, JSON.stringify(updated));
    
    // Also update main cache if it exists to keep them in sync
    const cached = getCachedLessonData(lessonId);
    if (cached) {
      const updatedCache = cached.filter(w => w.id !== wordId);
      saveLessonData(lessonId, updatedCache);
    }
  } catch (e) {
    console.error("Failed to delete custom word", e);
  }
};

export const getCustomWords = (lessonId: number): VocabularyItem[] => {
  try {
    const json = localStorage.getItem(`${CUSTOM_PREFIX}${lessonId}`);
    return json ? JSON.parse(json) : [];
  } catch (e) {
    console.error("Failed to load custom words", e);
    return [];
  }
};

// Collection Methods
export const getCollectedSentences = (): CollectedSentence[] => {
  try {
    const json = localStorage.getItem(COLLECTION_KEY);
    return json ? JSON.parse(json) : [];
  } catch (e) {
    console.error("Failed to load collection", e);
    return [];
  }
};

export const toggleCollectSentence = (sentence: CollectedSentence): boolean => {
  const collection = getCollectedSentences();
  const index = collection.findIndex(s => s.ja === sentence.ja);
  
  if (index >= 0) {
    collection.splice(index, 1);
    localStorage.setItem(COLLECTION_KEY, JSON.stringify(collection));
    return false; // Removed
  } else {
    collection.push(sentence);
    localStorage.setItem(COLLECTION_KEY, JSON.stringify(collection));
    return true; // Added
  }
};

export const isSentenceCollected = (ja: string): boolean => {
  const collection = getCollectedSentences();
  return collection.some(s => s.ja === ja);
};
