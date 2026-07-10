const { getCollection, toggleCollection } = require("../../utils/collection");
const { playPronunciation } = require("../../utils/speech");

Page({
  data: {
    collection: []
  },

  onShow() {
    this.setData({
      collection: getCollection()
    });
  },

  play(event) {
    const index = Number(event.currentTarget.dataset.index);
    const item = this.data.collection[index];
    if (!item || !item.audioPath) {
      wx.showToast({ title: "请重新收藏这条例句", icon: "none" });
      return;
    }

    const packageName = item.audioPath.match(/^\/?(pkg_l\d+)/)?.[1];
    if (packageName && wx.loadSubpackage) {
      wx.loadSubpackage({
        name: packageName,
        success: () => playPronunciation(item.ja, item.id, item.audioPath),
        fail: () => wx.showToast({ title: "课程音频加载失败", icon: "none" })
      });
      return;
    }

    playPronunciation(item.ja, item.id, item.audioPath);
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
