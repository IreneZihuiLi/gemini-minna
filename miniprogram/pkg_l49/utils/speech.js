const LOCAL_AUDIO = {
  "いらっしゃいます": "/pkg_l49/assets/audio/a_525efed76c458f79.m4a",
  "おっしゃいます": "/pkg_l49/assets/audio/a_80ab8fa0a9ae885c.m4a",
  "お帰りは何時ですか。": "/pkg_l49/assets/audio/a_a7c05cd587bdd005.m4a",
  "こちらにお掛けください。": "/pkg_l49/assets/audio/a_5d749f09cc93c1a3.m4a",
  "このカードはどなたでも利用できます。": "/pkg_l49/assets/audio/a_ff49fa9bc3af3dd4.m4a",
  "この資料をご覧ください。": "/pkg_l49/assets/audio/a_291e906a1a5d533d.m4a",
  "ご存じです": "/pkg_l49/assets/audio/a_7e4324c3ac85c250.m4a",
  "ご覧になります": "/pkg_l49/assets/audio/a_5fb7c900628bf7a0.m4a",
  "そうですか。では、これをお渡しください。": "/pkg_l49/assets/audio/a_51c66574dc16fdbe.m4a",
  "たまに": "/pkg_l49/assets/audio/a_1b6008f5601c58dc.m4a",
  "たまに映画をご覧になります。": "/pkg_l49/assets/audio/a_a232971ecd4742b7.m4a",
  "ちっとも": "/pkg_l49/assets/audio/a_f5f1ce28b3fae7d3.m4a",
  "ちっともわかりません。": "/pkg_l49/assets/audio/a_d2d315dddc7e7ec2.m4a",
  "なさいます": "/pkg_l49/assets/audio/a_384f220b7dc08847.m4a",
  "はい。お名前を伺ってもよろしいですか。": "/pkg_l49/assets/audio/a_e95391750b6a040f.m4a",
  "バス停": "/pkg_l49/assets/audio/a_10a2b84f0b48b721.m4a",
  "バス停はどちらですか。": "/pkg_l49/assets/audio/a_7683b9341ac09366.m4a",
  "ミラーと申します。先生によろしくお伝えください。": "/pkg_l49/assets/audio/a_30cace4b2e9c90d1.m4a",
  "挨拶": "/pkg_l49/assets/audio/a_764811986a03642e.m4a",
  "遠慮なく": "/pkg_l49/assets/audio/a_fd44e3a94b85733b.m4a",
  "遠慮なく召し上がってください。": "/pkg_l49/assets/audio/a_a0381375cde3666d.m4a",
  "奥様": "/pkg_l49/assets/audio/a_3172b0735657b89e.m4a",
  "奥様もいらっしゃいますか。": "/pkg_l49/assets/audio/a_820e2cb2ed06163a.m4a",
  "何を召し上がりますか。": "/pkg_l49/assets/audio/a_f07cf62cebc010ac.m4a",
  "過ごします": "/pkg_l49/assets/audio/a_3f66b198b19fffb0.m4a",
  "掛けます": "/pkg_l49/assets/audio/a_6a91ba5c08269ac7.m4a",
  "帰り": "/pkg_l49/assets/audio/a_8066f371e59eaf09.m4a",
  "京都の旅館に泊まりました。": "/pkg_l49/assets/audio/a_1fd7b154d67b8ea6.m4a",
  "勤めます": "/pkg_l49/assets/audio/a_319c4c5b4a5dd742.m4a",
  "山田先生はいらっしゃいますか。": "/pkg_l49/assets/audio/a_94154b18ca314538.m4a",
  "社長が挨拶なさいました。": "/pkg_l49/assets/audio/a_e9bf51c1f80b92b7.m4a",
  "社長はもうお帰りになりました。": "/pkg_l49/assets/audio/a_0db7d242a204aaf5.m4a",
  "週末は家で過ごしました。": "/pkg_l49/assets/audio/a_e8d902c4f53a92ee.m4a",
  "召し上がります": "/pkg_l49/assets/audio/a_a177324cea419ca8.m4a",
  "少々お待ちください。": "/pkg_l49/assets/audio/a_42c01d477e0fe36e.m4a",
  "先生はこのニュースをご存じです。": "/pkg_l49/assets/audio/a_ebb1bf77f78e62de.m4a",
  "先生はこの本をお読みになりました。": "/pkg_l49/assets/audio/a_3660657f5c92607f.m4a",
  "先生はこの本をご覧になりました。": "/pkg_l49/assets/audio/a_4913fc048694a847.m4a",
  "先生はそうおっしゃいました。": "/pkg_l49/assets/audio/a_c364ae62f81012d5.m4a",
  "先生は何を召し上がりますか。": "/pkg_l49/assets/audio/a_bcd2fef7c328afa9.m4a",
  "先生は研究室にいらっしゃいます。": "/pkg_l49/assets/audio/a_efa954496a93a67c.m4a",
  "先生は先ほどお帰りになりました。": "/pkg_l49/assets/audio/a_db29b0e41081acda.m4a",
  "父は銀行に勤めています。": "/pkg_l49/assets/audio/a_1562ed7f8edda834.m4a",
  "部長はゴルフをなさいます。": "/pkg_l49/assets/audio/a_d855003d14ffd29b.m4a",
  "部長は会議でそうおっしゃいました。": "/pkg_l49/assets/audio/a_6e3ecec6480eab4e.m4a",
  "利用します": "/pkg_l49/assets/audio/a_3fb0be955f0ace1b.m4a",
  "旅館": "/pkg_l49/assets/audio/a_7b24795e07de8d83.m4a"
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
