class Parent {
    constructor(familyName) {
        this.familyName = familyName;
    }
}

class Child extends Parent {
    constructor(familyName) {
        super(familyName);
    }
    introduction() {
        console.log(`名字は${this.familyName}です。`);
    }
}

// 以下の結果になるように実装してください。
const taro = new Child('山田');
taro.introduction(); // 名字は山田です。
