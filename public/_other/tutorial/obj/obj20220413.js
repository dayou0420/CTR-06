// let obj = {};

// console.log(obj);

// let array = new Array(1, 2, 3);

// console.log(typeof array, array);

// obj.name = 'Tom';

// console.log(obj);

// obj.arry = ['1', 1];

// console.log(obj);

// obj.obj = { name: 'John' };

// console.log(obj);

// console.log(obj.name);

// console.log(obj['name']);

// let person = {
//     first: 'First',
//     last: 'Last'
// }

// function factoryPerson(first, last) {
//     let person = {first, last};
//     return person;
// }

// let me0 = factoryPerson('First', 'Last');
// let me1 = factoryPerson('First', 'Last');
// let me2 = factoryPerson('First', 'Last');
// let me3 = factoryPerson('First', 'Last');

// function Person(first, last) {
//     this.first = first;
//     this.last = last;
//     // this.introduce = function() {
//     //     console.log(`My name is ${first} ${last}`);
//     // }
// }

// Person.prototype.introduce = function() {
//     console.log(`My name is ${this.first} ${this.last}`);
// }

// let me0 = new Person('First', 'Last');
// let me1 = new Person('Me1', 'Desu');

// // me0.__proto__.introduce = function() {
// //     console.log("I don't want to introduce myself.")
// // }

// me0.introduce();
// me1.introduce();

// function Person(first, last) {
//     this.first = first;
//     this.last = last;
// }

// Person.prototype.introduce = function() {
//     console.log(`My name is ${this.first} ${this.last}`);
// }

// let person1 = new Person('First', 'Last');
// let person2 = new Person('Me1', 'Desu');

// person1.introduce();
// console.log(person1);
// console.log(person1.__proto__.constructor);

// function Person(first, last) {
//     this.first = first;
//     this.last = last;
// }

// function Japanese(first, last) {
//     Person.call(this, first, last);
//     this.lang = 'ja';
// }

// Object.setPrototypeOf(Japanese.prototype, Person.prototype);

// Person.prototype.introduce = function() {
//     console.log(`My name is ${this.first} ${this.last}`);
// }

// Japanese.prototype.sayJapanese = function() {
//     console.log(`こんにちは ${this.first} ${this.last}`);
// }

// let me = new Japanese('First', 'Last');
// me.introduce();
// me.sayJapanese();
// console.log(me);

// class Person {
//     constructor(first, last) {
//         this.first = first;
//         this.last = last;
//     }

//     introduce() {
//         console.log(`My name is ${this.first} ${this.last}`);
//     }
// }

// class Japanese extends Person {
//     constructor(first, last) {
//         super(first, last);
//         this.lang = 'ja';
//         this._age = 0;
//     }

//     introduce() {
//         console.log(`こんにちは ${this.first} ${this.last}`);
//     }

//     static sayHello(value) {
//         console.log(`こんにちは ${value}`);
//     }

//     set setAge(value) {
//         this._age = value;
//     }

//     get getAge() {
//         return this._age;
//     }
// }

// let me = new Japanese('First', 'Last');
// me.introduce();
// Japanese.sayHello('First');

// me.setAge = 10;
// console.log(me.getAge);
