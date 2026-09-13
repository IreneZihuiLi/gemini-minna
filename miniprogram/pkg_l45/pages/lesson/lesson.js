const { STATIC_LESSONS, STATIC_GRAMMAR, STATIC_LESSON_CONTENT } = require("../../../utils/lessonData");
const { playPronunciation, getAudioPath } = require("../../utils/speech");
const { isCollected, toggleCollection } = require("../../../utils/collection");

const CATEGORY_ORDER = ["Nouns", "Verbs", "Adjectives", "Adverbs", "Expressions", "Grammar", "Others"];

function grammarLabel(type) {
  return type === "Irregular" ? "Group III" : type;
}

function verbForms(item) {
  if (!item.conjugations) return [];
  return [
    { label: "辞書形", hint: "Dictionary", value: item.conjugations.dictionary, accent: true },
    { label: "ます形", hint: "Masu-form", value: item.conjugations.masu },
    { label: "て形", hint: "Te-form", value: item.conjugations.te, accent: true },
    { label: "ない形", hint: "Nai-form", value: item.conjugations.nai },
    { label: "た形", hint: "Ta-form", value: item.conjugations.ta }
  ].filter((form) => form.value);
}

function prepareWords(words) {
  const grouped = {};
  words.forEach((word) => {
    const category = word.category || "Others";
    if (!grouped[category]) grouped[category] = [];
    grouped[category].push({
      ...word,
      grammarLabel: grammarLabel(word.grammarType || ""),
      forms: word.category === "Verbs" ? verbForms(word) : [],
      sentences: (word.sentences || []).map((sentence, index) => ({
        ...sentence,
        index,
        collected: isCollected(sentence.ja)
      }))
    });
  });

  return Object.keys(grouped)
    .sort((a, b) => {
      const ia = CATEGORY_ORDER.indexOf(a);
      const ib = CATEGORY_ORDER.indexOf(b);
      if (ia >= 0 && ib >= 0) return ia - ib;
      if (ia >= 0) return -1;
      if (ib >= 0) return 1;
      return a.localeCompare(b);
    })
    .map((name) => ({
      name,
      items: grouped[name]
    }));
}

Page({
  data: {
    lessonId: 1,
    activeMode: "",
    words: [],
    wordGroups: [],
    grammar: [],
    examples: [],
    texts: [],
    modeCards: []
  },

  onLoad(query) {
    const lessonId = Number(query.id || 1);
    const words = STATIC_LESSONS[lessonId] || [];
    const grammar = STATIC_GRAMMAR[lessonId] || [];
    const content = STATIC_LESSON_CONTENT[lessonId] || { examples: [], texts: [] };

    wx.setNavigationBarTitle({
      title: `Lesson ${lessonId}`
    });

    this.setData({
      lessonId,
      words,
      wordGroups: prepareWords(words),
      grammar,
      examples: content.examples,
      texts: content.texts,
      modeCards: [
        { id: "grammar", title: "语法", count: grammar.length, suffix: "cards", color: "indigo", disabled: grammar.length === 0 },
        { id: "vocabulary", title: "词汇", count: words.length, suffix: "words", color: "emerald", disabled: words.length === 0 },
        { id: "examples", title: "例句", count: content.examples.length, suffix: "items", color: "sky", disabled: content.examples.length === 0 },
        { id: "text", title: "课文", count: content.texts.length, suffix: "texts", color: "rose", disabled: content.texts.length === 0 }
      ]
    });
  },

  chooseMode(event) {
    const mode = event.currentTarget.dataset.mode;
    this.setData({ activeMode: mode });
  },

  backToModes() {
    this.setData({ activeMode: "" });
  },

  play(event) {
    const text = event.currentTarget.dataset.text;
    const key = event.currentTarget.dataset.key;
    playPronunciation(text, key);
  },

  toggleSentence(event) {
    const wordId = event.currentTarget.dataset.wordId;
    const sentenceIndex = Number(event.currentTarget.dataset.index);
    const word = this.data.words.find((item) => item.id === wordId);
    if (!word || !word.sentences || !word.sentences[sentenceIndex]) return;

    const sentence = word.sentences[sentenceIndex];
    toggleCollection({
      ja: sentence.ja,
      zh: sentence.zh,
      sourceKanji: word.kanji,
      sourceMeaning: word.meaning,
      sourceLessonId: this.data.lessonId,
      audioPath: getAudioPath(sentence.ja)
    });

    this.setData({
      wordGroups: prepareWords(this.data.words)
    });
  }
});
