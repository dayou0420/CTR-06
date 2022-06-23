try {
    let b = 10 + a;
    console.log(b);
} catch (e) {
    console.error(`Opps, ${e}`);
} finally {
    console.log( "後続の処理" );
}
