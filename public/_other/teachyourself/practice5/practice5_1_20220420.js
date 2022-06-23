const person = {
    name: "Bob",
    age: 28,
    gender: "male"
}

const targetAge = 25;
const targetGender = '男性';
const consoleMessageTemplate = `${person.name}は${targetAge}歳以上の${targetGender}`;

if(person.gender === 'male' && person.age >= targetAge) {
    console.log(consoleMessageTemplate + 'です。');
} else {
    console.log(consoleMessageTemplate + 'ではありません。');
}
