/**
 * 13.1
*/

// setTimeout(() => {
//     console.log('A');
// }, 1000);

// setTimeout(() => {
//     console.log('B');
// });

// console.log('C');

/**
 * C => B => A
*/

/**
 * 13.2
*/

// function delay(fn, message, ms) {
//     setTimeout(function() {
//         setTimeout(function() {
//             fn('さらに' + message);
//         }, ms);
//         fn(message);
//     }, ms);
// }

// delay(console.log, '1秒経ちました。', 1000);

/**
 * Brfore 13.3
*/

// const instance = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const rand = Math.floor(Math.random() * 11);

//         if(rand < 5) {
//             reject(rand);
//         } else {
//             resolve(rand);
//         }
//     }, 1000);
// }).then(value => {
//     console.log(`5以上の値[${value}]が渡ってきました。`);
// }).catch(errorVakue => {
//     console.log(`5以下の値[${errorVakue}]が渡ってきたためエラー表示。`);
// }).finally(() => {
//     console.log('処理を終了します。');
// });