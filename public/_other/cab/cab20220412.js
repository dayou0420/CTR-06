function greet() {
    let sliceArray = [].slice.call(arguments);
    let hi = `Hi, ${this.name}`;
    console.log(hi);
    console.log(sliceArray);
}

let obj = { name: 'Tom' };

greet();
greet.call(obj, 1, 2, 3);
greet.apply(obj, [1, 2, 3]);

const arry = [1, 2, 3, 4];
console.log(Math.min(...arry));
console.log(Math.min.apply(null, arry));

let myObj = {
    id: 42,
    print() {

        console.log(this); // { id: 42, print: f }

        let _this = this;

        window.setTimeout(function() {

            console.log(this);  // Before bind: undefined
            
            console.log(_this);  // Before bind: { id: 42, print: f }

            console.log(this.id);

        }.bind(this), 1000);
    }
}

myObj.print();

let window = {
    setTimeout: function(cb, millisecond) {
        // stop millisecond
        cb();
    }
}
