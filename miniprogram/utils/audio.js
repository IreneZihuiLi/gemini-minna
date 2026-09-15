// Plays pronunciation clips from AUDIO_BASE_URL, caching each clip in the mini
// program's local storage after the first download. Clips are named
// a_<sha1(text)[0:16]>.m4a (the same scheme as the web app), so no lookup
// table has to ship inside the package.
const { AUDIO_BASE_URL } = require("./config");

const CACHE_DIR = `${wx.env.USER_DATA_PATH}/audio`;
let fs = null;
let dirReady = false;
let current = null;

function fileSystem() {
  if (!fs) fs = wx.getFileSystemManager();
  return fs;
}

function ensureCacheDir() {
  if (dirReady) return;
  try {
    fileSystem().accessSync(CACHE_DIR);
  } catch (e) {
    try {
      fileSystem().mkdirSync(CACHE_DIR, true);
    } catch (err) {
      console.warn("Cannot create audio cache dir", err);
    }
  }
  dirReady = true;
}

// ---- SHA-1 over the UTF-8 bytes of a string (matches Node/Python sha1) ----
function utf8Bytes(str) {
  const bytes = [];
  for (let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i);
    if (code >= 0xd800 && code <= 0xdbff && i + 1 < str.length) {
      const low = str.charCodeAt(i + 1);
      if (low >= 0xdc00 && low <= 0xdfff) {
        code = 0x10000 + ((code - 0xd800) << 10) + (low - 0xdc00);
        i++;
      }
    }
    if (code < 0x80) bytes.push(code);
    else if (code < 0x800) bytes.push(0xc0 | (code >> 6), 0x80 | (code & 0x3f));
    else if (code < 0x10000) bytes.push(0xe0 | (code >> 12), 0x80 | ((code >> 6) & 0x3f), 0x80 | (code & 0x3f));
    else bytes.push(0xf0 | (code >> 18), 0x80 | ((code >> 12) & 0x3f), 0x80 | ((code >> 6) & 0x3f), 0x80 | (code & 0x3f));
  }
  return bytes;
}

function rotl(n, s) {
  return ((n << s) | (n >>> (32 - s))) >>> 0;
}

function sha1Hex(str) {
  const bytes = utf8Bytes(str);
  const bitLen = bytes.length * 8;
  bytes.push(0x80);
  while (bytes.length % 64 !== 56) bytes.push(0);
  for (let i = 7; i >= 0; i--) bytes.push(i >= 4 ? 0 : (bitLen >>> (i * 8)) & 0xff);

  let h0 = 0x67452301, h1 = 0xefcdab89, h2 = 0x98badcfe, h3 = 0x10325476, h4 = 0xc3d2e1f0;
  const w = new Array(80);
  for (let offset = 0; offset < bytes.length; offset += 64) {
    for (let i = 0; i < 16; i++) {
      const j = offset + i * 4;
      w[i] = ((bytes[j] << 24) | (bytes[j + 1] << 16) | (bytes[j + 2] << 8) | bytes[j + 3]) >>> 0;
    }
    for (let i = 16; i < 80; i++) w[i] = rotl(w[i - 3] ^ w[i - 8] ^ w[i - 14] ^ w[i - 16], 1);
    let a = h0, b = h1, c = h2, d = h3, e = h4;
    for (let i = 0; i < 80; i++) {
      let f, k;
      if (i < 20) { f = (b & c) | (~b & d); k = 0x5a827999; }
      else if (i < 40) { f = b ^ c ^ d; k = 0x6ed9eba1; }
      else if (i < 60) { f = (b & c) | (b & d) | (c & d); k = 0x8f1bbcdc; }
      else { f = b ^ c ^ d; k = 0xca62c1d6; }
      const temp = (rotl(a, 5) + (f >>> 0) + e + k + w[i]) >>> 0;
      e = d; d = c; c = rotl(b, 30); b = a; a = temp;
    }
    h0 = (h0 + a) >>> 0; h1 = (h1 + b) >>> 0; h2 = (h2 + c) >>> 0; h3 = (h3 + d) >>> 0; h4 = (h4 + e) >>> 0;
  }
  return [h0, h1, h2, h3, h4].map((n) => ("00000000" + n.toString(16)).slice(-8)).join("");
}

function clipName(text) {
  return `a_${sha1Hex(String(text).trim()).slice(0, 16)}.m4a`;
}

function remoteUrl(text) {
  return AUDIO_BASE_URL + clipName(text);
}

function localPath(text) {
  return `${CACHE_DIR}/${clipName(text)}`;
}

function toast(title) {
  wx.showToast({ title, icon: "none" });
}

function stopCurrent() {
  if (current) {
    try {
      current.stop();
      current.destroy();
    } catch (e) {
      // ignore
    }
    current = null;
  }
}

function playSource(src, onError) {
  stopCurrent();
  const audio = wx.createInnerAudioContext();
  current = audio;
  audio.src = src;
  audio.obeyMuteSwitch = false;
  audio.onError((error) => {
    console.warn("Audio playback failed", src, error);
    audio.destroy();
    if (current === audio) current = null;
    if (onError) onError(error);
  });
  audio.onEnded(() => {
    audio.destroy();
    if (current === audio) current = null;
  });
  audio.play();
}

function removeFile(path) {
  try {
    fileSystem().unlinkSync(path);
  } catch (e) {
    // ignore
  }
}

function explainFailure(error) {
  const msg = (error && (error.errMsg || error.errMsg === "" ? error.errMsg : String(error))) || "";
  if (/domain list|合法域名/i.test(msg)) {
    return "音频域名未配置：请在真机打开调试模式，或在小程序后台配置 downloadFile 合法域名";
  }
  if (/timeout|time out/i.test(msg)) return "音频下载超时，请检查网络";
  return msg ? `音频加载失败：${msg.slice(0, 60)}` : "音频加载失败";
}

// Download the clip into the cache directory; resolves with the local path.
function download(text, path, onSuccess, onFailure) {
  wx.downloadFile({
    url: remoteUrl(text),
    filePath: path,
    success: (res) => {
      if (res.statusCode === 200) {
        onSuccess(res.filePath || path);
      } else {
        removeFile(path);
        onFailure({ errMsg: res.statusCode === 404 ? "没有这条音频 (404)" : `HTTP ${res.statusCode}` });
      }
    },
    fail: (error) => {
      removeFile(path);
      onFailure(error);
    }
  });
}

// Second attempt after direct streaming failed: download, then play the file.
function downloadAndPlay(text, path, streamError) {
  download(
    text,
    path,
    (localFile) => playSource(localFile, (error) => {
      removeFile(path);
      toast(explainFailure(error));
    }),
    (error) => {
      console.warn("Audio unavailable", remoteUrl(text), streamError, error);
      toast(explainFailure(error));
    }
  );
}

// Play straight from the remote URL (starts immediately, no whitelist needed for
// media sources on most base libraries) and cache a copy quietly for next time.
function playRemote(text, path) {
  playSource(remoteUrl(text), (error) => {
    console.warn("Streaming failed, trying download", remoteUrl(text), error);
    downloadAndPlay(text, path, error);
  });
  download(text, path, () => {}, () => {});
}

/** Play the pronunciation clip for `text` (cached copy first, otherwise streamed). */
function playPronunciation(text) {
  if (!text) return;
  ensureCacheDir();
  const path = localPath(text);
  let cached = false;
  try {
    fileSystem().accessSync(path);
    cached = true;
  } catch (e) {
    cached = false;
  }
  if (cached) {
    playSource(path, () => {
      // corrupt cache entry: drop it and stream instead
      removeFile(path);
      playRemote(text, path);
    });
    return;
  }
  playRemote(text, path);
}

/** Remove every cached clip (e.g. after changing AUDIO_BASE_URL). */
function clearAudioCache() {
  try {
    fileSystem().rmdirSync(CACHE_DIR, true);
  } catch (e) {
    // ignore
  }
  dirReady = false;
}

module.exports = {
  playPronunciation,
  clearAudioCache,
  remoteUrl,
  clipName,
  sha1Hex
};
