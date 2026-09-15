// Segmented control for the pronunciation playback speed. The chosen speed is
// stored by utils/audio.js and applied to every clip (no re-generation needed).
const { PLAYBACK_RATES, getPlaybackRate, setPlaybackRate } = require("../../utils/audio");

Component({
  data: {
    rates: PLAYBACK_RATES.map((value) => ({ value, label: `${value}×` })),
    current: 1
  },

  lifetimes: {
    attached() {
      this.setData({ current: getPlaybackRate() });
    }
  },

  pageLifetimes: {
    show() {
      this.setData({ current: getPlaybackRate() });
    }
  },

  methods: {
    pick(event) {
      const value = Number(event.currentTarget.dataset.value);
      setPlaybackRate(value);
      this.setData({ current: getPlaybackRate() });
      wx.vibrateShort({ type: "light", fail() {} });
    }
  }
});
