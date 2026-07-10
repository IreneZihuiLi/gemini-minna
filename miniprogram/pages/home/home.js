const { STATIC_LESSONS, STATIC_GRAMMAR, STATIC_LESSON_CONTENT } = require("../../utils/lessonData");

Page({
  data: {
    lessons: []
  },

  onLoad() {
    const maxLesson = Math.max(
      ...Object.keys(STATIC_LESSONS).map(Number),
      ...Object.keys(STATIC_GRAMMAR).map(Number),
      ...Object.keys(STATIC_LESSON_CONTENT).map(Number)
    );

    const lessons = Array.from({ length: maxLesson }, (_, index) => {
      const id = index + 1;
      const content = STATIC_LESSON_CONTENT[id] || { examples: [], texts: [] };
      return {
        id,
        wordCount: (STATIC_LESSONS[id] || []).length,
        grammarCount: (STATIC_GRAMMAR[id] || []).length,
        exampleCount: content.examples.length,
        textCount: content.texts.length,
        ready: Boolean((STATIC_LESSONS[id] || []).length || (STATIC_GRAMMAR[id] || []).length)
      };
    });

    this.setData({ lessons });
  },

  openLesson(event) {
    const lessonId = event.currentTarget.dataset.id;
    const lessonCode = String(lessonId).padStart(2, "0");
    wx.navigateTo({
      url: `/pkg_l${lessonCode}/pages/lesson/lesson?id=${lessonId}`
    });
  },

  openCollection() {
    wx.navigateTo({
      url: "/pages/collection/collection"
    });
  }
});
