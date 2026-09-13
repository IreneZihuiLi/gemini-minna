const LOCAL_AUDIO = {
  "ええ。来月式を挙げる予定です。": "/pkg_l47/assets/audio/a_a1d1ffb633526af1.m4a",
  "おめでとうございます。奥様になる方はどんな方ですか。": "/pkg_l47/assets/audio/a_ebb4f72aab3c705a.m4a",
  "この水は変な味がします。": "/pkg_l47/assets/audio/a_03480b6d2f3353ff.m4a",
  "この町の人口は減っているそうです。": "/pkg_l47/assets/audio/a_a83c6853bd367baa.m4a",
  "さします": "/pkg_l47/assets/audio/a_24b87d8ac18185be.m4a",
  "どうも": "/pkg_l47/assets/audio/a_a481ff73f54dffec.m4a",
  "どうも変な音がします。": "/pkg_l47/assets/audio/a_fa85f8f576597f3a.m4a",
  "ニュースによると、駅前で事故があったそうです。": "/pkg_l47/assets/audio/a_e13fa6fd7f937a56.m4a",
  "パトカー": "/pkg_l47/assets/audio/a_0f7b91d7bd149964.m4a",
  "パトカーの音がします。": "/pkg_l47/assets/audio/a_aeb7ba455b344514.m4a",
  "ひどい": "/pkg_l47/assets/audio/a_974c8b454835765d.m4a",
  "ひどい雨ですね。": "/pkg_l47/assets/audio/a_9fb0ff792cdfac7c.m4a",
  "わたしはその意見に賛成です。": "/pkg_l47/assets/audio/a_443e1816f8a3de4b.m4a",
  "医学": "/pkg_l47/assets/audio/a_ef710fe9eab552d8.m4a",
  "医学を勉強しています。": "/pkg_l47/assets/audio/a_28e902babf8010e4.m4a",
  "雨が降っているので、傘をさします。": "/pkg_l47/assets/audio/a_ffcaece102e8e4f7.m4a",
  "駅で友達と別れました。": "/pkg_l47/assets/audio/a_b748f15193ce921a.m4a",
  "駅前に人が集まっています。": "/pkg_l47/assets/audio/a_f682334776143b5c.m4a",
  "音がします": "/pkg_l47/assets/audio/a_b5d266a00b15ae4f.m4a",
  "科学": "/pkg_l47/assets/audio/a_1f88be42614cb2b2.m4a",
  "科学の本を読みます。": "/pkg_l47/assets/audio/a_47bdd2cbd898cc7d.m4a",
  "外は寒いようです。": "/pkg_l47/assets/audio/a_1878273cdb0758b3.m4a",
  "救急車": "/pkg_l47/assets/audio/a_c31c4469d2c82816.m4a",
  "救急車を呼んでください。": "/pkg_l47/assets/audio/a_dd892bcc30eb867f.m4a",
  "研究の発表を聞きました。": "/pkg_l47/assets/audio/a_718663f035b29247.m4a",
  "幸せそうですね。": "/pkg_l47/assets/audio/a_655c5630e850a5a3.m4a",
  "山田さん、結婚するそうですね。": "/pkg_l47/assets/audio/a_695b5554b8a77cc7.m4a",
  "賛成": "/pkg_l47/assets/audio/a_0ebd8c6be74cb2e8.m4a",
  "実験": "/pkg_l47/assets/audio/a_bc35685c7f885ea2.m4a",
  "実験は成功したそうです。": "/pkg_l47/assets/audio/a_dc51cb4857d4f877.m4a",
  "集まります": "/pkg_l47/assets/audio/a_8ffc237dfe086ac8.m4a",
  "人口": "/pkg_l47/assets/audio/a_258f526ba9abfce9.m4a",
  "台所からいい匂いがします。": "/pkg_l47/assets/audio/a_864d776ff9a0e53e.m4a",
  "地震は怖いです。": "/pkg_l47/assets/audio/a_c95685d18190b072.m4a",
  "長生きします": "/pkg_l47/assets/audio/a_c961f0344ea0de0d.m4a",
  "天気予報": "/pkg_l47/assets/audio/a_97d2e2825721026f.m4a",
  "天気予報によると、明日は雨だそうです。": "/pkg_l47/assets/audio/a_e64938e925e8a72b.m4a",
  "田中さんは忙しいようです。": "/pkg_l47/assets/audio/a_8c001dea2aaee78d.m4a",
  "匂いがします": "/pkg_l47/assets/audio/a_3c1e254f5682f663.m4a",
  "日本人は長生きするそうです。": "/pkg_l47/assets/audio/a_9b44c1db33031849.m4a",
  "日本文学に興味があります。": "/pkg_l47/assets/audio/a_bd3305a1ae799a40.m4a",
  "発表": "/pkg_l47/assets/audio/a_28630a41fbe003c8.m4a",
  "反対": "/pkg_l47/assets/audio/a_49be16ea6f929f39.m4a",
  "怖い": "/pkg_l47/assets/audio/a_7fe72c99cef50ee0.m4a",
  "父は留学に反対です。": "/pkg_l47/assets/audio/a_acc6d1e210078c65.m4a",
  "文学": "/pkg_l47/assets/audio/a_de5ec30b74f8fa67.m4a",
  "別れます": "/pkg_l47/assets/audio/a_da7d0315f2bac78f.m4a",
  "味がします": "/pkg_l47/assets/audio/a_6d8f23127ed4e806.m4a",
  "明るくて、料理が上手な人です。": "/pkg_l47/assets/audio/a_2b6ff876da17cf4f.m4a",
  "隣の部屋から変な音がします。": "/pkg_l47/assets/audio/a_eb3cb0b4db4d1b86.m4a"
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
