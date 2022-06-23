const obj = {
    prop1: 10,
    prop2: 20,
    skip: 20,
    prop3: 23,
    prop4: 47
};

let sum = 0;

for(let key in obj) {
    if(key != 'skip') {
        let val = obj[i];
        sum += val;
    }
}

console.log(sum);
