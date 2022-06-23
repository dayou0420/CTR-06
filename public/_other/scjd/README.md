# [Salesforce Certified JavaScript Developer I](https://trailhead.salesforce.com/en/credentials/javascriptdeveloperi)
## [Salesforce 認定 JavaScript Developer 1 資格取得へ](https://keneloper.com/salesforce-certified-javascript-developer-1-to-get-qualified1/)
### [56.666666666666664]

1. ⭕️
```javascript
function sum(a, b) {
    return a + b;
}
sum(1, '2');
```

2. ⭕️
```javascript
A. let strLang = ‘javascript’;
B. const strLang = ‘java’ + ‘script’;
C. let strLang = javascript;
D. str strLang = ‘javascript’;
```

3. ❌
```javascript
function Person (fName, lName) {
    this.fName = fName;
    this.lName = lName;
}

Person.prototype.age = 29;
let jim = new Person('Jim', 'Smith');
let sofia = new Person('Sofia', 'Smith');

console.log(jim.__proto__.age);
console.log(sofia.age);

Person.prototype = {age : 18};

let Kris = new Person('Kris','Cooper');

console.log(Kris.age);
```

4. ⭕️
```javascript
let message = { hello : 'Hello',
    names : ['Sue', 'Joe'],
    showMessage: function() {
        this.names.forEach(name => {
            console.log(this.hello + ' ' + name); 
        });
    }
}

message.showMessage();
```

5. ❌
```javascript
ltry … catch構文でcatchするための引数として渡されるエラーオブジェクトの2つの主なプロパティは何ですか？
```

6. ⭕️
```javascript
let s_prim = 'foo'
let s_obj = new String(s_prim)
console.log(typeof s_prim)
console.log(typeof s_obj)
```

7. ⭕️
```javascript
let greeting;
greetign = {}; // Typo!
console.log(greetign);
```

8. ⭕️
```javascript
BigIntとして値をインスタンス化するにはどうすればよいですか？
```

9. ❌
```javascript
const obj = { a: 'one', b: 'two', a: 'three' };
console.log(obj);
```

10. ❌
```javascript
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

const member = new Person('Lydia', 'Hallie');

Person.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
};

console.log(member.getFullName());
```

11. ⭕️
```javascript
<div onclick="console.log('div')">
<p onclick="console.log('p')"> Click here! </p>
</div>
```

12. ⭕️
```javascript
const arr = [1, 2, 3];
arr.push(6);
console.log(arr);
arr.pop();
console.log(arr);
arr.shift();
console.log(arr);
arr.unshift(8);
console.log(arr);
```

13. ❌
```javascript
let emp = {
    fName: 'Test',
    lName: 'User',
    get fullName(){
        return fName + ' ' + lName;
    },
    set fullName(str){
        var nameParts = str.split(' ');
        this.fName = nameParts[0];
        this.lName = nameParts[1];
    }
}
emp.fullName ='John Smith';

console.log(emp.fName);
```

14. ⭕️
```javascript
String.prototype.giveLydiaPizza = () => {
    return 'Just give Lydia pizza already!';
};
const name = 'Lydia';
name.giveLydiaPizza();
```

15. ❌
```javascript
function sayHi() {
    return (() => 0)();
}
console.log(typeof sayHi());
```

16. ❌
```javascript
イベント伝播の3つのフェーズは何ですか？
```

17. ⭕️
```javascript
asyncを使用する場合、常にどのタイプのオブジェクトが返されますか？
```

18. ❌
```javascript
どのデータコレクションがキー順に並べられていますか？
```

19. ❌
```javascript
function Person (fName, lName) {
    this.fName = fName;
    this.lName = lName;
}

Person.prototype.age = 29;
let jim = new Person('Jim', 'Smith');

jim.age = 18;

console.log(jim.age);
console.log(jim.__proto__.age);
```

20. ⭕️
```javascript
開発者は、DatePrettyPrintというモジュールを使用したいと考えています。 
このモジュールは、printDate()と呼ばれる1つのデフォルト関数をエクスポートします。
開発者はどのようにしてprintDate()関数をインポートして使用できますか？
```

21. ❌
```javascript
(() => {
let x = (y = 10);
})();

console.log(typeof x);
console.log(typeof y);
```

22. ❌
```javascript
class Calc {
    constructor() {
        this.count = 0
    }
    increase() {
        this.count++
    }
}

const calc = new Calc()
new Calc().increase()

console.log(calc.count)
```

23. ⭕️
```javascript
const num = parseInt('7*6', 10);
console.log(num);
```

24. ❌
```javascript
function getAge(...args) {
    console.log(typeof args);
}

getAge(21);
```

25. ❌
```javascript
const val = Promise.resolve(5);
console.log(val);
```

26. ⭕️
```javascript
const arr = [7、3、400、10];
```

27. ❌
```javascript
const arr = ["Banana", "Orange", "Apple", "Mango"];
```

28. ❌
```javascript
アプリケーションがHistoryAPIを使用してブラウザーの履歴を操作する場合、ブラウザーのネイティブの戻るボタンまたは進むボタンがクリックされたことを検出するために、開発者はどのイベントを使用する必要がありますか？
```

29. ⭕️
```javascript
function checkAge(data) {
    if (data === { age: 18 }) {
        console.log('You are an adult!');
    } else if (data == { age: 18 }) {
        console.log('You are still an adult.');
    } else {
        console.log(`Hmm.. You don't have an age I guess`);
    }
}

checkAge({ age: 18 });
```

30. ⭕️
```javascript
let a = 3;
let b = new Number(3);
let c = 3;
console.log(a == b);
console.log(a === b);
console.log(b === c);
```

31. ❌
```javascript
const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
const regex = /[A-Z]/g;
const found = paragraph.match(regex);
console.log(found);
```

32. ⭕️
```javascript
falsyな値はどれですか？
```

33. ❌
```javascript
const arr = [1, 4, 9, 16];
const mapA = arr.filter(x => x % 2); 
console.log(mapA);
```

34. ⭕️
```javascript
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => { resolve('P1 Resolved'); }, 1500);
});

const p2 = (data) => new Promise((resolve, reject) => { 
    setTimeout(() => resolve('${data}, P2 Resolved'), 1500, data); 
});
```

```javascript
A.p1.then((data) => p2(data)).then(result => result);
B.async function getResult() {
    const data = await p1;
    return await p2(data);
  }
  getResult();
C.p1().then(function() {
  p2().then(function(result) {
      return result; });
  });
D.async function getResult() {
    const data = p1;
    const result = p2(data);
}
await getResult();
```

35. ⭕️
```javascript
const json = '{"result":true, "count":42}';
const obj = JSON.parse(json);
console.log(obj.result);
```

36. ⭕️
```javascript
const obj = { 1: 'a', 2: 'b', 3: 'c' };
const set = new Set([1, 2, 3, 4, 5]);
console.log(obj.hasOwnProperty('1'));
console.log(obj.hasOwnProperty(1));
console.log(set.has('1'));
console.log(set.has(1));
```

37. ⭕️
```javascript
const person = { name: 'Lydia', age: 21, };
for (const item in person) { 
    console.log(item);
}
```

38. ⭕️
```javascript
例外がスローされたか、try … catchブロックでキャッチされたかに関係なく、実行できるコードブロックはなんですか。
```

39. ❌
```javascript
class Chameleon {
    static colorChange(newColor) {
        this.newColor = newColor;
        return this.newColor;
    }

    constructor({ newColor = 'green' } = {}) {
        this.newColor = newColor;
    }
}
const freddie = new Chameleon({ newColor: 'purple' }); console.log(freddie.colorChange('orange'));
```

40. ❌
```javascript
const person = { name: 'Lydia' };

function sayHi(age) {
    return `${this.name} is ${age}`;
}
console.log(sayHi.call(person, 21));
console.log(sayHi.bind(person, 21));
```

41. ❌
```javascript
setTimeout(() => console.log('1'), 0);

function getFirstThing() {
    setTimeout(() => console.log('2'), 1000);
}

function getSecondThing() {
    console.log('3');
}

async function getThings() {
    await getFirstThing();
    await getSecondThing();
}

setTimeout(() => console.log('4'), 1100);
console.log('5');
getThings();
```

42. ⭕️
```javascript
次のうち、モジュールについて間違っているのはどれですか？

A.モジュールは常に厳密モードで実行されます。つまり、変数を宣言する必要があります。
B.それらは一度だけ実行されます。これはロードされたときです。
C.インポートステートメントが引き上げられます。つまり、モジュールがロードされると、すべての依存関係が実行されます。
D.モジュールには、エクスポートするコンストラクターが含まれている必要があります。
```

43. ⭕️
```javascript
function getAge(...args) {
    console.log(typeof args);
}
getAge(21);
```

44. ❌
```javascript
document.querySelector('.outerDiv') .addEventListener('click', displayOuterMessage, true);

document.querySelector('.innerDiv') .addEventListener('click', displayInnerMessage, true); };
```

45. ❌
```javascript
let array1 = ['one', 'two'];
let array2 = ['three', 'four'];
array1.push(...array2);
console.log(...array1);
```

46. ⭕️
```javascript
class Dog {
    constructor(name) {
        this.name = name;
    }
};

class Labrador extends Dog {
    // 1
    constructor(name, size) {
        this.size = size;
    }

    // 2
    constructor(name, size) {
        super(name);
        this.size = size;
    }

    // 3
    constructor(size) {
        super(name);
        this.size = size;
    }

    // 4
    constructor(name, size) {
        this.name = name;
        this.size = size;
    }
};
```

47. ⭕️
```javascript
console.log(typeof typeof 1);
```

48. ⭕️
```javascript
let person = { 
    name: 'Lydia'
};
const members = [person];
person = null;
console.log(members);
```

49. ⭕️
```javascript
console.log(!!null);
console.log(!!'');
console.log(!!1);
```

50. ❌
```javascript
const arr = [1, 4, 9, 16];
console.log(arr.slice(1,3));
```

51. ❌
```javascript
class Animal {
    constructor(name) {
        this.name = name;
    }
    printName() {
        console.log(this.name);
    }
}
console.log(typeof Animal);
```

52. ❌
```javascript
const https = require('https');
const server = https.createServer((req, res) => {
// Line 3: ここに正解コードを入れる
let reqData = JSON.parse(chunk);
console.log(reqData);});
res.end('OK');});
server.listen(8000);
```

53. ⭕️
```javascript
const arr = [1, 4, 9, 16];
const mapA = arr.map(x => x * 2);
console.log(mapA);
```

54. ⭕️
```javascript
for (let i = 1; i < 5; i++) {
    if (i === 3) continue;
    console.log(i);
}
```

55. ⭕️
```javascript
let s1 = '2 + 2'
let s2 = new String('2 + 2')
console.log(eval(s1))
console.log(eval(s2))
console.log(eval(s2.valueOf()))
```

56. ⭕️
```javascript
class Dog {
    constructor(name) {
        this.name = name;
    }
};

class Labrador extends Dog {
    // 1
    constructor(name, size) {
        this.size = size;
    }

    // 2
    constructor(name, size) {
        super(name);
        this.size = size;
    }

    // 3
    constructor(size) {
        super(name);
        this.size = size;
    }

    // 4
    constructor(name, size) {
        this.name = name;
        this.size = size;
    }
};
```

57. ⭕️
```javascript
let emp = {
    name: "Santanu",
    dept: "IT"
}

Object.freeze(emp);
emp.dept = "Finance"

console.log(emp);
```

58. ❌
```javascript
const months = ['Jan', 'March', 'April', 'June'];
months.splice(3, 1, 'May');
console.log(months);
```

59. ⭕️
```javascript
console.log(typeof typeof 1);
```

60. ⭕️
```javascript
function bark() {
    console.log('Woof!');
}
bark.animal = 'dog';
```

61. ❌
```javascript
const settings = {
    username: 'lydiahallie',
    level: 19,
    health: 90, 
};
const data = JSON.stringify(settings, ['level', 'health']);
console.log(data);
```

62. ⭕️
```javascript
console.log(JSON.stringify([new Number(3), new String('false'), new Boolean(false)]));
```

63. ⭕️
```javascript
let emp = {
    name: "Santanu",
    dept: "IT"
}

const returnTarget = Object.assign(emp, {a:1, b:2});
console.log(emp);
```

64. ⭕️
```javascript
次のうち、Object.defineProperty()の属性ではないものはどれですか？
```

65. ❌
```javascript
const value = { number: 10 };
const multiply = (x = { ...value }) => {
console.log((x.number *= 2)); };

multiply();
multiply();
multiply(value);
multiply(value);
```

66. ⭕️
```javascript
const foo = () => console.log('First');
const bar = () => setTimeout(() => console.log('Second'));
const baz = () => console.log('Third');
bar();
foo();
baz();
```

67. ❌
```javascript
次のうち、Promise状態ではないものはどれですか？
```

68. ⭕️
```javascript
<div onclick="console.log('first div')">
    <div onclick="console.log('second div')">
        <button onclick="console.log('button')"> Click! </button>
    </div>
</div>
```

69. ⭕️
```javascript
(() => {
    let x, y;
    try {
        throw new Error();
    } catch (x) {
        (x = 1), (y = 2);
        console.log(x);
    }
    console.log(x);
    console.log(y);
})();
```

70. ❌
```javascript
const sum = eval('10*10+5');

console.log(sum);
```

71. ❌
```javascript
var num = 8;
var num = 10;
console.log(num);
```

72. ⭕️
```javascript
const arr = ["Banana", "Orange", "Apple", "Mango"];
```

73. ⭕️
```javascript
const getId = new Promise((resolve, reject) => {
setTimeout(() => resolve(15), 1500); });

const getBook = bookId => new Promise((resolve, reject) => { setTimeout(() => resolve('${bookId}:JavaScript Algorithms'), 1500); });

getId.then(id => getBook(id)).then(data => data);
```

```javascript
A. async function getBookInfo() {
    const Id = await getId;
    const result = await getBook(id); 
}
getBookInfo();

B. async function getBookInfo() {
    const Id = await getId;
    const result = await getBook(id); 
}
await getBookInfo();

C. await function getBookInfo() {
    const Id = getId;
    const result = getBook(id); 
}
async getBookInfo();

D. async function getBookInfo() {
    const Id = getId;
    const result = getBook(id); 
}
await getBookInfo();
```

74. ⭕️
```javascript
function getAge() {
    'use strict';
    age = 21;
    console.log(age);
}
getAge();
```

75. ⭕️
```javascript
let message = { 
    hello : 'Hello',
    names : ['Sue', 'Joe'],
    showMessage: function() {
        let self = this;
        this.names.forEach(function(name) { 
            console.log(self.hello + ' ' + name); 
        });
    }
}
message.showMessage();
```

76. ⭕️
```javascript
console.log(x);
let x = 10;
```

77. ⭕️
```javascript
[[0, 1], [2, 3]].reduce((acc, cur) => {
    return acc.concat(cur);
}, [1, 2], );
```

78. ❌
```javascript
JavaScriptでクラスを作成する場合、何が自動生成されますか？
```

79. ⭕️
```javascript
setInterval(() => console.log('Hi'), 1000);
```

80. ⭕️
```javascript
function getPersonInfo(one, two, three) {
    console.log(one);
    console.log(two);
    console.log(three);
}
const person = 'Lydia';
const age = 21;
getPersonInfo(`${person} is ${age} years old`);
```

81. ❌
```javascript
let name = [...'Lydia'];

console.log(name);
```

82. ❌
```javascript
const a = {};
const b = { key: 'b' };
const c = { key: 'c' };

a[b] = 123;
a[c] = 456;

console.log(a[b]);
```

83. ❌
```javascript
let number = 0;
console.log(number++);
console.log(++number);
console.log(number);
```

84. ⭕️
```javascript
JavaScriptのすべてはどれが基本ですか。
```

85. ⭕️
```javascript
const firstPromise = new Promise((res, rej) => {
setTimeout(res, 500, 'one');
});

const secondPromise = new Promise((res, rej) => {
setTimeout(res, 100, 'two');
});

Promise.race([firstPromise, secondPromise]).then(res => console.log(res));
```

86. ❌
```javascript
const myDt = new Date();
console.log(myDt + 10);
```

87. ❌
```javascript
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
console.log(months);
```

88. ❌
```javascript
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
console.log(months);
```

89. ❌
```javascript
let emp = {
    name: "Santanu",
    dept: "IT"
}

Object.seal(emp);
delete emp.name;
console.log(emp);
```

90. ⭕️
```javascript
function Animal(size, age) {
    this.size = size;
    this.age = age;
    this.canTalk = false;
}
```
