// function sum(x, y, z) {
//     return x + y + z;
// }

// console.log(sum(1, 2, 3));

// const numbers = [1, 2, 3];

// console.log(numbers);

// console.log(sum(...numbers));

// console.log(sum.apply(null, numbers));

// let arr1 = [0, 1, 2];
// let arr2 = [3, 4, 5];

// arr3 = arr1.concat(arr2);
// arr4 = [...arr2, 10, ...arr1];

// console.log(arr3);
// console.log(arr4);

// let obj1 = { foo: 'bar', x: 42 };
// let obj2 = { foo: 'baz', y: 13 };

// let clonedObj = { ...obj1 };

// let mergedObj = { ...obj1, ...obj2 };

// console.log(clonedObj);
// console.log(clonedObj === obj1);

// console.log(mergedObj);

// let a = [[1], [2], [3]];
// let b = [...a];

// b.shift().shift();

// console.log(b);
// console.log(a);

// /**
//  * Rest Parameters
// */

// function sum(...theArgs) {
//     return theArgs.reduce(function(previous, current) {
//         return previous + current;
//     });
// }

// console.log(sum(1, 2, 3));

// function f(a) {
//     let args = Array.prototype.slice.call(arguments, f.length);
//     console.log(args);
// }

// console.log(f(1, 2, 3));

// function f(a, ...args) {
//     console.log(args);
// }

// f(1, 2, 3);
