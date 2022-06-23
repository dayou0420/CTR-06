// new Promise(function(resolve, reject) {
//     console.log('promise');
//     resolve('hello');
// }).then(function(data) {
//     console.log(`then ${data}`);
//     // throw new Error();
// }).then(function() {
//     console.log(`then ${data}`);
// }).catch(function() {
//     console.log('catch');
// }).finally(function() {
//     console.log('finally')
// })

// console.log('global end');

// function sleep(callback) {
//     setTimeout(function() {
//         console.log('hello');
//         callback();
//     })
// }

// sleep(function() {
//     console.log('callback done');
// })
