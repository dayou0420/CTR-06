const puppeteer = require('puppeteer');
const fs = require('fs/promises');

(async () => {
    const browser = await puppeteer.launch({
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
    const page = await browser.newPage();
    await page.goto('http://ct3.co.jp/index.php/archives/talent/mio-imada');

    const photos = await page.$$eval('img', imgs => {
        return imgs.map(x => x.src);
    });

    for(const photo of photos) {
        const imagepage = await page.goto(photo);
        await fs.writeFile(photo.split('/').pop(), await imagepage.buffer());
    }

    await browser.close();
})();
