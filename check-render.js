const puppeteer = require("puppeteer-core");
const fs = require("fs");
const path = require("path");

const OUT = path.join(process.env.TEMP, "kilo", "rewrite");
const BASE = "http://127.0.0.1:8123/simple/";

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  const browser = await puppeteer.launch({
    executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    headless: true,
    args: ["--no-sandbox"],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 1000 });
  await page.setCacheEnabled(false);

  const report = [];
  for (const file of ["index.html", "members.html", "music.html"]) {
    const errors = [];
    page.removeAllListeners("pageerror");
    page.on("pageerror", (e) => errors.push(e.message));

    await page.goto(BASE + file, { waitUntil: "networkidle2" });
    await page.evaluate(() => {
      document.querySelectorAll("img").forEach((i) => (i.loading = "eager"));
    });
    await new Promise((r) => setTimeout(r, 400));

    const metrics = await page.evaluate(() => {
      const over = [];
      document.querySelectorAll("body *").forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.width > 0 && r.right > document.documentElement.clientWidth + 1) {
          over.push(el.tagName + "." + (el.className || "?"));
        }
      });
      return {
        scrollWidth: document.documentElement.scrollWidth,
        clientWidth: document.documentElement.clientWidth,
        overflowing: over.slice(0, 5),
        h1: document.querySelectorAll("h1").length,
      };
    });

    await page.screenshot({
      path: path.join(OUT, file.replace(".html", "-full.png")),
      fullPage: true,
    });
    report.push({ file, ...metrics, errors });
  }

  // Underline check: how many links are underlined at rest?
  await page.goto(BASE + "index.html", { waitUntil: "networkidle2" });
  const underline = await page.evaluate(() => {
    let count = 0;
    document.querySelectorAll("a").forEach((a) => {
      const style = getComputedStyle(a);
      if (style.textDecorationLine.includes("underline")) count++;
    });
    return { total: document.querySelectorAll("a").length, underlined: count };
  });

  console.log(JSON.stringify({ report, underline }, null, 2));
  await browser.close();
})();
