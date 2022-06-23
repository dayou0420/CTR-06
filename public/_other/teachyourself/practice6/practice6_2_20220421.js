// (function noArgumentFunc() {
//     console.log('引数がないです');
// })();

// function multiply(val1, val2) {
//     const result = val1 * val2;
//     console.log(result);
// }

// multiply(2, 3); // 6
// multiply(15, 2, 10); // 30

(function twoArgumentFunc(arg1, arg2) {
    console.log("arg1:", arg1);
    console.log("arg2:", arg2);
})();
