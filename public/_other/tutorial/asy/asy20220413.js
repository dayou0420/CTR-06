// // async function sample() {
// //     const num = await asyncFn();
// //     num++;
// //     return num;
// // }

// // asyncFn(0).then(function(num) {
// //     num++;
// //     return num;
// // })

// function wait(num) {
//     return new Promise(function(resolve, reject) {
//         setTimeout(function() {
//             console.log(num);
//             if(num === 2) {
//                 reject(num);
//             } else {
//                 resolve(num);
//             }
//         }, 1000);
//     });
// }

// async function init() {
//     let num = 0;
//     try {
//         num = await wait(0);
//         num++;
//         num = await wait(num);
//         num++;
//         num = await wait(num);
//         num++;
//     } catch(e) {
//         throw new Error('Error is occured', e);
//     }

//     return num;
// }

// init();
