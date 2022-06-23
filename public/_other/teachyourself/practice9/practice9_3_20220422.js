class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
        /* this.fullnameは書かない! */
    }

    get fullname() {
        return this.lastname + this.firstname;
    }

    set age(value) {
        this._age = Number(value);
    }

    get age() {
        return this._age;
    }

    set gender(value) {
        try {
            switch (value) {
                case "男":
                    this._gender = String(value);
                    break;

                case "女":
                    this._gender = String(value);
                    break;

                case "トランスジェンダー":
                    this._gender = String(value);
                    break;

                default:
                    throw new Error('SettingGenderError');

            }
        } catch (e) {
                console.error(`${e}: genderプロパティには"男"、"女"、または"トランスジェンダー"を設定してください。`);
        }
    }

    get gender() {
                return this._gender;
    }
}

const taro = new Person("太郎", "山田");

console.log(taro.fullname);

taro.age = "18";

console.log(typeof taro.age);

taro.gender = "男";

console.log(typeof taro.gender);

console.log(taro);
