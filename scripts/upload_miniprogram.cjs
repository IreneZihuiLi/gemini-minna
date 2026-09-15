// Uploads (or previews) the WeChat mini program with the official miniprogram-ci,
// so a new version appears in the mini program console without opening DevTools.
//
//   node scripts/upload_miniprogram.cjs            # upload as version from package.json
//   node scripts/upload_miniprogram.cjs --preview  # build a preview QR code (miniprogram-preview.png)
//
// The upload key comes from (first match wins):
//   MP_PRIVATE_KEY        the key file's content (used by GitHub Actions)
//   MP_PRIVATE_KEY_PATH   a path to the key file
//   ./private.<appid>.key next to package.json (git-ignored)
// Download it from 小程序后台 → 开发管理 → 开发设置 → 小程序代码上传 → 密钥.
const fs = require("fs");
const os = require("os");
const path = require("path");
const { execSync } = require("child_process");
const ci = require("miniprogram-ci");

const root = path.resolve(__dirname, "..");
const projectPath = path.join(root, "miniprogram");
const projectConfig = JSON.parse(fs.readFileSync(path.join(projectPath, "project.config.json"), "utf8"));
const pkg = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8"));
const appid = projectConfig.appid;
const preview = process.argv.includes("--preview");

function resolvePrivateKeyPath() {
  if (process.env.MP_PRIVATE_KEY) {
    const tmp = path.join(fs.mkdtempSync(path.join(os.tmpdir(), "mpkey-")), `private.${appid}.key`);
    fs.writeFileSync(tmp, process.env.MP_PRIVATE_KEY, { mode: 0o600 });
    return tmp;
  }
  const candidates = [process.env.MP_PRIVATE_KEY_PATH, path.join(root, `private.${appid}.key`)].filter(Boolean);
  const found = candidates.find((p) => fs.existsSync(p));
  if (!found) {
    console.error(`Upload key not found. Put private.${appid}.key in ${root} (download it from`);
    console.error("小程序后台 → 开发管理 → 开发设置 → 小程序代码上传) or set MP_PRIVATE_KEY / MP_PRIVATE_KEY_PATH.");
    process.exit(2);
  }
  return found;
}

function gitSummary() {
  try {
    return execSync("git log -1 --format=%s", { cwd: root }).toString().trim().slice(0, 80);
  } catch (e) {
    return "update";
  }
}

async function main() {
  const version = process.env.MP_VERSION || pkg.version;
  const desc = process.env.MP_DESC || gitSummary();
  const project = new ci.Project({
    appid,
    type: "miniProgram",
    projectPath,
    privateKeyPath: resolvePrivateKeyPath(),
    ignores: ["node_modules/**/*"]
  });
  const setting = {
    es6: true,
    enhance: true,
    minify: true,
    minifyJS: true,
    minifyWXML: true,
    minifyWXSS: true,
    autoPrefixWXSS: true
  };
  const onProgressUpdate = (info) => {
    const msg = typeof info === "string" ? info : info && info.message;
    if (msg) console.log(msg);
  };

  if (preview) {
    const out = path.join(root, "miniprogram-preview.png");
    await ci.preview({ project, desc, setting, qrcodeFormat: "image", qrcodeOutputDest: out, onProgressUpdate });
    console.log(`Preview QR code written to ${out}`);
    return;
  }

  const result = await ci.upload({ project, version, desc, setting, onProgressUpdate });
  console.log(`Uploaded ${appid} as version ${version}: ${desc}`);
  if (result && result.subPackageInfo) {
    for (const p of result.subPackageInfo) console.log(`  ${p.name}: ${(p.size / 1024).toFixed(0)} KB`);
  }
}

main().catch((error) => {
  console.error(error && error.message ? error.message : error);
  process.exit(1);
});
