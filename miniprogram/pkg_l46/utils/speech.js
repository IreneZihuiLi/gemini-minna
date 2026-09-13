const LOCAL_AUDIO = {
  "ありがとうございます。たった今帰って来たところです。": "/pkg_l46/assets/audio/a_6365c82e72877011.m4a",
  "ガスサービスセンター": "/pkg_l46/assets/audio/a_224628bf7eeae16f.m4a",
  "ガスサービスセンターに電話します。": "/pkg_l46/assets/audio/a_dcecfe50ff2be80d.m4a",
  "ガスレンジ": "/pkg_l46/assets/audio/a_d958e752b345eb1f.m4a",
  "ガスレンジの火がつきません。": "/pkg_l46/assets/audio/a_84aa5e3960d29675.m4a",
  "たった今": "/pkg_l46/assets/audio/a_03593c5f184c463a.m4a",
  "たった今帰って来たところです。": "/pkg_l46/assets/audio/a_d11c7474af70234b.m4a",
  "ところです": "/pkg_l46/assets/audio/a_d041feeed9f109ac.m4a",
  "ばかりです": "/pkg_l46/assets/audio/a_ab0d470e37397c36.m4a",
  "バスは出たばかりです。": "/pkg_l46/assets/audio/a_ed537f0ac8818f6b.m4a",
  "パンを焼いたところです。": "/pkg_l46/assets/audio/a_2d6e1c23c8a3d00a.m4a",
  "ミラーさん、荷物が届いていますよ。": "/pkg_l46/assets/audio/a_adb1c4827a1ddaf3.m4a",
  "荷物はもうすぐ届くはずです。": "/pkg_l46/assets/audio/a_cdc66f40f76fb812.m4a",
  "荷物は明日届くはずです。": "/pkg_l46/assets/audio/a_ac58d3104eb0abd2.m4a",
  "会議は今始まったところです。": "/pkg_l46/assets/audio/a_bff8f6d13670003a.m4a",
  "楽しかったです。でも帰ったばかりなので、少し疲れています。": "/pkg_l46/assets/audio/a_c908684aeb0f036d.m4a",
  "帰って来ます": "/pkg_l46/assets/audio/a_f87b3219c1e75c35.m4a",
  "具合": "/pkg_l46/assets/audio/a_6021c6a96fad57be.m4a",
  "原因": "/pkg_l46/assets/audio/a_1ff9c3d001126d88.m4a",
  "今、田中さんは留守です。": "/pkg_l46/assets/audio/a_0e42a43754f66c3a.m4a",
  "今から出かけるところです。": "/pkg_l46/assets/audio/a_f815d1c76fda3c4a.m4a",
  "今電話しているところです。": "/pkg_l46/assets/audio/a_b339d931b3fe7b03.m4a",
  "今日はゆっくり休んだほうがいいですよ。": "/pkg_l46/assets/audio/a_69fbaa321087bd36.m4a",
  "今日は食欲がありません。": "/pkg_l46/assets/audio/a_89b220f0a1129f90.m4a",
  "姉は大学を卒業したばかりです。": "/pkg_l46/assets/audio/a_3d236d10d3cc7488.m4a",
  "子どもは今帰って来たところです。": "/pkg_l46/assets/audio/a_babd955aeae789f7.m4a",
  "子どもは今宿題をしているところです。": "/pkg_l46/assets/audio/a_efb08c364101c4e7.m4a",
  "事故の原因を調べます。": "/pkg_l46/assets/audio/a_1c4236a36ab158a1.m4a",
  "出ます": "/pkg_l46/assets/audio/a_e8b4cf221f7e9f9c.m4a",
  "書類を受付に渡します。": "/pkg_l46/assets/audio/a_d590eb07b76f1e08.m4a",
  "焼きます": "/pkg_l46/assets/audio/a_9fa036cb21fd48b0.m4a",
  "食欲": "/pkg_l46/assets/audio/a_209a60bbe5d3d2a4.m4a",
  "先月会社に入ったばかりです。": "/pkg_l46/assets/audio/a_53293d5c19087a32.m4a",
  "先月日本へ来たばかりです。": "/pkg_l46/assets/audio/a_2376fbfc738162fe.m4a",
  "卒業します": "/pkg_l46/assets/audio/a_189ac39d80b82194.m4a",
  "体の具合が悪いです。": "/pkg_l46/assets/audio/a_de6951e7018bcbac.m4a",
  "宅配便": "/pkg_l46/assets/audio/a_3d9e814f06ff15e1.m4a",
  "宅配便が届きました。": "/pkg_l46/assets/audio/a_5274871eb0563443.m4a",
  "昼ご飯を食べたばかりです。": "/pkg_l46/assets/audio/a_2d524a18702a4169.m4a",
  "注射": "/pkg_l46/assets/audio/a_794e66405c00730d.m4a",
  "注射をします。": "/pkg_l46/assets/audio/a_334a23545287388f.m4a",
  "弟は大学に入学したばかりです。": "/pkg_l46/assets/audio/a_4afa8799f3350c9a.m4a",
  "田中さんは留守のはずです。": "/pkg_l46/assets/audio/a_28bd7fb918786c77.m4a",
  "渡します": "/pkg_l46/assets/audio/a_e78842ff7f102a9c.m4a",
  "届きます": "/pkg_l46/assets/audio/a_f913ed3806a80a53.m4a",
  "入学します": "/pkg_l46/assets/audio/a_b2bbcf373f86a2ae.m4a",
  "留守": "/pkg_l46/assets/audio/a_7e8f01252d5c448a.m4a",
  "旅行はどうでしたか。": "/pkg_l46/assets/audio/a_c246ae1b951a26cc.m4a"
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
