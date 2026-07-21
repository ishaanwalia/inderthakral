const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const SC = "C:/Users/Admin/AppData/Local/Temp/claude/C--Users-Admin-Desktop-inderthakral/bda81ef0-18ec-467a-9927-2ac142c52d24/scratchpad";
const REPO = "C:/Users/Admin/Desktop/inderthakral";

const OUT_WIDTH = 1280;
const QUALITY = 60;
const TARGET_FRAMES = 220;

function orderedSourceFiles(seqDir) {
  const parts = ["part1", "part2", "part3"];
  const counts = { part1: 270, part2: 270, part3: 210 };
  const files = [];
  for (const p of parts) {
    const dir = path.join(SC, "extract", seqDir, p);
    for (let i = 1; i <= counts[p]; i++) {
      const name = `ezgif-frame-${String(i).padStart(3, "0")}.jpg`;
      files.push(path.join(dir, name));
    }
  }
  return files;
}

function pickIndices(total, target) {
  const idx = [];
  for (let i = 0; i < target; i++) {
    idx.push(Math.round((i * (total - 1)) / (target - 1)));
  }
  return idx;
}

async function processSequence({ name, outDir }) {
  const sources = orderedSourceFiles(name);
  const indices = pickIndices(sources.length, TARGET_FRAMES);

  fs.mkdirSync(outDir, { recursive: true });
  for (const f of fs.readdirSync(outDir)) {
    if (/^frame_\d+\.webp$/.test(f)) fs.unlinkSync(path.join(outDir, f));
  }

  for (let i = 0; i < indices.length; i++) {
    const srcPath = sources[indices[i]];
    const outNum = String(i + 1).padStart(4, "0");
    const outPath = path.join(outDir, `frame_${outNum}.webp`);

    await sharp(srcPath).resize({ width: OUT_WIDTH }).webp({ quality: QUALITY }).toFile(outPath);
    if ((i + 1) % 40 === 0) console.log(`${name}: ${i + 1}/${indices.length}`);
  }
  console.log(`${name}: done, ${indices.length} frames -> ${outDir}`);
}

(async () => {
  await processSequence({
    name: "city-beautiful",
    outDir: path.join(REPO, "public/frames/city-beautiful"),
    watermarkTailCount: 0,
  });
  await processSequence({
    name: "lake",
    outDir: path.join(REPO, "public/frames/lake"),
  });
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
