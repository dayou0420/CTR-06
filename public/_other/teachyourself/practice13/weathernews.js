const puppeteer = require('puppeteer');
const fs = require("fs/promises");

(async () => {
    const browser = await puppeteer.launch({
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
    const page = await browser.newPage();
    await page.goto('https://weathernews.jp/onebox/tenki/');

    const arry = await page.evaluate(() => {
        return Array.from(document.querySelectorAll('.textArea')).map(x => x.textContent);
    });

    console.log(arry);

    const obj = Object.assign({}, arry);

    await fs.writeFile('weathernews.json', JSON.stringify(obj, null, '  '));

    await browser.close();
})();
