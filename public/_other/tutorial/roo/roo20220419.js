// // for(let i = 0; i < 10; i++) {
// //     console.log(i);
// // }

// // let i = 0;
// // while(i < 10) {
// //     console.log(i);
// //     i++;
// // }

// // const arry = [1, 2, 3];

// // for(let i = 0; arry.length; i++) {
// //     console.log(arry[i]);
// // }

// // let v, i = 0;
// // while(v = arry[i++]) {
// //     console.log(v);
// // }

// // const s = Symbol();

// // const obj = {
// //     prop1: 'value1',
// //     prop2: 'value2',
// //     prop3: 'value3',
// //     [s]: 'value4'
// // }

// // Object.prototype.method = function() {}
// // // Object.defineProperty(Object.prototype, 'method', {
// // //     enumerable: false
// // // })

// // const d = Object.getOwnPropertyDescriptor(Object.prototype, 'method');
// // const e = Object.getOwnPropertyDescriptor(obj, s);
// // console.log(d);
// // console.log(e);

// // for(let key in obj) {
// //     /**
// //      * if(obj.hasOwnProperty(key)) {
// //         console.log(key, obj[key]);
// //     }
// //     */
// // }

// // const arry = ['a', 'b', 'c'];

// // arry[4] = 'e';

// // Object.prototype.method = function() {}

// // Object.defineProperty(arry, 0, {
// //     enumerable: false
// // })

// // const d = Object.getOwnPropertyDescriptor(arry, 0);
// // console.log(d);

// // for(let v of arry) {
// //     console.log(v);
// // }

// const map = new Map();

// const key1 = {};
// map.set(key1, 'value1');
// console.log(map.get(key1));

// const key2 = function() {}
// map.set(key2, 'value2');
// console.log(map.get(key2));

// const key3 = 0;
// map.set(key3, 'value3');
// console.log(map.get(key3));

// map.delete(key3);
// console.log(map.get(0));

// for(const [k, v] of map) {
//     console.log(k, v)
// }

// function genIterator(max = 10) {
//     let i = 1;

//     return {
//         next: function() {
//             if(i >= max) {
//                 return {
//                     done: true
//                 }
//             } else {
//                 return {
//                     done: false,
//                     value: i++
//                 }
//             }
//         }
//     }
// }

// const it = genIterator(10);

// let a = it.next();
// while(!a.done) {
//     console.log(a.value);
//     a = it.next();
// }

// const obj = {
//     [Symbol.iterator]: genIterator.bind(null, 100)
// }

// for(const i of obj) {
//     if((i % 3 === 0) && ((i % 5 === 0))) {
//         console.log('FizzBuzz');
//         continue;
//     } else if(i % 3 === 0) {
//         console.log('Fizz');
//         continue;
//     } else if(i % 5 === 0) {
//         console.log('Buzz');
//         continue;
//     } else {
//         console.log(i);
//     }
// }

// const items = {
//     prop1: 'value1',
//     prop2: 'value2',
//     prop3: 'value3'
// }

// Object.prototype[Symbol.iterator] = function() {
//     const keys = Object.keys(this);
//     let i = 0;

//     let _this = this;

//     return {
//         next() {
//             let key = keys[i++];
//             console.log(_this);

//             return {
//                 value: [key, _this[key]],
//                 done: i > keys.length
//             }
//         }
//     }
// }

// // const items = Object.entries(obj);
// for(let item of items) {
//     console.log(item);
// }

// // for(let i in obj) {
// //     console.log(i, obj[i]);
// // }

// function* gen() {
//     yield 1;
//     yield 2;
//     return 3;
// }

// const it = gen();
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
