const LOCAL_AUDIO = {
  "お帰りなさい。京都はどうでしたか。": "/pkg_l12/assets/audio/a_7e4cc46a72a52f24.m4a",
  "きのうは雨でした。": "/pkg_l12/assets/audio/a_047d369a1acc5e4f.m4a",
  "きのうは寒かったです。": "/pkg_l12/assets/audio/a_9df3ac1ce06daa5e.m4a",
  "このかばんは軽いです。": "/pkg_l12/assets/audio/a_953f3ea4633be63b.m4a",
  "このケーキは甘いです。": "/pkg_l12/assets/audio/a_b5f681c7d48cf2fe.m4a",
  "この荷物は重いです。": "/pkg_l12/assets/audio/a_17d63baedf66e8ec.m4a",
  "この車は速いです。": "/pkg_l12/assets/audio/a_421d4075abbfe066.m4a",
  "この料理は辛いです。": "/pkg_l12/assets/audio/a_e27ec9e7642e0ba6.m4a",
  "これは簡単な問題です。": "/pkg_l12/assets/audio/a_2b56f2da8c365faf.m4a",
  "サッカーと野球とどちらがおもしろいですか。": "/pkg_l12/assets/audio/a_3475bd92ac986f95.m4a",
  "ただいま。": "/pkg_l12/assets/audio/a_e32fd58d250b76f1.m4a",
  "とてもおもしろかったです。": "/pkg_l12/assets/audio/a_ca94e1f2fb61864f.m4a",
  "とてもきれいでした。でも、人が多かったです。": "/pkg_l12/assets/audio/a_7860cc009be80782.m4a",
  "泳ぎます": "/pkg_l12/assets/audio/a_b81a159a7d333842.m4a",
  "駅は近いです。": "/pkg_l12/assets/audio/a_d87908e7d315e18e.m4a",
  "駅まで歩きます。": "/pkg_l12/assets/audio/a_64ae547f267a398f.m4a",
  "遠い": "/pkg_l12/assets/audio/a_425abb3a170557b7.m4a",
  "会社は遠いです。": "/pkg_l12/assets/audio/a_b4f15d287e7477fa.m4a",
  "海で泳ぎます。": "/pkg_l12/assets/audio/a_593e7e681d40c250.m4a",
  "甘い": "/pkg_l12/assets/audio/a_59d1c0b26bc3ec17.m4a",
  "簡単な": "/pkg_l12/assets/audio/a_0dd3648f2445e8bd.m4a",
  "季節の中でいつがいちばん好きですか。……秋がいちばん好きです。": "/pkg_l12/assets/audio/a_b9eea3a39bf226b0.m4a",
  "祇園祭はどうでしたか。": "/pkg_l12/assets/audio/a_20d40867dbe91808.m4a",
  "京都はどうでしたか。……とてもきれいでした。": "/pkg_l12/assets/audio/a_814b597fd2724777.m4a",
  "近い": "/pkg_l12/assets/audio/a_088d5b688d3e8757.m4a",
  "軽い": "/pkg_l12/assets/audio/a_1e338b7038358d84.m4a",
  "今日は暖かいです。": "/pkg_l12/assets/audio/a_c211738ea8ee1852.m4a",
  "祭りはとても楽しかったです。": "/pkg_l12/assets/audio/a_b29d236ae01aca65.m4a",
  "時間が少ないです。": "/pkg_l12/assets/audio/a_2340d84ae3047489.m4a",
  "秋は涼しいです。": "/pkg_l12/assets/audio/a_a85801aebcc96911.m4a",
  "重い": "/pkg_l12/assets/audio/a_95ce5f57be0abae1.m4a",
  "少ない": "/pkg_l12/assets/audio/a_83f0f64b44034344.m4a",
  "辛い": "/pkg_l12/assets/audio/a_0943b8f3ce2d7f2f.m4a",
  "人が多いです。": "/pkg_l12/assets/audio/a_73bb8268ee83a21a.m4a",
  "速い": "/pkg_l12/assets/audio/a_8586dc33c8509b67.m4a",
  "多い": "/pkg_l12/assets/audio/a_dd99adc122454e2e.m4a",
  "暖かい": "/pkg_l12/assets/audio/a_c141850f9e8ac3d8.m4a",
  "遅い": "/pkg_l12/assets/audio/a_4b97e5b867e368bd.m4a",
  "鳥が飛びます。": "/pkg_l12/assets/audio/a_cf97e590d26bce32.m4a",
  "電車は遅いです。": "/pkg_l12/assets/audio/a_bb24ba0d84ae3c3c.m4a",
  "日本料理の中で何がいちばん好きですか。": "/pkg_l12/assets/audio/a_bfc368ea3a4b0bef.m4a",
  "飛びます": "/pkg_l12/assets/audio/a_835750967d2199b1.m4a",
  "歩きます": "/pkg_l12/assets/audio/a_4e56f273a9b1d5a5.m4a",
  "北海道は大阪より大きいです。": "/pkg_l12/assets/audio/a_4644372ad82ffcd8.m4a",
  "北海道は大阪より涼しいです。": "/pkg_l12/assets/audio/a_91bb2267195129f6.m4a",
  "涼しい": "/pkg_l12/assets/audio/a_19b9994d115e6a5b.m4a"
};

function getAudioPath(text) {
  return LOCAL_AUDIO[text] || "";
}

function playSource(src) {
  const sources = src.startsWith("/") ? [src, src.slice(1)] : [src, `/${src}`];
  let index = 0;

  const playNext = () => {
    const audio = wx.createInnerAudioContext();
    audio.src = sources[index];
    audio.obeyMuteSwitch = false;
    audio.onError((error) => {
      console.warn("Audio playback failed", sources[index], error);
      audio.destroy();
      index += 1;
      if (index < sources.length) {
        playNext();
      } else {
        wx.showToast({ title: "音频播放失败", icon: "none" });
      }
    });
    audio.onEnded(() => audio.destroy());
    audio.play();
  };

  playNext();
}

function playPronunciation(text, audioKey, directPath) {
  const src = directPath || LOCAL_AUDIO[audioKey] || LOCAL_AUDIO[text];
  if (!src) {
    wx.showToast({ title: "没有找到本地音频", icon: "none" });
    return;
  }
  playSource(src);
}

module.exports = {
  getAudioPath,
  playPronunciation
};
