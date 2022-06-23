// function timesTwe(i) {
//     return i * 2;
// }

// const timesTwo = function(i) {
//     return i * 2;
// }

// const timesTwo = i => i * 2;

// const res = timesTwo(2);
// console.log(res);

// /*
//  * 書き方(シンタックス)について
//  */

// let arrowFn;
// arrowFn = () => 42;
// arrowFn = x => 42;
// arrowFn = (x) => 42;
// arrowFn = (x, y) => 42;
// arrowFn = (x, y) => {
//     console.log(x + y);
//     return x + y;
// }

// /*
//  * thisのbindについて
//  */

// window.id = 42;
// let normalFn;
// normalFn = {
//     id: 43,
//     counter: function() {
//         // console.log(this); { id: 43, counter: f }
//         console.log(this.id);

//         // let _this = this;
//         window.setTimeout(function() {
//             // console.log(this); Window
//             // console.log(_this.id);
//             console.log(this.id);
//         }.bind(this), 1000);
//     }
// };

// normalFn.counter();

// let normalFn;
// normalFn = {
//     id: 43,
//     counter: function() {
//         console.log(this.id);

//         window.setTimeout(() => {
//             console.log(this.id);
//         }, 1000);
//     }
// };

// normalFn.counter();

// window.me = 'global';
// const outer = function() {
//     let me = 'outer'; // lexical scope

//     return {
//         me: 'inner',
//         say: () => {
//             console.log(this.me);
//         }
//     }
// }

// outer().say();
