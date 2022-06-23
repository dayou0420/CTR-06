class Parent {
    constructor(familyName) {
        this.familyName = familyName;
    }
    introduction() {
        console.log(`名字は${this.familyName}です。`);
    }
}

class Child extends Parent {
    constructor(familyName) {
        super(familyName);
    }
}

const taro = new Child("山田");

console.log(taro.hasOwnProperty("familyName"));
console.log(taro.hasOwnProperty("introduction"));
console.log("introduction" in taro);
console.log("hasOwnProperty" in taro);
