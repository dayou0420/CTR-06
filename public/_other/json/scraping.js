const puppeteer = require('puppeteer');
const fs = require("fs/promises");

(async () => {
    const browser = await puppeteer.launch({
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
    const page = await browser.newPage();
    await page.goto('https://search.yahoo.co.jp/image/search?p=%E4%BB%8A%E7%94%B0%E7%BE%8E%E6%A1%9C&ei=UTF-8&rs=1&aq=-1&oq=');

    const arry = await page.evaluate(() => {
        return Array.from(document.querySelectorAll('.util-Clamps--2')).map(x => x.textContent);
    });

    const obj = Object.assign({}, arry);

    await fs.writeFile('mioimada.json', JSON.stringify(obj, null, '  '));

    await browser.close();
})();
