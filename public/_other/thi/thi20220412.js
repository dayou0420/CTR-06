let myObj = {
    id: 2,
    prontId: function() {
        console.log(this.id);
    }
}

myObj.prontId();

const sayFoo = function() {
    console.log(this['foo']);
}

foo = 'foo';

const mySecondObj = {
    foo: "I'm in the obj",
    sayFoo
}

// sayFoo();
mySecondObj.sayFoo();

function MyObj(id) {
    this.id = id;
}

MyObj.prototype.prontId = function(id) {
    console.log(this.id);
}

const newInstance = new MyObj(5);

class MyClass {
    constructor(id) {
        this.id = id;
    }

    prontId() {
        console.log(this.id);
    }
}

const outer = {
    func1: function() {
        console.log(this); // { func1: f }

        let _this = this;

        const func2 = function() {
            console.log(_this); // Window

            const func3 = function() {
                console.log(_this); // Window
            }();
        }();
    }
}
outer.func1();
