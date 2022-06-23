// function fn(a, b = 1) {
//     console.log(a, b);
// }

// fn(1, null);

// function a() {
//     console.log('hello');
// }

// a.prop = 0;
// a.method = function() {
//     console.log(`Property: ${this.prop}, method`)
// }

// a();
// a.method();
// console.log(a.prop);

// function hello(name) {
//     return `hello ${name}`;
// }

// function bye() {
//     return 'bye';
// }

// function fn(cb) {
//     return cb('Tom');
// }

// console.log(fn(hello));
// console.log(fn(bye));
// console.log(fn(function(name) {
//     return (`hello ${name}`);
// }));

// const person = {
//     name: 'Tom',
//     hello: function() {
//         return `hello ${this.name}`;
//     }
// }

// console.log(person.hello());

// const helloTom = person.hello.bind(person);

// function fn(ref) {
//     return ref();
// }

// console.log(fn(helloTom));

// function a(name) {
//     return `hello ${this.name} ${name}`;
// }

// const b = a.bind({ name: 'Tim' }, 'Kate');

// console.log(b());

// function a(name) {
//     return `hello ${this.name} ${name}`;
// }

// const tim = { name: 'Tim' };
// const b = a.bind(tim, 'Tim');

// console.log(b());
// console.log(a.apply(tim, ['Tim']));
// console.log(a.call(tim, 'Tim'));

// const arry = [1, 2, 3, 4, 5];

// const result = Math.max.apply(null, arry);
// console.log(result);
