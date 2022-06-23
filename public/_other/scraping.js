const puppeteer = require('puppeteer');
// const fs = require("fs/promises");

/*
(async () => {
    const browser = await puppeteer.launch({
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
    const page = await browser.newPage();
    await page.goto('https://example.com');
    await page.screenshot({ path: 'example.png' });

    await browser.close();
})();
*/

async function start(url) {
    const browser = await puppeteer.launch({
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
    const page = await browser.newPage();
    await page.goto(url);

    const titles = await page.evaluate(() => {
        return Array.from(document.querySelectorAll('.newsFeed_item_title')).map(title => title.textContent);
    });

    const links = await page.evaluate(() => {
        return Array.from(document.querySelectorAll('.newsFeed_item_link')).map(link => link.href);
    });

    const map = new Map();

    for(let i = 0; i < titles.length; i++) {
        for(let j = 0; j < links.length; j++) {
            if(i === j) {
                map.set(titles[i], links[j]);
            }
        }
    }

    const arry = Array.from(map);
    const obj = Object.assign({}, arry);
    // await fs.writeFile('news.json', JSON.stringify(obj, null, '  '));
    console.log(obj);
    await browser.close();
}

start('https://news.yahoo.co.jp/topics/top-picks');
