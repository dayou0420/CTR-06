let greeting = 1;

try {
    if(typeof greeting === 'string' ) {
        console.log(`{${greeting}}、いい天気ですね。`);
    } else {
        throw new Error('不正なデータ型です。');
    }
} catch (e) {
    console.error(`Opps! ${e}`)
}
