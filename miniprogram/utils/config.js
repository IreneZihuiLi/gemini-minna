// Where the pronunciation clips live. The web app publishes public/audio to
// GitHub Pages, so the same files can be streamed by the mini program.
// For a released mini program the host must be added to
// 小程序管理后台 → 开发管理 → 开发设置 → 服务器域名 → downloadFile 合法域名
// (and be ICP-filed), so point this at your own server/CDN when you publish.
// During development tick "不校验合法域名" in WeChat DevTools (already set in
// project.config.json via urlCheck: false).
const AUDIO_BASE_URL = "https://irenezihuili.github.io/gemini-minna/audio/";

module.exports = {
  AUDIO_BASE_URL
};
