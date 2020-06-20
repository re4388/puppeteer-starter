const puppeteer = require('puppeteer');
const ChromeEXEinYourLocal = 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe';
const URL = 'https://news.ycombinator.com/news'
const SELECTOR = 'a.storylink';
(async () => {
  const browser = await puppeteer.launch({
    executablePath: ChromeEXEinYourLocal,
    headless: true
  });
  const page = await browser.newPage();
  await page.waitFor(500);
  await page.goto(URL);
  const titles = await page.$$eval(SELECTOR, es => es.map(e => e.innerText));
  const links = await page.$$eval(SELECTOR, as => as.map(a => a.href));

  titles.forEach((title, index) => {
    const link = links[index];
    console.log(`${title}\n`, link);
  });

  await browser.close();
})();