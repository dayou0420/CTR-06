// function Calculator() {
//     this.val = null;
//     this._operator;
// }
// Calculator.prototype.set = function(val) {
//     if(this.val === null) {
//         this.val = val;
//     } else {
//         this._operator(this.val, val);
//     }
//     return this;
// }
// Calculator.prototype.plus = function() {
//     this._operator = function(val1, val2) {
//         const result = val1 + val2;
//         this._equal(result);
//     }
//     return this;
// }
// Calculator.prototype.minus = function() {
//     this._operator = function(val1, val2) {
//         const result = val1 - val2;
//         this._equal(result);
//     }
//     return this;
// }
// Calculator.prototype.mutiply = function() {
//     this._operator = function(val1, val2) {
//         const result = val1 * val2;
//         this._equal(result);
//     }
//     return this;
// }
// Calculator.prototype.divide = function() {
//     this._operator = function(val1, val2) {
//         const result = val1 / val2;
//         this._equal(result);
//     }
//     return this;
// }
// Calculator.prototype._equal = function(result) {
//     this.val = result;
//     console.log(result);
// }
// function Calculator() {
//     this.val = null;
//     this._operator;
// }
// Calculator.prototype.set = function(val) {
//     if(this.val === null) {
//         this.val = val;
//     } else {
//         this._operator(this.val, val);
//     }
//     return this;
// }
// Calculator.prototype.plus = function() {
//     this._operator = function(val1, val2) {
//         const result = val1 + val2;
//         this._equal(result);
//     }
//     return this;
// }
// Calculator.prototype.minus = function() {
//     this._operator = function(val1, val2) {
//         const result = val1 - val2;
//         this._equal(result);
//     }
//     return this;
// }
// Calculator.prototype.mutiply = function() {
//     this._operator = function(val1, val2) {
//         const result = val1 * val2;
//         this._equal(result);
//     }
//     return this;
// }
// Calculator.prototype.divide = function() {
//     this._operator = function(val1, val2) {
//         const result = val1 / val2;
//         this._equal(result);
//     }
//     return this;
// }
// Calculator.prototype._equal = function(result) {
//     this.val = result;
//     console.log(result);
// }
// class Calculator {
//     constructor() {
//         this.val = null;
//         this._operator;
//     }
//     set(val) {
//         if(this.val === null) {
//             this.val = val;
//         } else {
//             this._operator(this.val, val);
//         }
//         return this;
//     }
//     plus() {
//         this._operator = function(val1, val2) {
//             const result = val1 + val2;
//             this._equal(result);
//         }
//         return this;
//     }
//     minus() {
//         this._operator = function(val1, val2) {
//             const result = val1 - val2;
//             this._equal(result);
//         }
//         return this;
//     }
//     mutiply() {
//         this._operator = function(val1, val2) {
//             const result = val1 * val2;
//             this._equal(result);
//         }
//         return this;
//     }
//     divide() {
//         this._operator = function(val1, val2) {
//             const result = val1 / val2;
//             this._equal(result);
//         }
//         return this;
//     }
//     _equal(result) {
//         this.val = result;
//         console.log(result);
//     }
// }
/* const calc = new Calculator();
* 
* calc.set(10)
* .minus()
* .set(3) -> '7' Output (10 - 3)
* 
* const calc = new Calculator();
* 
* calc.set(10)
*   .minus()
*   .set(3) -> '7' Output
*   .mutiply()
*   .set(6) -> '42' Output（10 - 3) * 6
*/
// class Calculator {
//     constructor() {
//         this.val = null;
//         this.operator;
//     }
//     set(val) {
//         if(this.val === null) {
//             this.val = val;
//         } else {
//             this.operator(this.val, val);
//         }
//         return this;
//     }
//     plus() {
//         this.operator = function(val1, val2) {
//             const result = val1 + val2;
//             this._equal(result);
//         }
//         return this;
//     }
//     minus() {
//         this.operator = function(val1, val2) {
//             const result = val1 - val2;
//             this._equal(result);
//         }
//         return this;
//     }
//     mutiply() {
//         this.operator = function(val1, val2) {
//             const result = val1 * val2;
//             this._equal(result);
//         }
//         return this;
//     }
//     devide() {
//         this.operator = function(val1, val2) {
//             const result = val1 / val2;
//             this._equal(result);
//         }
//         return this;
//     }
//     _equal(result) {
//         this.val = result;
//         console.log(result)
//     }
// }

function Calculator() {
    this.val = null;
    this._operator;
}

Calculator.prototype.set = function(val) {
    if(this.val === null) {
        this.val = val;
    } else {
        this._operator(this.val, val);
    }
    return this;
}

Calculator.prototype.minus = function() {
    this._operator = function(val1, val2) {
        const result = val1 - val2;
        this._equal(result);
    }
    return this;
}

Calculator.prototype.mutiply = function() {
    this._operator = function(val1, val2) {
        const result = val1 * val2;
        this._equal(result);
    }
    return this;
}

Calculator.prototype._equal = function(result) {
    this.val = result;
    console.log(result);
}

const calc = new Calculator();

calc.set(10)
    .minus()
    .set(3)
    .mutiply()
    .set(6)
