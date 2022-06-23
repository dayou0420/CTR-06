// // var, let, const

// let personName = 'Tom';

// console.log(`hello ${personName}`);

// // Number, String, Boolean, Undefined, Null, Symbol

// let variable = 'str';
// variable = 12;
// variable = undefined;

// console.log(typeof variable);

// function hello(personName, age) {
//     console.log(`hello ${personName} ${age}`);
// }

// hello('Tom', 12);
// hello('Tim', null);

// let hello = 'hello world';
// console.log(hello.toLocaleLowerCase);

// const arry = new Array(1, 2, 3, 4, 5, 6, 'moji', false);
// arry[5] = 8;

// arry.push('new item');
// arry.unshift('new item2');
// arry.shift('new item2');

// const val = arry.pop();
// const val2 = arry.shift();

// console.log(arry.length);
// console.log(arry);
// console.log(val);
// console.log(val2);

// const person = {
//     name: ['My', 'Name'],
//     age: 23,
//     gender: 'male',
//     interests: {
//         sports: 'soccer',
//         music: 'piano'
//     },
//     getFullName: function() {
//         console.log(this.name[0] + this.name[1]);
//     }
// };

// person.age = 42;

// console.log(person);
// console.log(person.name);
// console.log(person.name[0]);
// console.log(person.interests.sports);

// const ageKey = 'age';
// console.log(person[ageKey]);

// person.getFullName();

// const arry = [1, 2, 3, 4, 5, 6];

// for(let i = 0; i < arry.length; i++) {
//     console.log(arry[i]);
// }

// for(let i in arry) {
//     console.log(i, arry[i]);
// }

// for(let v of arry) {
//     console.log(v);
// }

// const todos = [
//     {
//         id: 1,
//         title: 'Go to school',
//         completed: true
//     },
//     {
//         id: 2,
//         title: 'Go to museum',
//         completed: true
//     },
//     {
//         id: 3,
//         title: 'Go shopping',
//         completed: false
//     }
// ];

// for(let i = 0; i < todos.length; i++) {

//     let todo = todos[i];

//     if(todo.completed === true) {
//         console.log(i, todo.title);
//     }
// }

// for(let i in todos) {

//     let todo = todos[i];

//     if(todo.completed === true) {
//         console.log(i, todo.title);
//     }
// }

// for(let todo of todos) {

//     if(todo.completed === true) {
//         console.log(todo.title);

//     }
// }

// const num = Number(false);
// console.log(num); // 0;

// if((0 == '0') || (0 === '0')) {
//     console.log('this is true');
// } else if(true) {
//     console.log('this is in else if block');
// } else {
//     console.log('this is false')
// }

// function hello(personName) {
//     console.log(`hello ${personName}`);
// }

// const hello = function(personName) {
//     console.log(`hello ${personName}`);
// }

// const hello = (personName, age) => 
//     `hello ${personName} ${age}`;

// console.log(hello('Tom', 18));

// arry.forEach(function(value) {
//     console.log(value);
// })

// arry.forEach( value => console.log(value));

// function hello(callback, lastName) {
//     console.log(`hello ${callback(lastName)}`)
// }

// function getName() {
//     return 'Tom';
// }

// const getFirstName = function() {
//     return 'Tom';
// }

// hello(getFirstName);

// hello(function(name) {
//     return 'Tom' + name;
// }, 'Son');

// // hello(() => 'Tom');

// function doSomething(a, b, callback) {
//     const resulut = callback(a, b);
//     console.log(resulut);
// }

// function multiply(c, d) {
//     return c * d;
// }

// function plus(e, f) {
//     return e + f;
// }

// doSomething(2, 2, multiply);
// doSomething(1, 2, plus);

// function greeting(firstName, LastName, callback) {
//     const result = callback(firstName, LastName);
//     console.log(result);
// }

// function sayEnglish(firstName, lastName) {
//     return `Hello ${firstName} ${lastName}`;
// }

// function sayJapanese(firstName, lastName) {
//     return `こんにちは ${lastName} ${firstName}さん`;
// }

// greeting('Micheal', 'Jackson', sayEnglish);
// greeting('信玄', '武田', sayJapanese);

// const arry = [1, 2, 3, 4, 5];

// function forEach(ary, callback) {
//     for(let i = 0; i < ary.length; i++) {
//         callback(ary[i]);
//     }
// }

// function log(val) {
//     console.log(val);
// }

// function double(val) {
//     val = val * 2;
//     log(val);
// }

// forEach(arry, log);
// forEach(arry, double);

// const arry = [1, 2, 3, 4, 5];

// arry.forEach(v => 
//     console.log(v));

// const arry = [1, 2, 3, 4, 5];

// arry.reduce(function(accu, curr) {
//     console.log(accu, curr);
//     return accu + curr;
// }, 10);

// const str = 'animation';
// const strArray = str.split('');

// console.log(strArray);

// const result = strArray.reduce((accu, curr) => {
//     return `${accu}<${curr}>`;
// }, '');

// console.log(result);

const str = 'animation';

const strArray = str.split('');

function tag(accu, curr) {
    console.log(accu);
    return `${accu}<${curr}>`;
}


function reduce(arry, callback, defaultValue) {
    let accu = defaultValue;

    for(let i = 0; i < arry.length; i++) {
        let curr = arry[i];
        accu = callback(accu, curr);
    }

    return accu;
}

const result = reduce(strArray, tag, '');
console.log(result);
