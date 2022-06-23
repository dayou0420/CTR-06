// function sleep(ms) {
//     const startTime = new Date();
//     while(new Date() - startTime < ms);
//     console.log('Sleep done');
// }

// const btn = document.querySelector('button');
//     btn.addEventListener('click', function(){
//     console.log('button clicked');
// });

// setTimeout(function() {
//     sleep(3000)
// }, 2000)

// const btn = document.querySelector('button');
// btn.addEventListener('click', function task2() {
//     console.log('Task2 done');
// });

// function a() {
//     setTimeout(function task1() {
//         console.log('Task1 done');
//     }, 4000);

//     const startTime = new Date();
//     while(new Date - startTime < 5000);

//     console.log('fn a done');
// }

// a();

// function a(b) {
//     setTimeout(function task1() {
//         console.log('Task1 done');
//         b();
//     });

//     console.log('fn a done');
// }

// function b() {
//     console.log('fn b done');
// }

// a(b);

// // b();

// function sleep(callback, val) {
//     setTimeout(function() {
//         console.log(val++);
//         callback(val);
//     }, 1000);
// }

// sleep(function(val) {
//     sleep(function(val) {
//         sleep(function(val) {
//             sleep(function(val) {
//                 sleep(function(val) {
//                     sleep(function(val) {
//                         sleep(function(val) {
//                             sleep(function(val) {
//                                 sleep(function(val) {
//                                     sleep(function(val) {
//                                         sleep(function(val) {
//                                         }, val)
//                                     }, val)
//                                 }, val)
//                             }, val)
//                         }, val)
//                     }, val)
//                 }, val)
//             }, val)
//         }, val)
//     }, val)
// }, 0)

// new Promise(function(resolve, reject) {
//     console.log('promise is called');
//     setTimeout(function() {
//         // resolve('hello');
//         reject('bye');
//     })
// }).then(function(data) {
//     console.log(`${data}: then is called`);
//     // throw new Error();
//     return data;
// }).then(function(data) {
//     console.log(`${data}: then is called`);
// }).catch(function(data) {
//     console.log(`${data}: catch is called`);
// }).finally(function() {
//     console.log('finally is called');
// })

// console.log('Global Empty');

// function sleep(val) {
//     return new Promise(function(resolve) {
//         setTimeout(function() {
//             console.log(val++);
//             resolve(val);
//         }, val * 500);
//     })
// }

// Promise.all([sleep(2), sleep(3), sleep(4)])
// // Promise.race([sleep(2), sleep(3), sleep(4)])
// // Promise.allSettled([sleep(2), sleep(3), sleep(4)])
//     .then(function(data) {
//         console.log(data);
//     }).catch(function(e) {
//         console.error(e)
// });

// sleep(0)
//     .then( val =>
//             sleep(val)
//     ).then( val => 
//             sleep(val)
//     ).then( val => 
//             sleep(val)
//     ).then( val => 
//             sleep(val)
//     ).then( val => 
//             sleep(val)
// );
