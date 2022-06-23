/*
 * Salesforce Certified JavaScript Developer I
 * No.3
 */

// function Person (fName, lName) {
//     this.fName = fName;
//     this.lName = lName;
// }

// Person.prototype.age = 29;
// let jim = new Person('Jim', 'Smith');
// let sofia = new Person('Sofia', 'Smith');

// console.log(jim.__proto__.age);
// console.log(sofia.age);

// Person.prototype = {age : 18};

// let Kris = new Person('Kris','Cooper');

// console.log(Kris.age);

/*
 * Salesforce Certified JavaScript Developer I
 * No.13
 */

// let emp = {
//     fName: 'Test',
//     lName: 'User',
//     get fullName(){
//         return fName + ' ' + lName;
//     },
//     set fullName(str){
//         var nameParts = str.split(' ');
//         this.fName = nameParts[0];
//         this.lName = nameParts[1];
//     }
// }
// emp.fullName ='John Smith';

// console.log(emp.fName);

// let message = {
//     hello: 'Hello',
//     names: ['Sue', 'Joe'],
//     showMessage: function() {
//         const _this = this;
//         this.names.forEach(function(name) {
//             console.log(_this.hello + ' ' + name);
//         });
//     }
// }

// message.showMessage();

// let message = {
//     hello: 'Hello',
//     names: ['Sue', 'Joe'],
//     showMessage: function() {
//         this.names.forEach( name => {
//             console.log(this.hello + ' ' + name);
//         });
//     }
// }

// message.showMessage();

// function getAge(...args) {
//     console.log(typeof args, args);
// }

// const arry = new Array(21);
// const arry2 = [1, 2];
// console.log(typeof arry, arry);
// console.log(typeof arry2, arry2);

// getAge(21);

/*
 * Salesforce Certified JavaScript Developer I
 * No.33
 */

// const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
// const regex = /[A-Z]/g;
// const found = paragraph.match(regex);
// console.log(found);

// const arr = [1, 4, 9, 16];
// const mapA = arr.filter(x => x % 2); 
// console.log(mapA);

/*
 * Salesforce Certified JavaScript Developer I
 * No.45
 */

// let array1 = ['one', 'two'];
// let array2 = ['three', 'four'];
// array1.push(...array2);
// console.log(...array1);
// console.log(array1);

/*
 * Salesforce Certified JavaScript Developer I
 * No.48
 */

// let person = { 
//     name: 'Lydia'
// };
// const members = [person];
// person = null;
// console.log(members);
// console.log(person);

/*
 * Salesforce Certified JavaScript Developer I
 * No.55
 */

// let s1 = '2 + 2'
// let s2 = new String('2 + 2')
// console.log(eval(s1))
// console.log(eval(s2))
// console.log(eval(s2.valueOf()))

/*
 * Salesforce Certified JavaScript Developer I
 * No.65
 */

// const value = { number: 10 };
// const multiply = (x = { ...value }) => {
// console.log((x.number *= 2)); };

// multiply();
// multiply();
// multiply(value);
// multiply(value);

/*
 * Salesforce Certified JavaScript Developer I
 * No.82
 */

// const a = {};
// const b = { key: 'b' };
// const c = { key: 'c' };

// a[b] = 123;
// a[c] = 456;

// console.log(a[b]);

// console.log(a);

/*
 * Salesforce Certified JavaScript Developer I
 * No.83
 */

// let emp = {
//     name: "Santanu",
//     dept: "IT"
// }

// Object.seal(emp);
// delete emp.name;
// console.log(emp);
