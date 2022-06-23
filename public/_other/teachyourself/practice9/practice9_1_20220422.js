class User {
    constructor(username, password, roll) {
        this.username = username;
        this.password = password;
        this.roll = roll;
    }

    login() {
        this.check();
        console.log(`ログイン[${this.username}/${this.password}]`);
        this.checkRoll();
    }

    check() {
        console.log(`ログイン情報をチェックします。`)
    }

    checkRoll() {
        if(this.roll === "admin") {
            console.log('管理者権限です。');
        } else {
            console.log('一般ユーザーです。');
        }
    }
}

const taro = new User("山田 太郎", "taro-pwd", "normal");
taro.login();
