// /**
//  * クロージャーの定義
//  * 
//  * クロージャーは、関数と、その関数が宣言された
//  * レキシカルスコープの組み合わせです。
//  * [MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Closures)
//  */

// /**
//  * ダメなパターン
//  * 
//  * num = 0;
//  * 
//  * function increment() {
//  *   num++;
//  *   console.log(num);
//  * }
//  * 
//  */

// let increment = (function() {

//     let counter = 0; // Lexical Scope

//     return function() {
//         counter += 1; // Closure
//         console.log(counter);
//         return counter;
//     }
// })();

// // increment.counter = 10;
// increment(); // 1
// increment(); // 2
// increment(); // 3

// function addStringFactory(tail) {

//     function concat(str) {
//         return str + tail;
//     }
//     return concat;
// }

// let addAs = addStringFactory('AAAAAA');
// let addBs = addStringFactory('BBBBBB');

// let str = 'Tom';
// str = addAs(str);
// console.log(str);
