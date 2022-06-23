/*
 * JavaScript Questions
 * No.1
 */

// function sayHi() {
//     console.log(name);
//     console.log(age);
//     var name = 'Lydia';
//     let age = 21;
// }

// sayHi();

/*
 * JavaScript Questions
 * No.28
 */

// String.prototype.giveLydiaPizza = () => {
//     return 'Just give Lydia pizza already!';
// };

// const name = 'Lydia';

// name.giveLydiaPizza();

// console.log(name.giveLydiaPizza());

/*
 * JavaScript Questions
 * No.29
 */

// const a = {};
// const b = { key: 'b' };
// const c = { key: 'c' };

// a[b] = 123;
// a[c] = 456;

// console.log(a[b]);

/*
 * JavaScript Questions
 * No.37
 */

// const numbers = [1, 2, 3];
// numbers[10] = 11;
// console.log(numbers);

/*
 * JavaScript Questions
 * No.43
 */

// [...'Lydia'];

// console.log([...'Lydia']);

/*
 * JavaScript Questions
 * No.52
 */

// function greeting() {
//     throw 'Hello world!';
// }

// function sayHi() {
//     try {
//         const data = greeting();
//         console.log('It worked!', data);
//     } catch (e) {
//         console.log('Oh no an error:', e);
//     }
// }

// sayHi();

/*
 * JavaScript Questions
 * No.55
 */

// class Dog {
//     constructor(name) {
//       this.name = name;
//     }
// }

// Dog.prototype.bark = function() {
// console.log(`Woof I am ${this.name}`);
// };

// const pet = new Dog('Mara');

// pet.bark();

// delete Dog.prototype.bark;

// pet.bark();

/*
 * JavaScript Questions
 * No.106
 */

// const colorConfig = {
//     red: true,
//     blue: false,
//     green: true,
//     black: true,
//     yellow: false,
// };

// const colors = ['pink', 'red', 'blue'];
// const colorNum = colors[1];

// // console.log(colorConfig.colors[1]);

// console.log(colorConfig[colorNum]);

/*
 * JavaScript Questions
 * No.109
 */

// const food = ['🍕', '🍫', '🥑', '🍔'];
// const info = { favoriteFood: food[0] };

// info.favoriteFood = '🍝';

// console.log(food);


/*
 * JavaScript Questions
 * No.109
 */

// class Counter {
//     constructor() {
//         this.count = 0;
//     }

//     increment() {
//         this.count++;
//     }
// }

// const counterOne = new Counter();
// counterOne.increment();
// counterOne.increment();

// const counterTwo = counterOne;
// counterTwo.increment();

// console.log(counterOne.count);

/*
 * JavaScript Questions
 * No.145
 */

// let count = 0;
// const nums = [0, 1, 2, 3];

// nums.forEach(num => {
//     if (num) count += 1
// })

// console.log(count)

/*
 * Gachi JavaScript
 * Scope
 */

// let a = (function(args) {
//     return args;
// })(10);

// function b(args) {
//     return args;
// }

// (function c() {
//     const message = 'Are you sure?';
//     const result = confirm(message);

//     if(!result) {
//         alert('cancel');
//         return false;
//     }
// })()

// checkType(a);
// checkType(b(10));

// function checkType(args) {
//     console.log(`${args}: ${typeof args}`);
// }

// let c = (function() {

//     let privateValue = 0;
//     let publicValue = 10;

//     function privateFunc() {
//         console.log('privateFunc is called');
//     }

//     function publicFunc() {
//         console.log('publicFunc is called' + privateValue++);
//     }

//     return {
//         publicValue,
//         publicFunc
//     };
// })()

// // c.privateFunc();

// c.publicFunc();
// c.publicFunc();
// c.publicFunc();
// c.publicFunc();
// console.log(c.publicValue);

/*
 * Gachi JavaScript
 *
 */

// let a = 0;
// console.log(Boolean(a));

// const aa = 0;
// const a = 1;
// const b = 2;
// const c = 3
// const d = 0;

// console.log(aa && a && b && c);
// console.log(a || b || c);
// console.log((a || b) && c);
// console.log((a || b) && (c || d));

// function hello(personName) {
//     personName = personName || 'Tom';
//     console.log('Hello ' + personName);
// }

// hello();

// const a = 'hello';
// // a = 'bye';

// const b = {
//     prop: 'hello'
// };

// // b = {};

// b.prop = 'bye';

// console.log(b);

// let a = 0;

// function fn1(arg1) {
//     arg1 = 1;
//     console.log(a, arg1);
// }

// fn1(a);

// let b = {
//     prop: 0
// }

// function fn2(arg2) {
//     arg2.prop = 1;
//     console.log(b, arg2);
// }

// fn2(b);

// const a = {
//     prop: 0
// }

// let { prop } = a;

// prop = 1;

// console.log(a, prop);

// const a = {
//     prop: 0
// }

// function fn({ prop }) {
//     prop = 1;
//     console.log(a, prop);
// }

// fn(a);

// const a = {
//     prop: 0
// }

// const b = {
//     prop: 0
// }

// console.log(a === b);
// console.log(a.prop === b.prop);

// console.log("0 == false", 0 == false);
// console.log("0 === false", 0 === false);
// console.log('"false" == false', "false" == false);
// console.log('"0" == 0', "0" == 0);
// console.log('Boolean("0") === false', Boolean("0") === false);
// console.log('Boolean(0) === false', Boolean(0) === false);
// console.log('!Boolean(0) === false', !Boolean(0) === false);
// console.log('-1 == false', -1 == false);
// console.log('!10 === false', !10 === false);

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

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     this.hello = function() {
//         console.log('OwnProperty: hello ' + this.name);
//     }
// }

// Person.prototype.hello = function() {
//     console.log('Person: hello ' + this.name);
// }

// Object.prototype.hello = function() {
//     console.log('Object: hello ' + this.name);
// }

// const bob = new Person('Bob', 18);
// bob.hello();

// console.log(checkOwnProperty(bob, 'name'));
// console.log(checkOwnProperty(bob, 'age'));
// console.log(checkOwnProperty(bob, 'gender'));
// console.log(checkOwnProperty(bob, 'hello'));

// function checkOwnProperty(instance, property) {
//     const result = instance.hasOwnProperty(property);
//     return result;
// }

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.hello = function() {
//     console.log('hello ' + this.name);
// }

// function Japanese(name, age) {
//     Person.call(this, name, age);
// }

// Japanese.prototype = Object.create(Person.prototype);

// const taro = new Japanese('Taro', 23);
// console.log(taro);

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     hello = function() {
//         console.log('hello ' + this.name);
//     }
// }

// const bob = new Person('Bob', 23);
// console.log(bob);
// bob.hello();

// class Japanese extends Person {
//     constructor(name, age, gender) {
//         super(name, age);
//         this.gender = gender;
//     }
// }

// const taro = new Japanese('Taro', 23, 'Male');
// console.log(taro);
// taro.hello();

// const obj = { prop: 0 };

// const obj = {};

// Object.defineProperty(obj, 'prop', {
//     value: 0
// });

// obj.prop = 1;

// const descriptor = Object.getOwnPropertyDescriptor(obj, 'prop');

// console.log(descriptor);

// for(let i = 0; i < 10; i++) {
//     console.log(i);
// }

// let i = 0;
// while(i < 10) {
//     console.log('hello');
//     i++;
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

// const it = genIterator(10);

// let a = it.next();
// while(!a.done) {
//     console.log(a.value);
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
