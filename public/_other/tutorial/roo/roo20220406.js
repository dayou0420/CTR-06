// for(let i = 0; i <= 10; i++) {
//     console.log(i);
// }

// let i = 0;
// while(i <= 10) {
//     console.log('hello');
//     i++;
// }

// let a = (1 + 2) * 3;
// console.log(a);

// let a = 0;

// /*
//  * ++a
//  */
// let b;
// a = b = a + 1;
// a = b = 1;

// /*
//  * a++
//  */
// a = b = a + 1;
// a = (b = a) + 1;
// a = b = 1;

// console.log(a, b);

// function fn() {
//     let a = 0;
//     return a++;
// }

// console.log(!(fn() * 5));

// for(let i = 0; i < 5; i++) {
//     const j = i * 2;
//     setTimeout(function() {
//         console.log(j);
//     }, 1000);
// }

// const arry = [1, 2, 3, 4, 5];

// for(let i = 0; i < arry.length; i++) {
//     console.log(arry[i]);
// }

// let i = 0;
// while(i < arry.length) {
//     console.log(arry[i]);
//     i++;
// }

// const arry = [1, 2, 3, 4, 5];

// let v, i = 0;
// while(v = arry[i++]) {
//     console.log(v);
// }

// const s = Symbol();

// const obj = {
//     prop1: 'value1',
//     prop2: 'value2',
//     prop3: 'value3',
//     [s]: 'value4'
// }

// Object.prototype.method = function() {}

// Object.defineProperty(Object.prototype, 'method', {
//     enumerable: false
// });
// // Object.defineProperty(obj, 'prop1', {
// //     enumerable: false
// // });
// const d = Object.getOwnPropertyDescriptor(Object.prototype, 'method');
// console.log(d);
// // const d2 = Object.getOwnPropertyDescriptor(Object.prototype, 'prop1');
// const enumerable = Object.getOwnPropertyDescriptor(obj, s);
// console.log(e);

// for(let key in obj) {
//     // if(obj.hasOwnProperty(key)) {
//         console.log(key, obj[key]);
//     // }
// }

// const arry = ['a', 'b', 'c'];

// arry[4] = 'e';

// Object.prototype.method = function() {}

// Object.defineProperty(Object.prototype, 'method', {
//     enumerable: true
// });

// const des = Object.getOwnPropertyDescriptor(Object.prototype, 'method');

// console.log(des);

// for(let v of arry) {
//     console.log(v);
// }

// const map = new Map();
// // console.log(map);

// const key1 = {};
// map.set(key1, 'value1');
// // console.log(map.get(key1));

// const key2 = function() {}
// map.set(key2, 'value2');
// // console.log(map.get(key2));

// let key3;
// map.set(key3 = 0, 'value3');
// // console.log(map.get(key3));

// map.delete(key3);
// // console.log(map.get(key3));

// for(const [k, v] of map) {
//     console.log(k, v);
// }

// const key1 = {};
// const key2 = function() {}
// let key3;

// const s = new Set();
// s.add(key1);
// s.add(key2);
// s.add(key3);
// s.delete(key3);

// console.log(s.has(key2));
// const arry = Array.from(s);
// console.log(arry);

// for(let k of s) {
//     console.log(k);
// }

// function genIterator(max = 10) {
//     let i = 0;

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

// const it = genIterator(100);

// let a = it.next();
// while(!a.done) {
//     // console.log(a.value);
//     a = it.next();
// }

// const obj = {
//     [Symbol.iterator]: genIterator.bind(null, 10)
// }

// for(const i of obj) {
//     console.log(i);
// }

// const s = new Set(obj);
// console.log(s);

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
//             return {
//                 value: [key, _this[key]],
//                 done: i > keys.length
//             }
//         }
//     }
// }

// for(let [k, v] of items) {
//     console.log(k, v);
// }

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

// function* genIterator(max = 10) {
//     let i = 0;

//     while(i < max) {
//         yield i++;
//     }
//     return;
// }

// const it = genIterator(10);

// let a = it.next();

// while(!a.done) {
//     console.log(a.value);
//     a = it.next();
// }

// const obj = {
//     [Symbol.iterator]: genIterator
// }

// for(const i of genIterator()) {
//     console.log(i);
// }
