// const puppeteer = require('puppeteer');

// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.waitFor(1000); // 等待十秒鐘（給我開錄影工具用的）
//   await page.goto('https://www.google.com.tw'); // 進入指定頁面
//   await page.type('input[title="Google 搜尋"]', 'flex'); // Google 搜尋特定項目
//   await (await page.$('input[title="Google 搜尋"]')).press('Enter'); // 特定元素上按下 Enter
//   await page.waitFor(1000); // 等待一秒
//   await page.waitForSelector('#gsr'); // 確定網頁的元素出現
//   await page.click( // 點擊網址中包含以下的連結...
//     'a[href*="https://wcc723.github.io"]');

//   // await browser.close()
// })();


const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://example.com');

  // Get the "viewport" of the page, as reported by the page.
  const dimensions = await page.evaluate(() => {
    return {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
      deviceScaleFactor: window.devicePixelRatio
    };
  });

  console.log('Dimensions:', dimensions);

  await browser.close();
})();