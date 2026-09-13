const LOCAL_AUDIO = {
  "うまくいきます": "/pkg_l45/assets/audio/a_dee585691cb535f7.m4a",
  "キャンセルします": "/pkg_l45/assets/audio/a_e76fb60bc7b0002b.m4a",
  "キャンプ": "/pkg_l45/assets/audio/a_9d73266cbc88fa95.m4a",
  "コースを間違えた場合は、どうしたらいいですか。": "/pkg_l45/assets/audio/a_578a64cc45222f88.m4a",
  "マラソン大会に参加する皆さんにお知らせします。": "/pkg_l45/assets/audio/a_c7a43d87744325d8.m4a",
  "レバー": "/pkg_l45/assets/audio/a_9c02bd8ed1d2a75a.m4a",
  "レバーを押してください。": "/pkg_l45/assets/audio/a_be7d7b4b43efdd58.m4a",
  "わかりました。ありがとうございます。": "/pkg_l45/assets/audio/a_23b5bb7998838bdb.m4a",
  "以上です": "/pkg_l45/assets/audio/a_c8428d7eae6f2c53.m4a",
  "一生懸命勉強したのに、試験に落ちました。": "/pkg_l45/assets/audio/a_65fbb5855b368373.m4a",
  "雨の場合は、試合は中止です。": "/pkg_l45/assets/audio/a_57c044932fb9374a.m4a",
  "雨の場合は、出発時間を遅らせます。": "/pkg_l45/assets/audio/a_29a36164e2a2bfdf.m4a",
  "雨の場合はキャンプを中止します。": "/pkg_l45/assets/audio/a_6f2694047f100b10.m4a",
  "楽しみに": "/pkg_l45/assets/audio/a_b53dff41844550e5.m4a",
  "丸": "/pkg_l45/assets/audio/a_5cfb93437e7a797f.m4a",
  "急に": "/pkg_l45/assets/audio/a_0f0a25716d9253f1.m4a",
  "急に雨が降りました。": "/pkg_l45/assets/audio/a_b7b51143f5fda8fc.m4a",
  "近くの係に聞いてください。無理をしないでください。": "/pkg_l45/assets/audio/a_422421833ede0459.m4a",
  "係": "/pkg_l45/assets/audio/a_17007488fa7ed779.m4a",
  "係の人に聞いてください。": "/pkg_l45/assets/audio/a_a4c71f435bff2ea4.m4a",
  "仕事がうまくいきました。": "/pkg_l45/assets/audio/a_381ffd115f5e1d9b.m4a",
  "試験で100点を取りました。": "/pkg_l45/assets/audio/a_5aafdf8ab2a6be80.m4a",
  "試合は雨で中止になりました。": "/pkg_l45/assets/audio/a_a0babd5220a34cc1.m4a",
  "資料を用意します。": "/pkg_l45/assets/audio/a_a6da201b3cdb91de.m4a",
  "時間がない場合は、タクシーで行きましょう。": "/pkg_l45/assets/audio/a_cad2b03d8701d8c0.m4a",
  "謝ります": "/pkg_l45/assets/audio/a_a678193991e632d5.m4a",
  "信じます": "/pkg_l45/assets/audio/a_e14d20dd8eef2ef2.m4a",
  "正しい答えに丸をつけます。": "/pkg_l45/assets/audio/a_6ddfd37f6e8ddab9.m4a",
  "説明は以上です。": "/pkg_l45/assets/audio/a_6d634be565abbc5b.m4a",
  "先生の言葉を信じます。": "/pkg_l45/assets/audio/a_b7c5750a05d4173a.m4a",
  "遅れる場合は、連絡してください。": "/pkg_l45/assets/audio/a_ce79d50cafad17e5.m4a",
  "中止": "/pkg_l45/assets/audio/a_67847e89ae19753b.m4a",
  "点": "/pkg_l45/assets/audio/a_1d59ea7cbbee6687.m4a",
  "都合が悪い場合は、早めに連絡してください。": "/pkg_l45/assets/audio/a_cbd8b2fe77026af4.m4a",
  "日曜日なのに、会社へ行かなければなりません。": "/pkg_l45/assets/audio/a_5bc2d975fa28056f.m4a",
  "保証書": "/pkg_l45/assets/audio/a_875da06ae53ab29d.m4a",
  "保証書を見せてください。": "/pkg_l45/assets/audio/a_785887bf9eabb7d9.m4a",
  "薬を飲んだのに、まだ熱が下がりません。": "/pkg_l45/assets/audio/a_d992a01a89711db3.m4a",
  "友達に謝りました。": "/pkg_l45/assets/audio/a_f63b44af4820c18d.m4a",
  "予約をキャンセルします。": "/pkg_l45/assets/audio/a_10dfbe99363bad7a.m4a",
  "用意します": "/pkg_l45/assets/audio/a_059ce2acb0a2bb99.m4a",
  "旅行の前に、ホテルを予約しておきます。": "/pkg_l45/assets/audio/a_4410d59b11050a4d.m4a",
  "旅行を楽しみにしていたのに、キャンセルになりました。": "/pkg_l45/assets/audio/a_5a003da9f48e4fd5.m4a",
  "旅行を楽しみにしています。": "/pkg_l45/assets/audio/a_aeccddb2b929d8fb.m4a",
  "領収書": "/pkg_l45/assets/audio/a_e52b11f59997b107.m4a",
  "領収書をお願いします。": "/pkg_l45/assets/audio/a_6acc9581f4a0b4d4.m4a"
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
