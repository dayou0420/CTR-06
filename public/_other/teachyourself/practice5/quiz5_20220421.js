// let i = 5;
// while(i < 10) {
//     console.log(i);
//     i++
// }

// for(let i = 5; i < 10; i++) {
//     console.log(i);
// }

// let i = 0

// for(i = 1; i <= 100; i++) {
//     if((i % 3 === 0) && (i % 5 === 0)) {
//         console.log('FizzBuzz');
//         continue;
//     } else if((i % 3 === 0)) {
//         console.log('Fizz');
//         continue;
//     } else if((i % 5 === 0)) {
//         console.log('Buzz');
//         continue;
//     }
//     console.log(i);
// }

// const capitals = {
//     日本: "東京",
//     アメリカ: "ワシントン",
//     イギリス: "ロンドン"
// };

// const capitalEnties = Object.entries(capitals);

// let jp = {};

// for([key, value] of capitalEnties) {
//     if(key === '日本') {
//        jp.prop = value;
//     }
// }

// const { prop: tokyo } = jp;
// console.log(`日本の首都は${tokyo}です`);

try {
    console.log("tryブロックを処理を開始します。");
    throw "例外を投げました。";
    console.log("tryブロックの処理を終了します。");
} catch(e) {
    console.error("catchブロックの処理を開始します。");
    console.error("catchした値" + e);
    console.error("catchブロックの処理を終了します。");
} finally {
    console.log("finallyブロックの処理を実行します。");
}
console.log("try/catch/finally文の後続のコードを実行します。");
