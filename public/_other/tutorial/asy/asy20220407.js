// setTimeout(function task1() {
//     console.log('task1');
// });

// new Promise(function promise(resolve) {
//     console.log('promise');
//     resolve();
// }).then(function job1() {
//     console.log('job1');
// });

// console.log('global end');

// new Promise(function promise(resolve) {
//     console.log('promise');

//     setTimeout(function task1() {
//         console.log('task1');
//         resolve();
//     });

// }).then(function job1() {
//     console.log('job1');
//     setTimeout(function task2() {
//         console.log('task2');

//         const p = Promise.resolve();
//         p.then(function job4() {
//             console.log('job4');
//         })
//     });

// }).then(function job2() {
//     console.log('job2');
// }).then(function job3() {
//     console.log('job3');
// });

// console.log('global end');

// function sleep(val) {
//     return new Promise(function(resolve) {
//         setTimeout(function() {
//             console.log(val++);
//             resolve(val);
//         }, 1000);
//     });
// }

// async function init() {
//     let val = await sleep(0);
//     val = await sleep(val);
//     val = await sleep(val);
//     val = await sleep(val);
//     val = await sleep(val);
//     throw new Error();
//     return val;
// }

// init().then(function(val) {
//     console.log(`hello ${val}`);
// }).catch(function(e) {
//     console.error(e);
// });

// sleep(0).then(function(val) {
//     return sleep(val);
// }).then(function(val) {
//     return sleep(val);
// }).then(function(val) {
//     return sleep(val);
// });

// fetch('../../asy/users.json').then(function(response) {
//     return response.json();
// }).then(function(json) {
//     for(const user of json) {
//         console.log(`I'm ${user.name}, ${user.age} years old.`)
//     }
// })

// async function fetchUsers() {
//     const response = await fetch('../../asy/users.json');
//     const json = await response.json();
//     for(const user of json) {
//         console.log(`I'm ${user.name}, ${user.age} years old.`)
//     }
// }

// fetchUsers();

// try {
//     console.log('start');
//     // throw new Error('error message');
//     console.log('end');
// } catch(e) {
//     console.error(e);
// } finally {
//     console.log('bye');
// }

async function fetchUsers() {
    const response = await fetch('../../asy/users.json');
    if(response.ok) {
        const json = await response.json();
        if(!json.length) {
            throw new NoDataError('no data found');
        }
        return json;
    }
}

class NoDataError extends Error {
    constructor(message) {
        super(message);
        this.name = 'NoDataError';
    }
}

async function init() {
    try {
        const users = await fetchUsers();
        for(const user of users) {
            console.log(`I'm ${user.name}, ${user.age} years old.`)
        }
    } catch(e) {
        if(e instanceof NoDataError) {
            console.error(e);
        } else {
            console.error('Oops, something went wrong');
        }
    } finally {
        console.log('bye');
    }
    console.log('end');
}

init();
