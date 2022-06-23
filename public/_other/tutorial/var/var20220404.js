// let a = 0;
// let a = 0;

// var b = 0;
// var b = 1;

// let c = 0;
// c = 1;

// const d = 0;
// d = 1;

// {
//     let e = 0;
//     var f = 0;
// }

// console.log(g);

// let g = 0;
// var h = 0;

// const printTypeAndValue = value => 
//     console.log(typeof value, value);

// let a = 0;

// printTypeAndValue(a);

// let b = parseInt('1') + a;
// printTypeAndValue(b);

// let c = 15 - b;

// printTypeAndValue(c);

// let d = c - null;

// printTypeAndValue(d);

// let e = d - true;

// printTypeAndValue(e);

// const printEquality = (a, b) => 
//     console.log(`厳格な等価性: ${(a === b)}\n抽象的な等価性: ${(a == b)}`);

// let a = '1';
// let b = 1;

// printEquality(a, b);

// let c = true;

// printEquality(b, c);

// let e = "";
// let f = 0;
// let g = "0";

// printEquality(f, g);

/*
 * If Type(x) is Number and Type(y) is String,
 * return the result of the comparison x == ToNumber(y).
 */

// let a = parseInt("");
// console.log(Boolean(a));

// if(!a) {
//     console.log('hello');
// } else {
//     console.log('bye');
// }

// const a = 0;
// const b = 1;
// const c = 3;
// const d = 0;
// console.log(a && b && c);
// console.log(a || b || c);
// console.log((a || b) && (c || d));

// const hello = name => {
//     name = name || 'Tom';
//     console.log(`hello ${name}`);
// }

// hello();

// let name = 'Bob';

// name && hello(name);

// let a = 'hello';
// let b = a;
// b = 'bye';
// console.log(a, b);

// let c = {
//     prop: 'hello'
// }
// let d = c;
// d = {};
// console.log(c, d);

// const a = 'hello';
// a = 'bye';

// console.log(a);

// const b = {
//     prop: 'hello'
// }

// b.prop = 'bye';
// console.log(b);

// let a = 0;

// function fn1(arg1) {
//     arg1 = 1;
//     console.log(a, arg1);
// }

// let arg1 = a;
// arg1 = 1;
// console.log(a, arg1);

// fn1(a);

// let b = {
//     prop: 0
// }

// function fn2(arg2) {
//     arg2.prop = 1;
//     console.log(b, arg2);
// }

// fn2(b);

// function fn3(arg3) {
//     arg3 = {};
//     console.log(b, arg3);
// }

// fn3(b);

// const a = {
//     prop: 0
// }

// let { prop: b } = a;

// let { prop } = a;

// prop = 1;

// console.log(a, prop);

// function fn({ prop }) {
//     prop = 1;
//     console.log(a, prop);
// }

// fn(a);

// const c = {
//     prop1: {
//         prop2: 0
//     }
// }

// let { prop1 } = c;

// // console.log(prop1);

// prop1.prop2 = 1;

// console.log(c, prop1);

// const a = {
//     prop: 0
// }

// const b = {
//     prop: 0
// }

// console.log(a.prop === b.prop);

// const c = a;

// console.log(a === c);
