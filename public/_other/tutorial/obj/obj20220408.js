// const targetObj = { a: 0 };
// const handler = {
//     set: function(target, prop, value, receiver) {
//         console.log(`[set]: ${prop}`);
//         target[prop] = value;
//         // throw new Error('cannot add prop');
//     },
//     get: function(target, prop, receiver) {
//         console.log(receiver);
//         console.log(`[get]: ${prop}`);
//         return target[prop];
//     },
//     deleteProperty: function(target, prop) {
//         console.log(`[delete]: ${prop}`);
//         delete target[prop];
//     }
// }

// const pxy = new Proxy(targetObj, handler);
// pxy.a = 1;
// pxy.a;
// delete pxy.a;

// class C {
//     constructor(a, b) {
//         this.a = a;
//         this.b = b;
//     }
// }

// const obj1 = new C(1, 2);
// console.log(obj1);

// const obj2 = Reflect.construct(C, [1, 2]);
// console.log(obj2);

// if(Reflect.deleteProperty) {
    
// } else {

// }

// const bob = {
//     name: 'Bob',
//     _hello: function() {
//         console.log(`hello ${this.name}`);
//     }
// }

// const tom = {
//     name: 'Tom',
//     _hello: function() {
//         console.log(`hello ${this.name}`);
//     },
//     get hello() {
//         console.log(this);
//         return this._hello();
//     }
// }

// tom.hello;
// Reflect.get(tom, 'hello');

// const targetObj = { 
//     a: 0,
//     get value() {
//         return this.a;
//     }
// };

// const handler = {
//     get: function(target, prop, receiver) {
//         console.log(`[get]: ${prop}`);
//         if(target.hasOwnProperty(prop)) {
//             return Reflect.get(target, prop);
//         } else {
//             return -1;
//         }
//     }
// }

// const pxy = new Proxy(targetObj, handler);
// console.log(pxy.value);
// console.log(pxy.b);

// const wm = new WeakMap();

// const o = {};

// wm.set(o, 'value1');

// // o = null;
// // o = {};
// console.log(wm.delete(o));
// console.log(wm.get(o));

// const wm = new WeakMap();

// class Person {
//     constructor(name) {
//         // this._name = name;
//         wm.set(this, {
//             name
//         });
//     }

//     hello() {
//         console.log(`hello ${wm.get(this).name}`);
//     }
// }

// const tim = new Person('Tim');
// tim.hello();
// console.log(this._name);

// const obj = { a: 0, b: 1, c: 2 };

// function replacer(prop, value) {
//     if(value < 1) {
//         return;
//     }
//     return value;
// }

// const json = JSON.stringify(obj, replacer);
// console.log(json);

// const obj2 = JSON.parse(json);
// console.log(obj2);

// const obj = { a: 0 };
// const json = JSON.stringify(obj);
// localStorage.setItem('key', json);
// const result = localStorage.getItem('key');
// const obj2 = JSON.parse(result);
// console.log(obj2.a);

// const arry = [1, 2, 3, 4, 5];
// const arry2 = arry.concat([6, 7, 8]);

// arry.push(6);
// const result =  arry.slice(0, 3, 1, 2);
// console.log(arry2, result);

// const arry = [1, 2, 3, 4, 5];

// arry.forEach(function(v, i, arr) {
//     console.log(v);
// });

// const newArry = arry.map(function(v, i, arr) {
//     return arry;
// });

// // console.log(newArry);

// const filterArry = arry.filter(function(v, i, arr) {
//     return i >= 1;
// });

// console.log(filterArry);

// const arry = [1, 2, 3, 4, 5];

// const result = arry.reduce(function(accu, curr) {
//     console.log(accu, curr);
//     return accu + curr * 2;
// });

// console.log(result);


// const arry = [1, 2, 3, 4, 5];

// arry.forEach(function(v, i, arr) {
//     console.log(v);
// });