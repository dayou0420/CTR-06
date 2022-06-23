/*
 * JavaScript Questions
 * No.5
 */

// const bird = {
//     size: "small"
// };

// const mouse = {
//     name: "Mickey",
//     small: true
// };

// console.log(`const bird = {
//     size: "small"
// };\n`);
// console.log(`bird.size: ${bird.size}`);
// console.log(`mouse["small"]: ${mouse["small"]}`);
// console.log(`mouse[bird.size]: ${mouse[bird.size]}\n`);
// console.log(`const mouse = {
//     name: "Mickey",
//     small: true
// };\n`);
// console.log(`mouse["small"]: ${mouse["small"]}`);
// console.log(`mouse[bird["size"]]: ${mouse[bird["size"]]}`);

/*
 * JavaScript Questions
 * No.6
 */

// let c = { greeting: "Hey!" };
// let d;

// d = c;
// c.greeting = "Hello";
// console.log(d.greeting);

/*
 * JavaScript Questions
 * No.7
 */

// let a = 3;
// let b = new Number(3);
// let c = 3;

// console.log(a == b);
// console.log(a === b);
// console.log(b === c);

// console.log(`${a}値: ${typeof a}`);
// console.log(`${b}値: ${typeof b}`);
// console.log(`${c}値: ${typeof c}`);

/*
 * JavaScript Questions
 * No.8
 */

// class Chameleon {
//     static colorChange(newColor) {
//       this.newColor = newColor;
//       return this.newColor;
//     }

//     constructor({ newColor = "green" } = {}) {
//       this.newColor = newColor;
//     }
// }

// const freddie = new Chameleon({ newColor: "purple" });
// freddie.colorChange("orange");

/*
 * JavaScript Questions
 * No.11
 */

// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
// }

// const member = new Person("Lydia", "Hallie");

// Person.getFullName = function() {
//     return `${this.firstName} ${this.lastName}`;
// };

// console.log(member.getFullName());

/*
 * JavaScript Questions
 * No.12
 */

// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
// }

// const lydia = new Person("Lydia", "Hallie");
// const sarah = Person("Sarah", "Smith");

// console.log(lydia);
// console.log(sarah);

/*
 * JavaScript Questions
 * No.18
 */

// function checkAge(data) {
//     if (data === { age: 18 }) {
//       console.log("You are an adult!");
//     } else if (data == { age: 18 }) {
//       console.log("You are still an adult.");
//     } else {
//       console.log(`Hmm.. You don't have an age I guess`);
//     }
// }

// checkAge({ age: 18 });

// const a = {
//     age: 18
// }

// const b = {
//     age: 18
// }

// console.log(a == b);
// console.log(a === b);

/*
 * JavaScript Questions
 * No.19
 */

// const arry = new Array(1, 2, 3);
// console.log(typeof arry);

// function getAge(...args) {
//     console.log(typeof args);
// }

// getAge(21);

/*
 * JavaScript Questions
 * No.21
 */

// const sum = eval("10*10+5");

// console.log(typeof sum);

/*
 * JavaScript Questions
 * No.24
 */

// const obj = { 1: "a", 2: "b", 3: "c" };
// const set = new Set([1, 2, 3, 4, 5]);

// obj.hasOwnProperty("1");
// obj.hasOwnProperty(1);
// set.has("1");
// set.has(1);

// console.log(obj.hasOwnProperty("1"));
// console.log(obj.hasOwnProperty(1));
// console.log(set.has("1"));
// console.log(set.has(1));

/*
 * JavaScript Questions
 * No.28
 */

// String.prototype.giveLydiaPizza = () => {
//     return "Just give Lydia pizza already!";
// };

// const name = "Lydia";

// console.log(name.giveLydiaPizza());

// console.log(String);

/*
 * JavaScript Questions
 * No.29
 */

// const a = {};
// const b = { key: "b" };
// const c = { key: "c" };

// a[b] = 123;
// a[c] = 456;

// console.log(a[b]);
// console.log(a);

// const obj = {};
// const propa = 1;
// const propb = { key: 1 };
// const propc = { key: 2 };

// obj[propa] = 123;
// // obj[propb] = 123;
// // obj[propc] = 456;

// console.log(obj);

/*
 * JavaScript Questions
 * No.33
 */

// const person = { name: "Lydia" };

// function sayHi(age) {
//     console.log(`${this.name} is ${age}`);
// }

// sayHi.call(person, 21);
// sayHi.bind(person, 21);

// const sayHiBind = sayHi.bind(person, 21);

// sayHiBind();

/*
 * JavaScript Questions
 * No.34
 */

// function sayHi() {
//     return (() => 0)();
// }

// console.log(typeof sayHi());

/*
 * JavaScript Questions
 * No.35
 */

// console.log(typeof typeof 1);

/*
 * JavaScript Questions
 * No.37
 */

// const numbers = [1, 2, 3];
// numbers[10] = 11;
// console.log(numbers);

/*
 * JavaScript Questions
 * No.38
 */

// (() => {
//     let x, y;
//     try {
//         throw new Error();
//     } catch (x) {
//         (x = 1), (y = 2);
//         console.log(x);
//     }
//     console.log(x);
//     console.log(y);
// })();

// (function() {
//     let a, b;
//     (function fn(a) {
//         (a = 1), (b = 2);
//         console.log(a)
//     })();
//     console.log(a);
//     console.log(b);
// })();

// (function() {
//     let a, b;
//     if(false) {
//         // 
//     } else {
//         (a = 1), (b = 2);
//         console.log(a);
//     }
//     console.log(a);
//     console.log(b);
// })();

/*
 * JavaScript Questions
 * No.40
 */

// [[0, 1], [2, 3]].reduce(
//     (acc, cur) => {
//       return acc.concat(cur);
//     },
//     [1, 2]
// );

// const arry1 = [0, 1];
// const arry2 = [2, 3];
// const arry3 = [arry1, arry2];

// arry3.reduce( function(acc, cur) { 
//     return acc.concat(cur);
// }, [1, 2] );

// let a;
// let b;

// try {
//     throw new Error();
// } catch(a) {
//     a = 1;
//     b = 2;
//     console.log(a);
// }

// console.log(a);
// console.log(b);

/*
 * JavaScript Questions
 * No.42
 */

// setInterval(() => console.log("Hi"), 1000);
// setTimeout(() => console.log("Hi"), 1000);

/*
 * JavaScript Questions
 * No.43
 */

// console.log([..."Lydia"]);
// console.log([...["Lydia"]]);

/*
 * JavaScript Questions
 * No.44
 */

// function* generator(i) {
//     yield i;
//     yield i * 2;
// }
  
// const gen = generator(10);

// console.log(gen.next().value);
// console.log(gen.next().value);

// function genIterator(i) {
//     return {
//         next() {
//             return {
//                 done: false,
//                 value: i * 2
//             }
//         }
//     }
// }

// const ite = genIterator(10);
// console.log(ite.next());
// console.log(ite.next());
// console.log(ite.next());

/*
 * JavaScript Questions
 * No.45
 */

// const firstPromise = new Promise((res, rej) => {
//     setTimeout(res, 500, "one");
// });

// const secondPromise = new Promise((res, rej) => {
//     setTimeout(res, 100, "two");
// });

// Promise.race([firstPromise, secondPromise]
//     ).then(
//         res => console.log(res)
//     );

/*
 * JavaScript Questions
 * No.46
 */

// let person = { name: "Lydia" };
// const members = [person];
// person = null;

// console.log(members);

// let person = { name: "Lydia" };
// const members = [person];
// person = null;

// console.log(members);

/*
 * JavaScript Questions
 * No.47
 */

// const person = {
//     name: "Lydia",
//     age: 21
// };

// for (const item in person) {
//     console.log(item, person[item]);
// }

/*
 * JavaScript Questions
 * No.50
 */

// [1, 2, 3].map(num => {
//     if (typeof num === "number") return;
//     return num * 2;
// });

// const map = [1, 2, 3].map(function(num) {
//     if (typeof num === "number") return;
//     return num * 2;
// });

// console.log(map);

// const arry = [1, 2, 3];
// const arry2 = arry.map(function(a) {
//     return a;
// });

// console.log(arry);
// console.log(arry2);

// console.log(arry === arry2);

/*
 * JavaScript Questions
 * No.56
 */

// const set = new Set([1, 1, 2, 3, 4]);
// const map = new Map();

// const arry = [1, 1, 2, 3, 4];
// map.set(arry);

// console.log(set);
// console.log(map);

/*
 * JavaScript Questions
 * No.56
 */

// const numbers = [1, 2, 3, 4, 5];
// const [y] = numbers;
// const [a, b] = numbers;

// console.log(a, b);

/*
 * JavaScript Questions
 * No.65
 */

// [1, 2, 3, 4].reduce((x, y) => 
//     console.log(x, y));

// const arry = [1, 2, 3, 4].reduce(function(acc, cur) {
//     const result = acc + cur;
//     console.log(acc, cur);
//     return result;
// });

// console.log(arry);


/*
 * JavaScript Questions
 * No.91
 */

// function giveLydiaPizza() {
//     return 'Here is pizza!';
// }

// // const giveLydiaChocolate = () =>
// // "Here's chocolate... now go hit the gym already.";

// // giveLydiaChocolate() => "Here's chocolate... now go hit the gym already."


// console.log(giveLydiaPizza.prototype);
// console.log(giveLydiaChocolate.prototype);

/*
 * JavaScript Questions
 * No.92
 */

// let newList = [1, 2, 3].push(4);

// newList.push(5);
// console.log(newList);

// console.log(newList.push(5));

// function checkType(targetObj) {
//     console.log(typeof targetObj, targetObj);
// }

// const obj = {
//     name: 'Tom',
//     age: 23
// };

// const arry = Object.entries(obj);

// checkType(arry);

/*
 * JavaScript Questions
 * No.95
 */

// function nums(a, b) {
//     if (a > b) console.log('a is bigger');
//     else console.log('b is bigger');
//     return
//     a + b;
// }

// console.log(nums(4, 2));
// console.log(nums(1, 2));

/*
 * JavaScript Questions
 * No.97
 */

// const info = {
//     [Symbol('a')]: 'b',
// };

// console.log(info);
// console.log(Object.keys(info));

/*
 * JavaScript Questions
 * No.100
 */

// 🎉✨ This is my 100th question! ✨🎉

// const output = `${[] && 'Im'}possible!
// You should${'' && `n't`} see a therapist after so much JavaScript lol`;

// console.log(output);

/*
 * JavaScript Questions
 * No.114
 */

// let config = {
//     alert: setInterval(() => {
//     console.log('Alert!');
//     }, 1000),
// };

// config = null;

/*
 * JavaScript Questions
 * No.119
 */

// const person = {
//     firstName: 'Lydia',
//     lastName: 'Hallie',
//     pet: {
//         name: 'Mara',
//         breed: 'Dutch Tulip Hound',
//     },
//     getFullName() {
//         return `${this.firstName} ${this.lastName}`;
//     },
// };

// console.log(person.pet?.name);
// console.log(person.pet?.family?.name);
// console.log(person.getFullName?.());
// console.log(member.getLastName?.());

/*
 * JavaScript Questions
 * No.123
 */

// const add = x => y => z => {
//     console.log(x, y, z);
//     return x + y + z;
// };

// add(4)(5)(6);

// const add = function(x) {
//     return function(y) {
//         return function(z) {
//             console.log(x, y, z);
//             return x + y + z;
//         }
//     }
// };

// add(4)(5)(6);

/*
 * JavaScript Questions
 * No.150
 */

// const animals = {};
// let dog = { emoji: '🐶' }
// let cat = { emoji: '🐈' }

// animals[dog] = { ...dog, name: "Mara" }
// animals[cat] = { ...cat, name: "Sara" }

// console.log(animals[dog])
// console.log(animals[cat])
// console.log(animals)

/*
 * JavaScript Questions
 * No.151
 */

// const user = {
// 	email: "my@email.com",
// 	updateEmail: function email() {
//         const _this = this;
// 		_this.email = email
// 	}
// }

// user.updateEmail("new@email.com")
// console.log(user.email)
