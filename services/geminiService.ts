
import { GoogleGenAI, Type, Modality } from "@google/genai";
import { VocabularyItem } from "../types";
import { decodeBase64, decodeAudioData, audioBufferToWav } from "./audioUtils";
import { saveLessonData, getCachedLessonData, getCustomWords } from "./storage";
import { STATIC_LESSONS } from "../data/staticLessons";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

let sharedAudioContext: AudioContext | null = null;

const getSharedAudioContext = () => {
  if (!sharedAudioContext) {
    sharedAudioContext = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
  }
  if (sharedAudioContext.state === 'suspended') {
    sharedAudioContext.resume().catch(() => {});
  }
  return sharedAudioContext;
};

export const fetchVocabularyForLesson = async (lessonId: number): Promise<VocabularyItem[]> => {
  let words: VocabularyItem[] = [];

  // Step 1: Check Static Data (Only if it contains actual words)
  if (STATIC_LESSONS[lessonId] && STATIC_LESSONS[lessonId].length > 0) {
    words = [...STATIC_LESSONS[lessonId]];
  } else {
    // Step 2: Check Local Storage (Cache)
    const cachedData = getCachedLessonData(lessonId);
    if (cachedData && cachedData.length > 5) { // Ensure cache is meaningful
      words = cachedData;
    } else {
      // Step 3: Fetch from AI
      console.log(`Generating FULL Lesson ${lessonId} from Gemini AI...`);
      // COMPREHENSIVE PROMPT: Ask for the entire set of 40-60 words.
      const prompt = `
        CRITICAL: Provide the COMPLETE vocabulary list for "Minna no Nihongo Elementary 1 (2nd Ed)", Lesson ${lessonId}.
        A typical lesson contains between 40 and 60 words. DO NOT return a summarized version.
        Extract EVERY major noun, verb, adjective, and expression from the official textbook word list for this lesson.
        
        Return a JSON object with a property "words" which is an array of objects.
        Structure:
        - category: string ("Nouns", "Verbs", "Adjectives", "Adverbs", "Expressions", "Others")
        - grammarType: string (Optional. Verbs: "Group I", "Group II", "Group III". Adjectives: "i-adj", "na-adj")
        - kanji: string (Standard form, for verbs this is the -masu form)
        - kana: string (Hiragana reading of the kanji)
        - romaji: string
        - meaning: string (Chinese Simplified)
        - sentences: array of 2 example sentences {ja, zh}
        - conjugations: object {masu: string, dictionary: string, te: string} (ONLY for verbs, otherwise null)
      `;

      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              words: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    category: { type: Type.STRING },
                    grammarType: { type: Type.STRING, nullable: true },
                    kanji: { type: Type.STRING },
                    kana: { type: Type.STRING },
                    romaji: { type: Type.STRING },
                    meaning: { type: Type.STRING },
                    sentences: {
                      type: Type.ARRAY,
                      items: {
                        type: Type.OBJECT,
                        properties: {
                          ja: { type: Type.STRING },
                          zh: { type: Type.STRING },
                        },
                      },
                    },
                    conjugations: {
                      type: Type.OBJECT,
                      nullable: true,
                      properties: {
                        masu: { type: Type.STRING },
                        dictionary: { type: Type.STRING },
                        te: { type: Type.STRING },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      });

      const text = response.text;
      if (!text) throw new Error("No text returned from Gemini");
      
      const data = JSON.parse(text);
      words = data.words.map((w: any, idx: number) => ({ 
        ...w, 
        id: `L${lessonId}-W${idx}` 
      }));

      saveLessonData(lessonId, words);
    }
  }

  const customWords = getCustomWords(lessonId);
  return [...words, ...customWords];
};

export const fetchDetailsForNewWord = async (input: string, lessonId: number): Promise<VocabularyItem> => {
  const prompt = `
    The user wants to add the word "${input}" to Lesson ${lessonId}.
    Return JSON: {category, grammarType, kanji, kana, romaji, meaning, sentences: [{ja, zh}, {ja, zh}]}.
    If the word is a verb, CRITICALLY include a "conjugations" object: {masu, dictionary, te}.
  `;

  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          category: { type: Type.STRING },
          grammarType: { type: Type.STRING, nullable: true },
          kanji: { type: Type.STRING },
          kana: { type: Type.STRING },
          romaji: { type: Type.STRING },
          meaning: { type: Type.STRING },
          sentences: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                ja: { type: Type.STRING },
                zh: { type: Type.STRING },
              },
            },
          },
          conjugations: {
            type: Type.OBJECT,
            nullable: true,
            properties: {
              masu: { type: Type.STRING },
              dictionary: { type: Type.STRING },
              te: { type: Type.STRING },
            },
          },
        },
      },
    },
  });

  const text = response.text;
  if (!text) throw new Error("No text returned");
  const data = JSON.parse(text);
  return { ...data, id: `CUSTOM-${Date.now()}` };
};

export interface ExplainedTerm {
  kanji: string;
  kana: string;
  romaji: string;
  meaning: string;
  type: string;
}

export const explainJapaneseContent = async (selectedText: string): Promise<ExplainedTerm> => {
  const prompt = `
    Analyze Japanese text: "${selectedText}".
    Return JSON: {kanji, kana, romaji, meaning (CN), type}.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            kanji: { type: Type.STRING },
            kana: { type: Type.STRING },
            romaji: { type: Type.STRING },
            meaning: { type: Type.STRING },
            type: { type: Type.STRING },
          },
        },
      },
    });

    const text = response.text;
    if (!text) throw new Error("No explanation returned");
    return JSON.parse(text) as ExplainedTerm;
  } catch (error) {
    console.error("Failed to explain text:", error);
    throw error;
  }
};

export const generateSpeech = async (text: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-preview-tts",
      contents: [{ parts: [{ text: text }] }],
      config: {
        responseModalities: [Modality.AUDIO],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: { voiceName: 'Kore' }, 
          },
        },
      },
    });

    const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
    if (!base64Audio) throw new Error("No audio data returned");

    const audioContext = getSharedAudioContext();
    const pcmBytes = decodeBase64(base64Audio);
    const audioBuffer = await decodeAudioData(pcmBytes, audioContext, 24000, 1);
    const wavBlob = audioBufferToWav(audioBuffer);
    return URL.createObjectURL(wavBlob);
  } catch (error) {
    console.error("TTS generation failed:", error);
    throw error;
  }
};
