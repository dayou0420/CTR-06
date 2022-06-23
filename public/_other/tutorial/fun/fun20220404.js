// function fn(...args) {
//     console.log(args);
//     const a = arguments[0];
//     const b = arguments[1];
//     console.log(arguments);
//     console.log(a, b);
//     return a;
// }

// // function fn(a, b) {
// //     console.log(2);
// // }

// let c = fn(1, undefined, 0);
// console.log(c);

// function a() {
//     console.log('hello');
// }

// a.prop = 0;
// a.method = function() {
//     console.log('method');
// }

// a();
// a.method();
// console.log(a.prop);

// function hello(name) {
//     console.log(`hello ${name}`);
// }

// function bye() {
//     console.log('bye');
// }

// function fn(cb) {
//     cb('Tom');
// }

// const hello = name => console.log(`hello ${name}`);

// const bye = () => console.log('bye');

// const fn = cb => cb('Tom');

// fn(hello);
// fn(bye);
// fn(function(name) {
//     console.log(`${name}, ${name}`);
// })

// setTimeout(function() {
//     console.log('hello');
// }, 1000);

// const person = {
//     name: 'Tom',
//     hello: function() {
//         console.log(`hello ${this.name}`)
//     }
// }
// person.hello();

// window.name = 'John';

// const person = {
//     name: 'Tom',
//     hello: function() {
//         console.log(`hello ${this.name}`);
//         a();

//         const person = {
//             name: 'Tim',
//             hello: function() {
//                 console.log(`hello ${this.name}`);
//                 a();
//             }
//         }
//         person.hello();
//     }
// }

// // const ref = person.hello;
// // ref();

// person.hello();

// function a() {
//     console.log(`hello ${this.name}`);
// }

// window.name = 'John';

// const person = {
//     name: 'Tom',
//     hello: function() {
//         console.log(`hello ${this.name}`);
//     }
// }

// person.hello();

// const helloTom = person.hello.bind(person);

// function fn(ref) {
//     ref();
// }

// fn(helloTom);

// function a(name) {
//     console.log(`hello ${name}`);
// }

// const b = a.bind(null, 'Tim');

// b();

// function a() {
//     console.log(`hello ${this.name}`);
// }

// function c(name1, name2) {
//     console.log(`hello ${name1} ${name2}`);
// }

// const tim = {name: 'Tim'};

// const b = a.bind(tim);

// b();

// c.apply(tim, ['Tim', 'Bob']);
// a.call(tim, 'Tom');

// const array = [1, 2, 3, 4, 5];

// const reslut = Math.max(...array);
// // const reslut = Math.max.apply(null, array);

// console.log(reslut);

// function a(name) {
//     return `hello ${name}`;
// }

// const b = function(name) {
//     return `hello ${name}`;
// }

// const c = name => `hello ${name}`;

// console.log(c('Tom'));

// window.name = 'John';

// const a = () => console.log(`bye ${this.name}`);

// const person = {
//     name: 'Tom',
//     hello: function() {
//         console.log(`hello ${this.name}`);
//         a();
//     }
// }

// // person.hello();

// function b() {
//     const a = () => console.log(`Bye ${this.name}`);
//     a();
// }

// b();
