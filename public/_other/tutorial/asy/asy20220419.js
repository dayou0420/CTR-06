// const btn = document.querySelector('button');
// btn.addEventListener('click', function task2() {
//     console.log('task2 done');
// });

// function a() {
//     setTimeout(function task1() {
//         console.log('task1 done')
//     }, 4000);

//     const startTime = new Date();
//     while(new Date() - startTime < 2000);

//     console.log('fn a done');
// }

// a();

// function a() {
//     setTimeout(function task1() {
//         console.log('task1 done');
//         b();
//     });

//     console.log('fn a done');
// }

// function b() {
//     console.log('fn b done');
// }

// a(b);

// b();

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

//             }, val);
//         }, val);
//     }, val);
// }, 0);

// new Promise(function(resolve, reject) {
//     console.log('promise');
//     // resolve('hello');
//     // reject('bye');
//     setTimeout(function() {
//         resolve('hello');
//     }, 1000);
// }).then(function(data) {
//     console.log('then:' + data);
//     return data;
// }).then(function(data) {
//     console.log('then:' + data);
//     // throw new Error();
// }).then(function(data) {
//     console.log('then:' + data);
// }).catch(function(data) {
//     console.log('catch:' + data);
// }).finally(function() {
//     console.log('finally');
// });

// console.log('global end');

// function sleep(val) {
//     return new Promise(function(resolve) {
//         setTimeout(function() {
//             console.log(val++);
//             resolve(val);
//         }, 1000);
//     });
// }

// sleep(0).then(function(val) {
//     return sleep(val);
// }).then(function(val) {
//     return sleep(val);
// }).then(function(val) {
//     return sleep(val);
// }).then(function(val) {
//     return sleep(val);
// }).then(function(val) {
//     return sleep(val);
// });
