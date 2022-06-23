class User {
    constructor(username) {
        this.username = username;
        this._deleted = 0;
        /**
         * deletedフラグが1のUserは無効なユーザー
         * 初期値は0
         */
    }

    set deleted(bool) {
        this._deleted = bool;
    }

    get deleted() {
        return this._deleted;
    }

    login() {
        const _success = '成功';
        const _failure = '失敗';

        try {
            if(this._deleted === 0) {
                console.log(`${this.username}はログインに${_success}しました。`);
            } else {
                throw new Error('SignInError');
            }
        } catch (e) {
            console.error(`${e} ${this.username}はログインに${_failure}しました。`);
        }
    }
}

class AdminUser extends User {
    constructor(username) {
        super(username)
    }

    deleteUser(otheruser) {
        try {
            if(otheruser._deleted === 0) {
                otheruser.deleted = 1;
                console.log(`${otheruser.username}を削除しました。`);
            } else {
                throw new Error;
            }
        } catch (e) {
            if(typeof otheruser !== 'object') {
                console.error(`${e} typeof ${typeof otheruser}: Userオブジェクトを引数にする必要があります。`);
            } else {
                console.error(`${e} ${otheruser.username} ${typeof otheruser}はすでに削除されています。`);
            }
        }
    }
}

const tom = new User('Tom');
tom.deleted = 0;
tom.login();

// const dummy = 1;

const bob = new AdminUser('Bob');
bob.deleteUser(tom);
bob.deleteUser(tom);
// bob.deleteUser(dummy);
console.log(tom);
tom.login();
