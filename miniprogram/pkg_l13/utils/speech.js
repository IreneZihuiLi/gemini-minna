const LOCAL_AUDIO = {
  "ええ。": "/pkg_l13/assets/audio/a_88149875daa0d123.m4a",
  "きょうは何も食べたくないです。": "/pkg_l13/assets/audio/a_e3ca8bcc04e39bcb.m4a",
  "ご注文は？": "/pkg_l13/assets/audio/a_7de0ebaa7f66fb56.m4a",
  "それから": "/pkg_l13/assets/audio/a_43fd70d51bf27ede.m4a",
  "デパートで買い物します。": "/pkg_l13/assets/audio/a_f66d2f8acc1413bb.m4a",
  "デパートへ買い物に行きました。": "/pkg_l13/assets/audio/a_0be437ff22ce6aeb.m4a",
  "どうやって": "/pkg_l13/assets/audio/a_fe67c4fb46a08d79.m4a",
  "どうやって行きますか。": "/pkg_l13/assets/audio/a_7b0aeb52848b2003.m4a",
  "どのくらい": "/pkg_l13/assets/audio/a_c1bbdbfa4b4607b5.m4a",
  "どのくらいかかりますか。": "/pkg_l13/assets/audio/a_abc3d8231fcf3e03.m4a",
  "もう12時ですよ。昼ごはんを食べに行きませんか。": "/pkg_l13/assets/audio/a_58240b032a70f883.m4a",
  "わたしはすしを食べたいです。": "/pkg_l13/assets/audio/a_0f2d5b214e3f608d.m4a",
  "わたしはてんぷら定食が欲しいです。": "/pkg_l13/assets/audio/a_88d7b36b0d582451.m4a",
  "わたしはパソコンが欲しいです。": "/pkg_l13/assets/audio/a_719b4e9e08d113d7.m4a",
  "わたしはフランスへ料理を習いに行きます。": "/pkg_l13/assets/audio/a_44443959b8dcc62b.m4a",
  "一人で": "/pkg_l13/assets/audio/a_d978cbdef8681e2d.m4a",
  "一人で行きます。": "/pkg_l13/assets/audio/a_c2efb069b1287121.m4a",
  "映画": "/pkg_l13/assets/audio/a_675d287d3ed08882.m4a",
  "映画を見ます。": "/pkg_l13/assets/audio/a_a7e4283026fa49e1.m4a",
  "泳ぎます": "/pkg_l13/assets/audio/a_b81a159a7d333842.m4a",
  "駅へ友達を迎えます。": "/pkg_l13/assets/audio/a_c78c7664553663c2.m4a",
  "沖縄へ行きたいです。": "/pkg_l13/assets/audio/a_e26ae0a1618b9145.m4a",
  "家族で": "/pkg_l13/assets/audio/a_3c423086915ecc51.m4a",
  "家族で旅行します。": "/pkg_l13/assets/audio/a_cca20d0f697940b8.m4a",
  "会計は別々にお願いします。": "/pkg_l13/assets/audio/a_bd4930fd0c0d0124.m4a",
  "海で泳ぎます。": "/pkg_l13/assets/audio/a_593e7e681d40c250.m4a",
  "迎えます": "/pkg_l13/assets/audio/a_aa985f7542727989.m4a",
  "公園": "/pkg_l13/assets/audio/a_1c7fff2e2e56d1ab.m4a",
  "公園で遊びます。": "/pkg_l13/assets/audio/a_1a2961f18ff76621.m4a",
  "今何がいちばん欲しいですか。……家が欲しいです。": "/pkg_l13/assets/audio/a_f8e2498464814b50.m4a",
  "仕事で疲れました。": "/pkg_l13/assets/audio/a_cd8566287b1260a8.m4a",
  "週末は何をしたいですか。……子どもと遊びたいです。": "/pkg_l13/assets/audio/a_3687465fa8bb2fb2.m4a",
  "出かけます": "/pkg_l13/assets/audio/a_9ca4b9e035cdad61.m4a",
  "新しいパソコンが欲しいです。": "/pkg_l13/assets/audio/a_6068bb85e2699c78.m4a",
  "神戸へインド料理を食べに行きます。": "/pkg_l13/assets/audio/a_af0467fc7ceeca5a.m4a",
  "図書館": "/pkg_l13/assets/audio/a_dbc8c3de0ea56e15.m4a",
  "図書館で勉強します。": "/pkg_l13/assets/audio/a_184fbe1b42e0b02f.m4a",
  "川": "/pkg_l13/assets/audio/a_0f6a7e280c00c99a.m4a",
  "川で泳ぎます。": "/pkg_l13/assets/audio/a_193dd4e7d9b0c694.m4a",
  "昼ご飯を食べます。それから勉強します。": "/pkg_l13/assets/audio/a_60d4e0ccdb44213a.m4a",
  "日曜日に出かけます。": "/pkg_l13/assets/audio/a_2552945334d4bcc7.m4a",
  "買い物します": "/pkg_l13/assets/audio/a_1c91fbebfe8fee70.m4a",
  "博物館": "/pkg_l13/assets/audio/a_08a61b8678ce00e8.m4a",
  "博物館へ行きます。": "/pkg_l13/assets/audio/a_05582767923fe5b5.m4a",
  "疲れます": "/pkg_l13/assets/audio/a_ca42b107a27fb07b.m4a",
  "美術館": "/pkg_l13/assets/audio/a_5c334491092c2c45.m4a",
  "美術館へ行きます。": "/pkg_l13/assets/audio/a_b89c5bfa2b0baec7.m4a",
  "友達と遊びます。": "/pkg_l13/assets/audio/a_1a61b6c4b9cc7b8b.m4a",
  "遊びます": "/pkg_l13/assets/audio/a_18ea162cf7f2c416.m4a"
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
