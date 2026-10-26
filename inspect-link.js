const puppeteer = require("puppeteer-core");

(async () => {
  const browser = await puppeteer.launch({
    executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    headless: true,
    args: ["--no-sandbox"],
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 1000 });
  await page.setCacheEnabled(false);
  await page.goto("http://127.0.0.1:8123/simple/index.html", { waitUntil: "networkidle2" });

  const info = await page.evaluate(() => {
    const el = document.querySelector(".more-link");
    const info = el.closest(".release-info");
    const cs = getComputedStyle(el);
    return {
      text: el.textContent.trim(),
      width: el.getBoundingClientRect().width,
      maxWidth: cs.maxWidth,
      marginTop: cs.marginTop,
      paddingTop: cs.paddingTop,
      borderTop: cs.borderTopWidth + " " + cs.borderTopColor,
      parentWidth: info.getBoundingClientRect().width,
      parentClass: info.className,
    };
  });
  console.log(JSON.stringify(info, null, 2));
  await browser.close();
})();
