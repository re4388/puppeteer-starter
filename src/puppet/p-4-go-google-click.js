const puppeteer = require('puppeteer');
const ChromeEXEinYourLocal = 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe';

(async () => {
  const browser = await puppeteer.launch({
    executablePath: ChromeEXEinYourLocal,
    headless: false // see automation happening
  });
  const page = await browser.newPage(); // open new tab
  await page.waitFor(1000); // wait 1 sec
  await page.goto('https://www.google.com.tw'); // go to particular url
  await page.type('input[title="Google 搜尋"]', 're4388 github'); // type in input file, use title=`xxx` to get the input field
  await (await page.$('input[title="Google 搜尋"]')).press('Enter'); // type enter
  await page.waitFor(1000); // wait 1 sec
  await page.waitForSelector('#gsr'); // wait for element show up
  await page.click( // 點擊網址中包含以下的連結...
    'a[href*="https://github.com/re4388"]');
})();