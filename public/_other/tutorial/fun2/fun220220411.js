// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.hello = function() {
//     return `hello ${this.name}`;
// }

// const bob = new Person('Bob', 18);
// const tom = new Person('Tom', 18);
// const sum= new Person('Sum', 18);

// console.log(bob.hello());
// console.log(tom.hello());
// console.log(sum.hello());

// function F(a, b) {
//     this.a = a;
//     this.b = b;
//     return { a: 1 };
// }

// F.prototype.c = function() {}

// const instance = new F(1, 2);
// console.log(instance instanceof F);
// console.log(instance.__proto__ === F.prototype);
