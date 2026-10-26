const puppeteer = require("puppeteer-core");

(async () => {
  const browser = await puppeteer.launch({
    executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    headless: true,
    args: ["--no-sandbox"],
  });
  const page = await browser.newPage();
  await page.setCacheEnabled(false);
  await page.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true });
  await page.goto("http://127.0.0.1:8123/simple/index.html", { waitUntil: "networkidle2" });

  const info = await page.evaluate(() => {
    const out = [];
    document.querySelectorAll("body *").forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.width > 0 && (r.right > window.innerWidth + 1 || r.left < -1)) {
        out.push({
          tag: el.tagName,
          cls: el.className || "",
          left: Math.round(r.left),
          right: Math.round(r.right),
          width: Math.round(r.width),
        });
      }
    });
    return {
      win: window.innerWidth,
      docScroll: document.documentElement.scrollWidth,
      items: out.slice(0, 12),
    };
  });
  console.log(JSON.stringify(info, null, 2));
  await browser.close();
})();
