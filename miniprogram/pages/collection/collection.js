const { getCollection, toggleCollection } = require("../../utils/collection");
const { playPronunciation } = require("../../utils/audio");

Page({
  data: {
    collection: []
  },

  onShow() {
    wx.showShareMenu({ withShareTicket: false, menus: ["shareAppMessage", "shareTimeline"] });
    this.setData({
      collection: getCollection()
    });
  },

  onShareAppMessage() {
    return {
      title: "みんなの日本語 学习助手：词汇・语法・课文・发音",
      path: "/pages/home/home"
    };
  },

  onShareTimeline() {
    return {
      title: "みんなの日本語 学习助手：词汇・语法・课文・发音"
    };
  },

  play(event) {
    const index = Number(event.currentTarget.dataset.index);
    const item = this.data.collection[index];
    if (!item || !item.ja) return;
    wx.vibrateShort({ type: "light", fail() {} });
    playPronunciation(item.ja);
  },

  remove(event) {
    const index = Number(event.currentTarget.dataset.index);
    const item = this.data.collection[index];
    if (!item) return;
    toggleCollection(item);
    this.setData({
      collection: getCollection()
    });
  }
});
