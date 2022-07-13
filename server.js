const express = require('express');
// const start = require('./public/news/scraping.js');
const app = express();

const port = process.env.PORT || 8080;

// Serve static files
app.use(express.static(__dirname + '/public'));

// Serve precipitation  precipitation folder
app.get('/rain', (req, res) => {
    res.sendFile(__dirname + '/public/precipitation/index.html');
});

// Serve precipitation temperature folder
app.get('/temp', (req, res) => {
    res.sendFile(__dirname + '/public/temperature/index.html');
});

// Serve RxJS temperature folder
app.get('/rx', (req, res) => {
    res.sendFile(__dirname + '/public/rx/index.html');
});

// Serve your app
console.log('Served: http://localhost:' + port);
app.listen(port);

// Scrape that url with timer Object

/* 
const timer = {
    delay(callback, url, ms) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                callback(url)
                resolve(url);
            }, ms);
        });
    }
}

timer.delay(start, 'https://news.yahoo.co.jp/topics/top-picks', 6000)
.then((result) => {
    console.log(result);
}).finally(
    console.log('Reading...')
);
*/
