/**
 * 問題：
 * ログインの制御を行うloginController
 * という名前の関数が存在します。
 * この関数はuserインスタンスを渡すと
 * 
 * ログイン処理（login）
 * ->ユーザー権限チェック（checkRoll）
 * ->適切なページへのリダイレクト（redirect）
 * 
 * を内部で行います。
 * 
 * 以下の呼び出し方をした場合に該当のメッセージが
 * コンソールに出るように実装してみてください。
 * 
 **************************************** 
 * １．一般ユーザーがログインした時。
 * loginController(new User('Bob'));
 * 
 * ログイン成功した場合：
 * User: Bob
 * you have normal roll
 * redirect : /
 * login success
 * 
 * ログイン失敗した場合：
 * User: Bob
 * you have normal roll
 * login failed <- checkRollで失敗した場合
 * 
 ****************************************
 * ２．管理者（AdminUser）でログインした場合
 * loginController(new AdminUser('Bob'));
 * 
 * ログイン成功した場合：
 * User: Bob
 * you have admin roll
 * redirect : /admin
 * login success
 * 
 * ログイン失敗した場合：
 * User: Bob
 * login failed <- loginで失敗した場合
 */

function User(usrName) {
    this.usrName = usrName;
    this.usrRoll = 'normal';
    this.redirectTo = '/';
}

User.prototype.login = function() {
    console.log(`User: ${this.usrName}`);
    return true;
}

User.prototype.checkRoll = function() {
    console.log(`you have ${this.usrRoll} roll`);
    return true;
}

User.prototype.redirect = function() {
    console.log(`redirect : ${this.redirectTo}`);
    return true;
}

AdminUser.prototype = Object.create(User.prototype);

function AdminUser(usrName) {
    User.call(this, usrName);
    this.usrRoll = 'admin';
    this.redirectTo = '/admin';
}

const bob = new User('Bob');
const bob2 = new AdminUser('Bob');

loginController(bob);
loginController(bob2);

function loginController(user) {
    if (user.login()
      && user.checkRoll()
      && user.redirect()) {
      console.log('login success');
    } else {
      console.log('login failed');
    }
}
