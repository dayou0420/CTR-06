# [JavaScript Questions](https://github.com/lydiahallie/javascript-questions)
### [42.22222222222222]

1. ⭕️

```javascript
function sayHi() {
  console.log(name);
  console.log(age);
  var name = "Lydia";
  let age = 21;
}
sayHi();
```

- ホイスティング無し
- `var`を初期化する前に出力を試みている
  - `var`の初期値はwindowオブジェクトの`undefined`
- `let`は初期値がないため`ReferenceError`

2. ⭕️

```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}
```

- `var`がグローバルスクリプトである挙動

3. ❌

```javascript
const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius
};

shape.diameter();
shape.perimeter();
```

- アロー関数が`this`を取らない

4. ⭕️

```javascript
+true;
!"Lydia";
```

- `true`に対してプラス演算子が`1`を返す
- ノット演算子`!`が文字列`"Lydia"`の`true`を`false`にする

5. ⭕️

```javascript
const bird = {
  size: "small"
};

const mouse = {
  name: "Mickey",
  small: true
};
```

- `mouse.bird.size`が不可

6. ⭕️

```javascript
let c = { greeting: "Hey!" };
let d;

d = c;
c.greeting = "Hello";
console.log(d.greeting);
```

- リテラル値の`let d;`を宣言し
  - `let c`オブジェクトを代入し、オブジェクトのプロパティーを変更しても
    - `let d`は同じ参照を保持している

7. ❌

```javascript
let a = 3;
let b = new Number(3);
let c = 3;

console.log(a == b);
console.log(a === b);
console.log(b === c);
```

- `new Number`は関数コンストラクターで生成された型は`object`
  - `a`と`c`はプリミティブ型で`b`はオブジェクト

8. ❌

```javascript
class Chameleon {
  static colorChange(newColor) {
    this.newColor = newColor;
    return this.newColor;
  }

  constructor({ newColor = "green" } = {}) {
    this.newColor = newColor;
  }
}

const freddie = new Chameleon({ newColor: "purple" });
freddie.colorChange("orange");
```

- `static`メソッドは`this`を取らない
  - コンストラクタ上でのみ動作する
  - インスタンスでは利用できない

9. ⭕️

```javascript
let greeting;
greetign = {}; // Typo!
console.log(greetign);
```

- `window`のグローバルオブジェクトに`greetign`がセットされる

10. ⭕️

```javascript
function bark() {
  console.log("Woof!");
}
bark.animal = "dog";
```

- 関数は実行可能なオブジェクト

11. ❌

```javascript
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

const member = new Person("Lydia", "Hallie");

Person.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
};

console.log(member.getFullName());
```

- `prototype`がない

12. ❌

```javascript
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const lydia = new Person("Lydia", "Hallie");
const sarah = Person("Sarah", "Smith");

console.log(lydia);
console.log(sarah);
```

- `new`がない
  - グローバルオブジェクトを参照

13. ❌

```javascript
イベント伝播の3つの段階はどれですか？
```

- Capturing > Target > Bubbling

14. ❌

```javascript
すべてのオブジェクトはプロトタイプを持っています。
```

- false

15. ⭕️

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- 文字列結合

16. ⭕️

```javascript
let number = 0;
console.log(number++);
console.log(++number);
console.log(number);
```

- 前方後方インクリメントの挙動

17. ❌

```javascript
function getPersonInfo(one, two, three) {
  console.log(one);
  console.log(two);
  console.log(three);
}

const person = "Lydia";
const age = 21;

getPersonInfo`${person} is ${age} years old`;
```

- タグ付きテンプレートリテラルを使用する場合
  - 最初の引数の値は常に文字列値の配列
    - 残りの引数は渡された式の値

18. ❌

```javascript
function checkAge(data) {
  if (data === { age: 18 }) {
    console.log("You are an adult!");
  } else if (data == { age: 18 }) {
    console.log("You are still an adult.");
  } else {
    console.log(`Hmm.. You don't have an age I guess`);
  }
}

checkAge({ age: 18 });
```

- 等価性をテストするとき
  - プリミティブはそれらの値によって比較され
  - オブジェクトはそれらの参照によって比較されます

19. ❌

```javascript
function getAge(...args) {
  console.log(typeof args);
}

getAge(21);
```

- スプレッド演算子(... args.)は、引数付きの配列を返します
  - 配列はオブジェクト

20. ⭕️

```javascript
function getAge() {
  "use strict";
  age = 21;
  console.log(age);
}

getAge();
```

- 変数宣言無し

21. ❌

```javascript
const sum = eval("10*10+5");
```

- evalは文字列として渡されたコードを評価

22. ⭕️

```javascript
sessionStorage.setItem("cool_secret", 123);
```

- sessionStorageに格納されたデータは、タブを閉じた後に削除されます

23. ⭕️

```javascript
var num = 8;
var num = 10;

console.log(num);
```

- `var`キーワードを使うと、同じ名前で複数の変数を宣言できます

24. ❌

```javascript
const obj = { 1: "a", 2: "b", 3: "c" };
const set = new Set([1, 2, 3, 4, 5]);

obj.hasOwnProperty("1");
obj.hasOwnProperty(1);
set.has("1");
set.has(1);
```

- すべてのオブジェクトキー（Symbolsを除く）は、文字列として自分で入力しなくても、内部では文字列
  - setではそうはいきません

25. ⭕️

```javascript
const obj = { a: "one", b: "two", a: "three" };
console.log(obj);
```

- オブジェクトは置き換えられる

26. ❌

```javascript
JavaScriptのglobal execution contextは、2つを作成します。: それはグローバルオブジェクトと "this"キーワードです
```

- オブジェクトは置き換えられる

27. ⭕️

```javascript
for (let i = 1; i < 5; i++) {
  if (i === 3) continue;
  console.log(i);
}
```

- `continue`ステートメントは、ある条件がtrueを返すと、繰り返し処理をスキップします

28. ❌

```javascript
String.prototype.giveLydiaPizza = () => {
  return "Just give Lydia pizza already!";
};

const name = "Lydia";

name.giveLydiaPizza();
```

- プリミティブ文字列は、文字列プロトタイプ関数によって生成された文字列オブジェクトに自動的に変換されます

29. ❌

```javascript
const a = {};
const b = { key: "b" };
const c = { key: "c" };

a[b] = 123;
a[c] = 456;

console.log(a[b]);
```

- オブジェクトキーは自動的に文字列に変換されます
  - a["object Object"] = 123
  - a["object Object"] = 456

30. ⭕️

```javascript
const foo = () => console.log("First");
const bar = () => setTimeout(() => console.log("Second"));
const baz = () => console.log("Third");

bar();
foo();
baz();
```

- 非同期の`setTimeout()`はグローバルコンテキストが終了したタイミングで処理される
  - コールスタックはグローバルコンテキストから積まれる
  - 一時的に`メインスレッド`から処理が切り離される

31. ⭕️

```html
<div onclick="console.log('first div')">
  <div onclick="console.log('second div')">
    <button onclick="console.log('button')">
      Click!
    </button>
  </div>
</div>
```

- イベントを引き起こした最も深くネストした要素がイベントのターゲットとなります

32. ❌

```html
<div onclick="console.log('div')">
  <p onclick="console.log('p')">
    Click here!
  </p>
</div>
```

- イベント伝播中は、キャプチャ、ターゲット、バブリングの3つのフェーズがあります
- 最も深くネストした要素から外側に向かって進みます。

33. ❌

```javascript
const person = { name: "Lydia" };

function sayHi(age) {
  console.log(`${this.name} is ${age}`);
}

sayHi.call(person, 21);
sayHi.bind(person, 21);
```

- 両方とも、thisキーワードが参照したいオブジェクトを渡すことができます。
  - callもすぐに実行されます。
  - .bind.は関数のコピーを返しますが、コンテキストは束縛されています。

34. ❌

```javascript
function sayHi() {
  return (() => 0)();
}

typeof sayHi();
```

- sayHi関数は、即時呼び出し関数式（IIFE）の戻り値を返します
- この関数は0を返しました

35. ❌

```javascript
0;
new Number(0);
("");
(" ");
new Boolean(false);
undefined;
```

- new Numberや、new Booleanのような関数コンストラクタはtruthyです

36. ❌

```javascript
console.log(typeof typeof 1);
```

- typeof "number"は、"string"を返します

37. ❌

```javascript
const numbers = [1, 2, 3];
numbers[10] = 11;
console.log(numbers);
```

- 配列の長さを超える値を配列内の要素に設定すると、JavaScriptでは、"empty slots"と呼ばれるものを作成します

38. ❌

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

- このブロックスコープ変数を1に設定し、変数yの値を設定します

39. ⭕️

```javascript
JavaScriptのすべてはどちらかです...
```

- JavaScriptにはプリミティブ型とオブジェクトしかありません。

40. ❌

```javascript
[[0, 1], [2, 3]].reduce(
  (acc, cur) => {
    return acc.concat(cur);
  },
  [1, 2]
);
```

- [1,2]は初期値です。これが最初の値で、一番最初のaccの値です
- 最初の周回の間、accは[1,2]で、curは[0,1]です

41. ⭕️

```javascript
!!null;
!!"";
!!1;
```

- `null`は`false`
- `""`は`false`
- `1`は`true`

42. ❌

```javascript
setInterval(() => console.log("Hi"), 1000);
```

- 一意のIDを返します

43. ❌

```javascript
[..."Lydia"];
```

- プレッド演算子は、イテラブルのすべての文字を1つの要素にマッピングします

44. ❌

```javascript
function* generator(i) {
  yield i;
  yield i * 2;
}

const gen = generator(10);

console.log(gen.next().value);
console.log(gen.next().value);
```

- 通常の関数は、呼び出し後に途中で停止することはできません
- ただし、ジェネレータ関数は途中で"停止"し、後で停止した場所から続行することができます

45. ❌

```javascript
const firstPromise = new Promise((res, rej) => {
  setTimeout(res, 500, "one");
});

const secondPromise = new Promise((res, rej) => {
  setTimeout(res, 100, "two");
});

Promise.race([firstPromise, secondPromise]).then(res => console.log(res));
```

- 複数のプロミスをPromise.raceメソッドに渡した時、"resolves/rejects"は、"最初"のプロミスの"resolves/rejects"を行います

46. ❌

```javascript
let person = { name: "Lydia" };
const members = [person];
person = null;

console.log(members);
```

- ある変数から別の変数への"参照"を代入すると、その参照の"コピー"が作成されます
  - それらは、"同じ参照"を持っていないことに注意してください！

47. ⭕️

```javascript
const person = {
  name: "Lydia",
  age: 21
};

for (const item in person) {
  console.log(item);
}
```

- この場合、for-inループを使うと、オブジェクトキーであるnameとageの繰り返し処理できます

48. ⭕️

```javascript
console.log(3 + 4 + "5");
```

- JavaScriptでは、数字の7を文字列に変換します

49. ❌

```javascript
const num = parseInt("7*6", 10);
```

- 文字列の最初の数字だけが返されます

50. ❌

```javascript
[1, 2, 3].map(num => {
  if (typeof num === "number") return;
  return num * 2;
});
```

- map関数は新しい配列を作成して関数から返された値を挿入します
  - ただし、値は返されません

51. ❌

```javascript
function getInfo(member, year) {
  member.name = "Lydia";
  year = 1998;
}

const person = { name: "Sarah" };
const birthYear = "1997";

getInfo(person, birthYear);

console.log(person, birthYear);
```

- 値がオブジェクトでない限り、引数は"値"によって渡され、その後、"参照"によって渡されます
  - personの値はオブジェクトです
    - 引数memberは"同じ"オブジェクトへの(コピーされた)参照を持ちます

52. ❌

```javascript
function greeting() {
  throw "Hello world!";
}

function sayHi() {
  try {
    const data = greeting();
    console.log("It worked!", data);
  } catch (e) {
    console.log("Oh no an error!", e);
  }
}

sayHi();
```

- throwステートメントを使って、カスタムエラーを作ることができます

53. ⭕️

```javascript
function Car() {
  this.make = "Lamborghini";
  return { make: "Maserati" };
}

const myCar = new Car();
console.log(myCar.make);
```

- プロパティを返すと、そのプロパティの値は、コンストラクタ関数で設定された値ではなく、"戻り値"となります

54. ❌

```javascript
(() => {
  let x = (y = 10);
})();

console.log(typeof x);
console.log(typeof y);
```

- `y = 10;`
  - `window`オブジェクト
- `let x = y;`
  - ブロックスコープ

55. ❌

```javascript
class Dog {
  constructor(name) {
    this.name = name;
  }
}

Dog.prototype.bark = function() {
  console.log(`Woof I am ${this.name}`);
};

const pet = new Dog("Mara");

pet.bark();

delete Dog.prototype.bark;

pet.bark();
```

- プロトタイプでも、deleteキーワードを使ってオブジェクトからプロパティを削除できます
  - プロトタイプのプロパティを削除すると、プロトタイプチェーンでは使用できなくなります

56. ❌

```javascript
const set = new Set([1, 1, 2, 3, 4]);

console.log(set);
```

- そのうちの1つが削除され{1、2、3、4}となります

57. ⭕️

```javascript
// counter.js
let counter = 10;
export default counter;
```

```javascript
// index.js
import myCounter from "./counter";

myCounter += 1;

console.log(myCounter);
```

- インポートされたモジュールを変更することはできません

58. ⭕️

```javascript
const name = "Lydia";
age = 21;

console.log(delete name);
console.log(delete age);
```

- `delete`演算子は、ブール値を返します

59. ❌

```javascript
const numbers = [1, 2, 3, 4, 5];
const [y] = numbers;

console.log(y);
```

- 配列から値を取り出したり、オブジェクトからプロパティを分解して取り出すことができます

60. ❌

```javascript
const user = { name: "Lydia", age: 21 };
const admin = { admin: true, ...user };

console.log(admin);
```

- スプレッド演算子...を使ってオブジェクトを結合することができます

61. ❌

```javascript
const person = { name: "Lydia" };

Object.defineProperty(person, "age", { value: 21 });

console.log(person);
console.log(Object.keys(person));
```

- definePropertyメソッドを使ってオブジェクトにプロパティを追加すると、それらはデフォルトでは 列挙できません

62. ❌

```javascript
const settings = {
  username: "lydiahallie",
  level: 19,
  health: 90
};

const data = JSON.stringify(settings, ["level", "health"]);
console.log(data);
```

- replacerは、関数または配列のいずれかにすることができ、値を文字列化する対象とその方法を制御できます

63. ❌

```javascript
let num = 10;

const increaseNumber = () => num++;
const increasePassedNumber = number => number++;

const num1 = increaseNumber();
const num2 = increasePassedNumber(num1);

console.log(num1);
console.log(num2);
```

- num1をincrePassedNumberに渡したので、num2は10です

64. ❌

```javascript
const value = { number: 10 };

const multiply = (x = { ...value }) => {
  console.log((x.number *= 2));
};

multiply();
multiply();
multiply(value);
multiply(value);
```

- デフォルトの引数は、呼び出し時 に評価されます。関数を呼び出すたびに、新しい オブジェクトが作成されます

65. ❌

```javascript
[1, 2, 3, 4].reduce((x, y) => console.log(x, y));
```

- 関数から値を返さなければ、undefinedを返します

66. ⭕️

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

- 親のコンストラクタはname引数を受け取るので、nameをsuperに渡す必要があります

67. ❌

```javascript
// index.js
console.log('running index.js');
import { sum } from './sum.js';
console.log(sum(1, 2));

// sum.js
console.log('running sum.js');
export const sum = (a, b) => a + b;
```

- importの代わりにrequireを使用したとしたら、running index.js, running sum.js, 3が出力されているはずです

68. ⭕️

```javascript
console.log(Number(2) === Number(2))
console.log(Boolean(false) === Boolean(false))
console.log(Symbol('foo') === Symbol('foo'))
```

- すべてのシンボルは完全にユニークです

69. ❌

```javascript
const name = "Lydia Hallie"
console.log(name.padStart(13))
console.log(name.padStart(2))
```

- padStartメソッドを使うと、文字列の先頭にパディングを追加できます

70. ⭕️

```javascript
console.log("🥑" + "💻");
```

- +演算子を使うと、文字列を連結することができます

71. ⭕️

```javascript
function* startGame() {
  const answer = yield "Do you love JavaScript?";
  if (answer !== "Yes") {
    return "Oh wow... Guess we're gone here";
  }
  return "JavaScript loves you back ❤️";
}

const game = startGame();
console.log(/* 1 */); // Do you love JavaScript?
console.log(/* 2 */); // JavaScript loves you back ❤️
```

- ジェネレータ関数は、yieldキーワードを見るとその実行を「一時停止」します
  - まず、関数に文字列 "Do you love JavaScript?" を返させる必要があります
    - これは game.next().valueを呼び出すことによって行うことができます

72. ⭕️

```javascript
console.log(String.raw`Hello\nworld`);
```

- String.rawはエスケープ(\n, \v, \t など)を無視した文字列を返します

73. ❌

```javascript
async function getData() {
  return await Promise.resolve("I made it!");
}

const data = getData();
console.log(data);
```

- 非同期関数は常に、promiseを返します
  - awaitはpromiseが解決されるのを待たなければなりません:
    - getData()を呼び出すと、dataは保留中のpromiseが返されます

74. ❌

```javascript
async function getData() {
  return await Promise.resolve("I made it!");
}

const data = getData();
console.log(data);
```

- 非同期関数は常に、promiseを返します
  - awaitはpromiseが解決されるのを待たなければなりません:
    - getData()を呼び出すと、dataは保留中のpromiseが返されます

75. ❌

```javascript
const box = { x: 10, y: 20 };

Object.freeze(box);

const shape = box;
shape.x = 100;

console.log(shape);
```

- Object.freezeは、オブジェクトのプロパティを追加、削除、変更することを不可能にします（プロパティの値が他のオブジェクトのものでない限り）

76. ❌

```javascript
const { name: myName } = { name: "Lydia" };

console.log(name);
```

- {name：myName}を使って、右側の nameプロパティの値でmyNameという新しい変数を作りたいことをJavaScriptに伝えます

77. ⭕️

```javascript
function sum(a, b) {
  return a + b;
}
```

- 純粋な関数は、同じ引数が渡された場合、常に 同じ結果を返す関数です

78. ⭕️

```javascript
const add = () => {
  const cache = {};
  return num => {
    if (num in cache) {
      return `From cache! ${cache[num]}`;
    } else {
      const result = num + 10;
      cache[num] = result;
      return `Calculated! ${result}`;
    }
  };
};

const addFunction = add();
console.log(addFunction(10));
console.log(addFunction(10));
console.log(addFunction(5 * 2));
```

- メモ化により、実行速度を上げるために関数の結果をキャッシュすることができます

79. ⭕️

```javascript
const myLifeSummedUp = ["☕", "💻", "🍷", "🍫"]

for (let item in myLifeSummedUp) {
  console.log(item)
}

for (let item of myLifeSummedUp) {
  console.log(item)
}
```

- for-in ループを使うと、列挙可能なプロパティを繰り返し処理できます
  - 配列では、列挙可能なプロパティは配列要素の「キー」です

80. ⭕️

```javascript
const list = [1 + 2, 1 * 2, 1 / 2]
console.log(list)
```

- 配列要素は任意の値を保持できます

81. ⭕️

```javascript
function sayHi(name) {
  return `Hi there, ${name}`
}

console.log(sayHi())
```

- 関数に値が渡されていない限り、引数はデフォルトでundefinedの値を持ちます

82. ❌

```javascript
var status = "😎"

setTimeout(() => {
  const status = "😍"

  const data = {
    status: "🥑",
    getStatus() {
      return this.status
    }
  }

  console.log(data.getStatus())
  console.log(data.getStatus.call(this))
}, 0)
```

- callメソッドを使うと、thisキーワードが参照するオブジェクトを変更することができます
  - 関数では、thisキーワードは その関数が属するオブジェクトを参照します

83. ❌

```javascript
const person = {
  name: "Lydia",
  age: 21
}

let city = person.city
city = "Amsterdam"

console.log(person)
```

- 我々はpersonオブジェクト自身を参照していないことに注意してください
  - personオブジェクトのcityプロパティを、変数cityに代入するだけです

84. ❌

```javascript
function checkAge(age) {
  if (age < 18) {
    const message = "Sorry, you're too young."
  } else {
    const message = "Yay! You're old enough!"
  }

  return message
}

console.log(checkAge(21))
```

- ReferenceError がスローされます

85. ⭕️

```javascript
fetch('https://www.website.com/api/user/1')
  .then(res => res.json())
  .then(res => console.log(res))
```

- 2番目の.thenのresの値は、前の.thenの戻り値と同じとなりますReferenceError がスローされます

86. ⭕️

```javascript
function getName(name) {
  const hasName = //
}
```

- !!nameを使って、nameの値が、truthyか falseyかを判断します

87. ❌

```javascript
console.log('I want pizza'[0]);
```

- In order to get a character at a specific index of a string, you can use bracket notation. 

88. ⭕️

```javascript
function sum(num1, num2 = num1) {
  console.log(num1 + num2);
}

sum(10);
```

- You can set a default parameter's value equal to another parameter of the function, as long as they've been defined before the default parameter.

89. ⭕️

```javascript
function sum(num1, num2 = num1) {
  console.log(num1 + num2);
}

sum(10);
```

- You can set a default parameter's value equal to another parameter of the function, as long as they've been defined before the default parameter.

90. ⭕️

```javascript
function sum(num1, num2 = num1) {
  console.log(num1 + num2);
}

sum(10);
```

- You can set a default parameter's value equal to another parameter of the function, as long as they've been defined before the default parameter.

91. ❌

```javascript
let newList = [1, 2, 3].push(4);

console.log(newList.push(5));
```

- The .push method returns the new length of the array, not the array itself! By setting newList equal to [1, 2, 3].push(4), we set newList equal to the new length of the array: 4
  - Since newList is the numerical value 4, we cannot use the .push method: a TypeError is thrown.

92. ⭕️

```javascript
function giveLydiaPizza() {
  return 'Here is pizza!';
}

const giveLydiaChocolate = () =>
  "Here's chocolate... now go hit the gym already.";

console.log(giveLydiaPizza.prototype);
console.log(giveLydiaChocolate.prototype);
```

- Regular functions, such as the giveLydiaPizza function, have a prototype property, which is an object (prototype object) with a constructor property.
  - Arrow functions however, such as the giveLydiaChocolate function, do not have this prototype property.

93. ⭕️

```javascript
const person = {
  name: 'Lydia',
  age: 21,
};

for (const [x, y] of Object.entries(person)) {
  console.log(x, y);
}
```

- Object.entries(person) returns an array of nested arrays, containing the keys and objects

94. ⭕️

```javascript
function getItems(fruitList, ...args, favoriteFruit) {
  return [...fruitList, ...args, favoriteFruit]
}

getItems(["banana", "apple"], "pear", "orange")
```

```javascript
function getItems(fruitList, favoriteFruit, ...args) {
  return [...fruitList, ...args, favoriteFruit];
}

getItems(['banana', 'apple'], 'pear', 'orange');
```

- The rest parameter's value is an array containing all remaining arguments, and can only be the last parameter! In this example, the rest parameter was the second parameter.

95. ⭕️

```javascript
function nums(a, b) {
  if (a > b) console.log('a is bigger');
  else console.log('b is bigger');
  return
  a + b;
}

console.log(nums(4, 2));
console.log(nums(1, 2));
```

- The rest parameter's value is an array containing all remaining arguments, and can only be the last parameter! In this example, the rest parameter was the second parameter.

96. ⭕️

```javascript
class Person {
  constructor() {
    this.name = 'Lydia';
  }
}

Person = class AnotherPerson {
  constructor() {
    this.name = 'Sarah';
  }
};

const member = new Person();
console.log(member.name);
```

- In this case, we set Person equal to AnotherPerson.

97. ❌

```javascript
const info = {
  [Symbol('a')]: 'b',
};

console.log(info);
console.log(Object.keys(info));
```

- A Symbol is not enumerable. The Object.keys method returns all enumerable key properties on an object.

98. ⭕️

```javascript
const getList = ([x, ...y]) => [x, y]
const getUser = user => { name: user.name, age: user.age }

const list = [1, 2, 3, 4]
const user = { name: "Lydia", age: 21 }

console.log(getList(list))
console.log(getUser(user))
```

- The getUser function receives an object. With arrow functions, we don't have to write curly brackets if we just return one value.

99. ❌

```javascript
const name = 'Lydia';

console.log(name());
```

- The variable name holds the value of a string, which is not a function, thus cannot invoke.

100. ❌

```javascript
const output = `${[] && 'Im'}possible!
You should${'' && `n't`} see a therapist after so much JavaScript lol`;
```

- [] is a truthy value. With the && operator, the right-hand value will be returned if the left-hand value is a truthy value.
  - "" is a falsy value. If the left-hand value is falsy, nothing gets returned. n't doesn't get returned.

101. ⭕️

```javascript
const one = false || {} || null;
const two = null || false || '';
const three = [] || 0 || true;

console.log(one, two, three);
```

- With the || operator, we can return the first truthy operand.

102. ❌

```javascript
const myPromise = () => Promise.resolve('I have resolved!');

function firstFunction() {
  myPromise().then(res => console.log(res));
  console.log('second');
}

async function secondFunction() {
  console.log(await myPromise());
  console.log('second');
}

firstFunction();
secondFunction();
```

- With a promise, we basically say I want to execute this function, but I'll put it aside for now while it's running since this might take a while. 
  - Only when a certain value is resolved (or rejected), and when the call stack is empty, I want to use this value.

103. ⭕️

```javascript
const set = new Set();

set.add(1);
set.add('Lydia');
set.add({ name: 'Lydia' });

for (let item of set) {
  console.log(item + 2);
}
```

- The + operator is not only used for adding numerical values, but we can also use it to concatenate strings. 

104. ❌

```javascript
Promise.resolve(5);
```

- We can pass any type of value we want to Promise.resolve, either a promise or a non-promise. The method itself returns a promise with the resolved value (<fulfilled>).

105. ❌

```javascript
function compareMembers(person1, person2 = person) {
  if (person1 !== person2) {
    console.log('Not the same!');
  } else {
    console.log('They are the same!');
  }
}

const person = { name: 'Lydia' };

compareMembers(person);
```

- This means that both values have a reference to the same spot in memory, thus they are equal.

106. ❌

```javascript
const colorConfig = {
  red: true,
  blue: false,
  green: true,
  black: true,
  yellow: false,
};

const colors = ['pink', 'red', 'blue'];

console.log(colorConfig.colors[1]);
```

- This means that both values have a reference to the same spot in memory, thus they are equal.
  - Then, we try to access the value of the first element by using [1]. We cannot do this on a value that's undefined, so it throws a TypeError: Cannot read property '1' of undefined.

107. ⭕️

```javascript
console.log('❤️' === '❤️');
```

- These are always the same for the same emojis, so we're comparing two equal strings to each other, which returns true.

108. ⭕️

```javascript
const emojis = ['✨', '🥑', '😍'];

emojis.map(x => x + '✨');
emojis.filter(x => x !== '🥑');
emojis.find(x => x !== '🥑');
emojis.reduce((acc, cur) => acc + '✨');
emojis.slice(1, 2, '✨');
emojis.splice(1, 2, '✨');
```

- With splice method, we modify the original array by deleting, replacing or adding elements. In this case, we removed 2 items from index 1 (we removed '🥑' and '😍') and added the ✨ emoji instead.

109. ❌

```javascript
const food = ['🍕', '🍫', '🥑', '🍔'];
const info = { favoriteFood: food[0] };

info.favoriteFood = '🍝';

console.log(food);
```

- A string is a primitive data type. In JavaScript, primitive data types don't interact by reference.

110. ❌

```javascript
JSON.parse();
```

- With the JSON.parse() method, we can parse JSON string to a JavaScript value.

111. ❌

```javascript
let name = 'Lydia';

function getName() {
  console.log(name);
  let name = 'Sarah';
}

getName();
```

- Each function has its own execution context (or scope).

112. ⭕️

```javascript
function* generatorOne() {
  yield ['a', 'b', 'c'];
}

function* generatorTwo() {
  yield* ['a', 'b', 'c'];
}

const one = generatorOne();
const two = generatorTwo();

console.log(one.next().value);
console.log(two.next().value);
```

- With the yield keyword, we yield values in a generator function. 

113. ❌

```javascript
console.log(`${(x => x)('I love')} to program`);
```

- We pass the value 'I love' as an argument to the x => x arrow function. 
  - x is equal to 'I love', which gets returned. This results in I love to program.

114. ❌

```javascript
let config = {
  alert: setInterval(() => {
    console.log('Alert!');
  }, 1000),
};

config = null;
```

- Normally when we set objects equal to null, those objects get garbage collected as there is no reference anymore to that object. 
  - However, since the callback function within setInterval is an arrow function (thus bound to the config object), the callback function still holds a reference to the config object.

115. ⭕️

```javascript
const myMap = new Map();
const myFunc = () => 'greeting';

myMap.set(myFunc, 'Hello world!');

//1
myMap.get('greeting');
//2
myMap.get(myFunc);
//3
myMap.get(() => 'greeting');
```

- When adding a key/value pair using the set method, the key will be the value of the first argument passed to the set function, and the value will be the second argument passed to the set function.

116. ❌

```javascript
const person = {
  name: 'Lydia',
  age: 21,
};

const changeAge = (x = { ...person }) => (x.age += 1);
const changeAgeAndName = (x = { ...person }) => {
  x.age += 1;
  x.name = 'Sarah';
};

changeAge(person);
changeAgeAndName();

console.log(person);
```

- Then, we invoke the changeAgeAndName function, however we don't pass a parameter. Instead, the value of x is equal to a new object: { ...person }

117. ⭕️

```javascript
function sumValues(x, y, z) {
  return x + y + z;
}
```

- With the spread operator ..., we can spread iterables to individual elements.

118. ❌

```javascript
function sumValues(x, y, z) {
  return x + y + z;
}
```

- With the += operand, we're incrementing the value of num by 1.

119. ❌

```javascript
const person = {
  firstName: 'Lydia',
  lastName: 'Hallie',
  pet: {
    name: 'Mara',
    breed: 'Dutch Tulip Hound',
  },
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(person.pet?.name);
console.log(person.pet?.family?.name);
console.log(person.getFullName?.());
console.log(member.getLastName?.());
```

- With the optional chaining operator ?., we no longer have to explicitly check whether the deeper nested values are valid or not.

120. ❌

```javascript
const groceries = ['banana', 'apple', 'peanuts'];

if (groceries.indexOf('banana')) {
  console.log('We have to buy bananas!');
} else {
  console.log(`We don't have to buy bananas!`);
}
```

- We passed the condition groceries.indexOf("banana") to the if-statement. groceries.indexOf("banana") returns 0, which is a falsy value.

121. ❌

```javascript
const config = {
  languages: [],
  set language(lang) {
    return this.languages.push(lang);
  },
};

console.log(config.language);
```

- The language method is a setter. Setters don't hold an actual value, their purpose is to modify properties. When calling a setter method, undefined gets returned.

122. ⭕️

```javascript
const name = 'Lydia Hallie';

console.log(!typeof name === 'object');
console.log(!typeof name === 'string');
console.log(config.language);
```

- typeof name returns "string". The string "string" is a truthy value, so !typeof name returns the boolean value false. 

123. ❌

```javascript
const add = x => y => z => {
  console.log(x, y, z);
  return x + y + z;
};

add(4)(5)(6);
```

- The add function returns an arrow function, which returns an arrow function, which returns an arrow function.

124. ⭕️

```javascript
async function* range(start, end) {
  for (let i = start; i <= end; i++) {
    yield Promise.resolve(i);
  }
}

(async () => {
  const gen = range(1, 3);
  for await (const item of gen) {
    console.log(item);
  }
})();
```

- The generator function range returns an async object with promises for each item in the range we pass:

125. ⭕️

```javascript
const myFunc = ({ x, y, z }) => {
  console.log(x, y, z);
};

myFunc(1, 2, 3);
```

- myFunc expects an object with properties x, y and z as its argument. 

126. ⭕️

```javascript
function getFine(speed, amount) {
  const formattedSpeed = new Intl.NumberFormat('en-US', {
    style: 'unit',
    unit: 'mile-per-hour'
  }).format(speed);

  const formattedAmount = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(amount);

  return `The driver drove ${formattedSpeed} and has to pay ${formattedAmount}`;
}

console.log(getFine(130, 300))
```

- With the Intl.NumberFormat method, we can format numeric values to any locale.

127. ❌

```javascript
const spookyItems = ['👻', '🎃', '🕸'];
({ item: spookyItems[3] } = { item: '💀' });

console.log(spookyItems);
```

- By destructuring objects, we can unpack values from the right-hand object, and assign the unpacked value to the value of the same property name on the left-hand object.

128. ❌

```javascript
const name = 'Lydia Hallie';
const age = 21;

console.log(Number.isNaN(name));
console.log(Number.isNaN(age));

console.log(isNaN(name));
console.log(isNaN(age));
```

- With the Number.isNaN method, you can check if the value you pass is a numeric value and equal to NaN. name is not a numeric value, so Number.isNaN(name) returns false.

129. ⭕️

```javascript
const randomValue = 21;

function getInfo() {
  console.log(typeof randomValue);
  const randomValue = 'Lydia Hallie';
}

getInfo();
```

- Variables declared with the const keyword are not referencable before their initialization: this is called the temporal dead zone.

130. ⭕️

```javascript
const myPromise = Promise.resolve('Woah some cool data');

(async () => {
  try {
    console.log(await myPromise);
  } catch {
    throw new Error(`Oops didn't work`);
  } finally {
    console.log('Oh finally!');
  }
})();
```

- In the try block, we're logging the awaited value of the myPromise variable: "Woah some cool data".

131. ❌

```javascript
const emojis = ['🥑', ['✨', '✨', ['🍕', '🍕']]];

console.log(emojis.flat(1));
```

- With the flat method, we can create a new, flattened array.

132. ❌

```javascript
class Counter {
  constructor() {
    this.count = 0;
  }

  increment() {
    this.count++;
  }
}

const counterOne = new Counter();
counterOne.increment();
counterOne.increment();

const counterTwo = counterOne;
counterTwo.increment();

console.log(counterOne.count);
```

- The counter class contains a count property on its constructor, and an increment method.

133. ❌

```javascript
const myPromise = Promise.resolve(Promise.resolve('Promise'));

function funcOne() {
  setTimeout(() => console.log('Timeout 1!'), 0);
  myPromise.then(res => res).then(res => console.log(`${res} 1!`));
  console.log('Last line 1!');
}

async function funcTwo() {
  const res = await myPromise;
  console.log(`${res} 2!`)
  setTimeout(() => console.log('Timeout 2!'), 0);
  console.log('Last line 2!');
}

funcOne();
funcTwo();
```

- First, we invoke funcOne. On the first line of funcOne, we call the asynchronous setTimeout function, from which the callback is sent to the Web API.

134. ❌

```javascript
// sum.js
export default function sum(x) {
  return x + x;
}

// index.js
import * as sum from './sum';
```

- With the asterisk *, we import all exported values from that file, both default and named. If we had the following file:

135. ❌

```javascript
const handler = {
  set: () => console.log('Added a new property!'),
  get: () => console.log('Accessed a property!'),
};

const person = new Proxy({}, handler);

person.name = 'Lydia';
person.name;
```

- With a Proxy object, we can add custom behavior to an object that we pass to it as the second argument.

136. ❌

```javascript
const person = { name: 'Lydia Hallie' };

Object.seal(person);
```

- However, you can still modify the value of existing properties.

137. ⭕️

```javascript
const person = {
  name: 'Lydia Hallie',
  address: {
    street: '100 Main St',
  },
};

Object.freeze(person);
```

- However, it only shallowly freezes the object, meaning that only direct properties on the object are frozen. 

138. ⭕️

```javascript
const add = x => x + x;

function myFunc(num = 2, value = add(num)) {
  console.log(num, value);
}

myFunc();
myFunc(3);
```

- To the add function, we pass num as an argument, which had the value of 2.

139. ❌

```javascript
class Counter {
  #number = 10

  increment() {
    this.#number++
  }

  getNum() {
    return this.#number
  }
}

const counter = new Counter()
counter.increment()

console.log(counter.#number)
```

- When we try to log counter.#number, a SyntaxError gets thrown: we cannot acccess it outside the Counter class!

140. ❌

```javascript
const teams = [
  { name: 'Team 1', members: ['Paul', 'Lisa'] },
  { name: 'Team 2', members: ['Laura', 'Tim'] },
];

function* getMembers(members) {
  for (let i = 0; i < members.length; i++) {
    yield members[i];
  }
}

function* getTeams(teams) {
  for (let i = 0; i < teams.length; i++) {
    // ✨ SOMETHING IS MISSING HERE ✨
  }
}

const obj = getTeams(teams);
obj.next(); // { value: "Paul", done: false }
obj.next(); // { value: "Lisa", done: false }
```

- The generator function returns a generator object. In order to iterate over each element in this generator object, we need to use yield*.

141. ⭕️

```javascript
const person = {
  name: 'Lydia Hallie',
  hobbies: ['coding'],
};

function addHobby(hobby, hobbies = person.hobbies) {
  hobbies.push(hobby);
  return hobbies;
}

addHobby('running', []);
addHobby('dancing');
addHobby('baking', person.hobbies);

console.log(person.hobbies);
```

- Since we pass an empty array as the value for hobbies, "running" gets added to this empty array.

142. ⭕️

```javascript
class Bird {
  constructor() {
    console.log("I'm a bird. 🦢");
  }
}

class Flamingo extends Bird {
  constructor() {
    console.log("I'm pink. 🌸");
    super();
  }
}

const pet = new Flamingo();
```

- First, "I'm pink. 🌸" gets logged, after which we call super(). super() calls the constructor of the parent class, Bird.

143. ❌

```javascript
const emojis = ['🎄', '🎅🏼', '🎁', '⭐'];

/* 1 */ emojis.push('🦌');
/* 2 */ emojis.splice(0, 2);
/* 3 */ emojis = [...emojis, '🥂'];
/* 4 */ emojis.length = 0;
```

- he properties on the emojis array can be modified, for example by pushing new values, splicing them, or setting the length of the array to 0.

144. ❌

```javascript
const person = {
  name: "Lydia Hallie",
  age: 21
}

[...person] // ["Lydia Hallie", 21]
```

- We can add this manually by adding the iterator symbol [Symbol.iterator], which has to return a generator object, for example by making it a generator function *[Symbol.iterator]() {}.

145. ❌

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach(num => {
	if (num) count += 1
})

console.log(count)
```

- Since the first number in the nums array is 0, a falsy value, the if statement's code block won't be executed.

146. ❌

```javascript
function getFruit(fruits) {
	console.log(fruits?.[1]?.[1])
}

getFruit([['🍊', '🍌'], ['🍍']])
getFruit()
getFruit([['🍍'], ['🍊', '🍌']])
```

- The ? allows us to optionally access deeper nested properties within objects.

147. ⭕️

```javascript
class Calc {
	constructor() {
		this.count = 0 
	}

	increase() {
		this.count ++
	}
}

const calc = new Calc()
new Calc().increase()

console.log(calc.count)
```

- Since the count property is within the constructor of the Calc class, the count property is not shared on the prototype of Calc.

148. ❌

```javascript
const user = {
	email: "e@mail.com",
	password: "12345"
}

const updateUser = ({ email, password }) => {
	if (email) {
		Object.assign(user, { email })
	}

	if (password) {
		user.password = password
	}

	return user
}

const updatedUser = updateUser({ email: "new@email.com" })

console.log(updatedUser === user)
```

- The returned value of the updateUser function is the user object, which means that the value of updatedUser is a reference to the same user object that user points to.

149. ⭕️

```javascript
const fruit = ['🍌', '🍊', '🍎']

fruit.slice(0, 1)
fruit.splice(0, 1)
fruit.unshift('🍇')

console.log(fruit)
```

- Then, we invoke the splice method on the fruit array.

150. ❌

```javascript
const animals = {};
let dog = { emoji: '🐶' }
let cat = { emoji: '🐈' }

animals[dog] = { ...dog, name: "Mara" }
animals[cat] = { ...cat, name: "Sara" }

console.log(animals[dog])
```

- Since the value of dog is an object, animals[dog] actually means that we’re creating a new property called "object Object" equal to the new object.

151. ❌

```javascript
const user = {
	email: "my@email.com",
	updateEmail: email => {
		this.email = email
	}
}

user.updateEmail("new@email.com")
console.log(user.email)
```

- The updateEmail function is an arrow function, and is not bound to the user object. 
  - This means that the this keyword is not referring to the user object, but refers to the global scope in this case. 
    - The value of email within the user object does not get updated.

152. ❌

```javascript
const promise1 = Promise.resolve('First')
const promise2 = Promise.resolve('Second')
const promise3 = Promise.reject('Third')
const promise4 = Promise.resolve('Fourth')

const runPromises = async () => {
	const res1 = await Promise.all([promise1, promise2])
	const res2  = await Promise.all([promise3, promise4])
	return [res1, res2]
}

runPromises()
	.then(res => console.log(res))
	.catch(err => console.log(err))
```

- The fromEntries method turns a 2d array into an object. The first element in each subarray will be the key, and the second element in each subarray will be the value.

153. ❌

```javascript
const keys = ["name", "age"]
const values = ["Lydia", 22]

const method = /* ?? */
Object[method](keys.map((_, i) => {
	return [keys[i], values[i]]
})) // { name: "Lydia", age: 22 }
```

- The fromEntries method turns a 2d array into an object.

154. ⭕️

```javascript
const createMember = ({ email, address = {}}) => {
	const validEmail = /.+\@.+\..+/.test(email)
	if (!validEmail) throw new Error("Valid email pls")

	return {
		email,
		address: address ? address : null
	}
}

const member = createMember({ email: "my@email.com" })
console.log(member)
```

- The fromEntries method turns a 2d array into an object.

155. ⭕️

```javascript
let randomValue = { name: "Lydia" }
randomValue = 23

if (!typeof randomValue === "string") {
	console.log("It's not a string!")
} else {
	console.log("Yay it's a string!")
}
```

-  In this case, the returned value of typeof randomValue is the truthy value "number", meaning that the value of !typeof randomValue is the boolean value false.
