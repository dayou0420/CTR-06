const hello = () => console.log("こんにちは");
hello();

const double = num => num * 2;
console.log(double(10));

setTimeout(personName => console.log("こんにちは" + personName), 3000, "山田太郎");
