// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     this.hello = function() {
//         console.log(`hello ${this.name}`);
//     }
// }

// // Person.prototype.hello = function() {
// //     console.log(`hello ${this.name}`);
// // }

// const bob = new Person('Bob', 18);
// const tom = new Person('Tom', 33);
// const sun = new Person('Sun', 18);

// bob.hello();
// tom.hello();
// sun.hello();

// function F(a, b) {
//     this.a = a;
//     this.b = b;
//     return {};
// }

// F.prototype.c = function() {}

// function newOpe(c, ...args) {
//     const _this = Object.create(c.prototype);
//     const result = c.apply(_this, args);
//     // console.log(result, _this);
//     if(typeof result === "object" && result !== null) {
//         return result
//     }

//     return _this;
// }

// const instance = newOpe(F, 1, 2);
// console.log(instance);

// function F(a, b) {
//     this.a = a;
//     this.b = b;
//     return {};
// }

// F.prototype.c = function(){
//     console.log(this.a, this.b);
// }

// // const instance = new F(1, 2);
// // instance.c();
// // console.log(instance);

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
//     // return { a: 1 };
//     const result = new Object();
//     result.a = 1;
//     return result;
// }

// F.prototype.c = function() {}

// const instance = new F(1, 2);

// console.log(instance instanceof F);

// console.log(instance.__proto__ === F.prototype);

// function fn(arg) {
//     if(arg instanceof Array) {
//         arg.push('value');
//     } else {
//         arg['key'] = 'value';
//     }
//     console.log(arg);
// }

// fn([])

// function F(a, b) {
//     this.a = a;
//     this.b = b;
//     return {};
// }

// F.prototype.c = function() {
//     console.log(this.a, this.b);
// }

// function newOpe(C, ...args) {
//     const _this = Object.create(C.prototype);
//     const result = C.apply(_this, args);

//     if(result === "object" && result !== null) {
//         return result;
//     }

//     return _this;
// }

// const instance = newOpe(F, 1, 2);
// console.log(instance);

// const instance = new F(1, 2);
// console.log(instance);
// instance.c();

// function F(a, b) {
//     this.a = a;
//     this.b = b;
//     // return {};
// }

// F.prototype.c = function() {
//     console.log(this. a, this.b);
// }

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
//     // const result = new Object();
//     // result.a = 1;
//     return {a: 1};
// }

// F.prototype.c = function() {}

// const instance = new F(1, 2);
// console.log(instance instanceof Object);
// console.log(instance.__proto__ === Object.prototype);

// function fn(arg) {
//     if(arg instanceof Array) {
//         arg.push('value');
//     } else {
//         arg['key'] = 'value';
//     }
//     console.log(arg);
// }

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


// const obj = new function() {
//     this.a = 0;
// }

// const fn3 = new Function('this.a = 0;');
// const obj3 = new fn3();

// console.log(obj, obj3);

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     this.hello = function() {
//         console.log(`OwnProperty: hello ${this.name}`);
//     }
// }

// Person.prototype.hello = function() {
//     console.log(`Person: hello ${this.name}`);
// }

// Object.prototype.hello = function() {
//     console.log(`Object: hello ${this.name}`);
// }

// function newPerson(Obj, ...args) {
//     const _this = Object.create(Obj.prototype)
//     const result = Obj.apply(_this, args);

//     if(typeof result === "object" && result !== null) {
//         return result;
//     }
//     return _this
// }

// const bob = newPerson(Person, 'Bob', 18);
// bob.hello();
// console.log(bob);

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// Object.prototype.hello = function() {
//     console.log(`Object: hello ${this.name}`);
// }

// function newPerson(Obj, ...args) {
//     const _this = Object.create(Obj.prototype);
//     const result = Obj.apply(_this, args);
//     if(typeof result === 'object' && result !== null) {
//         return result;
//     }
//     return _this;
// }

// const bob = newPerson(Person, 'Bob', 18);
// // const bob = new Person('Bob', 18);
// console.log(bob);

// const result = bob.hasOwnProperty('hello')
// console.log(result);

// console.log('hello' in bob);

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
//     console.log(`こんにちは ${this.name}`);
// }

// Japanese.prototype.bye = function() {
//     console.log(`さようなら ${this.name}`);
// }

// // function newJapanese(Obj, ...args) {
// //     const _this = Object.create(Obj.prototype);
// //     console.log(_this);
// //     const result = Obj.apply(_this, args);
// //     if(typeof result === 'object' && result !== null) {
// //         return result;
// //     }
// //     return _this;
// // }

// // const taro = newJapanese(Japanese, 'Taro', 23);
// const taro = new Japanese('太郎', 23, 'Male');
// console.log(taro);

// taro.hello();

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     hello() {
//         console.log(`hello ${this.name}`);
//     }
// }

// function newPerson(Obj, ...args) {
//     const _this = Object.create(Obj.prototype);
//     const result = Obj.apply(_this, args);
//     if(typeof result === 'object' && result !==null) {
//         return result;
//     }
//     return _this;
// }
/*
 * Uncaught TypeError TypeError: Class constructor Person cannot be invoked without 'new'
 */
// const bob = newPerson(Person, 'Bob', 23);

// const bob = new Person('Bob', 23);
// console.log(bob);
// bob.hello();

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.hello = function() {
//     console.log(`hello ${this.name}`);
// }

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.hello = function(name, age, gender) {
//     Person.call(this, name, age);
//     this.gender = gender;
// }

// Japanese.prototype = Object.create(Person.prototype);

// Japanese.prototype.hello = function() {
//     console.log(`こんにちは ${this.name}`);
// }

// Japanese.prototype.bye = function() {
//     console.log(`さようなら ${this.name}`);
// }

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     hello() {
//         console.log(`hello ${this.name}`);
//     }
// }

// class Japanese extends Person {
//     constructor(name, age, gender) {
//         super(name, age);
//         this.gender = gender;
//     }
//     hello() {
//         super.hello();
//         console.log(`こんにちは ${this.name}`);
//     }
//     bye() {
//         console.log(`さようなら ${this.name}`);
//     }
// }

// const taro = new Japanese('Taro', 23, 'Male');
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
//         // console.log(`hello ${this.name}`);
//         super.hello();
//     }
// }

// Object.setPrototypeOf(bob, american);

// bob.hello();

// const array = new Array(1, 2, 3, 4);
// console.log(array);

// console.log(array[0]);

// array.hasOwnProperty(4);

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

// const obj = { prop: 0 };

// const obj = {};

// Object.defineProperty(obj, 'prop', {
//     configurable: true,
//     value: 0,
//     writable: true
// })

// delete obj.prop;

// // obj.prop = 1;

// console.log(obj.prop);

// const descriptor = Object.getOwnPropertyDescriptor(obj, 'prop');

// console.log(descriptor);

// function Person1(name, age) {
//     this._name = name;
//     this._age = age;
// }

// Person1.hello = function() {
//     console.log('hello');
// }

// Person1.hello();

// Object.defineProperty(Person1.prototype, 'name', {
//     get: function() {
//         console.log(this._name);
//         return `hello ${this._name}`;
//     },
//     set: function(val) {
//         this._name = val;
//     }
// })

// const p1 = new Person1('Bob', 23);

// p1.name = 'Tom';
// console.log(p1.name);

// class Person2 {
//     constructor(name, age) {
//         this._name = name;
//         this._age = age;
//     }

//     get name() {
//         console.log(this._name);
//         return `hello ${this._name}`;
//     }

//     set name(val) {
//         this._name = val;
//     }

//     static hello() {
//         console.log('hello');
//     }
// }

// Person2.hello();

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    hello(person) {
        console.log(`${this.name} says hello ${person.name}.`);
        return this;
    }

    introduce() {
        console.log(`Hi, I'm ${this.name}, ${this.age} years old.`);
        return this;
    }

    shakeHands(person) {
        console.log(`${this.name} shake hands with ${person.name}.`);
        return this;
    }

    bye(person) {
        console.log(`Goodbye, ${person.name}!`);
        return this;
    }
}

const bob = new Person('Bob', 23);
const tim = new Person('Tim', 33);

bob.hello(tim)
    .introduce()
    .shakeHands(tim)
    .bye(tim);

tim.hello(tim)
    .introduce()
    .shakeHands(tim)
    .bye(tim);