// const h2 = document.querySelector('h2');
// const text = h2.textContent;
// console.log(text);

// 'use strict';

// function fn() {
//     a = 0;
// }

// fn();

// console.log(a);

// 'use strict';

// class C {
//     constructor() {
//         function fn() {
//             console.log(this);
//         }
//         fn();
//     }

//     method() {
//         function fn() {
//             console.log(this);
//         }
//         fn();
//     }
// }

// function fn() {
//     console.log(this);
// }

// fn();

// const c = new C();
// c.method();

import { calc } from './calc20220407.js';

calc.plus(5);
calc.minus(3);
calc.multiply(3);
calc.divide(2);
