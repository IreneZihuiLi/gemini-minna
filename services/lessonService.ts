import { VocabularyItem } from "../types";
import { getCustomWords } from "./storage";
import { STATIC_LESSONS } from "../data/staticLessons";

export const fetchVocabularyForLesson = async (lessonId: number): Promise<VocabularyItem[]> => {
  const staticWords = STATIC_LESSONS[lessonId] || [];
  const customWords = getCustomWords(lessonId);
  return [...staticWords, ...customWords];
};
