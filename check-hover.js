const puppeteer = require("puppeteer-core");
const path = require("path");

const OUT = path.join(process.env.TEMP, "kilo", "rewrite");

(async () => {
  const browser = await puppeteer.launch({
    executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    headless: true,
    args: ["--no-sandbox"],
  });
  const page = await browser.newPage();
  await page.setCacheEnabled(false);
  await page.setViewport({ width: 1440, height: 1000 });
  await page.goto("http://127.0.0.1:8123/simple/index.html", { waitUntil: "networkidle2" });

  // Hover over the discography link
  const link = await page.$(".more-link a");
  const before = await page.evaluate(
    (el) => getComputedStyle(el).textDecorationLine,
    link
  );
  await link.hover();
  await new Promise((r) => setTimeout(r, 300));
  const after = await page.evaluate((el) => {
    const cs = getComputedStyle(el);
    return { decoration: cs.textDecorationLine, color: cs.color };
  }, link);
  console.log("LINK REST:", before, "| HOVER:", JSON.stringify(after));

  // Nav hover
  const nav = await page.$(".nav a:not(.current)");
  const navBefore = await page.evaluate((el) => getComputedStyle(el).textDecorationLine, nav);
  await nav.hover();
  await new Promise((r) => setTimeout(r, 250));
  const navAfter = await page.evaluate((el) => getComputedStyle(el).textDecorationLine, nav);
  console.log("NAV REST:", navBefore, "| HOVER:", navAfter);

  // Mobile render
  await page.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true });
  await page.goto("http://127.0.0.1:8123/simple/index.html", { waitUntil: "networkidle2" });
  await page.screenshot({ path: path.join(OUT, "mobile-index.png"), fullPage: true });
  const mob = await page.evaluate(() => ({
    sw: document.documentElement.scrollWidth,
    cw: document.documentElement.clientWidth,
  }));
  console.log("MOBILE:", JSON.stringify(mob));

  await page.setViewport({ width: 390, height: 844 });
  await page.goto("http://127.0.0.1:8123/simple/music.html", { waitUntil: "networkidle2" });
  await page.screenshot({ path: path.join(OUT, "mobile-music.png"), fullPage: true });
  const mob2 = await page.evaluate(() => ({
    sw: document.documentElement.scrollWidth,
    cw: document.documentElement.clientWidth,
  }));
  console.log("MOBILE MUSIC:", JSON.stringify(mob2));

  await browser.close();
})();
