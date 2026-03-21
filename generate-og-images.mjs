import fs from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright";

const root = "/Users/pmanopen/Documents/d4-resource-hub";
const outDir = path.join(root, "assets", "og");
const brandSvg = await fs.readFile(
  path.join(root, "assets", "brand", "d4rh-mark.svg"),
  "utf8",
);

const baseDefs = [
  [
    "index.html",
    "og-home.png",
    "Diablo 4 Resource Hub",
    "Builds, news, tools, creators, and fast answers in one place.",
    "#c9a227",
    "#8b9dc3",
  ],
  [
    "classes.html",
    "og-classes.png",
    "Class Comparison",
    "Pick the right class for solo play, groups, farming, or bossing.",
    "#c9a227",
    "#5c7cdb",
  ],
  [
    "endgame-builds.html",
    "og-endgame.png",
    "Endgame Builds",
    "High-end builds for Nightmare Dungeons, The Pit, and endgame grind.",
    "#c9a227",
    "#7a5630",
  ],
  [
    "leveling-builds.html",
    "og-leveling.png",
    "Leveling Builds",
    "The fastest leveling picks and easiest starts for Season 12.",
    "#c9a227",
    "#4ab2ad",
  ],
  [
    "speed-farming.html",
    "og-speed.png",
    "Speed Farming",
    "Best throughput builds for XP, gold, Helltides, and fast clears.",
    "#c9a227",
    "#af3c4a",
  ],
  [
    "boss-builds.html",
    "og-boss.png",
    "Boss Builds",
    "Single-target burst, stable uptime, and stronger boss kill paths.",
    "#c9a227",
    "#b87939",
  ],
  [
    "resources.html",
    "og-resources.png",
    "Resource Directory",
    "Build sites, tier lists, tools, creators, and communities organized well.",
    "#c9a227",
    "#8b9dc3",
  ],
  [
    "creators.html",
    "og-creators.png",
    "Creator Directory",
    "YouTube, Twitch, and community picks for Diablo 4 players.",
    "#c9a227",
    "#af3c4a",
  ],
  [
    "videos.html",
    "og-videos.png",
    "Video Hub",
    "Curated build guides, season updates, deep dives, and hidden gems.",
    "#c9a227",
    "#4ab2ad",
  ],
  [
    "news.html",
    "og-news.png",
    "Newsroom",
    "Blog-style Diablo 4 news with season, patch, and expansion coverage.",
    "#c9a227",
    "#e63946",
  ],
  [
    "season.html",
    "og-season.png",
    "Season of Slaughter",
    "Current season mechanics, roadmap context, and official timing.",
    "#c9a227",
    "#e63946",
  ],
  [
    "tierlists.html",
    "og-tierlists.png",
    "Tier Lists",
    "A cleaner read on endgame, leveling, farming, and bossing meta.",
    "#c9a227",
    "#8b9dc3",
  ],
  [
    "new-player.html",
    "og-new-player.png",
    "New Player Guide",
    "A faster starting path from class choice to your first strong build.",
    "#c9a227",
    "#4ab2ad",
  ],
  [
    "tools.html",
    "og-tools.png",
    "Tools & Planners",
    "Useful calculators, planners, and quick-reference tools.",
    "#c9a227",
    "#5c7cdb",
  ],
  [
    "communities.html",
    "og-communities.png",
    "Communities",
    "Discords, Twitch, forums, and better places to learn with other players.",
    "#c9a227",
    "#8b9dc3",
  ],
  [
    "crafting.html",
    "og-crafting.png",
    "Crafting Guide",
    "Tempering, Masterworking, aspects, and material priorities.",
    "#c9a227",
    "#b87939",
  ],
  [
    "dungeons.html",
    "og-dungeons.png",
    "Dungeon Guide",
    "Routes, dungeon value, and practical farming advice.",
    "#c9a227",
    "#5e9457",
  ],
  [
    "timeline.html",
    "og-timeline.png",
    "Season Timeline",
    "A cleaner look at Diablo 4 seasonal history and roadmap context.",
    "#c9a227",
    "#8b9dc3",
  ],
  [
    "editorial.html",
    "og-editorial.png",
    "Editorial Standards",
    "How the site handles official sources, summaries, and trust markers.",
    "#c9a227",
    "#8b9dc3",
  ],
  [
    "newsroom-desk.html",
    "og-newsroom-desk.png",
    "Newsroom Desk",
    "Meet the editorial desk behind the Diablo 4 newsroom, picks, and practical summaries.",
    "#c9a227",
    "#6d7df0",
  ],
];

const articlePages = [
  "news-campfire-2-1-ptr.html",
  "news-dev-livestream.html",
  "news-expansion.html",
  "news-gilded-goblins.html",
  "news-lord-of-hatred.html",
  "news-mothers-blessing-march.html",
  "news-patch-2-5.html",
  "news-patch-2-6.html",
  "news-patch-notes.html",
  "news-prepurchase-lord-of-hatred.html",
  "news-ptr-2-4.html",
  "news-roadmap-2025.html",
  "news-season-of-slaughter.html",
  "news-season.html",
  "news-warlock.html",
];

function paletteFor(file) {
  if (file.includes("warlock")) return ["#c9a227", "#7b61ff"];
  if (
    file.includes("expansion") ||
    file.includes("lord-of-hatred") ||
    file.includes("prepurchase")
  ) {
    return ["#c9a227", "#b63b3b"];
  }
  if (
    file.includes("patch") ||
    file.includes("ptr") ||
    file.includes("campfire")
  ) {
    return ["#c9a227", "#5c7cdb"];
  }
  if (
    file.includes("season") ||
    file.includes("gilded-goblins") ||
    file.includes("mothers-blessing")
  ) {
    return ["#c9a227", "#e63946"];
  }
  return ["#c9a227", "#8b9dc3"];
}

function extractMeta(html, pattern) {
  const match = html.match(pattern);
  return match ? match[1].replace(/\s+/g, " ").trim() : "";
}

async function buildArticleDefs() {
  const defs = [];

  for (const file of articlePages) {
    const html = await fs.readFile(path.join(root, file), "utf8");
    const title =
      extractMeta(html, /<meta\s+property="og:title"\s+content="([^"]+)"/i) ||
      extractMeta(html, /<title>([^<]+)<\/title>/i);
    const subtitle =
      extractMeta(html, /<meta\s+name="description"\s+content="([^"]+)"/i) ||
      extractMeta(
        html,
        /<meta\s+property="og:description"\s+content="([^"]+)"/i,
      );

    const cleanedTitle = title
      .replace(/\s*\|\s*D4 Resource Hub$/i, "")
      .replace(/\s*—\s*D4 Resource Hub$/i, "")
      .trim();

    const [accentA, accentB] = paletteFor(file);

    defs.push([
      file,
      `og-${file.replace(/\.html$/, "")}.png`,
      cleanedTitle || "D4 Resource Hub Article",
      subtitle ||
        "Official-source Diablo 4 reporting, summaries, and practical player context.",
      accentA,
      accentB,
    ]);
  }

  return defs;
}

function cardHtml(title, subtitle, accentA, accentB) {
  return `<!doctype html>
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <style>
        * { box-sizing: border-box; }
        body {
          margin: 0;
          width: 1200px;
          height: 630px;
          font-family: "Segoe UI", Arial, sans-serif;
          color: #f6f1e8;
          background:
            radial-gradient(circle at 14% 18%, ${accentA}33, transparent 22%),
            radial-gradient(circle at 86% 18%, ${accentB}3d, transparent 24%),
            linear-gradient(135deg, #090a10 0%, #11131d 44%, #090a10 100%);
          overflow: hidden;
        }
        .frame {
          position: relative;
          width: 100%;
          height: 100%;
          padding: 46px 54px;
        }
        .frame::before {
          content: "";
          position: absolute;
          inset: 24px;
          border-radius: 30px;
          border: 1px solid rgba(255,255,255,0.08);
          background:
            radial-gradient(circle at top right, ${accentA}26, transparent 28%),
            linear-gradient(180deg, rgba(23,24,36,0.94), rgba(10,11,18,0.98));
          box-shadow: 0 18px 60px rgba(0,0,0,0.4);
        }
        .content {
          position: relative;
          z-index: 1;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 22px 24px;
        }
        .top-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 24px;
        }
        .kicker {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          color: #e7d07f;
          font-size: 22px;
          font-weight: 800;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }
        .kicker::before {
          content: "";
          width: 70px;
          height: 4px;
          border-radius: 999px;
          background: linear-gradient(90deg, ${accentA}, transparent);
        }
        .brand-badge {
          width: 92px;
          height: 92px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 28px;
          flex-shrink: 0;
          background:
            radial-gradient(circle at 30% 25%, ${accentA}3d, transparent 54%),
            linear-gradient(180deg, rgba(31,32,44,0.96), rgba(12,13,20,0.98));
          border: 1px solid rgba(255,255,255,0.08);
          box-shadow:
            inset 0 0 0 1px rgba(255,255,255,0.04),
            0 18px 28px rgba(0,0,0,0.34);
        }
        .brand-badge svg {
          width: 62px;
          height: 62px;
          display: block;
        }
        .title {
          margin: 0;
          max-width: 820px;
          font-size: 74px;
          line-height: 1.04;
          font-weight: 900;
          letter-spacing: -0.03em;
          text-wrap: balance;
        }
        .subtitle {
          margin: 20px 0 0;
          max-width: 760px;
          color: #d5cec2;
          font-size: 31px;
          line-height: 1.35;
          font-weight: 500;
        }
        .footer {
          display: flex;
          justify-content: space-between;
          align-items: end;
          gap: 24px;
        }
        .brand {
          font-size: 26px;
          font-weight: 800;
          color: #f6f1e8;
          letter-spacing: 0.01em;
        }
        .meta {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          justify-content: flex-end;
        }
        .pill {
          padding: 12px 18px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(201,162,39,0.08);
          color: #f0d479;
          font-size: 18px;
          font-weight: 700;
        }
      </style>
    </head>
    <body>
      <div class="frame">
        <div class="content">
          <div>
            <div class="top-row">
              <div class="kicker">D4 Resource Hub</div>
              <div class="brand-badge" aria-hidden="true">${brandSvg}</div>
            </div>
            <h1 class="title">${title}</h1>
            <p class="subtitle">${subtitle}</p>
          </div>
          <div class="footer">
            <div class="brand">bobhasaclaw.github.io/d4-resource-hub</div>
            <div class="meta">
              <span class="pill">Season 12</span>
              <span class="pill">March 2026</span>
            </div>
          </div>
        </div>
      </div>
    </body>
  </html>`;
}

await fs.mkdir(outDir, { recursive: true });
const defs = [...baseDefs, ...(await buildArticleDefs())];

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({
  viewport: { width: 1200, height: 630 },
  deviceScaleFactor: 1,
});

for (const [, filename, title, subtitle, accentA, accentB] of defs) {
  await page.setContent(cardHtml(title, subtitle, accentA, accentB), {
    waitUntil: "load",
  });
  await page.screenshot({ path: path.join(outDir, filename), type: "png" });
}

await browser.close();
console.log(`Generated ${defs.length} OG images in ${outDir}`);
