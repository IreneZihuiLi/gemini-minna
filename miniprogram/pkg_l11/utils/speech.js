const LOCAL_AUDIO = {
  "1か月に1回映画を見ます。": "/pkg_l11/assets/audio/a_63e3b6b60e32adaf.m4a",
  "1週間に1回日本語を習います。": "/pkg_l11/assets/audio/a_c02d3c789348d51b.m4a",
  "1週間に2回テニスをします。": "/pkg_l11/assets/audio/a_7caf1a46021b5839.m4a",
  "500円です。": "/pkg_l11/assets/audio/a_db21ac2a700407f5.m4a",
  "あります": "/pkg_l11/assets/audio/a_8331810b54382b41.m4a",
  "いい天気ですね。お出かけですか。": "/pkg_l11/assets/audio/a_8f91d9b1b49186be.m4a",
  "います": "/pkg_l11/assets/audio/a_c704070ba8aae65a.m4a",
  "ええ、ちょっと郵便局まで。": "/pkg_l11/assets/audio/a_a598ce92c1f91499.m4a",
  "この速達をお願いします。全部でいくらですか。": "/pkg_l11/assets/audio/a_e98db91c78b553c6.m4a",
  "りんごを5つ買いました。": "/pkg_l11/assets/audio/a_c547eaaa4706850c.m4a",
  "りんごをいくつ買いましたか。……4つ買いました。": "/pkg_l11/assets/audio/a_e40a8ede7f4bcb3f.m4a",
  "わたしは日本に1年います。": "/pkg_l11/assets/audio/a_b70172e45c72f367.m4a",
  "一人": "/pkg_l11/assets/audio/a_9d89b6001b4c547f.m4a",
  "何人": "/pkg_l11/assets/audio/a_ae0cac1512250c5c.m4a",
  "家族": "/pkg_l11/assets/audio/a_242e8e5c3fbc85ca.m4a",
  "家族がいます。": "/pkg_l11/assets/audio/a_4efc6b4033be3c0d.m4a",
  "家族は何人ですか。": "/pkg_l11/assets/audio/a_011eaca9677397c2.m4a",
  "会議室にテーブルが7つあります。": "/pkg_l11/assets/audio/a_81c6b4c5efc5afba.m4a",
  "会社": "/pkg_l11/assets/audio/a_96bbe7e673708b23.m4a",
  "会社があります。": "/pkg_l11/assets/audio/a_d8b9552b3bba9d40.m4a",
  "外国人の学生が2人います。": "/pkg_l11/assets/audio/a_3adaaa5e3c6217c1.m4a",
  "兄": "/pkg_l11/assets/audio/a_1b60f62fba6e4d69.m4a",
  "兄がいます。": "/pkg_l11/assets/audio/a_ce70239788d5000f.m4a",
  "兄弟は一人です。": "/pkg_l11/assets/audio/a_f409f3048483ef46.m4a",
  "兄弟は二人です。": "/pkg_l11/assets/audio/a_f986c9f6c4adb398.m4a",
  "公園": "/pkg_l11/assets/audio/a_1c7fff2e2e56d1ab.m4a",
  "公園があります。": "/pkg_l11/assets/audio/a_50e18ff8d98e1d9f.m4a",
  "姉": "/pkg_l11/assets/audio/a_b1a3afebdb30a1da.m4a",
  "姉がいます。": "/pkg_l11/assets/audio/a_17c40099c7aab69f.m4a",
  "車があります。": "/pkg_l11/assets/audio/a_2544e62c83089130.m4a",
  "上司": "/pkg_l11/assets/audio/a_323450745cc2295b.m4a",
  "上司がいます。": "/pkg_l11/assets/audio/a_9ade4b6ee320ffc5.m4a",
  "大阪から東京までどのくらいかかりますか。……新幹線で2時間半かかります。": "/pkg_l11/assets/audio/a_5adfd621501c2743.m4a",
  "大阪から東京まで新幹線で2時間半かかります。": "/pkg_l11/assets/audio/a_4f6e3b7eba2e5669.m4a",
  "弟": "/pkg_l11/assets/audio/a_276330ed97025eb2.m4a",
  "弟がいます。": "/pkg_l11/assets/audio/a_99fe800508298801.m4a",
  "店": "/pkg_l11/assets/audio/a_22df192e24c152ea.m4a",
  "店があります。": "/pkg_l11/assets/audio/a_eaac2c8fe0619a1e.m4a",
  "二人": "/pkg_l11/assets/audio/a_d98d70afea3592c5.m4a",
  "父": "/pkg_l11/assets/audio/a_0b27d61a0761080f.m4a",
  "父がいます。": "/pkg_l11/assets/audio/a_cc45da10c9a81e51.m4a",
  "母": "/pkg_l11/assets/audio/a_78ce0b021c44c8ba.m4a",
  "母がいます。": "/pkg_l11/assets/audio/a_b15a67fe55902439.m4a",
  "妹": "/pkg_l11/assets/audio/a_28f894973975d776.m4a",
  "妹がいます。": "/pkg_l11/assets/audio/a_341a27b64297027b.m4a",
  "毎晩7時間寝ます。": "/pkg_l11/assets/audio/a_4046996db18c04a0.m4a",
  "友達": "/pkg_l11/assets/audio/a_e4fb289f39c70def.m4a",
  "友達がいます。": "/pkg_l11/assets/audio/a_51a76526f34e7825.m4a"
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
