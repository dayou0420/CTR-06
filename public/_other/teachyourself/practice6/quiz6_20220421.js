// setTimeout(personName => console.log(`こんにちは、${personName}`), 2000, '⭕️⭕️');

// function add(val1, val2) { return val1 + val2 }
// function minus(val1, val2) { return val1 - val2 }

// function calcAndDisp(operator, callback, val1, val2) {
//     callback(operator(val1, val2));
// }

// calcAndDisp(add, console.log, 3, 2); // 5

// calcAndDisp(minus, alert, 3, 2); // 1

const fn1 = (num1, num2) => num1 + num2;
const fn2 = num =>  num * 2;
const fn3 = () => console.log("Hello World");
const fn4 = name => { 
    console.log("Hello World");
    console.log(`Hello ${name}`);
}
const fn5 = name => { name: "山田太郎" };

const personName = '山田太郎';

console.log(fn1(1, 2));
console.log(fn2(3));
fn3();
fn4(personName);
console.log(fn5);
