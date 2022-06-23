const html = `<h1>見出し1</h1>
<h2>見出し2</h2>
<h3>見出し3</h3>
<header>ヘッダー </header>`;

function* hTagGen( htmlStr ) {
// h1~h6のマッチを確認
const matches = html.matchAll(/<(h[1-6])>(.+)<\/\1>/g);
for (const matched of matches) {
    // matchedの2番目にはテキストが含まれている
        yield matched[2];
    }
}

// 確認
for( const text of hTagGen( html ) ) {
    console.log( text );
}
