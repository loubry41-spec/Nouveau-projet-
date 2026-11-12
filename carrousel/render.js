// Génère les 6 slides en PNG 1080 × 1350 dans export/.
// Usage : node render.js            (toutes les slides)
//         node render.js 3          (une seule slide)
const { chromium } = require("playwright");
const path = require("path");

(async () => {
  const only = process.argv[2] ? [parseInt(process.argv[2], 10)] : [1, 2, 3, 4, 5, 6];
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1080, height: 1350 }, deviceScaleFactor: 1 });
  for (const n of only) {
    await page.goto("file://" + path.join(__dirname, "slide.html") + "?n=" + n);
    await page.waitForSelector("body[data-ready='1']");
    await page.waitForTimeout(150);
    const out = path.join(__dirname, "export", `slide-${n}.png`);
    await page.screenshot({ path: out });
    console.log("✓", out);
  }
  await browser.close();
})();
