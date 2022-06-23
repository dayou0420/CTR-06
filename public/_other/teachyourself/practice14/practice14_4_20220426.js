const aTag = document.querySelectorAll('a');

for(const a of aTag) {
    const url = a.getAttribute('href');
    if(/google\.com/.test(url)) {
        a.getAttribute('href', 'https://www.yahoo.co.jp/');
    }
}
