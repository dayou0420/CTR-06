const fruits = {
    banana: 'うまい',
    apple: '普通',
    orange: '微妙',
    other: {
        grape: 'うまい'
    }
};

const changedJson = targetObj => JSON.stringify(targetObj);
const bananaAndOrange = targetObj => JSON.stringify(targetObj, ['banana', 'orange']);
const niceFruits = targetObj => JSON.stringify(targetObj, replacer);

function replacer(prop, value) {
    if((typeof value === 'string') && (value !== 'うまい')) {
        return;
    } else {
        return value;
    }
}

const jsonFruits = changedJson(fruits);
const jsonBananaAndOrange = bananaAndOrange(fruits);
const jsonNiceFruits = niceFruits(fruits);

console.log(fruits);
console.log(jsonFruits);
console.log(jsonBananaAndOrange);
console.log(jsonNiceFruits);
