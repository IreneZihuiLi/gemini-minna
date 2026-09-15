const { STATIC_LESSONS, STATIC_GRAMMAR, STATIC_LESSON_CONTENT } = require("../../utils/lessonData");

Page({
  data: {
    lessons: []
  },

  onLoad() {
    wx.showShareMenu({ withShareTicket: false, menus: ["shareAppMessage", "shareTimeline"] });
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
    if (!event.currentTarget.dataset.ready) return;
    wx.navigateTo({
      url: `/pages/lesson/lesson?id=${lessonId}`
    });
  },

  openCollection() {
    wx.navigateTo({
      url: "/pages/collection/collection"
    });
  },

  // Enables the 转发 menu item and chat sharing.
  onShareAppMessage() {
    return {
      title: "艾酱的日语助手：词汇・语法・课文・发音",
      path: "/pages/home/home"
    };
  },

  // Enables 分享到朋友圈.
  onShareTimeline() {
    return {
      title: "艾酱的日语助手：词汇・语法・课文・发音",
      query: ""
    };
  }
});
