// function fn(...args) {
//     const arg = args.map( elem => {
//         return elem * 3;
//     });
//     console.log(arg);
//     console.log(args);
// }

// fn(0, 1, 2);

// window.prop = 2;

// function a() {
//     console.log(`hello ${this.prop}`);
// }

// a.prop = 1;
// a.method = function() {
//     console.log(`Method: hello ${this.prop}`);
// }

// a();
// a.method();
// console.log(a.prop);

function hello(name) {
    console.log(`hello ${name}`);
}

function bye() {
    console.log('bye');
}

function fn(cb) {
    cb('Tom');
}

fn(hello);
fn(bye);
fn(function(name) {
    console.log(`hello ${name}`)
});

setTimeout(hello, 1000);
