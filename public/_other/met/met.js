class MyArray extends Array {
    constructor(...args) {
        super(...args);
    }

    push(val) {
        super.push(val);
        return this;
    }

    forEach(callback) {
        for(let i = 0; i < this.length; i++) {
            callback(this[i], i, this);
        }
    }
}

const myArray = new MyArray(1, 2, 3, 4);
myArray.push(5);
myArray.forEach(function(v, i, arry) {
    console.log(v, i, arry);
});

console.log(myArray);
