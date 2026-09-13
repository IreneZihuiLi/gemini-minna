const LOCAL_AUDIO = {
  "あした病院へ行かなければならないので、午前中休ませていただけませんか。": "/pkg_l48/assets/audio/a_b476e2e8e93bc3a1.m4a",
  "いいことですね": "/pkg_l48/assets/audio/a_4a278fce780a1613.m4a",
  "いいですよ。仕事は大丈夫ですか。": "/pkg_l48/assets/audio/a_b9b72f9f20a3dcef.m4a",
  "ここで降ろしてください。": "/pkg_l48/assets/audio/a_ebc8b03234d39941.m4a",
  "この仕事を私にやらせてください。": "/pkg_l48/assets/audio/a_ba09151d65d62d5d.m4a",
  "はい。今日中に資料を用意しておきます。": "/pkg_l48/assets/audio/a_b13af7e228784c6e.m4a",
  "ファイル": "/pkg_l48/assets/audio/a_6422db7e92b5a031.m4a",
  "ファイルを送ってください。": "/pkg_l48/assets/audio/a_62ecec3b115572c9.m4a",
  "営業": "/pkg_l48/assets/audio/a_28bd4af78446e176.m4a",
  "営業の仕事をしています。": "/pkg_l48/assets/audio/a_5d04a053f1bca035.m4a",
  "何ですか。": "/pkg_l48/assets/audio/a_f32fc876c22aeb78.m4a",
  "荷物を家まで届けます。": "/pkg_l48/assets/audio/a_bafd931e126be191.m4a",
  "会話を録音します。": "/pkg_l48/assets/audio/a_6d2b39a129b65949.m4a",
  "楽しみます": "/pkg_l48/assets/audio/a_5acde65452a18c30.m4a",
  "嫌": "/pkg_l48/assets/audio/a_7b59b16db1db258c.m4a",
  "嫌なことを無理にさせません。": "/pkg_l48/assets/audio/a_1322df6248413ff5.m4a",
  "厳しい": "/pkg_l48/assets/audio/a_afb43b194061e961.m4a",
  "降ろします": "/pkg_l48/assets/audio/a_7ab76c3f00dad7e5.m4a",
  "今日は少し休ませていただけませんか。": "/pkg_l48/assets/audio/a_4419fc407a63cf49.m4a",
  "子どもにいろいろな経験をさせるのはいいことですね。": "/pkg_l48/assets/audio/a_05294af92345361f.m4a",
  "子どもに自由に遊ばせます。": "/pkg_l48/assets/audio/a_ff064319df880f0c.m4a",
  "子どもの世話をします。": "/pkg_l48/assets/audio/a_94ef4c15efccd289.m4a",
  "子どもを自由に遊ばせます。": "/pkg_l48/assets/audio/a_150cffd18d5788cf.m4a",
  "子どもを塾へ行かせます。": "/pkg_l48/assets/audio/a_611762ea4e1bc100.m4a",
  "自由に": "/pkg_l48/assets/audio/a_56e61294a04e5286.m4a",
  "週末を楽しみます。": "/pkg_l48/assets/audio/a_0f68e874372d1770.m4a",
  "塾": "/pkg_l48/assets/audio/a_6b3243e11f854dc8.m4a",
  "書きます → 書かせます。": "/pkg_l48/assets/audio/a_c2556fd84587c273.m4a",
  "食べます → 食べさせます。": "/pkg_l48/assets/audio/a_ae130f6f47906ea4.m4a",
  "世話をします": "/pkg_l48/assets/audio/a_cfe65e9c5bab5576.m4a",
  "生徒": "/pkg_l48/assets/audio/a_d287d055b1664b1c.m4a",
  "先生は学生に作文を書かせました。": "/pkg_l48/assets/audio/a_8a4a942fd6c45e8f.m4a",
  "先生は学生を立たせました。": "/pkg_l48/assets/audio/a_41a11b4890fa4bc1.m4a",
  "先生は厳しいです。": "/pkg_l48/assets/audio/a_5cc3b1e79942fa61.m4a",
  "先生は生徒に作文を書かせます。": "/pkg_l48/assets/audio/a_a6ec68a00f7e4e22.m4a",
  "早退させていただけませんか。": "/pkg_l48/assets/audio/a_5cd0519f87894e3a.m4a",
  "届けます": "/pkg_l48/assets/audio/a_ec6e7ed31da9ee79.m4a",
  "部長、少しお願いがあるんですが。": "/pkg_l48/assets/audio/a_f6402621ffb27b5c.m4a",
  "部長はミラーさんに資料を届けさせました。": "/pkg_l48/assets/audio/a_25768473fd12729c.m4a",
  "母は子どもを寝させました。": "/pkg_l48/assets/audio/a_b2f39eb9a2b8e5aa.m4a",
  "母は子どもを買い物に行かせました。": "/pkg_l48/assets/audio/a_e1148eeed48ba9a2.m4a",
  "予定": "/pkg_l48/assets/audio/a_eb000e95440a8003.m4a",
  "予定を確認します。": "/pkg_l48/assets/audio/a_46457705241177b8.m4a",
  "録音します": "/pkg_l48/assets/audio/a_594bb2392ebf5dcc.m4a"
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
