// const targetObj = { a: 0 };
// const handler = {
//     set: function(target, prop, value, receiver) {
//         console.log(`[set]: ${prop}`);
//         // target[prop] = value;
//         throw new Error('cannot add prop.');
//     },
//     get: function(target, prop, receiver) {
//         console.log(receiver);
//         if(target.hasOwnProperty(prop)) {
//             return target[prop];
//         } else {
//             return -1;
//         }
//     },
//     deleteProperty: function(target, prop) {
//         console.log(`[delete]: ${prop}`);
//         delete target[prop];
//     },
// }

// const pxy = new Proxy(targetObj, handler);
// pxy.a = 1;
// pxy.a;
// console.log(pxy.b);
// delete pxy.a;

// const bob = {
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
//             return Reflect.get(target, prop, receiver);
//         } else {
//             return -1;
//         }
//     }
// }

// const pxy = new Proxy(targetObj, handler);

// console.log(pxy.value);
// console.log(pxy.b);

