// const arry = [1, 2, 3, 4, 5];

// arry.reduce((acc, cur) => {
//     console.log(acc, cur);
//     // return acc + cur;
// }, 10);

// const str = 'animation';
// const strArry = str.split('');

// const result = strArry.reduce((acc, cur) => {
//     return `${acc}` + `<${cur}>`;
// }, '');

// console.log(result);

// const str = 'animation';
// const strArry = str.split('');

// function tag(acc, cur) {
//     console.log(acc, cur);
//     return `${acc}` + `<${cur}>`;
// }


// function reduce(arry, callback, defaultValue) {
//     let acc = defaultValue;

//     for(let i = 0; i < arry.length; i++) {
//         let cur = arry[i];
//         acc = callback(acc, cur);
//     }

//     return acc;
// }

// const result = reduce(strArry, tag, '');
// console.log(result);

// const nodeOps = {
//     qs(selector, scope) {
//         return (scope || document).querySelector(selector);
//     },
//     qsAll(selector, scope) {
//         return (scope || document).querySelectorAll(selector);
//     },
//     html(target, value) {
//         target.innerHTML = value;
//     }
// }

// document.querySelector
// const body = nodeOps.qs('body');
// const title = nodeOps.qs('.title', body);
// const hello = 'hello';
// nodeOps.html(title, hello);
