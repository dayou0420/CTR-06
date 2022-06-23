// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     // this.hello = function() {
//     //     return `hello ${this.name}`;
//     // }
// }

// // Person.prototype.hello = function() {
// //     return `hello ${this.name}`;
// // }

// const bob = new Person('Bob', 18);
// const tom = new Person('Tom', 18);
// const sun = new Person('Sun', 18);

// console.log(bob.hello());

// // bob.hello();

// function F(a, b) {
//     this.a = a;
//     this.b = b;
//     // return {};
// }

// F.prototype.c = function() {}

// function newOpe(C, ...args) {
//     const _this = Object.create(C.prototype);
//     const result = C.apply(_this, args);
//     if(typeof result === "object" && result !== null) {
//         return result;
//     }

//     return _this;
// }

// const instance = newOpe(F, 1, 2);
// console.log(instance);

// function F(a, b) {
//     this.a = a;
//     this.b = b;
//     // return {a: 1};
//     // const result = new Object();
//     // result.a = 1;
//     // return result;
// }

// F.prototype.c = function() {}

// const instance = new F(1, 2);

// console.log(instance instanceof F);
// console.log(instance instanceof Object);
// // console.log(instance.__proto__ instanceof F.prototype);

// function fn(arg) {
//     if(arg instanceof Array) {
//         arg.push('value');
//     } else {
//         arg['key'] = 'value';
//     }
//     console.log(arg)
// }

// fn([]);
// fn({});

// let d = 0;
// function fn() {
//     let d = 1;
//     const fn1 = new Function('a', 'b', 'return a * b * d');
//     return fn1;
// }

// const f = fn();
// const result = f(1, 2);

// console.log(result);

// function fn2(a, b) {
//     return a + b;
// }

// console.log(fn2 instanceof Function);

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     // this.hello = function() {
//     //     console.log(`OwnProperty: hello ${this.name}`);
//     // }
// }

// Object.prototype.hello = function() {
//     console.log(`Object: hello ${this.name}`);
// }

// const bob = new Person('Bob', 18);
// const result = bob.hasOwnProperty('hello');

// console.log(result);
// console.log('name' in bob);
// console.log('hello' in bob);
// console.log('bye' in bob);

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.hello = function() {
//     console.log(`hello ${this.name}`);
// }

// function Japanese(name, age, gender) {
//     Person.call(this, name, age);
//     this.gender = gender;
// }

// Japanese.prototype = Object.create(Person.prototype);

// Japanese.prototype.hello = function() {
//     console.log(`こんにちは${this.name}`);
// }

// Japanese.prototype.bye = function() {
//     console.log(`さようなら${this.name}`);
// }

// const taro = new Japanese('Taro', 23, 'Male');
// console.log(taro);

// taro.hello();

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age
//     }

//     hello() {
//         console.log(`hello ${this.name} ${this.age}`);
//     }
// }

// class Japanese extends Person {
//     constructor(name, age, gender) {
//         super(name, age);
//         this.gender = gender;
//     }

//     hello() {
//         console.log(`こんにちは${this.name}${this.age}`)
//     }

//     bye() {
//         console.log(`さようなら${this.name}${this.age}`)
//     }
// }


// const bob = new Person('Bob', 23);
// console.log(bob);

// const taro = new Person('太郎', 23);
// console.log(taro);
// taro.hello();

// const american = {
//     hello() {
//         console.log(`hello ${this.name}`);
//     }
// }

// const bob = {
//     name: 'Bob',
//     hello() {
//         super.hello();
//     }
//     // hello() {
//     //     console.log(`hello ${this.name}`);
//     // }
// }

// Object.setPrototypeOf(bob, american);

// bob.hello();

// const a = new String('hello');
// console.log(a.toUpperCase());

// const b = new Number(100);
// console.log(b.toExponential());

// const s = Symbol('hello');
// const s2 = Symbol('hello');

// console.log(s);
// console.log(s2);
// console.log(s === s2);
// console.log(typeof s);

// const str = new String('Tom');
// console.log(str);

// String.prototype[s] = function() {
//     return 'hello' + this;
// }

// const tom = 'Tom';
// console.log(tom[s]());

// const obj = {
//     prop: 0
// };

// const obj = {};

// Object.defineProperty(obj, 'prop', { 
//     configurable: true,
//     value: 0,
//     writable: true
// });

// // obj.prop = 1;

// delete obj.prop;

// const descriptor = Object.getOwnPropertyDescriptor(obj, 'prop');

// console.log(descriptor);

// function Person1(name, age) {
//     this._name = name;
//     this._age = age;
// }

// Object.defineProperty(Person1.prototype, 'name', {
//     get: function() {
//         const result = `${this._name} ${this._age}`;
//         return result;
//     },
//     set: function(val1, val2) {
//         this._name = val1;
//         this._age = val2;
//     }
// });

// const p1 = new Person1('Bob', 23);
// console.log(p1.name);

// class Person2 {
//     constructor(name, age) {
//         this._name = name;
//         this._age = age;
//     }
//     get name() {
//         const result = this._name;
//         return result;
//     }
//     set name(val) {
//         this._name = val;
//     }
// }

// const p2 = new Person2('Bob', 23);
// console.log(p2.name);

// var a = 1;
// var b = 2;
// a = b;

// console.log(a, b);
// console.log(a);

// let a = 1;
// let b = 2;
// a = b;

// console.log(a, b);
// console.log(a);
