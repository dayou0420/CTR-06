// function wait(num) {
//     return new Promise(function(resolve, reject) {
//         setTimeout(function() {
//             console.log(num);
//             if(num === 2) {
//                 reject(num);
//             } else {
//                 resolve(num);
//             }
//         }, num);
//     });
// }

// Promise.all([wait(1000), wait(1500), wait(2000)]).then(function(nums) {
//     console.log(nums);
// });

// // wait(0).then(function(num) {
// //     num++;
// //     return wait(num);
// // }).then(function(num) {
// //     num++;
// //     return wait(num);
// // }).then(function(num) {
// //     num++;
// //     return wait(num);
// // }).then(function(num) {
// //     num++;
// //     return wait(num);
// // }).catch(function(num) {
// //     num++;
// //     console.error(num, 'error');
// // });
