class Parent {
    #lastName = "山田";
    #firstName;
    #age;

    constructor(firstName) {
        this.#firstName = firstName;
    }

    get fullName() {
        return this.#lastName + this.#firstName;
    }

    set age(value) {
        this.#age = Number(value);
    }

    get age() {
        return this.#age;
    }
}

const taro = new Parent("太郎");
taro.age = 18;
console.log(taro.fullName);
