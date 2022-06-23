const obj = {
    prop1: 10,
    prop2: "文字列",
    prop3: 20,
    skip: 20,
    prop4: true,
    prop5: 23,
    prop6: 47
};

const objEntries = Object.entries(obj);

let sum = 0

for(const [key, value] of objEntries) {
    if((typeof value === 'number') && (key !== 'skip')) {
        sum += value;
    }
}

console.log(sum);
