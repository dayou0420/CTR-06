// let a = 0;
// var b = 0;
// function c() {}

// console.log(b);

// function a() {
//   let b = 0;
//   console.log(b);
// }

// a();

// {
//   let c = 1;
//   console.log(c);

//   // function d() {
//   //   console.log('d is called');
//   // }
//   // d();

//   const d = function() {
//     console.log('d is called');
//   }

//   d();
// }

// let a = 2;

// function fn1() {
//   let b = 1;
//   function fn2() {
//     let c = 3;
//     console.log(b);
//   }
//   fn2();
// }
// fn1();

// const incremant = incremantFactory();
// incremant();
// incremant();
// incremant();
// incremant();

// function incremantFactory() {

//   let num = 0;

//   function incremant() {
//     num = num + 1;
//     console.log(num);
//   }

//   return incremant;
// }

// const incremantFactory = () => {
//   let num = 0;

//   const incremant = () => {
//     num = num + 1;
//     console.log(num);
//   }

//   return incremant;
// }

// const incremant = incremantFactory();
// incremant();
// incremant();
// incremant();
// incremant();

// const add5 = addNumberFactory(5);
// const add10 = addNumberFactory(10);
// const result = add10(10);
// console.log(result);

// function addNumberFactory(num) {
//   function addNumber(value) {
//     return num + value;
//   }
//   return addNumber;
// }

// const addNumberFactory = num => {
//   const addNumber = value => num + value;
//   return addNumber;
// }

// const add10 = addNumberFactory(10);
// const result = add10(10);
// console.log(result);

// function a() {
//   console.log('called');
// }
// a();

// (function() {
//   console.log('called');
// })();

// const b = function() {
//   console.log('called');
// }();

// const c = function(d) {
//   console.log('called ' + d);
//   return 0;
// }(10);

// console.log(c);

// const e = (function() {

//   let privateVale = 0;
//   let publicValue = 10;

//   function privateFn() {
//     console.log('privateFn is called');
//   }

//   function publicFn() {
//     console.log('publicFn is called' + privateVale++);
//   }

//   return {
//     publicValue: publicValue,
//     publicFn: publicFn
//   };
// })()

// e.publicFn();
// e.publicFn();
// e.publicFn();
// e.publicFn();

// console.log(e.publicValue);
