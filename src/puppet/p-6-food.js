const puppeteer = require('puppeteer');


const ChromeEXEinYourLocal = 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe';
const URL = 'https://www.klook.com/zh-TW/blog/taipei-restauant-recommend/'
const SELECTOR = 'h3.h3-main-content';


(async () => {
  const browser = await puppeteer.launch({
    executablePath: ChromeEXEinYourLocal,
    headless: true
  });
  const page = await browser.newPage(); // open new tab
  await page.waitFor(1000); // wait 1 sec
  await page.goto(URL);


/*get one. use innerText or innerHTML */
  innerText = await page.$eval(SELECTOR, e => e.innerText);
  console.log(innerText);
  // innerHTML = await page.$eval(SELECTOR, e => e.innerHTML);
  // console.log(innerHTML);


  /* get all, need to get elements first,
  and the use map to get its property, use innerText here */
  const elements = await page.$$eval(SELECTOR, e => e.map(e => e.innerText));
  // console.log(elements);
  elements.forEach(e => {
    console.log(e);
  });
  await browser.close();
})();