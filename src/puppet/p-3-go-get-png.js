const puppeteer = require('puppeteer');
const ChromeEXEinYourLocal = "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe";

(async () => {
  const browser = await puppeteer.launch({
    executablePath: ChromeEXEinYourLocal,
    headless: false // see automation happening
  });
  const page = await browser.newPage(); // 開啟新分頁
  await page.goto('https://example.com'); // 進入指定頁面
  await page.screenshot({ path: 'example.png' }); // 截圖，並且存在...

  await browser.close(); // 關閉瀏覽器
})();