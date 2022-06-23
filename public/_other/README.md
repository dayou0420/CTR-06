# CRT-04

```
npm i --save-dev typescript
```

```
npm i -D webpack webpack-cli ts-loader
```

## Reference
- ### [ECMAScript](https://tc39.es/ecma262/)
- ### [The Abstract Equality Comparison Algorithm](https://262.ecma-international.org/5.1/#sec-11.9.3)
- ### [演算子の優先順位](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)
- ### [JavaScript Questions](https://github.com/lydiahallie/javascript-questions)
- ### [Scope(スコープ)](https://developer.mozilla.org/ja/docs/Glossary/Scope)
- ### [eval())](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/eval)

## 変数

- 変数とは`繰り返し使う`値を格納しておく入れ物
- 変数を定義することを「`変数を宣言する`」という

## 関数

- 一連の手続き(処理)を実行する文の集まり
- 関数を定義することを「`関数を宣言する`」という

```javascript
function fn( 引数1, 引数2) {
  return 戻り値;
}
```

- 関数に渡す変数が「`引数`」
- 関数の呼び出し元に返す値が「`戻り値`」

```javascript
function fn( 仮引数1, 仮引数2) {}

fn( 実引数1, 実引数2 );
```

- 末尾に`()`をつけることで関数を実行する

## オブジェクト

- 名前(`プロパティー`、またはキー)と値(バリュー)をペアで管理する入れ物

```javascript
let obj = {
  property1: 'Hello',
  property2: function() {},
  property3: {
    d: 'Bye'
  }
}
```

## プロパティーへのアクセス方法

- ドット記法
  - `obj.name`

- ブラケット記法
  - `obj['name']`

## グローバルスコープ

- Windowオブジェクト
  - グローバルスコープ
    - 一般的にはスクリプトスコープもグローバルスコープと呼ばれる

### Scope(スコープ)

```javascript
function exampleFunction() {
    var x = "declared inside function";  // x can only be used in exampleFunction
    console.log("Inside function");
    console.log(x);
}

console.log(x);  // Causes error
```

### 実行コンテキスト

- グローバルコンテキスト
  - グローバルオブジェクト
  - this
- 関数コンテキスト
  - arguments
  - super
  - this
  - 外部変数
- evalコンテキスト

### コールスタック

- 実行中のコードがたどってきたコンテキストの積み重ね
- 「後入れ先出し」LIFO(Last In, First Out)

```javascript
function a() {
}
function b() {
  a();
}
function c() {
  b();
}
c();
```

1. グローバル
2. c
3. b
4. a

### ホイスティング

- コンテキスト内で宣言した変数や関数の定義を`コード実行前にメモリー`に配置すること
- `宣言の巻き上げ`

```javascript
a(); // a is called

function a() {
  console.log('a is called');
}
```

```javascript
console.log(b); // undefined

var b = 0;
```

```javascript
console.log(b); // Uncaught ReferenceError

let b = 0;
```

```javascript
console.log(b); // Uncaught ReferenceError

const b = 0;
```

### スコープ

- 実行中のコードから値と式が三層できる範囲
  - グローバルスコープ
  - スクリプトスコープ
  - 関数スコープ
  - ブロックスコープ

### レキシカルスコープ

- コードを書く`場所によって参照できる変数`が変わるスコープのこと
1. 実行中のコードから見た`外部スコープ`のこと
2. `どのようにしてスコープを決定するか`の使用のこと

```javascript
let a = 2;
function fn1() {
  let b = 1;
  function fn2() {
    let c = 3;
  }
  fn2();
}
fn1();
```

- グローバルスコープ
  - a, fn1
- 関数スコープ(fn1)
  - b, fn2
- 関数スコープ(fn2)
  - c

- 関数コンテキスト
  - arguments
  - super
  - this
  - `レキシカルスコープ`

### スコープチェーン

- スコープが複数階層で、連なっている状態

```javascript
let a = 2;
function fn1() {
  let a = 1;
  function fn2() {
    let a = 3;
    console.log(a);
  }
  fn2();
}
fn1(); // 3
```

```javascript
let a = 2;
function fn1() {
  let a = 1;
  function fn2() {
    // let a = 3;
    console.log(a);
  }
  fn2();
}
fn1(); // 1
```

```javascript
let a = 2;
function fn1() {
  // let a = 1;
  function fn2() {
    // let a = 3;
    console.log(a);
  }
  fn2();
}
fn1(); // 2
```

```javascript
let a = 2;
window.a = 4;
function fn1() {
  // let a = 1;
  function fn2() {
    // let a = 3;
    console.log(a);
  }
  fn2();
}
fn1(); // 2
```

```javascript
// let a = 2;
window.a = 4;
function fn1() {
  // let a = 1;
  function fn2() {
    // let a = 3;
    console.log(a);
  }
  fn2();
}
fn1(); // 4
```

### クロージャー

- レキシカルスコープの変数を関数が使用している状態
  - プライベート変数の定義
  - 動的な関数生成

```javascript
function fn1() {
  let b = 1;
  function fn2() {
    console.log(b);
  }
  fn2();
}
fn1(); // 1
```

- グローバルスコープ
  - fn1
- 関数スコープ(fn1)
  - b, fn2
- 関数スコープ(fn2)
  - console.log(b)

- レキシカルスコープの変数`b`を関数`fn2`が保持している

- プライベート変数の定義
- 動的な関数生成

### クロージャー(プライベート)

```javascript
increment(); // 1
increment(); // 2
increment(); // 3

let num = 0;

increment() {
  num = num + 1;
  console.log(num);
}
```

```javascript
function incrementFactory() {

  let num = 0;

  increment() {
    num = num + 1;
    console.log(num);
  }

  return increment;
}

const increment = incrementFactory();

increment(); // 1
increment(); // 2
increment(); // 3
increment(); // 4
```

```javascript
function addNumberFactory(num) {
  function addNumber(value) {
    return num + value;
  }
  return addNumber;
}

const add5 = addNumberFactory(5);
const result = add5(10);
console.log(result);
```

### 即時関数

- 関数定義と同時に`一度だけ`実行される関数
- `実行結果が呼び出し元に返却される`

```javascript
let result = (function(仮引数) {
  return 戻り値;
})(実引数);
```

- `実行結果が呼び出し元に返却される`
  - `IIFE`

```javascript
(function() {
  console.log('called');
})();

// 関数式
let b = function() {
  console.log('called');
}();

// retrun
let c = function() {
  return 0;
}();
console.log(c);

// 引数
let d = function(e) {
  console.log(`called ${d}`);
}(10);
console.log(c);
```

```javascript
const c = (function() {

  let privateVale = 0;
  let publicValue = 10;

  function privateFn() {
    console.log('privateFn is called');
  }

  function publicFn() {
    console.log('publicFn is called' + privateVale++);
  }

  return {
    publicValue: publicValue,
    publicFn: publicFn
  };
})()

c.publicFn(); // 0
c.publicFn(); // 1
c.publicFn(); // 2
c.publicFn(); // 3
```

### 変数宣言を行うキーワード

- `let`(ES6~)
- `const`(ES6~)
- `var`(非推奨)

### 宣言による機能の違い

| タイプ | 再宣言 | 再代入 | スコープ | 初期化 | 
| --- | --- | --- | --- | --- | 
| `let` | ❌ | ⭕️ | ブロック | ❌ | 
| `const` | ❌ | ❌ | ブロック | ❌ | 
| var | ⭕️ | ⭕️ | 関数 | undefined | 

### データ型1

| 型 | 英名 | 例 | 
| --- | --- | --- | 
| 真偽値 | Boolean | true/false | 
| 数値 | Number | 12 | 
| 文字列 | String | "Hello" | 
| undefined | Undefined | undefined | 
| null | Null | null | 

### データ型2

| 型 | 英名 | 例 | 
| --- | --- | --- | 
| シンボル | Symbol | 一意の値 | 
| BigInt | BigInt | 12n | 
| オブジェクト | Object | {a: 'value'} | 

### 暗黙的な型変換

- 変数が呼ばれた状況によって`変数の型が自動的に変換`されること

### プログラミング言語による型宣言の違い

```javascript
let a = 0;
```

- `動的型付け言語`
  - 変数宣言時の`型の宣言なし`
  - 変数を使用する`状況によって`、変数の方が変更される

```java
int a = 0;
```

- `静的型付け言語`
  - 変数宣言時の`型の宣言あり`
  - 変数を使用する`状況によらず`、常に同じ型を保持する

```javascript
function printTypeAndValue(val) {
  console.log(typeof val, val);
}

let a = 0;

printTypeAndValue(a); // 0 number

let b = '1' + a;

printTypeAndValue(b); // 10 string

let c = 15 - b;

printTypeAndValue(c); // 5 number

let d = c - null;

printTypeAndValue(d); // 5 number

let e = d - true;

printTypeAndValue(e); // 4 number
```

### 比較演算子

```javascript
a === b
```

- 厳格な等価性
  - 型の比較`あり`

```javascript
a == b
```

- 抽象的な等価性
  - 型の比較`なし`

```javascript
function printEquality(a, b) {
  console.log(a === b);
  console.log(a == b);
}

let a = '1';
let b = 1;

printEquality(a, b); // false true

let c = true

printEquality(b, c); // false true

let e = "";
let f = 0;
let g = "0";

printEquality(e, f); // false true

printEquality(g, f); // false true
```

- [The Abstract Equality Comparison Algorithm](https://262.ecma-international.org/5.1/#sec-11.9.3)

### falsyな値

- Boolean真偽値に変換した場合に`false`になる値のこと

### falsy

- false
- null
- 0
- undefined
- 0n
- NaN
- ""

### truthy

- それ以外

### falsy, truthy

```javascript
let a = 0;
console.log(Boolean(a)); // false

if(!a) {
  console.log('hello');
} else {
  console.log('bye'); // bye
}
```

```javascript
const a = 0;
const b = 1;
const c = 3;
const d = 0;

console.log(a && b); // 0
console.log(a || b); // 1
console.log((a || b) && (c || d)); // 3
```

```javascript
function hello(name) {
  name = name || 'Tom';
  console.log(`Hello ${name}`)
}

hello();
```

```javascript
function hello(name = 'Tom') {
  console.log(`Hello ${name}`)
}

hello();
```

```javascript
function hello(name) {
  name = name || 'Tom';
  console.log(`Hello ${name}`)
}

hello();

let name = 'Bob';

name && hello(name);
```

### データ型

- 文字列、数値などの異なる値の方をデータ型という
  - JavaScript(ECMAScript)には`8つの型`が存在する

### プリミティブ型

- String
- Number
- Boolean
- Undefined
- Null
- Symbol
- BigInt

### オブジェクト

- Object
  - プリミティブ型以外

### プリミティブ型

```javascript
let a = 'Hello';

a = 'Bye';
```

- 変数には`値`が格納される
- 一度作成するとその値を変更することはできない
- `immutable`

### Step1

```javascript
 'Hello';
```

- メモリ空間
1. 'Hello'

### Srep2

```javascript
let a = 'Hello';
```

- メモリ空間
1. 'Hello'
2. a 👆

### Step3

```javascript
let a = 'Hello';
    'Bye';
```

- メモリ空間
1. 'Hello'
2. a 👆
3. 'Bye'

### Setp4

```javascript
let a = 'Hello';
a = 'Bye';
```

- メモリ空間
1. 'Hello'
2. a 👇
3. 'Bye'

- 参照が切り替わっただけ❗️

### オブジェクト

```javascript
let a = {
    prop: 'Hello'
}
```

- 変数には`参照`が格納される
- 値を変更することができる
- `mutable`

### Step1

```javascript
let a = {
    
}
```

- メモリ空間
1. 
2. {}
3. {...}への参照 👆
4. a 👆

### Step2

```javascript
let a = {
    prop:
}
```

- メモリ空間
1. 
2. { prop }
3. {...}への参照 👆
4. a 👆

### Step3

```javascript
let a = {
    prop: 'Hello'
}
```

- メモリ空間
1. 'Hello'
2. { prop } 👆
3. {...}への参照 👆
4. a 👆

- 名前(プロパティー)と値(バリュー)をペアで管理する入れ物

```javascript
let obj = {
    property1: 'Hello',
    property2: function() {
    },
    property3: {
      d: 'Bye'
    }
}
```

- 名前(プロパティー)付きの`参照`を管理する入れ物

### プリミティブ値のコピー

### Step1

```javascript
let a = 'Hello';
```

- メモリ空間
1. 'Hello'
2. a 👆
3. 
4. 
5. 

### Step2

```javascript
let a = 'Hello';
let b = a;
```

- メモリ空間
1. 'Hello'
2. a 👆
3. 'Hello'
4. b 👆
5. 

### Step3

```javascript
let a = 'Hello';
let b = a;
b = 'Bye'
```

- メモリ空間
1. 'Hello'
2. a 👆
3. 'Hello'
4. b 👇
5. 'Bye'

### オブジェクトのコピー

### Step1

```javascript
let a = {
  prop: 'Hello'
};
```

- メモリ空間
1. 'Hello'
2. { prop } 👆
3. {...}への参照 👆
4. a 👆
5. 
6. 
7. 
8. 

### Step2

```javascript
let a = {
  prop: 'Hello'
};

let b = a;
```

- メモリ空間
1. 'Hello'
2. { prop } 👆
3. {...}への参照 👆 "👇"
4. a 👆
5. 
6. {...}への参照 👆
7. b 👆
8. 

### Step3

```javascript
let a = {
  prop: 'Hello'
};

let b = a;

b.prop = 'Bye';
```

- メモリ空間
1. 'Hello'
2. { prop } 👆
3. {...}への参照 👆 "👇"
4. a 👆
5. 'Bye'
6. {...}への参照 👆
7. b 👆
8. 

### オブジェクトの再代入

### Step1

```javascript
let a = {
  prop: 'Hello'
};
```

- メモリ空間
1. 'Hello'
2. { prop } 👆
3. {...}への参照 👆
4. a 👆
5. 
6. 
7. 
8. 

### Step2

```javascript
let a = {
  prop: 'Hello'
};

let b = a;
```

- メモリ空間
1. 'Hello'
2. { prop } 👆
3. {...}への参照 👆
4. a 👆
5. 
6. {...}への参照 👆 "👆"
7. b 👆
8. 

### Step3

```javascript
let a = {
  prop: 'Hello'
};

let b = a;
b = {};
```

- メモリ空間
1. 'Hello'
2. { prop } 👆
3. {...}への参照 👆
4. a 👆
5. 
6. {...}への参照 👆 "👆"
7. b 👇
8. {...}'への参照

### 「参照とコピー」のおさらい

```javascript
function fn(a) {
}

let b = 0;

fn(b);
```

```javascript
let a = b;
```

```javascript
let a = 0;

function fn1(arg1) {
  arg1 = 1;
  console.log(a, arg1);
}

fn1(a); // 0 1
```

```javascript
let a = 0;

let arg1 = a;
args = 1

console.log(a, arg1); // 0 1
```

```javascript
let b = {
  prop: 0
};

function fn2(arg2) {
  arg2 = {};
  console.log(b, arg2)
}

fn2(b); // { prop: 0 } {}
```

```javascript
let b = {
  prop: 0
};

function fn3(arg2) {
  arg2.prop = 1;
  console.log(b, arg2)
}

fn3(b); // { prop: 1 } { prop: 1 }
```

- これは変数の参照先の`値`、もしくは`オブジェクトへの参照`のコピーを表す

### 分割代入

```javascript
let {a, b} = object;
```

- オブジェクトから特定のプロパティーを抽出して宣言を行う

### Step1

```javascript
let a = {
  prop: 'Hello'
};
```

- メモリ空間
1. 'Hello'
2. { prop } 👆
3. {...}への参照 👆
4. a 👆
5. 
6. 
7. 
8. 

### Step2

```javascript
let a = {
  prop: 'Hello'
};

let { prop } = a;
```

- メモリ空間
1. 'Hello'
2. { prop } 👆
3. {...}への参照 👆
4. a 👆
5. 'Hello'
6. prop 👆
7. 
8. 

### Step3

```javascript
let a = {
  prop: 'Hello'
};

let { prop } = a;
prop = 'bye';
```

- メモリ空間
1. 'Hello'
2. { prop } 👆
3. {...}への参照 👆
4. a 👆
5. 'Hello'
6. prop 👇
7. 'Bye'
8. 

```javascript
const a = {
  prop: 0
}

let { prop } = a;

prop = 1

console.log(a, prop); // { prop: 0 } 1

function fn(obj) {
  let { prop } = obj;
  prop = 1;
  console.log(obj, prop)
}
fn(a); // { prop: 0 } 1

const c = {
  prop1: {
    prop2: 0
  }
}

let { prop1 } = c;

console.log(prop1); // { prop2: 0 }

prop1.prop2 = 1; // 参照先のオブジェクトにも影響がある

console.log(c, prop1); // { prop1: { prop2: 1 } } { prop2: 1 }
```

### 参照の比較と値の比較

```javascript
const a = {
  prop: 0
}

const b = {
  prop: 0
}

console.log(a === b); // false
console.log(a.prop === b.prop); // true

const c = a;

console.log(a === c); // true
```

- プリミティブ型では`値`の比較
- オブジェクトは`参照`の比較

### `関数`は`実行可能なオブジェクト`である

### プリミティブ型

- String
- Number
- Boolean
- Undefined
- Null
- Symbol
- BigInt

### オブジェクト

- Object
  - `プリミティブ型以外`

### `関数`は`実行可能なオブジェクト`である

### コールバック関数

- 他の関数に`引数として`渡される関数

```javascript
function a() {
    b();
}

function b() {
}
```

### this

- `呼び出し元のオブジェクト`への参照を保持するキーワード

```javascript
const person = {
    name: 'Tom',
    hello: function() {
        console.log(`hello ${this.name}`)
    }
}
person.hello();
```

- 実行コンテキストによって`this`の参照先は変わる
- `呼び出し元のオブジェクト`への参照を保持する

### 参照のコピーと`this`

- `オブジェクトのメソッド`として実行される場合
  - `this` => 呼び出し元オブジェクト

- `関数`として実行される場合
  - `this` => グローバルオブジェクト

### bind

- bindによって`this`や`引数`を固定した新しい関数を作成

- `bindによるthisの束縛`

### bind

- `this`や引数の参照先を変更
- 使用時点で`実行はしない`

### call, apply

- `this`や引数の参照先を変更
- 同時に関数を`実行する`

```javascript
function a(name) {
    return `hello ${this.name} ${name}`;
}

const tim = { name: 'Tim' };
const b = a.bind(tim, 'Tim');

console.log(b()); // hello Tim Tim
console.log(a.apply(tim, ['Tim'])); // hello Tim Tim
console.log(a.call(tim, 'Tim')); // hello Tim Tim

const arry = [1, 2, 3, 4, 5];

const result = Math.max.apply(null, arry);
console.log(result); // 5
```

### アロー関数

- 無名関数を記述しやすくした省力記法

```javascript
() => {};
```

|  | 無名関数 | アロー関数 | 
| --- | --- | --- | 
| this | ⭕️ | ❌ | 
| arguments | ⭕️ | ✖️ | 
| new | ⭕️ | ✖️ | 
| prototype | ⭕️ | ✖️ | 

```javascript
window.name = 'John';

const person = {
    name: 'Tom',
    hello: () => {
        console.log(`hello ${this.name}`);
    }
}

person.hello();
```

### コンストラクター関数

- 新しく`オブジェクトを作成する`ための雛形となる関数

```javascript
function A() {
  this.prop = 0;
}
```

```javascript
const obj = new A();
```

- `new`でオブジェクトを作成することを「`インスタンス化`」という
- `new`で作成したオブジェクトを「`インスタンス`」という

### 重要なキーワード

- コンストラクター関数
- インスタンス化
- インスタンス

### プロトタイプ

- オブジェクトに存在する特別なプロパティー
- コンストラクター関数を合わせて使用
- インスタンス化した際には`prototype`の参照が`__proto__`にコピーされる

### new演算子

- コンストラクター関数からインスタンスを作成するために使用する演算子

### コンストラクター関数の戻り値がオブジェクトの場合

- コンストラクター`return {...}` new => オブジェクト`{...}`

### コンストラクター関数の戻り値がオブジェクト`以外`の場合

- コンストラクター`prototype` new => オブジェクト`__proto__`
  - `prototype`をコピー
  - この`オブジェクトを'this'の参照先`としてコンストラクター関数を実行

```javascript
function F(a, b) {
    this.a = a;
    this.b = b;
    return {};
}

F.prototype.c = function(){
    console.log(this.a, this.b);
}

function newOpe(C, ...args) {
    const _this = Object.create(C.prototype);
    const result = C.apply(_this, args);

    if(typeof result === "object" && result !== null) {
        return result;
    }

    return _this;
}

const instance = newOpe(F, 1, 2);
console.log(instance);

// const instance = new F(1, 2);
// instance.c();
```

### instanceof

- どのコンストラクターから生成されたオブジェクトかを確認する


```javascript
function fn(arg) {
    if(arg instanceof Array) {
        arg.push('value');
    } else {
        arg['key'] = 'value';
    }
    console.log(arg);
}

fn({});
fn([]);
```

### `関数`は`実行可能なオブジェクト`である

### プロトタイプチェーン

- プロトタイプの`多重形成`をプロトタイプチェーンという

### プロトタイプ継承

- 別のコンストラクター関数の`プロトタイプを受け継いで`、機能を流用できるようにすること

### 継承

- 別のコンストラクター関数を受け継ぐこと

```javascript
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.hello = function() {
    console.log(`hello ${this.name}`);
}

function Japanese(name, age, gender) {
    Person.call(this, name, age);
    this.gender = gender;
}

Japanese.prototype = Object.create(Person.prototype);

Japanese.prototype.hello = function() {
    console.log(`こんにちは ${this.name}`);
}

Japanese.prototype.bye = function() {
    console.log(`さようなら ${this.name}`);
}

const taro = new Japanese('太郎', 23, 'Male');
console.log(taro);
taro.hello();
```

### クラス

- コンストラクター関数をクラス表記で書けるようにしたもの
  - `シンタックスシュガー`

### クラス継承

- 他のクラスのプロパティーとメソッドを継承すること

```javascript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    hello() {
        console.log(`hello ${this.name}`);
    }
}

class Japanese extends Person {
    constructor(name, age, gender) {
        super(name, age);
        this.gender = gender;
    }

    hello() {
        console.log(`こんにちは ${this.name}`);
    }

    bye() {
        console.log(`さようなら ${this.name}`);
    }
}

const taro = new Japanese('太郎', 23, 'Male');
console.log(taro);
```

### スーパー

- 継承元の関数を呼び出すためのキーワード

### ビルトインオブジェクト

- コード実行前にJSエンジンによって`自動的`に生成されるオブジェクト

### ビルトインオブジェクト

- String
- Object
- Number
- Function
- Math
- Booleam
- Date
- Symbol, etc...

### ラッパーオブジェクト

- `プリミティブ値`を内包するオブジェクト

### シンボル

- プロパティーの重複を避けるために、`必ず一意の値`を返す関数

### プロパティーの設定値

|  |  | 
| --- | --- | 
| value | `値` | 
| configurable | `設定変更`可能性 | 
| enumerable | `列挙`可能性 | 
| writable | `値の変更`可能性 | 

### getter/setter/static

```javascript
function Person1(name, age) {
    this._name = name;
    this._age = age;
}

Person1.hello = function() {
    console.log('hello');
}

Person1.hello();

Object.defineProperty(Person1.prototype, 'name', {
    get: function() {
        console.log(this._name);
        return `hello ${this._name}`;
    },
    set: function(val) {
        this._name = val;
    }
})

const p1 = new Person1('Bob', 23);

p1.name = 'Tom';
console.log(p1.name);

class Person2 {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    get name() {
        console.log(this._name);
        return `hello ${this._name}`;
    }

    set name(val) {
        this._name = val;
    }

    static hello() {
        console.log('hello');
    }
}

Person2.hello();
```

### チェーンメソッド

```javascript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    hello(person) {
        console.log(`${this.name} says hello ${person.name}.`);
        return this;
    }

    introduce() {
        console.log(`Hi, I'm ${this.name}, ${this.age} years old.`);
        return this;
    }

    shakeHands(person) {
        console.log(`${this.name} shake hands with ${person.name}.`);
        return this;
    }

    bye(person) {
        console.log(`Goodbye, ${person.name}!`);
        return this;
    }
}

const bob = new Person('Bob', 23);
const tim = new Person('Tim', 33);

bob.hello(tim)
    .introduce()
    .shakeHands(tim)
    .bye(tim);

tim.hello(tim)
    .introduce()
    .shakeHands(tim)
    .bye(tim);
```

### チェーンメソッド - Calculator

```javascript
class Calculator {
    constructor() {
        this.val = null;
        this._operator;
    }

    set(val) {
        if(this.val === null) {
            this.val = val;
        } else {
            this._operator(this.val, val);
        }
        return this;
    }

    plus() {
        this._operator = function(val1, val2) {
            const result = val1 + val2;
            this._equal(result);
        }
        return this;
    }

    minus() {
        this._operator = function(val1, val2) {
            const result = val1 - val2;
            this._equal(result);
        }
        return this;
    }

    multiply() {
        this._operator = function(val1, val2) {
            const result = val1 * val2;
            this._equal(result);
        }
        return this;
    }

    divide() {
        this._operator = function(val1, val2) {
            const result = val1 / val2;
            this._equal(result);
        }
        return this;
    }

    _equal(result) {
        this.val = result;
        console.log(result);
    }
}

const calc = new Calculator();
calc.set(10)
    .minus()
    .set(3)
    .multiply()
    .set(6)
    .divide()
    .set(2)
    .plus()
    .set(2)
```

### 演算子

- 値(オペランド)をもとに処理を行い、`結果を返す`記号
- `A ? B`

```javascript
a = 1 + 2;
a = 3
3
```

- [演算子の優先順位](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)

```javascript
let b;
/*
 * ++a
 */
a = b = a + 1;
a = b = 1;

/*
 * a++
 */
a = b = a + 1;
a = (b = a) + 1;
a = b = 1;

console.log(a, b);
```

### for...in

- `列挙可能プロパティー`に対して順不同で反復処理を実行する
- プロトタイプチェーン内も列挙対象となる
  - `Object.hasOwnProperty()`

### Symbolとfor...in

- Symbolで定義したプロパティーはfor...inで列挙対象にならない

### for...of

- `イテレーター`を持つオブジェクトの反復操作を行う

### イテレーター

- 反復操作を行う際に使用するオブジェクト
  - String
  - Array
  - Map
  - Set
  - arguments, etc..
    - `反復可能オブジェクト`

### Map, Set

- データを管理するための入れ物
  - `コレクション`

### Object vs. Map

| | Object | Map | 
| --- | --- | --- | 
| キー | 文字列 | 制約なし | 
| for...in | ⭕️ | ❌ | 
| for...of | ❌ | ⭕️ | 

### Array vs. Set

| | Array | Set | 
| --- | --- | --- | 
| 重複値 | ⭕️ | ❌ | 
| for...in | ⭕️ | ❌ | 
| for...of | ⭕️ | ⭕️ | 

### イテレーター

- 反復操作を行う際に使用するオブジェクト
  - 決められたルールに則って記述

```javascript
function genIterator() {
    return {
        next: function() {
            return {
                done: true/false,
                value: 値
            }
        }
    }
}
```

### 反復可能オブジェクトの実装

```javascript
const items = {
    prop1: 'value1',
    prop2: 'value2',
    prop3: 'value3'
}

Object.prototype[Symbol.iterator] = function() {
    const keys = Object.keys(this);
    let i = 0;
    let _this = this;
    return {
        next() {
            let key = keys[i++];
            return {
                value: [key, _this[key]],
                done: i > keys.length
            }
        }
    }
}

for(let [k, v] of items) {
    console.log(k, v);
}
```

### ジェネレーター

```javascript
function genIterator() {
    return {
        next: function() {
            return {
                done: true/false,
                value: 値
            }
        }
    }
}
```

```javascript
function* gen() {
    if(ループ継続) {
        yield 値;
    } else {
        return 値;
    }
}
```

- `yield 値;`
  - `done: fales`, `vakue: 値`
- `return 値;`
  - `done: true`, `vakue: 値`

### スレッド

- 連続して実行される`一本`の処理の流れ
  - `Main Thread`
  - Service Thread
  - Web Thread

### メインスレッド

- JavaScriptの実行とレンダリング(画面描写処理)を行う

### FPS(Flames Per Second)

- 一秒あたりの画面(フレーム)更新頻度
  - 一秒間に60回画面更新
    - `60fps` = `16.7秒`に一回画面更新

- 重い処理があると画面が更新されなくなる

### 同期処理と非同期処理

### 同期処理

- `同期処理`では`メインスレッド`でコードが順番に実行される
  - `同期処理`ではひとつの処理が完了するまで次の処理には進まない

### 非同期処理

- 一時的に`メインスレッド`から処理が切り離される

### 非同期処理

- 非同期API
  - setTimeout
  - Promise
  - queueMicrotask, etc...

- UIイベント
  - クリック, etc...

- NWイベント
- I/Oイベント

### タスクキュー

- `実行待ち`の非同期処理の行列
  - 非同期処理の`実行順`を管理
  - キューの仕組みを「先入れ先出し」という
    - FIFO(First In, First Out)

### Promise

- 非同期処理をより`簡単`に、`可読性が上がる`ように書けるようにしたもの

### Promise構文

```javascript
new Promise(function(resolve, reject) {
    resolve('hello');
}).then(function(data) {
    console.log(data) // -> 'hello'
}).catch(

).finally(function() {
    console.log('終了処理');
});
```

```javascript
new Promise(function(resolve, reject) {
    reject('bye');
}).then(function(data) {

}).catch(function() {
    console.log(data) // -> 'bye'
}).finally(function() {
    console.log('終了処理');
});
```

```javascript
new Promise(
    同期処理
).then(
    非同期処理(resolveを待つ)
).catch(
    非同期処理(rejectを待つ)
).finally(
    非同期処理(then, またはcatchを待つ)
);
```

### マクロタスク

- これまでのレクチャーで`タスクキュー`と呼んでいたもの

### マイクロタスク

- `タスクキュー`とは別で存在する非同期処理待ち行列
  - `ジョブキュー`

```javascript
setTimeout(function task1() {
    console.log('task1');
});
new Promise(function promise(resolve) {
    console.log('promise');
    resolve();
}).then(function job1() {
    console.log('job1');
});
console.log('global end');
```

```
promise
global end
job1
task1
```

### マイクロタスク

- 順番が回ってきたら`すべてのジョブ`を実行

### マクロタスク

- 順番が回ってきたら`一つずつタスク`を実行

### マクロタスク

- `setTimeout`
- `setInterval`
- `requestAnimationFrame`, etc...

### マイクロタスク

- `Promise`
- `queueMicrotask`
- `MutationObserver`, etc...

```javascript
new Promise(function promise(resolve) {
    console.log('promise');

    setTimeout(function task1() {
        console.log('task1');
        resolve();
    });

}).then(function job1() {
    console.log('job1');
});

console.log('global end');
```

```
promise
global end
task1
job1
```

```javascript
new Promise(function promise(resolve) {
    console.log('promise');

    setTimeout(function task1() {
        console.log('task1');
        resolve();
    });

}).then(function job1() {
    console.log('job1');
    setTimeout(function task2() {
        console.log('task2');
        resolve();
    });
}).then(function job2() {
    console.log('job2');
}).then(function job3() {
    console.log('job3');
});

console.log('global end');
```

```
promise
global end
task1
job1
job2
job3
task2
```

```javascript
new Promise(function promise(resolve) {
    console.log('promise');

    setTimeout(function task1() {
        console.log('task1');
        resolve();
    });

}).then(function job1() {
    console.log('job1');
    setTimeout(function task2() {
        console.log('task2');
        resolve();
    });

    queueMicrotask(function job4() {
        console.log('job4');
    });

}).then(function job2() {
    console.log('job2');
}).then(function job3() {
    console.log('job3');
});

console.log('global end');
```

```
promise
global end
task1
job1
job4
job2
job3
task2
```

### Await/Async

- Promiseを更に`直感的に`記述できるようにしたもの

### Await

- `Promise`を返却する関数の宣言を行う

### Async

- `Promiseを返却する関数`の非同期処理が完了するまで待つ

```javascript
fetch('../../asy/users.json').then(function(response) {
    return response.json();
}).then(function(json) {
    for(const user of json) {
        console.log(`I'm ${user.name}, ${user.age} years old.`)
    }
})
```

```javascript
async function fetchUsers() {
    const response = await fetch('../../asy/users.json');
    const json = await response.json();
    for(const user of json) {
        console.log(`I'm ${user.name}, ${user.age} years old.`)
    }
}
```

### 例外処理

- エラーあが発生した際に飛ぶ特別な処理

```javascript
try {
    throw new Error()
} catch(e) {
    // エラーハンドリング
} finally {
    // 終了処理
}
```

### プロミスチェーン

```javascript
tasync function myFetch(fileName) {
    const response = await fetch(`../../asy/json/${fileName}`);
    const json = await response.json();
    return json;
}

(async function() {

    const me = await myFetch('user1.json');
    console.log(`--${me.name}'s timeline--`);
    const friendList = await myFetch(`friendsOf${me.id}.json`);

    const friendIds = new Set();
    for(const id of friendList.friendIds) {
        friendIds.add(myFetch(`user${id}.json`));
    }
    const friends = await Promise.all(friendIds);

    const msgIds = new Set();
    for(const friend of friends) {
        msgIds.add(myFetch(`message${friend.latestMsgId}.json`));
    }
    const msgs = await Promise.all(msgIds);

    for(const friend of friends) {
        for(const msg of msgs) {
            if(friend.id === msg.userId) {
                console.log(`${friend.name} says: ${msg.message}`);
            }
        }
    }

})();
```

### モジュール

- ソースコードを機能毎に分割して、メンテナンスしやすくする仕組み
  - 代表的なものに`ESM`と`CJS`が存在する

### CommonJS(CJS)

- Node.js
  - CommonJS
    - require / exports

### ES Modules(ESM)

- ECMAScript
  - ES Module
    - import / export

### ESM vs. CJS

| ESM | CJS | 
| --- | --- | 
| import/export | require/export | 
| Browser | Node.js | 
| .mjs | .cjs | 

### importとexport

- import
  - モジュールの読み込みに使用
- export
  - モジュールの露出に使用

### モジュールコンテキストとモジュールコンテキスト

- `モジュールコンテキスト`
- 関数コンテキスト

- グローバルスコープ
- `モジュールスコープ`
- 関数スコープ
- ブロックスコープ

### Strictモード

- 通常のJavaScriptで許容されている`一部の書き方を制限`する

### Strictモードの目的

- 意図しないバグの混入を防止
- 予約語の確保
- コードのセキュア化など

### Strictモードの有効化

- "use strict"
- ファイルの先頭、もしくは関数内の先頭行に記述

### Proxy

- プロパティーの操作に`独自の処理を追加`するためのオブジェクト

### Reflect

- `JSエンジンの内部の汎用的な`関数を呼び出すメソッドが格納されているオブジェクト

### 内部メソッドとReflect

| 内部メソッド | Reflect | 
| --- | --- | 
| [[Get]] | get | 
| [[Set]] | set | 
| [[Delete]] | deleteProperty | 
| [[Construct]] | construct | 

### Reflect

1. 内部メソッドを呼び出す関数の格納場所
2. Proxyと合わせて使用するため

### 内部メソッドとの関係性

| 内部メソッド | Reflect | Proxy | 
| --- | --- | --- | 
| [[Get]] | get | get | 
| [[Set]] | set | set | 
| [[Delete]] | deleteProperty | deleteProperty | 
| [[Construct]] | construct | construct | 

### WeakMap

- 弱い参照でオブジェクトを保持するコレクション
  - `キーは必ずオブジェクト`

### JSON

- JSON.`parse`
  - JSON => Object

- JSON.`stringify`
  - Object => JSON

### Strage

- ブラウザの保存領域に`データを格納する`ためのオブジェクト

### Map, Set

- データを管理するための入れ物
  - `コレクション`

### Object vs. Map

| | Object | Map | 
| --- | --- | --- | 
| キー | 文字列 | 制約なし | 
| for...in | ⭕️ | ❌ | 
| for...of | ❌ | ⭕️ | 

### Array vs. Set

| | Array | Set | 
| --- | --- | --- | 
| 重複値 | ⭕️ | ❌ | 
| for...in | ⭕️ | ❌ | 
| for...of | ⭕️ | ⭕️ | 

### 非同期処理

- 非同期処理は一時的に`メインスレッド`から処理が切り離される

### フレームワーク

- 骨組み、枠組み、(組織・観念などの)構成...
  - `骨組み`に沿って機能を実装していくことで、`簡単に高機能なサイト`を作成可能

### Vue

- ユーザーインターフェースを構築するためのJSフレームワーク
  - `TypeScriptで記述`

### TypeScript

- JSを拡張したスーパセットのプログラミング言語

### TypeScriptの特徴

1. JSに変換してから実行
2. 型の定義が可能
3. JSにない演算子を使用可能

### イベント伝播

- バブリング

```javascript
const divs = document.querySelectorAll('div');

let duration = 0;

function getCurentDuration() {
    return duration += 500;
}

const clickhandler = function(event) {
    const divEl = event.currentTarget;

    setTimeout(function() {

        divEl.style.background = 'var(--red)';

        setTimeout(function() {

            divEl.style.background = 'none';

        }, 1000);

    }, getCurentDuration());
}

divs.forEach(function(div) {
    div.addEventListener('click', clickhandler);
});

document.body.addEventListener('click', clickhandler)
```

- キャプチャリング

```javascript
const divs = document.querySelectorAll('div');

let duration = 0;

function getCurentDuration() {
    return duration += 500;
}

const clickhandler = function(event) {
    const divEl = event.currentTarget;

    setTimeout(function() {

        divEl.style.background = 'var(--red)';

        setTimeout(function() {

            divEl.style.background = 'none';

        }, 1000);

    }, getCurentDuration());
}

divs.forEach(function(div) {
    div.addEventListener('click', clickhandler, true);
});

document.body.addEventListener('click', clickhandler)
```

### this

```javascript
const outer = {
    func1: function() {
        console.log(this); // { func1: f }

        const func2 = function() {
            console.log(this); // Window

            const func3 = function() {
                console.log(this); // Window
            }();
        }();
    }
}
outer.func1();
```

```javascript
const outer = {
    func1: function() {
        console.log(this); // { func1: f }

        let _this = this;

        const func2 = function() {
            console.log(_this); // { func1: f }

            const func3 = function() {
                console.log(_this); // { func1: f }
            }();
        }();
    }
}
outer.func1();
```

### apply, call, bind

```javascript
function greet() {
    let sliceArray = [].slice.call(arguments);
    let hi = `Hi, ${this.name}`;
    console.log(hi);
    console.log(sliceArray);
}

let obj = { name: 'Tom' };

greet();
greet.call(obj, 1, 2, 3);
greet.apply(obj, [1, 2, 3]);

const arry = [1, 2, 3, 4];
console.log(Math.min(...arry));
console.log(Math.min.apply(null, arry));

let myObj = {
    id: 42,
    print() {

        console.log(this); // { id: 42, print: f }

        let _this = this;

        window.setTimeout(function() {

            console.log(this);  // Before bind: undefined
            
            console.log(_this);  // Before bind: { id: 42, print: f }

            console.log(this.id);

        }.bind(this), 1000);
    }
}

myObj.print();

let window = {
    setTimeout: function(cb, millisecond) {
        // stop millisecond
        cb();
    }
}
```

### アロー関数

```javascript
function timesTwe(i) {
    return i * 2;
}

const timesTwo = function(i) {
    return i * 2;
}

const timesTwo = i => i * 2;

const res = timesTwo(2);
console.log(res);

/*
 * 書き方(シンタックス)について
 */

let arrowFn;
arrowFn = () => 42;
arrowFn = x => 42;
arrowFn = (x) => 42;
arrowFn = (x, y) => 42;
arrowFn = (x, y) => {
    console.log(x + y);
    return x + y;
}

/*
 * thisのbindについて
 */

window.id = 42;
let normalFn;
normalFn = {
    id: 43,
    counter: function() {
        // console.log(this); { id: 43, counter: f }
        console.log(this.id);

        // let _this = this;
        window.setTimeout(function() {
            // console.log(this); Window
            // console.log(_this.id);
            console.log(this.id);
        }.bind(this), 1000);
    }
};

normalFn.counter();

// thisの挙動

let normalFn;
normalFn = {
    id: 43,
    counter: function() {
        console.log(this.id);

        window.setTimeout(() => {
            console.log(this.id);
        }, 1000);
    }
};

normalFn.counter();

// thisの挙動

window.me = 'global';
const outer = function() {
    let me = 'outer'; // lexical scope

    return {
        me: 'inner',
        say: () => {
            console.log(this.me);
        }
    }
}

outer().say();
```

### クロージャー

```javascript
/**
 * クロージャーの定義
 * 
 * クロージャーは、関数と、その関数が宣言された
 * レキシカルスコープの組み合わせです。
 * [MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Closures)
 */

/**
 * ダメなパターン
 * 
 * num = 0;
 * 
 * function increment() {
 *   num++;
 *   console.log(num);
 * }
 * 
 */

let increment = (function() {

    let counter = 0; // Lexical Scope

    return function() {
        counter += 1; // Closure
        console.log(counter);
        return counter;
    }
})();

// increment.counter = 10;
increment(); // 1
increment(); // 2
increment(); // 3

function addStringFactory(tail) {

    function concat(str) {
        return str + tail;
    }
    return concat;
}

let addAs = addStringFactory('AAAAAA');
let addBs = addStringFactory('BBBBBB');

let str = 'Tom';
str = addAs(str);
console.log(str);
```

### スプレッド構文

```javascript
function sum(x, y, z) {
    return x + y + z;
}

console.log(sum(1, 2, 3));

const numbers = [1, 2, 3];

console.log(numbers);

console.log(sum(...numbers));

console.log(sum.apply(null, numbers));

let arr1 = [0, 1, 2];
let arr2 = [3, 4, 5];

arr3 = arr1.concat(arr2);
arr4 = [...arr2, 10, ...arr1];

console.log(arr3);
console.log(arr4);

let obj1 = { foo: 'bar', x: 42 };
let obj2 = { foo: 'baz', y: 13 };

let clonedObj = { ...obj1 };

let mergedObj = { ...obj1, ...obj2 };

console.log(clonedObj);
console.log(clonedObj === obj1);

console.log(mergedObj);

let a = [[1], [2], [3]];
let b = [...a];

b.shift().shift();

console.log(b);
console.log(a);

/**
 * Rest Parameters
*/
function sum(...theArgs) {
    return theArgs.reduce(function(previous, current) {
        return previous + current;
    });
}

console.log(sum(1, 2, 3));

function f(a) {
    let args = Array.prototype.slice.call(arguments, f.length);
    console.log(args);
}

console.log(f(1, 2, 3));

function f(a, ...args) {
    console.log(args);
}

f(1, 2, 3);
```

### 分割代入

```javascript
let a, b, rest;
[a, b] = [10, 20];
console.log(a);
console.log(b);

[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(a);
console.log(b);
console.log(rest);

const { b, a, ...rest } = { a: 10, b: 20, c: 30, d: 40 };
console.log(b);
console.log(a);
console.log(rest);

const { b: bb, a: aa, ...rest } = { a: 10, b: 20, c: 30, d: 40 };
console.log(bb);
console.log(aa);
console.log(rest);

function drawES2015Chart({ size = 'big', coords = { x: 0, y: 0 }, radius = 25 } = {}) 
{
    console.log(size, coords, radius);
    // do some chart drawing
}

drawES2015Chart({
    coords: { x: 18, y: 30 },
    radius: 30
});

drawES2015Chart();
```

### テンプレートリテラル

```javascript
/**
 * "" or ''
 * 
*/

function b(strings, ...values) {
    console.log(strings);
    console.log(values);
    return strings.reduce(function(accu, str, i) {
        let val = values[i] ? `<b>${values[i]}</b>` : "";
        return `${accu}${str}${val}`;
    }, '');
}

const str1 = "Bob";
const str2 = "Tom";
const result = b`${str1} and ${str2}`;
console.log(result);
```

### ループ1

```javascript
const data = [1, 4, 2, 5, 3];
const fruits = { banana: 'バナナ', apple: 'りんご', orange: 'オレンジ' };

Object.prototype.addInitialFn = function() {};

/**
 * Array with for
*/

for(let i = 0; i < data.length; i++) {
    console.log(i, data[i]);
}

/**
 * Object with for and Object.keys
*/

let keyFruits = Object.keys(fruits);
for(let i = 0; i < keyFruits.length; i++) {
    console.log(i, fruits[keyFruits[i]]);
}

/**
 * Array for and for...in
*/

for(let i in data) {
    console.log(i, data[i]);
}

/**
 * Object for and for...in
*/

let keyFruits = Object.keys(fruits);
for(let i in fruits) {
    if(fruits.hasOwnProperty(i)) {
        console.log(i, fruits[i]);
    }
}

/**
 * Array for and for...of
*/

for(let i of data) {
    console.log(i);
}

/**
 * Object for and for...of
*/

let keyFruits = Object.keys(fruits);
// let valueFruits = Object.values(fruits);

for(let i of keyFruits) {
    console.log(i, fruits[i]);
}

let entryFruits = Object.entries(fruits);

for(let [k, v] of entryFruits) {
    console.log(k, v);
}
```

### ループ2

```javascript
const data = [1, 4, 2, 5, 3];
const fruits = { banana: 'バナナ', apple: 'りんご', orange: 'オレンジ' };

/**
 * Array with forEach
*/

data.forEach(function(value, index, array) {
    console.log(value, index, array);
});

/**
 * Array with map
*/

const newData = data.map(function(value, index, array) {
    return value * 2;
});

console.log(data);
console.log(newData);

/**
 * Object with map
*/

const newData = Object.keys(fruits).map(function(value, index, array) {
    return 'New' + value;
});

console.log(data);
console.log(newData);

/**
 * Array with filter
*/

const newData = data.filter(function(value, index, array) {
    return value !== 1;
});

console.log(data);
console.log(newData);

/**
 * Array with reduce
*/

const newData = data.reduce(function(acc, cur) {
    console.log(acc, cur)
    return acc + cur;
});

console.log(data);
console.log(newData);

/**
 * Array with sort
*/

const newData = data.sort(function(a, b) {
    return b - a;
});

console.log(data);
console.log(newData);
```

### コールバック関数

```javascript
// // サーバー取得
const res = getDataFromServer();

// // 取得したデータを加工
res.doSomething();

// // 全く関係ないほかの処理
doSomethingElse();

function wait(callback, num) {
    setTimeout(function() {
        console.log(num);
        callback(num);
    }, 1000);
}

wait(function(num) {
    num++;
    wait(function(num) {
        num++;
        wait(function(num) {
            num++;

        }, num)
    }, num)
}, 0)
```

### Promise

```javascript
function wait(num) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log(num);
            if(num === 2) {
                reject(num);
            } else {
                resolve(num);
            }
        }, num);
    });
}

Promise.all([wait(1000), wait(1500), wait(2000)]).then(function(nums) {
    console.log(nums);
});

wait(0).then(function(num) {
    num++;
    return wait(num);
}).then(function(num) {
    num++;
    return wait(num);
}).then(function(num) {
    num++;
    return wait(num);
}).then(function(num) {
    num++;
    return wait(num);
}).catch(function(num) {
    num++;
    console.error(num, 'error');
});
```

### Async/Await

```javascript
async function sample() {
    const num = await asyncFn();
    num++;
    return num;
}

asyncFn(0).then(function(num) {
    num++;
    return num;
})

function wait(num) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log(num);
            if(num === 2) {
                reject(num);
            } else {
                resolve(num);
            }
        }, 1000);
    });
}

async function init() {
    let num = 0;
    try {
        num = await wait(0);
        num++;
        num = await wait(num);
        num++;
        num = await wait(num);
        num++;
    } catch(e) {
        throw new Error('Error is occured', e);
    }

    return num;
}

init();
```

### Object

```javascript
let obj = {};

console.log(obj);

let array = new Array(1, 2, 3);

console.log(typeof array, array);

obj.name = 'Tom';

console.log(obj);

obj.arry = ['1', 1];

console.log(obj);

obj.obj = { name: 'John' };

console.log(obj);

console.log(obj.name);

console.log(obj['name']);
```

### コンストラクター関数

```javascript
let person = {
    first: 'First',
    last: 'Last'
}

function factoryPerson(first, last) {
    let person = {first, last};
    return person;
}

let me0 = factoryPerson('First', 'Last');
let me1 = factoryPerson('First', 'Last');
let me2 = factoryPerson('First', 'Last');
let me3 = factoryPerson('First', 'Last');

function Person(first, last) {
    this.first = first;
    this.last = last;
}

let me = new Person('First', 'Last');
```

### コンストラクター関数とプロトタイプ

```javascript
function Person(first, last) {
    this.first = first;
    this.last = last;
    // this.introduce = function() {
    //     console.log(`My name is ${first} ${last}`);
    // }
}

Person.prototype.introduce = function() {
    console.log(`My name is ${this.first} ${this.last}`);
}

let me0 = new Person('First', 'Last');
let me1 = new Person('Me1', 'Desu');

// me0.__proto__.introduce = function() {
//     console.log("I don't want to introduce myself.")
// }

me0.introduce();
me1.introduce();
```

### プロトタイプチェーン

![Prototype Chain drawio](https://user-images.githubusercontent.com/59013932/163120565-fdc5bae4-fb78-424c-80c6-6f5695218278.png)


```javascript
function Person(first, last) {
    this.first = first;
    this.last = last;
}

Person.prototype.introduce = function() {
    console.log(`My name is ${this.first} ${this.last}`);
}

let person1 = new Person('First', 'Last');
let person2 = new Person('Me1', 'Desu');

person1.introduce();
console.log(person1);
console.log(person1.__proto__.constructor);
```

### プロトタイプ継承

```javascript
function Person(first, last) {
    this.first = first;
    this.last = last;
}

function Japanese(first, last) {
    Person.call(this, first, last);
    this.lang = 'ja';
}

Object.setPrototypeOf(Japanese.prototype, Person.prototype);

Person.prototype.introduce = function() {
    console.log(`My name is ${this.first} ${this.last}`);
}

Japanese.prototype.sayJapanese = function() {
    console.log(`こんにちは ${this.first} ${this.last}`);
}

let me = new Japanese('First', 'Last');
me.introduce();
me.sayJapanese();
console.log(me);
```

### クラス

```javascript
class Person {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }

    introduce() {
        console.log(`My name is ${this.first} ${this.last}`);
    }
}

class Japanese extends Person {
    constructor(first, last) {
        super(first, last);
        this.lang = 'ja';
        this._age = 0;
    }

    introduce() {
        console.log(`こんにちは ${this.first} ${this.last}`);
    }

    static sayHello(value) {
        console.log(`こんにちは ${value}`);
    }

    set setAge(value) {
        this._age = value;
    }

    get getAge() {
        return this._age;
    }
}

let me = new Japanese('First', 'Last');
me.introduce();
Japanese.sayHello('First');

me.setAge = 10;
console.log(me.getAge);
```

### メイティブメソッド

```javascript
let hello = 'hello world';
console.log(hello.length); // propety: 11
console.log(hello.toLocaleLowerCase()); // method: HELLO WOERLD
console.log(hello.substring(0, 2)); // method: he
console.log(hello.slice(0, 5)); // method: hello
console.log(hello.split(' ')); // method: ["hello", "world"]
```

### 配列

```javascript
const arry = new Array(1, 2, 3, 4, 5, 6, 'moji', false);
arry[5] = 8;

arry.push('new item');
arry.unshift('new item2');
arry.shift('new item2');

const val = arry.pop();
const val2 = arry.shift();

console.log(arry.length);
console.log(arry);
console.log(val);
console.log(val2);
```

### オブジェクト

```javascript
const person = {
    name: ['My', 'Name'],
    age: 23,
    gender: 'male',
    interests: {
        sports: 'soccer',
        music: 'piano'
    },
    getFullName: function() {
        console.log(this.name[0] + this.name[1]);
    }
};

person.age = 42;

console.log(person);
console.log(person.name);
console.log(person.name[0]);
console.log(person.interests.sports);

const ageKey = 'age';
console.log(person[ageKey]);

person.getFullName();
```

### for

```javascript
const arry = [1, 2, 3, 4, 5, 6];

for(let i = 0; i < arry.length; i++) {
    console.log(arry[i]);
}
```

### for...in, for..of

```javascript
const arry = [1, 2, 3, 4, 5, 6];

for(let i in arry) {
    console.log(i, arry[i]);
}

for(let v of arry) {
    console.log(v);
}
```

```javascript
const todos = [
    {
        id: 1,
        title: 'Go to school',
        completed: true
    },
    {
        id: 2,
        title: 'Go to museum',
        completed: true
    },
    {
        id: 3,
        title: 'Go shopping',
        completed: false
    }
];

for(let i = 0; i < todos.length; i++) {

    let todo = todos[i];

    if(todo.completed === true) {
        console.log(i, todo.title);
    }
}

for(let i in todos) {

    let todo = todos[i];

    if(todo.completed === true) {
        console.log(i, todo.title);
    }
}

for(let todo of todos) {

    if(todo.completed === true) {
        console.log(todo.title);

    }
}
```

### if

```javascript
const num = Number(false);
console.log(num); // 0;

if((0 == '0') || (0 === '0')) {
    console.log('this is true');
} else if(true) {
    console.log('this is in else if block');
} else {
    console.log('this is false')
}
```

### アロー関数

```javascript
function hello(personName) {
    console.log(`hello ${personName}`);
}

const hello = function(personName) {
    console.log(`hello ${personName}`);
}

const hello = (personName, age) => 
    `hello ${personName} ${age}`;

console.log(hello('Tom', 18));

const arry = [1, 2, 3, 4, 5, 6];

arry.forEach(function(value) {
    console.log(value);
})

arry.forEach( value => console.log(value));
```

### コールバック関数

```javascript
function hello(callback, lastName) {
    console.log(`hello ${callback(lastName)}`)
}

function getName() {
    return 'Tom';
}

const getFirstName = function() {
    return 'Tom';
}

hello(getFirstName);

hello(function(name) {
    return 'Tom' + name;
}, 'Son');

hello(() => 'Tom');

function doSomething(a, b, callback) {
    const resulut = callback(a, b);
    console.log(resulut);
}

function multiply(c, d) {
    return c * d;
}

function plus(e, f) {
    return e + f;
}

doSomething(2, 2, multiply); // 4
doSomething(1, 2, plus); // 3
```

```javascript
function greeting(firstName, LastName, callback) {
    const result = callback(firstName, LastName);
    console.log(result);
}

function sayEnglish(firstName, lastName) {
    return `Hello ${firstName} ${lastName}`;
}

function sayJapanese(firstName, lastName) {
    return `こんにちは ${lastName} ${firstName}さん`;
}

greeting('Micheal', 'Jackson', sayEnglish);
greeting('信玄', '武田', sayJapanese);
```

### コールバック関数, forEach

```javascript
const arry = [1, 2, 3, 4, 5];

function forEach(ary, callback) {
    for(let i = 0; i < ary.length; i++) {
        callback(ary[i]);
    }
}

function log(val) {
    console.log(val);
}

function double(val) {
    val = val * 2;
    log(val);
}

forEach(arry, log);
forEach(arry, double);
```

### forEach

```javascript
const arry = [1, 2, 3, 4, 5];

arry.forEach(v => 
    console.log(v));
```

### reduce

```javascript
const arry = [1, 2, 3, 4, 5];

arry.reduce(function(accu, curr) {
    console.log(accu, curr);
    return accu + curr;
}, 10);

const str = 'animation';
const strArray = str.split('');

console.log(strArray);

const result = strArray.reduce((accu, curr) => {
    return `${accu}<${curr}>`;
}, '');

console.log(result);
```

```javascript
onst str = 'animation';

const strArray = str.split('');

function tag(accu, curr) {
    console.log(accu);
    return `${accu}<${curr}>`;
}


function reduce(arry, callback, defaultValue) {
    let accu = defaultValue;

    for(let i = 0; i < arry.length; i++) {
        let curr = arry[i];
        accu = callback(accu, curr);
    }

    return accu;
}

const result = reduce(strArray, tag, '');
console.log(result);
```

### new演算子

```javascript
function F(a, b) {
    this.a = a;
    this.b = b;
    // return {};
}

F.prototype.c = function() {}

function newOpe(C, ...args) {
    const _this = Object.create(C.prototype);
    const result = C.apply(_this, args);
    if(typeof result === "object" && result !== null) {
        return result;
    }

    return _this;
}

const instance = newOpe(F, 1, 2);
console.log(instance);
```

### instanceof

```javascript
function fn(arg) {
    if(arg instanceof Array) {
        arg.push('value');
    } else {
        arg['key'] = 'value';
    }
    console.log(arg)
}

fn([]);
fn({});
```

### prototype chain

```javascript
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.hello = function() {
        console.log(`OwnProperty: hello ${this.name}`);
    }
}

Person.prototype.hello = function() {
    console.log(`Person: hello ${this.name}`);
}

Object.prototype.hello = function() {
    console.log(`Object: hello ${this.name}`);
}

const bob = new Person('Bob', 18);
bob.hello();

const result = bob.hasOwnProperty('name');
const result2 = bob.hasOwnProperty('hello');
console.log(result);
console.log(result2);
```

### hasOwnProperty and in

```javascript
function Person(name, age) {
    this.name = name;
    this.age = age;
    // this.hello = function() {
    //     console.log(`OwnProperty: hello ${this.name}`);
    // }
}

Object.prototype.hello = function() {
    console.log(`Object: hello ${this.name}`);
}

const bob = new Person('Bob', 18);
const result = bob.hasOwnProperty('hello');

console.log(result);
console.log('name' in bob);
console.log('hello' in bob);
console.log('bye' in bob);
```

### prototype継承

```javascript
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.hello = function() {
    console.log(`hello ${this.name}`);
}

function Japanese(name, age, gender) {
    Person.call(this, name, age);
    this.gender = gender;
}

Japanese.prototype = Object.create(Person.prototype);

Japanese.prototype.hello = function() {
    console.log(`こんにちは${this.name}`);
}

Japanese.prototype.bye = function() {
    console.log(`さようなら${this.name}`);
}

const taro = new Japanese('Taro', 23, 'Male');
console.log(taro);

taro.hello();
```

### class

```javascript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age
    }

    hello() {
        console.log(`hello ${this.name} ${this.age}`);
    }
}

const bob = new Person('Bob', 23);
console.log(bob);
```

### class継承

```javascript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age
    }

    hello() {
        console.log(`hello ${this.name} ${this.age}`);
    }
}

class Japanese extends Person {
    constructor(name, age, gender) {
        super(name, age);
        this.gender = gender;
    }

    hello() {
        console.log(`こんにちは${this.name}${this.age}`)
    }

    bye() {
        console.log(`さようなら${this.name}${this.age}`)
    }
}


const bob = new Person('Bob', 23);
console.log(bob);

const taro = new Person('太郎', 23);
console.log(taro);
taro.hello();
```

### super

```javascript
const american = {
    hello() {
        console.log(`hello ${this.name}`);
    }
}

const bob = {
    name: 'Bob',
    hello() {
        super.hello();
    }
    // hello() {
    //     console.log(`hello ${this.name}`);
    // }
}

Object.setPrototypeOf(bob, american);

bob.hello();
```

### Wrapper Object

```javascript
const a = new String('hello');
console.log(a.toUpperCase());

const b = new Number(100);
console.log(b.toExponential());
```

### Symbol

```javascript
const s = Symbol('hello');
const s2 = Symbol('hello');

console.log(s);
console.log(s2);
console.log(s === s2);
console.log(typeof s);

const str = new String('Tom');
console.log(str);

String.prototype[s] = function() {
    return 'hello' + this;
}

const tom = 'Tom';
console.log(tom[s]());
```

### Property and Descriptor

```javascript
// const obj = {
//     prop: 0
// };

const obj = {};

Object.defineProperty(obj, 'prop', { 
    configurable: true,
    value: 0,
    writable: true
});

// obj.prop = 1;

delete obj.prop;

const descriptor = Object.getOwnPropertyDescriptor(obj, 'prop');

console.log(descriptor);
```

### getter/setter

```javascript
function Person1(name, age) {
    this._name = name;
    this._age = age;
}

Object.defineProperty(Person1.prototype, 'name', {
    get: function() {
        const result = `${this._name} ${this._age}`;
        return result;
    },
    set: function(val1, val2) {
        this._name = val1;
        this._age = val2;
    }
});

const p1 = new Person1('Bob', 23);
console.log(p1.name);
```

```javascript
class Person2 {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }
    get name() {
        const result = this._name;
        return result;
    }
    set name(val) {
        this._name = val;
    }
}

const p2 = new Person2('Bob', 23);
console.log(p2.name);
```

## DOM

- HTMLをJavaScriptから参照・更新するためのインターフェイス
  - HTMLをオブジェクト形式で表したもの

## 仮想DOM

- VueやReactで採用されているDOMとは別でHTMLの状態を管理する仕組み
