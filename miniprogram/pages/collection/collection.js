const { getCollection, toggleCollection } = require("../../utils/collection");
const { playPronunciation } = require("../../utils/audio");

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
    if (!item || !item.ja) return;
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
