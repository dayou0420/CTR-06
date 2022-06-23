# 独習JavaScript

## 1. イントロダクション
1. ECMAScriptとは
- プログラミングの仕様
  - `ECMAScriptは、JavaScriptのコアの仕様をまとめた言語仕様。`
2. ECMAScriptとバージョン
- ES6
  - `ES6(ES2015)`
3. JavaScript実行環境
- Webブラウザ
- Node.js
  - `ブラウザ環境、Node.js環境`
4. 実行環境ごとの違い
- Webブラウザ
  - Web API
- Node.js
  - CommonJS
    - `ブラウザ環境:Web API、Node.js環境:CommonJS`
5. 実行環境の違いに伴う留意点
- JavaScriptの実行環境が変わると、使える機能も変わる
  - `それぞれの環境でのみ準備されているAPI(たとえば、Web APIやCommonJS)の機能を使おうとすると
エラーになること。`
6. ツールの役割
- VScode
  - コードの記述
- LiveServer
  - 簡易的なサーバーで、HTML、CSS、JavaScriptの実行結果の確認
- Chrome
  - エラーの検証や調査
    - `Visual Studio Codeは、コードの記述や編集を行います。Live Serverは、開発を行うPC上で仮想のサー
バーを起動して、ブラウザからのリクエストを受け取れる状態にします。Chromeは、記述したコードの画
面上での確認の他、開発ツールを使ったエラーの原因調査やコードの実行状況の確認ができます。`

## 2. JavaScript開発の基礎

1. コード記述ルール
<br>

JavaScriptは`大文字小文字`が区別されるために、letなどのキーワードを使用する際や変数名を付ける際には注意が必要です。また、プログラム中のアルファベットや数値は基本的に`半角文字`を使用して記述します。文と文の区切りには`セミコロン`を挿入するようにしましょう。また、コメントを挿入する際にはダブルバックスラッシュ(//)を使用するか、コメントとしたい区間を`/**/`で囲みます。

2. コンソールログ確認
<br>

```javascript
  let val1 = 789;
  let val2 = 3;
  let val3 = 783 % 3;
  console.log( val1 / val2 ); // 263
```

3. エラー確認
<br>
```html
<script>
    let val1 = 789;
    let val2 = 3;
    let val3 = 783 % 3;
    console.log( val1 / Val3 );
</script>
```

- Val3の`V`が大文字のため

4. エラーに原因
- ブレイクポイントで止まった行はまだ実行されていない状況のため

5. 開発ツールでの確認
- 0

## 3. 変数とデータ型

### 練習問題 3.1
1. letとconstの違いにについて答えてください。
- letは再代入可能で、constは再代入不可
  - `letは値の再代入が可能ですが、constは値の再代入を行うことはできません。`
2. 次のコードを実行すると、エラーが発生しました。エラーは何行目で発生しますか。また、その原因はなんでしょうか。
<br>

```javascript
const fruit = "apple";
fruit = "banana";
console.log( fruit );
```

- 2行目。コンスタンス変数fruitに文字列bananaを再代入しようとしていたため
  - `エラーは2行目(fruit = "banana";)で発生します。constを使っているので、値の再代入ができない
ため、エラーが発生します。`

### 練習問題 3.2

次のコードを、キャメルケースを使って書き換えてください。
<br>

```javascript
let product_price = 1000;
let cart_item = "りんご";
let favorite_sport_category = "球技";
```

```javascript
let productPrice = 1000;
let cartItem = "りんご";
let favoriteSportCategory = "球技";
```

### 練習問題 3.3

「This is Tom's house.」という文字列を、エスケープを使う場合、使わない場合の2パターンを記述して、コンソールに出力してください。

```javascript
console.log('This is Toms\'s house.');
```

```javascript
console.log("This is Toms's house.");
```

```javascript
console.log(`This is Toms's house.`);
```

### 練習問題 3.4

次の計算結果をそえぞれコンソールに出力してみましょう。
1. 5 + 6 - 1
2. 1.の結果に2を掛け合わせた値
3. 2.の結果の3剰余
4. 3.の結果の3乗

<br>

1. 5 + 6 - 1
```javascript
let sum = 5 + 6 - 1;
console.log( sum ); // 10
```
2. 1.の結果に2を掛け合わせた値
```javascript
sum = sum * 2;
console.log( sum ); // 20
```
3. 2.の結果の3剰余
```javascript
sum = sum % 3;
console.log( sum ); // 2
```
4. 3.の結果の3乗
```javascript
sum = sum ** 3;
console.log( sum ); // 8
```

### 練習問題 3.5
1. 文字列リテラルが表す記号を3つ答えてください。
- "", '', ``
  - `シングルクォート(')、ダブルクォート(")、バッククォート`
2. 0xから始まる数値は何進数を表すか答えてください。
- 16進数
3. console.log( .123 )は記述として正しいかどうか答えてください。
- 正しい
  - `正しい`
4. console.log( le3 + 10h )は記述として正しいかどうか答えてください。
- 正しい
  - `正しくない`
    - `数値とBigIntは、同じ文で使えません。`
5. Boolean型が取り得る値を2つ答えてください
- true, false
  - `true、false`
6. nullとundefinedの意味をそれぞれ答えてください
- null
  - 値が空
- undefined
  - 値が未定義
    - `nullは、参照を保持していないことを表します。
undefinedは、変数が未定義であることを表します。`

### 練習問題 3.6

1. プログラムでは次のように使用可能なオブジェクトを、オブジェクトリテラルを使用して作成してください

```javascript
let obj = { /* ここにプロパティを追加 */ };

console.log( obj.prop ); // true

console.log(  obj.subObj.val ); // 100

obj.greeting(); // "こんにちは"
```

```javascript
let obj = {
    prop: true,
    subObj: {
        val: 100
    }
    greeting: function() {
        console.log("こんにちは");
    }
};

console.log( obj.prop ); // true

console.log( obj.subObj.val ); // 100

obj.greeting(); // "こんにちは"
```

2. 1.のオブジェクトの使用箇所をすべてブラケット記法に書き換えてください

```javascript
let obj = {
    prop: true,
    subObj: {
        val: 100
    }
    greeting: function() {
        console.log("こんにちは");
    }
};

console.log( obj['prop'] ); // true

console.log( obj['subObj']['val'] ); // 100

obj.greeting(); // "こんにちは"
```

3. 2.オブジェクトのsubObjオブジェクトに、プロパティval2とその値1000を追加してください

```javascript
let obj = {
    prop: true,
    subObj: {
        val: 100,
        val2: 1000
    }
    greeting: function() {
        console.log("こんにちは");
    }
};

console.log( obj['prop'] ); // true

console.log( obj['subObj']['val'] ); // 100

obj[greeting()]; // "こんにちは"
```

```javascript
obj.subObj.val2 = 1000;
```

### 練習問題 3.7

次の値がそれぞれ真偽値型に変換したときにfalseになることを、Boolean関数を使って確認してください。なお、真偽型値に変換した時にfalseになる値は、`falsy`な値を呼びます。

```javascript
0
""
null
undefined
```

```javascript
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(undefined));
```

### 練習問題 3.8

次の出力結果が何になるかを確認してください

```javascript
console.log( 1 * true ); // 1
console.log( false + true ); // 1
console.log( Boolean( 1 ) ); // false
console.log( Boolean( 1 ) ); // true
console.log( Boolean( -1 ) );  // true
```

1. 変数
<br>
変数とは、値が格納されているメモリの`アドレス`が保持しています。変数に新しい値が設定された場合には、変数が保持している`アドレス`が変更されることになります。あとで変更される可能性がある変数は、`let`というキーワードを使って宣言し、変更されない値に関しては`const`というキーワードを使って、定数として定義します。また、ES5までに使用されていた`var`という変数変数宣言のキーワードは使わないようにしましょう。
<br>

2. 文字列の操作
次の変数を使って、期待される文字列をコンソールに出力するプログラムを記述してください(加算演算子(+)を使った場合、テンプレートリテラルを使った場合の2つのプログラムを作成してください)。

```javascript
const TAX_RATE = 1.1;
let productPrice = 1000;

const result = productPrice * TAX_RATE;
```

```javascript
const TAX_RATE = 1.1;
let productPrice = 1000;

const result = productPrice * TAX_RATE;

console.log(`商品の金額は${productPrice}ですので、税込金額は${result}です。`);
```


```javascript
const TAX_RATE = 1.1;
let productPrice = 1000;

const result = productPrice * TAX_RATE;

console.log('商品の金額は' + productPrice + 'ですので、税込金額は' + result + 'です。');
```

3. 数値計算
- 12の2乗を5で割った時の余りを計算してください。

```javascript
const val = 12**2;
const result = val % 5;
console.log(result);
```

```javascript
4 ( 12 ** 2 % 5 )
```

- BigInt型の値を使って👆に値を計算してください。

```javascript
const val = 12n**2n;
const result = val % 5n;
console.log(result);
```

```javascript
4n ( 12n ** 2n % 5n )
```

- NaNは、どのような時に返される値でしょうか。具体例を1つ挙げてください

```javascript
// console.log(Number(""));
```

```javascript
console.log( "string" - 1 );
```

4. nullとUndefined
<br>
nullは、変数が`空`であることを示すキーワードで、基本的に`開発者`が明示的に設定を行います。一方、undefinedは主にJavaScriptエンジンによって自動的に設定される値で、値が`未定義`であることを示しています。
<br>

5. オブジェクトの記法
次のオブジェクトのnumプロパティの値に1を足して、その値をwindow.alert関数を使って画面に出力してみましょう。ドット記法、ブラケット記法を使って実装してみてください。

```javascript
const counter = { num: 1 };
counter.num = ++counter.num;
alert(counter.num);
```

```javascript
const counter = { num: 1 };
counter['num'] = ++counter['num'];
alert(counter['num']);
```

```javascript
// ドット記法の場合
const counter = { num: 1 };
counter.num = counter.num + 1;
window.alert( counter.num );

// ブラケット記法の場合
const counter = { num: 1 };
counter["num"] = counter["num"] + 1;
window.alert( counter["num"] );
```

6. 型変換
次の実行結果を答えてください。

```javascript
console.log( typeof null );
console.log( 100 + true );
console.log( 1 + Number("hello") );
console.log( 1 + Boolean("hello") );
```

```javascript
console.log( typeof null ); // "object"
console.log( 100 + true ); // 101
console.log( 1 + Number("hello") ); // NaN
console.log( 1 + Boolean("hello") ); // 2
```

## 4. 演算子

### 練習問題 4.1

1. 次のコードを実行した結果、変数a、変数bにはそれぞれどのような値は格納されるか答えてください。

```javascript
let a = 0;
let b = 0;
a = 1 + ( b = 10 );

console.log(a); // 11
console.log(b); // 10
```

### 練習問題 4.2

1. 次の実行文1. ~ 5.について、コンソールに表示される値が何になるか、演算子の優先順位と統合性を考慮して求めてください。

```javascript
console.log( 2 * 3 ** 2 ); // 36

console.log( 10 / 2 + ( 3 - 2 ) ); // 6

console.log( 10 / ( 2 + 3 ) - 2 ); // 0

let a = 1;
console.log( a++ ); // 1

let a = 10, b = 1;
console.log( --a * ++b ); // 18
```

```javascript
console.log( 2 * 3 ** 2 ); // 18
```

### 練習問題 4.3

1. 次の実行文1. ~ 4.の実行結果を答えてください。

```javascript
10 < 2 * 6 - 2 // true

3 > 8 % 3 // false

( 9 > 3 ) * 3 // 3
```

```javascript
10 < 2 * 6 - 2 // true

3 > 8 % 3 // true
```

### 練習問題 4.4

1. 次の実行文1. ~ 5.の実行結果を答えてください。

```javascript
let a = 3;
a *= 10;
console.log( a ); // 30

a /= 2;
console.log( a ); // 15

a -= 10;
console.log( a ); // 5

a %= 3;
console.log( a ); // 1

a **= 3;
console.log( a ); // 1
```

```javascript
a %= 3;
console.log( a ); // 2

a **= 3;
console.log( a ); // 8
```

### 練習問題 4.5

1. 次の実行文1. ~ 4.の実行結果を答えてください。

```javascript
let person = { name: 'Bob', age: "32", male: true };
delete person.name;
console.log( person ); // { age: "32", male: true };
console.log( typeof person ); // "object"
console.log( +person.age ); // TypeError
console.log( !person.male ); // false
```

```javascript
console.log( +person.age ); // 32
```

1. 演算子とオペランド
<br>
式3 + 5において、記号は`加算`演算子と呼びます。また、一般的に演算子によって処理されり3や5のような値は、`オペランド`と呼びます。`加算`演算子は、`オペランド`が2つ以上であるため、二項演算子に分類されます。一方で、論理否定演算子の(!)のような`オペランド`が1つの演算子は`単項`演算子に分類されます。JavaScriptで3つの`オペランド`を取る演算子は、記号? :で表される演算子ただ1つであるため、この演算子のことを三項演算子と呼びます。

2. 演算子の優先順位
<br>
次のコードを実行すると、コンソールには30という数字が表示されます。まぜ、10 + 5の結果である15に4を掛けた60にならないのでしょうか。グループか演算子を使って、結果が60になるようにコードを修正してください。

```javascript
console.log( 10 + 5 * 4 ); // 30
```

```javascript
console.log( ( 10 + 5 ) * 4 ); // 60
```

3. インクリメント演算子とデクリメント演算子

```javascript
let x = y = 3;
console.log( x++ ); // 3

console.log( ++y ); // 4
```

```javascript
let x = y = 3;
x = (x + 3) + 1;
console.log( x++ ); // 3

y = y + 3 + 1;
console.log( ++y ); // 4
```

4. 厳格な等価性と抽象的な等価性
<br>
厳密な等価性による等価演算子3 === "3"の結果は`false`になりますが、抽象的な等価性による等価性3 == "3"の結果は`true`になります。厳密な等価性では、左右のオペランドの値と`型`を比較し、その両方が一致する時にtrueを返し、どちらかが一致しないときはfalseを返します。一方、抽象的な等価性では、左右のオペランドの`型`が異なるときには`型`を揃える暗黙的な変換は行われたあとに、厳格な等価性による等価演算が行われます。

5. 代入演算子
<br>1. ~ 3.のconsole.logによる出力結果がそれぞれどのようになるのかを確認してください。また、そのように出力される理由も答えてください。

```javascript
let a;
console.log(a); // unddefined
console.log(a = 10); // ReferenceError
console.log(a); // 10
```

```javascript
console.log(a = 10); // 10
```

6. 自己代入演算子
<br>
次の1. ~ 4.の式を、自己代入演算子を使って書き換えてください。

```javascript
let a = 0;
a = a + 3;
a = a * 4;
a = a / 2;
a = a % 5;
console.log("a:", a);
```

```javascript
let a = 0;
a += 3;
a *= 4;
a /= 2;
a %= 5;
console.log("a:", a); // 1
```

7. 論理演算子
<br>1. ~ 3.の結果として、コンソールに出力される値を答えてください。

```javascript
console.log( ( 0 || undefined ) && "こんにちは" ); // undefined
console.log( !( 0 || undefined ) && "こんにちは" ); // "こんにちは"
```

8. その他の演算子
<br>1. ~ 3.の結果として、コンソールに出力される値を答えてください。

```javascript
console.log( null ? "リンゴ" : "バナナ" ); // "バナナ"
console.log( null ?? "パイナップル" ); // "パイナップル"
console.log( { apple: "リンゴ"}?.fruit ?? "バナナ" ); // "リンゴ"
```

```javascript
console.log( { apple: "リンゴ"}?.fruit ?? "バナナ" ); // "バナナ"
```

## 制御構文

### 練習問題 5.1

1. 次のようなオブジェクトがあるとします。以下の2つの条件のように、オブジェクトのプロパティの値によって、コンソールに異なるメッセージを出力するif文を作成してください。

```javascript
const person = {
    name: "Bob",
    age: 28,
    gender: "male"
}
```

personのgenderプロパティが"male"かつpersonのageプロパティが25以上の時、次のメッセージをコンソールに出力する

```terminal
Bobは25歳以上の男性です。
```

それ以外のとき、次のメッセージをコンソールに出力する

```terminal
Bobは25歳以上の男性ではありません。
```

```javascript
const person = {
    name: "Bob",
    age: 28,
    gender: "male"
}

const targetAge = 25;
const targetGender = '男性';
const consoleMessageTemplate = `${person.name}は${targetAge}歳以上の${targetGender}`;

if(person.gender === 'male' && person.age >= targetAge) {
    console.log(consoleMessageTemplate + 'です。');
} else {
    console.log(consoleMessageTemplate + 'ではありません。');
}
```

### 練習問題 5.2

1. 変数に初期値を設定する、以下の2つのif文を記述してください。
- 変数valの値がfalsyの場合に、"Hello"を初期値として設定するコードを記述してください。
  - `let val = "";`
- 変数valの値がundefinedまたはnullの場合に"Hello"を初期値として設定するコードを記述してください
  - `let val = null;`

```javascript
let val = "";
let val = null;
let val;

if(val === "") {
    console.log('Hello');
}

if((val === null) || (val === undefined)) {
    console.log('Hello');
}
```

```javascript
// 解答例1 if文を使った場合
let val = "";
if( !val ) {
val = "Hello";
}
console.log( val );

// 解答例2 論理和を使った場合
let val = "";
val = val || "Hello";
```

```javascript
/// 解答例1 if文を使った場合
let val = null;
if( val === undefined || val === null ) {
val = "Hello";
}
// 解答例2 Null合体演算子を使った場合
let val = null;
val = val ?? "Hello";
```

### 練習問題 5.3

1. 次のように、変数に渡される(格納される)動物の値(animal)によって、コンソールに出力する文字が変わるとします。このような制御をswitch文を使って作成してください。

```javascript
let animal = "動物の名前";
```

- ウサギが渡されたとき

```javascript
ウサギ
```

- ウマが渡されたとき

```javascript
ウマ
ウサギ
```

- ゾウが渡されたとき

```javascript
ゾウ
ウマ
ウサギ
```

- それ以外が渡されたとき

```javascript
何かわかりません。
```

```javascript
const rabbit = 'ウサギ';
const horse = 'ウマ';
const elephant = 'ゾウ';
const others = '何かわかりません';

let animal = rabbit;

switch (animal) {
    case rabbit:
        console.log(rabbit);
        break;
    case horse:
        console.log(horse);
        break;
    case elephant:
        console.log(elephant);
        break;

    default:
        console.log(others);
        break;
}
```

```javascript
let animal = "ゾウ"; // 変数の初期値はなんでもよい

switch( animal ) {
    case "ゾウ":
        console.log( "ゾウ" );
    case "ウマ":
        console.log( "ウマ" );
    case "ウサギ":
        console.log( "ウサギ" );
        break;

    default:
        console.log( "何かわかりません。" );
}
```

### 練習問題 5.4

1. 次のコードは、何かしらの原因でエラーになります。エラーになる行をtryブロックで囲み、後続の処理が実行されるようにしてください。また、発生したエラーをコンソールに出力してください。

```javascript
let b = 10 + a;
console.log( b );
console.log( "後続の処理" );
```

```javascript
try {
    let b = 10 + a;
    console.log(b);
} catch (e) {
    console.error(`Opps, ${e}`);
} finally {
    console.log( "後続の処理" );
}
```

```javascript
try {
        let b = 10 + a; // 宣言していない変数を使用しているため、ReferenceErrorが発生!
        console.log( b );
        // 例外識別子には任意の名前を付けることができる
    } catch( e ) {
        console.error( e ); // エラーをコンソールに出力
    } finally {
        console.log( "後続の処理" );
}
// finallyブロックを設定しない場合は、ここに後続処理に記述してもよい
// console.log( "後続の処理" );
```

### 練習問題 5.5

1. 以下の2条件のように、変数greetingの値によって挙動が変わるプログラムを作成してください。
<br>
- 変数greetingのデータ型がString型の場合、次のような文字列をコンソールに出力してください。

```javascript
{ greetingの値 }、いい天気ですね。
```

- 変数greetingのデータ型がString型以外の場合、例外を投げてコンソールに「不正なデータ型です。」出というエラーを表示してください。

```javascript
let greeting = 'hello';

try {
    if(typeof greeting === 'string' ) {
        console.log(`{${greeting}}、いい天気ですね。`);
    } else {
        throw new Error('不正なデータ型です。');
    }
} catch (e) {
    console.error(`Opps! ${e}`)
}
```

```javascript
// greetingに値を設定しないと例外に飛ぶ
// greetingに "こんにちは" などの文字列を設定すると例外は発生しない
let greeting;
try {
    if( typeof greeting !== "string" ) {
        throw new Error( "不正なデータ型です。" );
    }
    console.log(`${ greeting }、いい天気ですね。`);
} catch( e ) {
    console.error( e );
}
```

### 練習問題 5.6

1. 0 ~ 6まで、2ずつカウントアップした数値をコンソールに出力する処理を、while文を使って記述してください。

```javascript
0
2
4
6
```

```javascript
{
    let i = 0;

    while(i < 7) {
        console.log(i);
        i = i + 2;
    }
}
```

```javascript
let i = 0;

while( i <= 6) {
    console.log( i );
    i += 2;
}
```

### 練習問題 5.7

1. 0 ~ 9まで、3ずつカウントアップした数値をコンソールに出力する処理を、for文を使って記述してください。

```javascript
0
3
6
9
```

```javascript
for(let i = 0; i < 10; i = i + 3) {
    console.log(i);
}
```

```javascript
for(let i = 0; i <= 9; i += 3) {
    console.log( i );
}
```

### 練習問題 5.8

1. 配列内の数値をすべて加算した値(sum)を得るプログラムを、for文を使って記述してください。

```javascript
const arry = [ 10, 20, 23, 47 ];
```

```javascript
const arry = [ 10, 20, 23, 47 ];

let sum = 0;

for(let i = 0; i < arry.length; i++) {
    let val = arry[i];
    sum += val;
}

console.log(sum);
```

### 練習問題 5.9

1. オブジェクト内のすべてのプロパティの値を加算した値を得るプログラムを作成してください。ただし、プロパティ名がskipの場合は、加算せずにスキップするようにしてください。

```javascript
const obj = {
    prop1: 10,
    prop2: 20,
    skip: 20,
    prop3: 23,
    prop4: 47
};
```

```javascript
const obj = {
    prop1: 10,
    prop2: 20,
    skip: 20,
    prop3: 23,
    prop4: 47
};

let sum = 0;

for(let key in obj) {
    if(key != 'skip') {
        let val = obj[i];
        sum += val;
    }
}

console.log(sum);
```

### 練習問題 5.10

1. 配列には、デフォルトでlengthプロパティがありますが、これが列挙対象にならないことえお確認してください

```javascript
const arry = [1, 2, 3];

const descriptor = Object.getOwnPropertyDescriptor(arry, 'length');
console.log(descriptor);
```

```javascript
const arry = [ ]; // 空の配列を定義
const propDesc = Reflect.getOwnPropertyDescriptor( arry , "length" ); // 記述子を取得
console.log( propDesc.enumerable ); // 列挙可能性を確認
```

### 練習問題 5.11

1. 配列内の整数をすべて加算した値(sum)を得るプログラムを、for...of文を使って記述してください。またこの配列には、数値以外の値も格納される可能性があるものとします。

```javascript
const arry = [ 10, "文字列", 20, true, 23, 47 ];
```

```javascript
const arry = [ 10, "文字列", 20, true, 23, 47 ];

let sum = 0;

for(let i of arry) {
    if(typeof i === 'number' ) {
        let val = i;
        sum += val;
    }
}

console.log(sum);
```

```javascript
const arry = [ 10, "文字列", 20, true, 23, 47 ];

let sum = 0; // sumに値を加算していく

for( const value of arry ) {
    if( typeof value === "number" ) {
        sum += value;
    }
}
console.log( sum );
```

### 練習問題 5.12

1. オブジェクト内のすべてのプロパティの値を加算した値(sum)を得るプログラムを、for...of文を使って作成してください。ただし、値が数値以外の場合またはプロパティ名がskipの場合は、加算せずスキップをするようにしてください。

```javascript
const obj = {
    prop1: 10,
    prop2: "文字列",
    prop3: 20,
    skip: 20,
    prop4: true,
    prop5: 23,
    prop6: 47
};
```

```javascript
const obj = {
    prop1: 10,
    prop2: "文字列",
    prop3: 20,
    skip: 20,
    prop4: true,
    prop5: 23,
    prop6: 47
};

const objEntries = Object.entries(obj);

let sum = 0

for(const [key, value] of objEntries) {
    if((typeof value === 'number') && (key !== 'skip')) {
        sum += value;
    }
}

console.log(sum);
```

```javascript
const obj = {
    prop1: 10,
    prop2: "文字列",
    prop3: 20,
    skip: 20,
    prop4: true,
    prop5: 23,
    prop6: 47,
};

let sum = 0; // sumに値を加算していく
const entries = Object.entries( obj );

for( const entry of entries ) {

    const key = entry[ 0 ];
    const value = entry[ 1 ];

    if( typeof value === "number" && key !== "skip" ) {
        sum += value;
    }
}

console.log( sum );
```

### 練習問題 5.13

1. 以下配列をfor...of文を使ってループし、配列の値をコンソールに1つずつ出力してください。ただし、"break"という文字列が配列から取得されたタイミングで、ループを抜けるようにしてください。

```javascript
const breakTestArry = ["ぬけない", "not break", "break", "この前で抜ける"];
```

```javascript
const breakTestArry = ["ぬけない", "not break", "break", "この前で抜ける"];

for(elem of breakTestArry) {
    if(elem === 'break') {
        console.log(elem);
        break;
    }
    console.log(elem);
}
```

```javascript
const breakTestArry = [ "ぬけない", "not break", "break", "この前で抜ける" ];

for( const value of breakTestArry ) {

    console.log( value );

    if( value === "break" ) {
        break;
    }
}
```

### 練習問題 5.14

1. for文とcontinue文を使って、次のように3回目のループのみ出力しないプログラムを作成してください。

```javascript
1回目のループです。
2回目のループです。
4回目のループです。
```

```javascript
const arry = [
    "1回目のループです。", 
    "2回目のループです。", 
    "3回目のループです。", 
    "4回目のループです。"
];

for(elem of arry) {
    if(elem === "3回目のループです。") {
        continue;
    }
    console.log(elem);
}
```

```javascript
for ( let i = 1; i < 5; i++ ) { // 1からループを始める
    if ( i === 3 ) { // 3回目
        continue;
    }
    console.log( `${ i }回目のループです。` );
}
```

1. for文
<br>次のプログラムをfor文を使って書き直してください。

```javascript
let i = 5;
while(i < 10) {
    console.log(i);
    i++
}
```

```javascript
for(let i = 5; i < 10; i++) {
    console.log(i);
}
```

```javascript
for ( let i = 5; i < 10; i++ ) {
    console.log( i );
}
```

2. if...elseチェーン

for文を使って、1から100までの数をコンソールに出力するプログラムを作成してください。

```javascript
let i = 0

for(i = 1; i <= 100; i++) {
    if((i % 3 === 0) && (i % 5 === 0)) {
        console.log('FizzBuzz');
        continue;
    } else if((i % 3 === 0)) {
        console.log('Fizz');
        continue;
    } else if((i % 5 === 0)) {
        console.log('Buzz');
        continue;
    }
    console.log(i);
}
```

```javascript
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("Fizz Buzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}
```

3. for...in文と列挙可能性
<br>for...in文は、オブジェクトから1つずつプロパティを取り出して繰り返し処理を行うためのものですが、すべてのプロパティが取り出されるわけではありません。for...inで取り出せるプロパティのことを`列挙可能`プロパティと呼びます。例えば、オブジェクトobjのpropが`列挙可能`であるかどうかは、プロパティpropの設定を保持している`デスクリプタ`と呼ばれるオブジェクトを次のように取得することで確認できます。取得したオブジェクト(propDesc)の`enumerable`というプロパティの値がtrueかどうかが決まります

```javascript
const propDesc = Reflect.getOwnProperty(obj, "prop");
console.log(propDesc);
```

4. for...of文

```javascript
const capitals = {
    日本: "東京",
    アメリカ: "ワシントン",
    イギリス: "ロンドン"
};
```

for...of文と分割代入、Object.entriesを使って、オブジェクトのプロパティの値をすべて、次のフォーマットでコンソールに出力してください。

```
日本の首都は東京です。
```

```javascript
const capitals = {
    日本: "東京",
    アメリカ: "ワシントン",
    イギリス: "ロンドン"
};

const capitalEnties = Object.entries(capitals);

let jp = {};

for([key, value] of capitalEnties) {
    if(key === '日本') {
       jp.prop = value;
    }
}

const { prop: tokyo } = jp;
console.log(`日本の首都は${tokyo}です`);
```

```javascript
const capitals = {
    日本: "東京",
    アメリカ: "ワシントン",
    イギリス: "ロンドン"
};

for (const [ country, capital ] of Object.entries( capitals )) {
    console.log( `${country}の首都は${capital}です。` );
}
```

5. 例外処理
<br>次のプログラムのconsole.logによる出力結果がどのようになるかを確認してください。そしてそのように出力される理由を答えてください。

```javascript
try {
    console.log("tryブロックを処理を開始します。");
    throw "例外を投げました。";
    console.log("tryブロックの処理を終了します。");
} catch(e) {
    console.error("catchブロックの処理を開始します。");
    console.error("catchした値" + e);
    console.error("catchブロックの処理を終了します。");
} finally {
    console.log("tryブロックの処理を実行します。");
}
console.log("try/catch/finally文の後続のコードを実行します。");
```

## 関数

### 練習問題 6.1

1. 次の引数で数値を受け取り、その積を計算して返す関数multiplyを定義してください。関数を定義したら、次のコードを実行して結果も確認してください。

```javascript
console.log(multiply(7, 9));
console.log(multiply(-11, 9));
```

### 練習問題 6.2

1. 引数なしの関数noArgumentFuncを関数宣言で定義して、実行してください。また、実行したときに、コンソールに「引数がない関数です。」と出力されるようにしてください。

```javascript
(function noArgumentFunc() {
    console.log('引数がないです');
})();
```

```javascript
function noArgumentFunc() {
    console.log( "引数がない関数です。" );
}
noArgumentFunc();
```

2. 2つの引数を掛け算した値をコンソールに出力する関数multiplyを定義して、実行してください。また、関数multiplyの実行結果から、関数multiplyに対して3つ以上引数を渡したときに、3つ目以降の実引数が無視されることも確認してください。

```javascript
multiply(2, 3); // 6
multiply(15, 2, 10); // 30
```

```javascript
function multiply(val1, val2) {
    const result = val1 * val2;
    console.log(result);
}
```

3. 次の関数を引数なし、実引数を1つ、実引数を2つ実行して、コンソールに表示されるログを確認し、実引数を設定しなかったときに、undefinedが渡されることを確認してください。

```javascript
function twoArgumentFunc(arg1, arg2) {
    console.log("arg1:", arg1);
    console.log("arg2:", arg2);
}
```

### 練習問題 6.3

1. 関数実行結果(戻り値)として"Hello World"を返す関数helloを作成、実行して、その結果をコンソールに出力してください。

```javascript
function hello() {
    console.log('Hello World');
}
```

```javascript
function hello() {
    return "Hello World";
}
console.log( hello() ); // 関数が実行された結果(戻り値)がコンソールに出力される

// 一度変数に戻り値を格納することもできる
const result = hello();
console.log( result );
```

2. 引数(personName)として渡された値が文字列の場合に、「こんにちは、{personName}」とコンソールに出力する関数(hello)を定義してください。また、引数の値が文字列でない場合には、「引数に文字列を渡してください。」とコンソールに出力してください。

```javascript
function hello(personName) {
    if(typeof personName === 'string') {
        console.log(`こんにちは${personName}`);
    } else {
        console.log('引数に文字列を渡してください。');
    }
}

hello('Tom');
```

```javascript
function hello( personName ) {
    if( typeof personName !== "string" ) {
        console.log( "引数に文字列を渡してください。" );
        return; // 関数の処理を終了
    }
    console.log( `こんにちは、${ personName }` );
}
```

3. 次の関数fn1、fn2を実行したときの戻り値を答えてください。

```javascript
function fn1() {
    const val = 1 + 1;
    console.log(val);
} // undefined
function fn2() {
    console.log(7 % 3);
    return;
} // undefined
```

### 練習問題 6.4

1. 「関数宣言による関数定義」を行った場合は、関数宣言より前で関数を呼び出せることを、コード作成、実行して確認してください。

```javascript
console.log(hello('Tom')); // hello Tom

function hello(personName) {
    return `hello ${personName}`;
}
```

2. 「関数式による関数定義」を行った場合は、関数宣言より前で関数を呼び出せるとエラーが発生することを、コード作成、実行して確認してください。

```javascript
console.log(hello('Tom'));

const hello = personName => `hello ${personName}`; // ReferenceError
```

### 練習問題 6.5

1. 縁の半径(radius)と円周率(pi)をそれぞれ第1引数と第2引数で受け取り、円の面積を計算を返す関数(calcAreaOfCircle)を作成してください。ただし、でファルと引数を使うことで、円周率を指定しなかった(第2引数を省略した)時は、円周率として3がせってされるようにしてください。

```javascript
const calcAreaOfCircle = (radius, pi = 3) => {
    const result = pi * radius * radius;
    return result;
}

console.log(calcAreaOfCircle(5));
console.log(calcAreaOfCircle(5, 3.14));
```

```javascript
const calcAreaOfCircle = (radius, pi = Math.PI) => {
    const result = pi * radius * radius;
    return result;
}

console.log(calcAreaOfCircle(5));
console.log(calcAreaOfCircle(5, 3.14));
```

```javascript
function calcAreaOfCircle( radius, pi = 3 ) {
    return pi * radius ** 2;
}
```

### 練習問題 6.6

1. 以下のコードを実行したときに、1.~3.のコンソールへの出力がどのようになるか考えてください。

```javascript
const obj1 = { num: 3 };
const obj2 = { num: 3 };
let num = 3;

function fn(object1Arg, object2Arg, numberArg) {
    object1Arg = { num: 5 };
    object2Arg.num = 5;
    numberArg = 5;
}

fn(obj1, obj2, num);
console.log(obj1.num); // obj1: { num: 5 };
console.log(obj2.num); // obj2: { num: 5 };
console.log(num); // 3
```

```javascript
const obj1 = { num: 3 };
const obj2 = { num: 3 };
let num = 3;

function fn(object1Arg, object2Arg, numberArg) {
    object1Arg = { num: 5 };
    object2Arg.num = 5;
    numberArg = 5;
}

fn(obj1, obj2, num);
console.log(obj1.num); // obj1: { num: 3 };
console.log(obj2.num); // obj2: { num: 5 };
console.log(num); // 3
```

### 練習問題 6.7

1. 関数はオブジェクトであることから、その他のデータ型の値(文字列や整数など)と同様に変数に代入できます。次のコードを実行して、関数(hello)を他の(obj)に代入した後も、objが関数として問題なく実行できることを確認してください。

```javascript
function hello(personName) {
    console.log(`こんにちは$、${personName}`);
}

const obj = hello;

obj("山田太郎");
```

### 練習問題 6.8

1. コンソールに「こんにちは」というメッセージを出力する関数helloを関数式で定義し、setTimeout関数を呼び出してから5秒後にhelloが実行されるコードを作成してください。

```javascript
const hello = () => console.log('hello');
setTimeout(hello, 5000);
```

```javascript
const hello = function() {
    console.log( "こんにちは" );
}
setTimeout( hello, 5000 );
```

### 練習問題 6.9

1. 次のような結果をコンソールに出力する関数calcを、コールバック関数を使って作成してください。

```javascript
function plus(a, b) { return a + b };
function minul(a, b) { return a - b };

function calc (val1, vale, callback) {
    /* ここに処理を記述 */
}
// 実行例
calc(1, 2, pulus); // 3
calc(10, 2, pulus); // 12
calc(10, 2, minus); // 8
```

```javascript
function plus(a, b) { return a + b };
function minus(a, b) { return a - b };

function calc (val1, val2, callback) {
    console.log(callback(val1, val2));
}

calc(1, 2, plus);
calc(10, 2, plus);
calc(10, 2, minus);
```

```javascript
function plus(a, b) { return a + b; }
function minus(a, b) { return a - b; }
function calc( val1, val2, callback ) {
    // callbackにplusやminusなどのコールバック関数が渡され、実行される
    const result = callback( val1, val2 );
    console.log( result );
    // 以下のように記述しても正解
    // console.log( callback( val1, val2 ) );
}
```

### 練習問題 6.10

1. 以下のような無名関数をし酔いしたコードがあります。

```javascript
setTimeout(function() {
    console.log('こんにちは');
}, 3000);
```

このように無名関数を引数に渡す記述が可能な理由を1.~4.の問いに取り組みながら理解しましょう。

1. 無名関数function() { console.log("こんにちは"); }を変数helloに代入するコードを作成してみてください。

```javascript
const hello = () => { console.log('こんにちは') };
```

2. すべてのオブジェクトは、toString()というメソッドを持っています。toString()メソッドは、すべてのオブジェクトを表す文字列を返します。このメソッドを変数helloから呼び出して、コンソールにその戻り値の文字列を出力することで、hello(つまり無名関数)がオブジェクトであることを確認してください。

```javascript
const hello = () => { console.log('こんにちは') };
console.log(hello.toString());
```

3. 2.で変数helloはオブジェクトであることが確認できました。したがって、helloは、他のオブジェクトと同様に関数の引数に渡すことができます。setTimeoutに渡して、3秒後に実行されるコードを書いてください。

```javascript
const hello = () => { console.log('こんにちは') };
setTimeout(hello, 3000);
```

4. 3.では、setTimeoutに変数helloを介して無名関数function() { console.log('こんにちは'); }を渡しました。しかし、無名関数はオブジェクトであり、変数に代入できること、関数の引数に渡せることを1.~3.で確認しました。従って変数を介さずに直接、関数の引数に渡すことができるはずです。setTimeoutの第1引数に直接、無名関数を記述して、3.と同様にどうさをすることを確認してください。

```javascript
setTimeout(() => console.log('こんにちは'), 3000);
```

### 練習問題 6.11

1. 以下の1.~3.の無名関数をアロー関数に書き換えてみましょう。

1. 引数がなく、関数の本文が1行に例

```javascript
const hello = function() {
    console.log("こんにちは");
}
hello();
```

```javascript
const hello = () => console.log("こんにちは");
hello();
```

2. 引数が1つで、関数の本文が1行の例

```javascript
const double = function(num) {
    return num * 2;
}
console.log(double(10));
```

```javascript
const double = num => num * 2;
console.log(double(10));
```

3. 無名関数を使ったコールバック関数の例

```javascript
setTimeout(function(name) {
    console.log("こんにちは" + name);
}, 3000, "山田太郎");
```

```javascript
setTimeout(personName => console.log("こんにちは" + personName), 3000, "山田太郎");
```

1. 引数

```javascript
function hello(name) {
    console.log("こんにちは、" + name);
}
hello("山田太郎");
```

1.の引数nameのように、関数を定義するときに使う引数は`仮引数`と呼びます。それに対して、1.の"山田太郎"のように、関数を実行する時に渡した引数(値)は`実引数`と呼びます。関数を定義したときの`仮引数`と関数を実行したときに渡した`実引数`の個数が一致しなくてもエラーは発生しません。例えば、上記のコードで、引数を渡さずにhellowp実行した場合、引数nameには自動的に`undefined`が設定されます。そのため、hello()を実行すると、コンソールもは`こんにちは、undefined`が出力されます。

2. 戻り値

```javascript
function hello() {
    console.log("こんにちは");
}
const returnVal1 = hello();

const double = function(num) {
    if(typeof num !== "number") {
        console.log("引数が不正なデータ型であるため、関数の引数処理を終了します。");
        return;
    }
    return num * 2;
}
const returnVal2 = double(10);
const returnVal3 = double("100");
```

```javascript
function hello() {
    console.log("こんにちは");
}
const returnVal1 = hello(); // "こんにちは"

const double = function(num) {
    if(typeof num !== "number") {
        console.log("引数が不正なデータ型であるため、関数の引数処理を終了します。");
        return;
    }
    return num * 2;
}
const returnVal2 = double(10); // 20
const returnVal3 = double("100"); // "undefined"
```

```javascript
function hello() {
    console.log("こんにちは");
}
const returnVal1 = hello(); // undefined
```

3. デフォルト引数

関数のデフォルト引数とは、関数実行時に値が満たされていない場合や`undefined`が渡されてる場合、仮引数に`undefined`の代わりになるデフォルト値(初期値)を設定する機能のことです。

```javascript
function fn(arg1, arg2 = 10, arg3 = "100") {};
```

たとえば、このような関数fnを定義した場合、引数が渡されなかったとき仮引数arg1、arg2、arg3に設定されるデフォルト値は、それぞれ`undefined`、`10`、`"100"`となります。

4. コールバック関数

1. setTimeout
<br>setTimeoutとコールバック関数を使って、2秒に"こんにちは、⭕️⭕️"とコンソールに出力するプログラムを作成してください。⭕️⭕️の部分は、setTimeoutの第3引数に設定した値を出力してください。

```javascript
setTimeout(personName => console.log(`こんにちは、${personName}`), 2000, '⭕️⭕️');
```

```javascript
setTimeout(personName => console.log(`こんにちは、${personName}`), 2000, '⭕️⭕️');
```

```javascript
function add(val1, val2) { return val1 + val2 }
function minus(val1, val2) { return val1 - val2 }

calcAndDisp(add, console.log, 3, 2); // 5

calcAndDisp(minus, alert, 3, 2); // 1
```

```javascript
function add(val1, val2) { return val1 + val2 }
function minus(val1, val2) { return val1 - val2 }

function calcAndDisp(operator, callback, val1, val2) {
    callback(operator(val1, val2));
}

calcAndDisp(add, console.log, 3, 2); // 5

calcAndDisp(minus, alert, 3, 2); // 1
```

5. アロー関数

```javascript
function fn1(num1, num2) { return num1 + num2; }
```

```javascript
function fn2(num) { return num * 2; }
```

```javascript
function fn3() { console.log("Hello World"); }
```

```javascript
function fn4(name) { 
    console.log("Hello World");
    console.log(`Hello ${name}`);
}
```

```javascript
function fn5(name) { return { name: "山田太郎" }; }
```

```javascript
const fn1 = (num1, num2) => num1 + num2;
```

```javascript
const fn2 = num =>  num * 2;
```

```javascript
const fn3 = () => console.log("Hello World");
```

```javascript
const fn4 = name => { 
    console.log("Hello World");
    console.log(`Hello ${name}`);
}
```

```javascript
const fn5 = name => { name: "山田太郎" };
```

```javascript
onst fn1 = (num1, num2) => num1 + num2;
const fn2 = num =>  num * 2;
const fn3 = () => console.log("Hello World");
const fn4 = name => { 
    console.log("Hello World");
    console.log(`Hello ${name}`);
}
const fn5 = name => { name: "山田太郎" };

const personName = '山田太郎';

console.log(fn1(1, 2));
console.log(fn2(3));
fn3();
fn4(personName);
console.log(fn5);
```

## スコープ

### 練習問題 7.1

1. スコープとは何か答えてください。
- 見える範囲
- `実行中のコードから参照できる変数や関数の範囲。`

### 練習問題 7.2

```javascript
var a; // 1
let b; // 2

function fn1() { // 3
    var c; // 4
    let d; // 5

    let(true) {
        var e; // 6
        let f; // 7

        function fn2() {} // 8
    }
}

const fn3 = function() {} // 9
```

1. グローバルスコープ
- `グローバルスコープ`
2. スクリプトスコープ
- `スクリプトスコープ`
3. 関数スコープ
- `スクリプトスコープ`
4. グローバルスコープ
- `fn1の関数スコープ`
5. スクリプトスコープ
- `fn1の関数スコープ`
6. グローバルスコープ
- `fn1の関数スコープ`
7. ブロックスコープ
- `fn1の関数スコープ`
8. スクリプトスコープ
- `スクリプトスコープ`

### 練習問題 7.3

1. レキシカルスコープとはどのようなスコープか答えてください。
- 内側からみた外のスコープ
- `レキシカルスコープとは、実行中のコードから見た外側のスコープのことです。`

```javascript
let rand;

function change() {
    rand = Math.random();

    if(rand < .5) {
        let result = "成功";
    } else {
        let result = "失敗";
    }

    return result;
}
```

1. スコープの種類

| | トップレベル | 関数内 | ブロック内 | モジュール内のトップレベル | 
| --- | --- | --- | --- | --- | 
| let | スクリプトスコープ | 関数スコープ | ブロックスコープ | モジュールスコープ | 
| const | スクリプトスコープ | 関数スコープ | ブロックスコープ | モジュールスコープ | 
| var | グローバルスコープ | 関数スコープ | 外側 | モジュールスコープ | 
| 関数宣言 | グローバルスコープ | 関数スコープ | 外側 | モジュールスコープ | 

2. スコープの範囲

```javascript
let val = "グローバル";

function fn1() {
    let val = "関数内";

    if(Math.random() < .5) {
        console.log(val); // 1
        fn(); // 2
    }

    function fn2() {
        console.log(val); // 3
    }

    console.log(val); // 4

    fn2();
    return val;
}

function fn3() {
    console.log(val); // 5
}

console.log(val); // 6

const result = fn1();
console.log(result); // 7
fn3();
```

1. "関数内"
2. "関数内"
3. "関数内"
4. "関数内"
5. "グローバル"
6. "グローバル"
7. "関数内"

<br>

1. "関数内"
2. "関数内"
3. 実行可能
4. "関数内"
5. "グローバル"
6. "グローバル"
7. "関数内"

3. クロージャー

```javascript
/**
 * ケース1
 * この場合には2秒後にダイヤログで「こんにちは」が出力されます。
 */

function delayMessageFactory(callback, perSecond) {
    function delayMessage(alertMessage) {
       setTimeout(callback(alertMessage), perSecond);
    }
    return delayMessage;
}

const dialog = delayMessageFactory(alert, 2000);
dialog("こんにちは");

/**
 * ケース2
 * この場合には1秒後にコンソールで「こんばんわ」が出力されます。
 */

function delayMessageFactory(callback, perSecond) {
    function delayMessage(logMessage) {
        setTimeout(callback(logMessage), perSecond)
    }
    return delayMessage;
}

const log = delayMessageFactory(console.log, 2000);
log("こんばんは");
```

```javascript
function delayMessageFactory( printFn, ms ) {
    return function( msg ) {
        setTimeout( function() {
            printFn( msg );
        }, ms );
    };
}

const dialog = delayMessageFactory( alert, 2000 );
dialog( "こんにちは" );
// 2秒後にアラートで「こんにちは」と表示される
const log = delayMessageFactory( console.log, 1000 );
log( "こんばんは" );
// 1秒後にコンソールに「こんばんは」と表示される
```

3. クロージャーをアロー関数を使って簡略化

```javascript
const delayMessageFactory = (callback, perSecond) => 
    delayMessage = alertMessage => 
        setTimeout(callback(alertMessage), perSecond);

const dialog = delayMessageFactory(alert, 2000);
dialog("こんにちは");
```

```javascript
const delayMessageFactory = (callback, perSecond) => 
    delayMessage = logMessage => 
        setTimeout(callback(logMessage), perSecond);

const log = delayMessageFactory(console.log, 2000);
log("こんばんは");
```

```javascript
const delayMessageFactory = (printFn, ms) => msg => setTimeout(() => printFn(msg), ms);
```

## thisキーワード

### 練習問題 8.1

1. 次のコードの1.と2.でコンソールに出力される文字列を答えてください。

```javascript
window.name = "花子";

function hello() {
    console.log("こんにちは、" + this.name);
}

const taro = {
    name: "太郎",
    hello: hello
}

hello(); // 1.
taro.hello(); // 2.
```

1. こんにちは、花子
2. こんにちは、太郎

### 練習問題 8.2

```javascript
window.name = "山田 太郎";
const which = () => {
    console.log(this.name);
}

const hanako = {
    name: "山田 花子",
    callName() {
        which();
    }
}

hanako.callName(); // 山田 太郎
```

### 練習問題 8.3

```javascript
window.a = 10;
window.b = 11;

const obj = {
    a: 5,
    b: 7,
    calc() {
        console.log(this.a + this.b);
    }
}

setTimeout(obj.calc, 2000); // 21
```

1. 実行コンテキスト
<br>実行コンテキストとは、コードは実行されたときに、JavaScriptエンジンによって準備されるコードの実行環境のことです。実行コンテキストには、主に`グローバルコンテキスト`と`関数コンテキスト`があります。特に注意すべきなのは、実行コンテキストが変わると`this`の参照先の値も変わる点です。また、実行コンテキストが積み重なってできたものを`コールスタック`と呼びます。

2. 関数コンテキスト

```javascript
window.greeting = "こんにちは";

function hello() {
    console.log(this.greeting);
}

hello(); // 1

const dog = {
    greeting: "ワンワン",
    hello
};

dog.hello(); // 2

const gorilla = {
    greeting: "ウホウホ",
    hello
};

gorilla.hello() // 3
const transform = gorilla.hello;
transform(); // 4

setTimeout(gorilla.hello, 2000); // 5
```

1. "こんにちは"
2. "ワンワン"
3. "ウホウホ"
4. "ウホウホ"
5. "こんにちは"

1. "こんにちは"
2. "ワンワン"
3. "ウホウホ"
4. "こんにちは"
5. "こんにちは"

<br>

3. thisの束縛

```javascript
setTimeout(gorilla.hello.bind(gorilla), 2000);
```

## クラス

### 練習問題 9.1

```javascript
class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }

    login() {
        this.check();
        console.log(`ログイン[${this.username}/${this.password}]`);
    }

    check() {
        console.log(`ログイン情報をチェックします。`)
    }
}

const taro = new User("山田 太郎", "taro-pwd");
taro.login();
```

1. 先ほどのUserクラスに、rollプロパティとcheckRollメソッドを追加してください。プロパティとメソッドの仕様は、次のとおりとします。

- rollプロパティに、コンストラクタの第3引数の値を渡す。
- checkRollメソッドには、rollプロパティの値が"admin"であれば、「管理者権限です。」とコンソールに表示し、それ以外の値の場には「一般ユーザーです。」とコンソールに表示する。

```javascript
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
```

```javascript
class User {
    constructor( username, password, roll ) {
        this.username = username;
        this.password = password;
        this.roll = roll;
    }

    login() {
        this.check();
        console.log( `ログイン [ ${this.username} / ${this.password} ]`);
    }

    check() {
        console.log( `ログイン情報をチェックします。`);
    }

    checkRoll() {
        if( this.roll === "admin" ) {
            console.log( "管理者権限です。" );
        } else {
            console.log( "一般ユーザーです。" );
        }
    }
}
```

### 練習問題 9.2

1. 次のコードを実行した時に画面に"こんにちは"と表示したかったのですが、エラーが発生しました。エラーの原因を特定して修正してください。

```javascript
class StdClass {

    constructor(arg) {
        this.arg = arg;
    }

    static printFn = console.log;

    static print(arg) {
        this.printFn(arg);
    }

    print() {
        this.constructor.print(this.arg);
    }
}

const std = new StdClass("こんにちは");
std.print();
```

```javascript
class StdClass {

    constructor(arg) {
        this.arg = arg;
    }

    static printFn = console.log;

    static print(arg) {
        StdClass.printFn(arg);
    }

    print() {
        this.constructor.print(this.arg);
    }
}

const std = new StdClass("こんにちは");
std.print();
```

### 練習問題 9.3

1. 9.2.3項で定義したPersonクラスに対して、genderセッター、gender getterを定義してください。

- genderセッター
  - 値が"男"、"女"、"トランスジェンダー"の場合には、_genderプロパティにその値を格納します。それ以外の場合は例外を発生させます。例外メッセージには、「genderプロパティには"男"、"女"、または"トランスジェンダー"を設定してください。」にします。

- genderゲッター
  - _genderプロパティの値を返します。

```javascript
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
}

const taro = new Person("太郎", "山田");

console.log(taro.fullname);

taro.age = "18";

console.log(typeof taro.age);

console.log(taro);
```

```javascript
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
```

```javascript
class Person {
    ... 省略
    set gender( value ) {

        if( value === "男" || value === "女" || value === "トランスジェンダー " ) {
            this._gender = value;
        } else {
            throw new Error( 'genderプロパティには"男"、"女"、または"トランスジェンダー "を設定してください。' )
        }
    }
    get gender() {
        // genderが取得された場合には値が保持されている _genderの値を返す
        return this._gender;
    }
}

const taro = new Person( "太郎", "山田" );
taro.gender = "男";
console.log( taro.gender );
```

### 練習問題 9.4

1. 以下のParentクラスに対して、familyNameプロパティとintroductionメソッドを実装し、Childオブジェクトからintroductionメソッドを実行してください。プロパティとメソッドの仕様は、次のとおりとします。

- familyNameプロパティ
  - Parentのコンストラクタに渡された引数で初期値が設定されます。

- introductionメソッド
  - 「名字はfamilyNameです。」とコンソールに表示します。

```javascript
class Parent {
}

class Child extends Parent {
}

// 以下の結果になるように実装してください。
const taro = new Child('山田');
taro.introduction(); // 名字は山田です。
```

```javascript
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
```

```javascript
class Parent {
    constructor( familyName ) {
        this.familyName = familyName;
    }
    introduction() {
        console.log( `名字は${ this.familyName }です。` );
    }
}

class Child extends Parent {
    constructor( familyName ) {
        super( familyName );
    }
}
```

### 練習問題 9.5

```javascript
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

console.log(taro.hasOwnProperty("familyName")); // true
console.log(taro.hasOwnProperty("introduction")); // false
console.log("introduction" in taro); // true
console.log("hasOwnProperty" in taro); // false
```

```javascript
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

console.log(taro.hasOwnProperty("familyName")); // true
console.log(taro.hasOwnProperty("introduction")); // false
console.log("introduction" in taro); // true
console.log("hasOwnProperty" in taro); // true
```

### 練習問題 9.6

1. 次のクラスを、ES2022のクラス記法で書き直してください。なお、_から始まるプロパティはプライベートプロパティとします。

```javascript
class Parent {
    constructor(firstName) {
        this._lastName = "山田";
        this._firstName = firstName;
    }

    get fullName() {
        return this._lastName + this._firstName;
    }

    set age(value) {
        this._age = Number(value);
    }

    get age() {
        return this._age;
    }
}

const taro = new Parent("太郎");
taro.age = 18;
console.log(taro.fullName);
```

```javascript
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
```

1. Userクラス作成
<br>usernameプロパティとdeletedプロパティを保持するUserクラスを作成してください。usernameは、コンストラクタの引数で初期化されるものとします。また、deleteフラグが1のUserオブジェクトは無効なユーザーとみなたいため、deletedプロパティの初期値は0にしてください。

```javascript
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
}

const tom = new User('Tom');
console.log(tom);
```

```javascript
class User {
    constructor( username ) {
        this.username = username;
        this.deleted = 0;
    }
}
```

2. ログインメソッドの実装
<br>1.で作成したUserクラスに、loginメソッドを追加してください。なお、loginメソッドにはdeleteプロパティの値によってつぎのようなログメッセージが出力されるように実装してください。

- deletedが0の場合

```javascript
usernameはログインに成功しました。
```

- deletedが0以外の場合

```javascript
usernameはログインに失敗しました。
```

```javascript
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

const tom = new User('Tom');
tom.deleted = 0;
tom.login();
```

```javascript
class User {
    constructor( username ) {
        this.username = username;
        this.deleted = 0;
    }
    login() {
        if( this.deleted === 0 ) {
            console.log( `${this.username}はログインに成功しました。` );
        } else {
            console.log( `${this.username}はログインに失敗しました。` );
        }
    }
}
```

3. AdminUserクラスの作成
<br>1. 2.で作成したUserクラスを継承するAdminUserクラスを作成し、AdminUserクラスに対してdeleteUserメソッドを追加してください。メソッドの仕様は次のとおりとします。

- deleteUserメソッドの仕様
  - 他のオブジェクトを引数に取り、その他のオブジェクトのdeletedフラグを1に変更します。その後、コンソールに以下のメッセージを表示します。

```javascript
{削除されたユーザー名}を削除しました。
```

```javascript
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
                throw new Error('ToDeleteUserError')
            }
        } catch (e) {
            console.error(`${e} ${otheruser.username}はすでに削除されています。`);
        }
    }
}

const tom = new User('Tom');
tom.deleted = 0;
tom.login();

const bob = new AdminUser('Bob');
bob.deleteUser(tom);
console.log(tom);
tom.login();
```

```javascript
class User {
    ... 省略
}
class AdminUser extends User {
    constructor( username ) {
        super( username );
    }
    deleteUser( user ) {
        user.deleted = 1;
        console.log( `${ user.username }を削除しました。` );
    }
}
```

4. 作成したクラスの実行
<br>1.~3.で作成したUserクラスとAdminUserクラスから、それぞれインスタンスを作成し、AdminUserクラスのdeleteUserメソッドを使って、作成したUserインスタンスをログイン不可にしてください。

```javascript
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
                throw new Error('ToDeleteUserError')
            }
        } catch (e) {
            console.error(`${e} ${otheruser.username}はすでに削除されています。`);
        }
    }
}

const tom = new User('Tom');
tom.deleted = 0;
tom.login(); // Tomはログインに成功しました。

const bob = new AdminUser('Bob');
bob.deleteUser(tom); // Tomを削除しました。
tom.login(); // Error: SignInError Tomはログインに失敗しました。
```

```javascript
class User {
    ... 省略
}
class AdminUser extends User {
    ... 省略
}
const user = new User( "山田太郎" );
const admin = new AdminUser( "山田管理者" );
admin.deleteUser( user );
```

5. 適切なオブジェクトかどうかの判断
<br>AdminクラスのdeleteUserメソッドに渡された引数がUserオブジェクトではない場合、例外処理を発生させてください。例外メッセージは「Userオブジェクトを引数にする必要があります。」とします。

```javascript
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
```

```javascript
class User {
    ... 省略
}
class AdminUser extends User {
    constructor( username ) {
        super( username );
    }
    deleteUser( user ) {
        if( !(user instanceof User) ) {
            throw new Error( "Userオブジェクトを引数にする必要があります。" );
        }
        user.deleted = 1;
        console.log( `${ user.username }を削除しました。` );
    }
}
```

```javascript
class User {
    constructor( username ) {
        this.username = username;
        this.deleted = 0;
    }
    login() {
        if( this.deleted === 0 ) {
            console.log( `${this.username}はログインに成功しました。` );
        } else {
            console.log( `${this.username}はログインに失敗しました。` );
        }
    }
}
class AdminUser extends User {
    constructor( username ) {
        super( username );
    }
    deleteUser( user ) {
        if( !( user instanceof User ) ) {
            throw new Error( "Userオブジェクトを引数にする必要があります。" );
        }
        user.deleted = 1;
        console.log( `${ user.username }を削除しました。` );
    }
}
const user = new User( "山田太郎" );
const admin = new AdminUser( "山田管理者" );
admin.deleteUser( user );
user.login();
```

## 組み込みオブジェクト

### 練習問題 10.1

1.一秒ごとにブラウザの内側境界の横幅をコンソールに表示する機能を実装してください。

```javascript
const getWindowWidth = () => console.log(window.innerWidth);
setInterval(getWindowWidth, 1000);
```

```javascript
setInterval( () => {
    console.log( window.innerWidth );
} , 1000 );
```

### 練習問題 10.2

1. 2022年5月12日 午前3時12分13秒333秒をJSTで設定したDateオブジェクトを作成してください。

```javascript
const dt = new Date('2022-05-12T03:12:13.333');
```

```javascript
const date = new Date( "2022-05-12 03:12:13.333+09:00" );
```

2. 1.の日を変更して、2022年5月15日が何曜日か答えてください。

```javascript
const dt = new Date('2022-05-12T03:12:13.333');

const whichDays = (targetDate) => {
    const days = targetDate.getDay();
    switch (days) {
        case 0:
            console.log('Sun');
            break;
        case 1:
            console.log('Mon');
            break;
        case 2:
            console.log('Tue');
            break;
        case 3:
            console.log('Wed');
            break;
        case 4:
            console.log('Thu');
            break;
        case 5:
            console.log('Fri');
            break;
        case 6:
            console.log('Sat');
            break;
        default:
            console.error('SomeError');
            break;
    }
}

console.log(dt);
dt.setDate(15);
whichDays(dt);
```

```javascript
const date = new Date( "2022-05-12 03:12:13.333+09:00" );
date.setDate( 15 );
console.log( date.getDay() );
```

3. 1.の月を変更して、2022年8月15日が何曜日か答えてください。

```javascript
const dt = new Date('2022-05-12T03:12:13.333');

const whichDays = (targetDate) => {
    const days = targetDate.getDay();
    switch (days) {
        case 0:
            console.log('Sun');
            break;
        case 1:
            console.log('Mon');
            break;
        case 2:
            console.log('Tue');
            break;
        case 3:
            console.log('Wed');
            break;
        case 4:
            console.log('Thu');
            break;
        case 5:
            console.log('Fri');
            break;
        case 6:
            console.log('Sat');
            break;
        default:
            console.error('SomeError');
            break;
    }
}

console.log(dt);
dt.setDate(15);
whichDays(dt);
dt.setMonth(8);
whichDays(dt);
```

```javascript
date.setMonth( 7 );
console.log( date.getDay() );
```

### 練習問題 10.3

1. 2022年5月の月初と月末が何曜日になるか答えてください。

```javascript
const date = new Date('2022-05');

const firstDay = new Date( date.getFullYear(), date.getMonth(), 1 );
const lastDay = new Date( date.getFullYear(), date.getMonth() + 1, 0 );

const whichDay = targetDate => {
    const days = targetDate.getDay();
    switch (days) {
        case 0:
            console.log('Sun');
            break;
        case 1:
            console.log('Mon');
            break;
        case 2:
            console.log('Tue');
            break;
        case 3:
            console.log('Wed');
            break;
        case 4:
            console.log('Thu');
            break;
        case 5:
            console.log('Fri');
            break;
        case 6:
            console.log('Sat');
            break;
        default:
            console.error('SomeError');
            break;
    }
}

whichDay(firstDay);
whichDay(lastDay);
```

```javascript
const date= new Date( "2022-05" );
const firstDay = new Date( date.getFullYear(), date.getMonth(), 1 );
console.log( firstDay.getDay() ); // 月初
> 0(日曜日)
const lastDay = new Date( date.getFullYear(), date.getMonth() + 1, 0 );
console.log( lastDay.getDay() ); // 月末
> 2(火曜日)
```

2. 1.の月初日の日付を30日進めた日程を答えてください。

```javascript
const date = new Date('2022-05');

const firstDay = new Date( date.getFullYear(), date.getMonth(), 1 );
const lastDay = new Date( date.getFullYear(), date.getMonth() + 1, 0 );
const thirtyDaysLater = new Date( date.getFullYear(), date.getMonth(), date.getDate() + 30 );

console.log(thirtyDaysLater);
```

```javascript
firstDay.setDate( firstDay.getDate() + 30 );
console.log( firstDay.toDateString() );
> Tue May 31 2022
```

3. 2.の日付を20日進めた日時を答えてください。

```javascript
const date = new Date('2022-05');

const firstDay = new Date( date.getFullYear(), date.getMonth(), 1 );
const lastDay = new Date( date.getFullYear(), date.getMonth() + 1, 0 );
const thirtyDaysLater = new Date( date.getFullYear(), date.getMonth(), date.getDate() + 30 );
const twentyMonthsLater = new Date( thirtyDaysLater.getFullYear(), thirtyDaysLater.getMonth() + 20, thirtyDaysLater.getDate() );

console.log(thirtyDaysLater);
console.log(twentyMonthsLater);
```

```javascript
firstDay.setMonth( firstDay.getMonth() + 20 );
console.log( firstDay.toDateString() );
> Wed Jan 31 2024
```

### 練習問題 10.6

1. 次のオブジェクトを1.2.の条件に従ってJSON文字列に変換してください。

```javascript
const fruits = {
    banana: 'うまい',
    apple: '普通',
    orange: '微妙',
    other: {
        grape: 'うまい'
    }
};
```

```javascript
const fruits = {
    banana: 'うまい',
    apple: '普通',
    orange: '微妙',
    other: {
        grape: 'うまい'
    }
};

const changedJson = targetObj => JSON.stringify(targetObj);
const jsonFruits = changedJson(fruits);
console.log(jsonFruits);
```

2. bananaとorangeのプロパティのみ抽出してJSON文字列を作成してください。

```javascript
const fruits = {
    banana: 'うまい',
    apple: '普通',
    orange: '微妙',
    other: {
        grape: 'うまい'
    }
};

const bananaAndOrange = targetObj => JSON.stringify(targetObj, ['banana', 'orange']);
const jsonBananaAndOrange = bananaAndOrange(fruits);
console.log(jsonBananaAndOrange);
```

3. "うまい"フルーツのみを抽出してJSON文字列を作成してください。

```javascript
const fruits = {
    banana: 'うまい',
    apple: '普通',
    orange: '微妙',
    other: {
        grape: 'うまい'
    }
};

const changedJson = targetObj => JSON.stringify(targetObj);
const bananaAndOrange = targetObj => JSON.stringify(targetObj, ['banana', 'orange']);
const niceFruits = targetObj => JSON.stringify(targetObj, replacer);

function replacer(prop, value) {
    if((typeof value === 'string') && (value !== 'うまい')) {
        return;
    } else {
        return value;
    }
}

const jsonFruits = changedJson(fruits);
const jsonBananaAndOrange = bananaAndOrange(fruits);
const jsonNiceFruits = niceFruits(fruits);

console.log(fruits);
console.log(jsonFruits);
console.log(jsonBananaAndOrange);
console.log(jsonNiceFruits);
```

### 練習問題 10.7

1. 次のように、プリミティブ型の文字列に対してreplaceメソッドを実行できる理由を説明してください。

```javascript
const result = "apple, lemon".replace("apple", "banana");
console.log(result);
```

- String型のラッパーオブジェクトのため
  - プリミティブ型である文字列に続けてプロパティやメソッドが記述された場合には、ラッパーオブジェクトであるStringオブジェクトのプロパティやメソッドが呼び出されるため。

1. widowオブジェクト
<br>ブラウザ画面のスクロール量がHTML上部から1000pxを超えると、「画面を閉じますか?」と確認をダイヤログを表示して、[OK]を押したタイミングで画面を閉じるプログラムを作成してください。[キャンセル]を押した場合には、スクロールの監視は停止するものとします。また、スクロールの量の監視は1秒ごとに行うもとします。

```javascript
const getBody = document.querySelector('body');
console.log(getBody);
getBody.style.height = '2000px';

const intervalId = setInterval(()=> {
    if(window.scrollY > 1000) {
        if(window.confirm('画面をとじますか?')) {
            closed();
        } else {
            clearImmediate(intervalId);
        }
        confirm('画面をとじますか?');
    }
}, 1000);
```

```javascript
<body style="height: 2000px; background-image: linear-gradient(#000, #fff);">
    <script>
        const intervalID = setInterval( () => {
            // ログ用
            console.log( window.scrollY );
            // スクロール量が1000pxより大きい、かつ確認ダイアログで[OK]を押したとき
            if ( window.scrollY > 1000 ) {
                if ( window.confirm( "画面を閉じますか? " ) ) {
                    window.close();
                } else {
                    clearInterval( intervalID );
                }
            }
        } , 1000 );
    </script>
</body>
```

2. UTC、GMT、JSTとは
<br>UTCとは`協定世界時`とよばれ、現在、世界の標準時として使われています。UTCは原子時計(セシウム原子の振動数を基準とした時計)によって算出されるため、天体観測によって算出される`GMT`より厳密な時刻の定義が可能です。ただ、大まかには`GMT`とUTCはほぼ同じ時刻を表します。一方、JSTは`日本標準時`を表します。JSTは、UTCから`9`時間の時差があります。

3. 日時の計算
<br>2023年5月20日深夜0時~2023年6月12日深夜0時の差分日時を教えてください。

```javascript
const startDate = new Date('2023-05-20 00:00');
const endDate = new Date('2023-06-12 00:00');
const dayUnit = 1000 * 60 * 60 * 24;
const diffDays = Math.abs(endDate - startDate) / dayUnit;
console.log(startDate);
console.log(endDate);
console.log(diffDays);
```

```javascript
// ミリ秒 * 秒 * 分 * 時間 = 1日
const dayUnit = 1000 * 60 * 60 * 24;
const startDate = new Date( "2023-05-20" );
const endDate = new Date( "2023-06-12" );
const diffDays = Math.abs( endDate - startDate ) / dayUnit;
console.log( diffDays );
> 23(日)
```

## コレクション

### 練習問題 11.1

1. 次の配列に対して、1.~10.の操作に従ってください。

```javascript
const chuka = ['八宝菜', '餃子', '回鍋肉', '青椒肉絲'];
```

1. 配列の末尾に"天津飯"を追加してください。

```javascript
const chuka = ['八宝菜', '餃子', '回鍋肉', '青椒肉絲'];

console.log(chuka);
chuka.push('天津飯');
console.log(chuka);
```

2. 配列の先頭に"チャーハン"を追加してください。

```javascript
const chuka = ['八宝菜', '餃子', '回鍋肉', '青椒肉絲'];

console.log(chuka);
chuka.push('天津飯');
console.log(chuka);
chuka.unshift('チャーハン');
console.log(chuka);
```

3. 配列の先頭の要素を削除してください。

```javascript
const chuka = ['八宝菜', '餃子', '回鍋肉', '青椒肉絲'];

console.log(chuka);
chuka.push('天津飯');
console.log(chuka);
chuka.unshift('チャーハン');
console.log(chuka);
chuka.shift();
console.log(chuka);
```

4. 配列の末尾の要素を削除してください。

```javascript
const chuka = ['八宝菜', '餃子', '回鍋肉', '青椒肉絲'];

console.log(chuka);
chuka.push('天津飯');
console.log(chuka);
chuka.unshift('チャーハン');
console.log(chuka);
chuka.shift();
console.log(chuka);
chuka.pop();
console.log(chuka);
```

5. 配列の添字が2の要素を削除してください。

```javascript
const chuka = ['八宝菜', '餃子', '回鍋肉', '青椒肉絲'];

console.log(chuka);
chuka.push('天津飯');
console.log(chuka);
chuka.unshift('チャーハン');
console.log(chuka);
chuka.shift();
console.log(chuka);
chuka.pop();
console.log(chuka);
chuka.shift(chuka[2]);
console.log(chuka);
```

6. 配列の"餃子"のインデックスを確認してください。

```javascript
const chuka = ['八宝菜', '餃子', '回鍋肉', '青椒肉絲'];

console.log(chuka);
chuka.push('天津飯');
console.log(chuka);
chuka.unshift('チャーハン');
console.log(chuka);
chuka.shift();
console.log(chuka);
chuka.pop();
console.log(chuka);
chuka.shift(chuka[2]);
console.log(chuka);

const found = chuka.indexOf('餃子');
console.log(chuka[found]);
```

7. 配列の後ろに配列['杏仁豆腐', 'ごま豆腐']を結合してください。

```javascript
const chuka = ['八宝菜', '餃子', '回鍋肉', '青椒肉絲'];

console.log(chuka);
chuka.push('天津飯');
console.log(chuka);
chuka.unshift('チャーハン');
console.log(chuka);
chuka.shift();
console.log(chuka);
chuka.pop();
console.log(chuka);
chuka.shift(chuka[2]);
console.log(chuka);

const found = chuka.indexOf('餃子');
console.log(chuka[found]);

const dofu = ['杏仁豆腐', 'ごま豆腐'];
const chuka2 = chuka.concat(dofu);
console.log(chuka2);
```

8. 添字の1~3(1, 2, 3)の要素を抽出して新しい配列を作成してください。

```javascript
const chuka = ['八宝菜', '餃子', '回鍋肉', '青椒肉絲'];

console.log(chuka);
chuka.push('天津飯');
console.log(chuka);
chuka.unshift('チャーハン');
console.log(chuka);
chuka.shift();
console.log(chuka);
chuka.pop();
console.log(chuka);
chuka.shift(chuka[2]);
console.log(chuka);

const found = chuka.indexOf('餃子');
console.log(chuka[found]);

const dofu = ['杏仁豆腐', 'ごま豆腐'];
const chuka2 = chuka.concat(dofu);
console.log(chuka2);

console.log('\n==========');

const chuka3 = new Array();

for(let i = 1; i <= 3; i++) {
    chuka3.push(chuka2[i]);
}

console.log(chuka3);
```

9. 8.で取得した配列の並びを逆にしてください。

```javascript
const chuka = ['八宝菜', '餃子', '回鍋肉', '青椒肉絲'];

console.log(chuka);
chuka.push('天津飯');
console.log(chuka);
chuka.unshift('チャーハン');
console.log(chuka);
chuka.shift();
console.log(chuka);
chuka.pop();
console.log(chuka);
chuka.shift(chuka[2]);
console.log(chuka);

const found = chuka.indexOf('餃子');
console.log(chuka[found]);

const dofu = ['杏仁豆腐', 'ごま豆腐'];
const chuka2 = chuka.concat(dofu);
console.log(chuka2);

console.log('\n==========');

const chuka3 = new Array();

for(let i = 1; i <= 3; i++) {
    chuka3.push(chuka2[i]);
}
console.log(chuka3);

const reverseChuka = chuka3.reverse();
console.log(reverseChuka);
```

10. 8.で取得した配列に"八宝菜"が含まれているか真偽値で取得してください。

```javascript
const chuka = ['八宝菜', '餃子', '回鍋肉', '青椒肉絲'];

console.log(chuka);
chuka.push('天津飯');
console.log(chuka);
chuka.unshift('チャーハン');
console.log(chuka);
chuka.shift();
console.log(chuka);
chuka.pop();
console.log(chuka);
chuka.shift(chuka[2]);
console.log(chuka);

const found = chuka.indexOf('餃子');
console.log(chuka[found]);

const dofu = ['杏仁豆腐', 'ごま豆腐'];
const chuka2 = chuka.concat(dofu);
console.log(chuka2);

console.log('\n==========');

const chuka3 = new Array();

for(let i = 1; i <= 3; i++) {
    chuka3.push(chuka2[i]);
}
console.log(chuka3);

const reverseChuka = chuka3.reverse();
console.log(reverseChuka);

const includesBabao = chuka3.includes('八宝菜');
console.log(includesBabao);
```

```javascript
const chuka = [ "八宝菜", "餃子", "回鍋肉", "青椒肉絲" ];
// 1 解答 配列の末尾に"天津飯"を追加
chuka.push( "天津飯" );
> ["八宝菜", "餃子", "回鍋肉", "青椒肉絲", "天津飯"]
// 2 解答 配列の先頭に"チャーハン"を追加
chuka.unshift( "チャーハン" );
> ["チャーハン", "八宝菜", "餃子", "回鍋肉", "青椒肉絲", "天津飯"]
// 3 解答 配列の先頭の要素を削除
chuka.shift();
> ["八宝菜", "餃子", "回鍋肉", "青椒肉絲", "天津飯"]
// 4 解答 配列の末尾の要素を削除
chuka.pop();
> ["八宝菜", "餃子", "回鍋肉", "青椒肉絲"]
// 5 解答 配列の添字が2の要素を削除
chuka.splice( 2, 1 );
> ["八宝菜", "餃子", "青椒肉絲"]
// 6 解答 配列の"餃子"のインデックスを確認
console.log( chuka.indexOf( "餃子" ) );
> 1
// 7 解答 配列[ "杏仁豆腐", "ごま豆腐" ]を後ろに結合
chuka = chuka.concat( [ "杏仁豆腐", "ごま豆腐" ] );
> ["八宝菜", "餃子", "青椒肉絲", "杏仁豆腐", "ごま豆腐"]
// 8 解答 添字の1~3(1, 2, 3)の要素を複製
let newChuka = chuka.slice( 1, 4 );
> newChuka: ["餃子", "青椒肉絲", "杏仁豆腐"]
// 9 解答 8で取得した配列の並びを逆に
newChuka.reverse();
> ["杏仁豆腐", "青椒肉絲", "餃子"]
// 10 解答 8で取得した配列に"八宝菜"が含まれるかを確認
console.log( newChuka.includes( "八宝菜" ) );
> false
```

### 練習問題 11.2

1. 次のTodoリストを使って1.~4.の操作を行なってください。引数が配列またはオブジェクトの場合は、できれば分割代入を利用して記述してください。

```javascript
// { タイトル, 優先順位, 完了か否か }
// 優先順位(priority)は1: 低, 2: 中, 3: 高
const todos = [
    { title: '晩御飯', priority: 2, completd: false },
    { title: 'ゴミ出し', priority: 1, completd: true },
    { title: '食材の買い出し', priority: 3, completd: false },
    { title: '洗濯', priority: 2, completd: true },
    { title: '録画の視聴', priority: 1, completd: false },
];
```

1. Todoリスト、以下のフォーマットで出力してください。
- 完了しているタスクの場合 => { タイトル }は完了！
- 完了していないタスクの場合 => { タイトル }をやらないと！

```javascript
const todos = [
    { title: '晩御飯', priority: 2, completd: false },
    { title: 'ゴミ出し', priority: 1, completd: true },
    { title: '食材の買い出し', priority: 3, completd: false },
    { title: '洗濯', priority: 2, completd: true },
    { title: '録画の視聴', priority: 1, completd: false },
];

for(const todo of todos) {
    switch (todo.completd) {
        case true:
            console.log(`${todo.title}は完了!`);
            break;
        case false:
            newSet.add(todo);
            console.log(`${todo.title}をやらないと!`);
            break;

        default:
            console.error('Opps');
            break;
    }
}
```

2. 完了していないタスクを抽出して、新しい配列(noCompeled)を作成してください。

```javascript
const todos = [
    { title: '晩御飯', priority: 2, completd: false },
    { title: 'ゴミ出し', priority: 1, completd: true },
    { title: '食材の買い出し', priority: 3, completd: false },
    { title: '洗濯', priority: 2, completd: true },
    { title: '録画の視聴', priority: 1, completd: false },
];

const newSet = new Set();

for(const todo of todos) {
    switch (todo.completd) {
        case true:
            console.log(`${todo.title}は完了!`);
            break;
        case false:
            newSet.add(todo);
            console.log(`${todo.title}をやらないと!`);
            break;

        default:
            console.error('Opps');
            break;
    }
}

const notCompleted = Array.from(newSet);
```

3. 完了していないタスクを、優先順位が高い順に並べ変えてください。

```javascript
const todos = [
    { title: '晩御飯', priority: 2, completd: false },
    { title: 'ゴミ出し', priority: 1, completd: true },
    { title: '食材の買い出し', priority: 3, completd: false },
    { title: '洗濯', priority: 2, completd: true },
    { title: '録画の視聴', priority: 1, completd: false },
];

const newSet = new Set();

for(const todo of todos) {
    switch (todo.completd) {
        case true:
            console.log(`${todo.title}は完了!`);
            break;
        case false:
            newSet.add(todo);
            console.log(`${todo.title}をやらないと!`);
            break;

        default:
            console.error('Opps');
            break;
    }
}

const notCompleted = Array.from(newSet);

notCompleted.sort((a, b) => {
    return b.priority - a.priority;
});
```

4. 1.で解答したコードを「配列(todos)を引数とする関数(printTodo)」として作成してください。また、関数(printTodo)の引数に完了していないタスク(notCompleted)を渡してください。

```javascript
const todos = [
    { title: '晩御飯', priority: 2, completd: false },
    { title: 'ゴミ出し', priority: 1, completd: true },
    { title: '食材の買い出し', priority: 3, completd: false },
    { title: '洗濯', priority: 2, completd: true },
    { title: '録画の視聴', priority: 1, completd: false },
];

const newSet = new Set();

for(const todo of todos) {
    switch (todo.completd) {
        case true:
            console.log(`${todo.title}は完了!`);
            break;
        case false:
            newSet.add(todo);
            console.log(`${todo.title}をやらないと!`);
            break;

        default:
            console.error('Opps');
            break;
    }
}

const notCompleted = Array.from(newSet);

notCompleted.sort((a, b) => {
    return b.priority - a.priority;
});

console.log(notCompleted);
console.log(todos);

const printTodo = targetObject => {
    for(const todo of targetObject) {
        switch (todo.completd) {
            case true:
                console.log(`${todo.title}は完了!`);
                break;
            case false:
                console.log(`${todo.title}をやらないと!`);
                break;
    
            default:
                console.error('Opps');
                break;
        }
    }
}

printTodo(notCompleted);
printTodo(todos);
```

```javascript
// { タイトル, 優先順位, 完了か否か }
// 優先順位(priority)は1:低、2:中、3:高
const todos = [
{ title: "晩御飯", priority: 2, completed: false },
{ title: "ゴミ出し", priority: 1, completed: true },
{ title: "食材の買い出し", priority: 3, completed: false },
{ title: "洗濯", priority: 2, completed: true },
{ title: "録画の視聴", priority: 1, completed: false },
];
// 1 解答 Todoリストの出力
// 完了しているタスク:「{タイトル}は完了!」
// 完了していないタスク:「{タイトル}をやらないと!」
todos.forEach( ( { title, completed } ) => {
    if( completed ) {
        console.log( `${title}は完了! ` );
    } else {
        console.log( `${title}をやらないと! ` );
    }
});
> 晩御飯をやらないと!
> ゴミ出しは完了!
> 食材の買い出しをやらないと!
> 洗濯は完了!
> 録画の視聴をやらないと!
// 2 解答 完了していないタスクの抽出
const notCompleted = todos.filter( ( { completed } ) => {
    return completed !== true; // return !completed;でもOK
});
// 3 解答 優先順位で並べ替え
notCompleted.sort( ( todoA, todoB ) => {
    return todoB.priority - todoA.priority; // priorityを降順でソート
});
// 3 別解 3は分割代入で記述すると次のように記述できる
notCompleted.sort( ( { priority: priorityA }, { priority: priorityB } ) => {
    return priorityB - priorityA;
});
```

### 練習問題 11.3

1. Setを使って、1.~3.の処理を行なってください。

1. Setを使って次の配列で初期化してください

```javascript
["八宝菜", "餃子", "回鍋肉", "青椒肉絲", "餃子"]
```

```javascript
const arry = ["八宝菜", "餃子", "回鍋肉", "青椒肉絲", "餃子"];

const newSet = new Set(arry);
console.log(newSet);
```

2.  "杏仁豆腐"と"餃子"を追加して、Setオブジェクトの状態を確認してください。

```javascript
const arry = ["八宝菜", "餃子", "回鍋肉", "青椒肉絲", "餃子"];

const newSet = new Set(arry);
console.log(newSet);

newSet.add("杏仁豆腐", "餃子");
console.log(newSet);
```

3. "回鍋肉"を削除してください。

```javascript
const arry = ["八宝菜", "餃子", "回鍋肉", "青椒肉絲", "餃子"];

const newSet = new Set(arry);
console.log(newSet);

newSet.add("杏仁豆腐", "餃子");
console.log(newSet);

newSet.delete("回鍋肉");
console.log(newSet);
```

4. Setオブジェクトに"八宝菜"が含まれているかを確認してください。

```javascript
const arry = ["八宝菜", "餃子", "回鍋肉", "青椒肉絲", "餃子"];

const newSet = new Set(arry);
console.log(newSet);

newSet.add("杏仁豆腐", "餃子");
console.log(newSet);

newSet.delete("回鍋肉");
console.log(newSet);

const hasBabao = newSet.has("八宝菜");
console.log(hasBabao);
```

5. 4.の状態のSetオブジェクトを配列に直して、要素を結合して1つの文字列にしてください。

```javascript
const arry = ["八宝菜", "餃子", "回鍋肉", "青椒肉絲", "餃子"];

const newSet = new Set(arry);
console.log(newSet);

newSet.add("杏仁豆腐", "餃子");
console.log(newSet);

newSet.delete("回鍋肉");
console.log(newSet);

const hasBabao = newSet.has("八宝菜");
console.log(hasBabao);

const arry2 = Array.from(newSet);

const stringArry2 = arry2.join(' ');
console.log(stringArry2);
```

```javascript
// 1 解答 Setを配列で初期化
const set = new Set( [ "八宝菜", "餃子", "回鍋肉", "青椒肉絲", "餃子" ] );
// 2 解答 "杏仁豆腐" と "餃子"を追加してSetオブジェクトの状態を確認
set.add( "杏仁豆腐" );
set.add( "餃子" );
console.log( set );
> {"八宝菜", "餃子", "回鍋肉", "青椒肉絲", "杏仁豆腐"}
// 3 解答 "回鍋肉"を削除
set.delete( "回鍋肉" );
// 4 解答 Setオブジェクトに"八宝菜"が含まれるか確認
console.log( set.has( "八宝菜" ) );
> true
// 5 解答 4のSetオブジェクトを配列にして要素を結合
const arry = Array.from( set );
console.log( arry.join( " " ) );
> 八宝菜 餃子 青椒肉絲 杏仁豆腐
```

### 練習問題 11.4

1. 次のMapオブジェクト(menu)をもとに、1.~3.の操作を行なってください。

```javascript
// [商品名, 価格]
const menu = new Map([
    ["天津飯", 1000],
    ["八宝菜", 500],
    ["ごま団子", 200],
]);
```

1. 300円の"杏仁豆腐"をメニューに追加してください。

```javascript
const menu = new Map([
    ["天津飯", 1000],
    ["八宝菜", 500],
    ["ごま団子", 200],
]);

menu.set("杏仁豆腐", 300);
console.log(menu);
```

2. "天津飯"の値段をコンソールに出力してください。

```javascript
const menu = new Map([
    ["天津飯", 1000],
    ["八宝菜", 500],
    ["ごま団子", 200],
]);

menu.set("杏仁豆腐", 300);
console.log(menu);

const getTianjinfan = menu.get("天津飯");
console.log(getTianjinfan);
```

3. "ごま団子"がメニューに存在するかを確認してください。

```javascript
const menu = new Map([
    ["天津飯", 1000],
    ["八宝菜", 500],
    ["ごま団子", 200],
]);

menu.set("杏仁豆腐", 300);
console.log(menu);

const getTianjinfan = menu.get("天津飯");
console.log(getTianjinfan);

const hasGomadango = menu.has("ごま団子");
console.log(hasGomadango);
```

4. "八宝菜"をメニューから削除してください。

```javascript
const menu = new Map([
    ["天津飯", 1000],
    ["八宝菜", 500],
    ["ごま団子", 200],
]);

menu.set("杏仁豆腐", 300);
console.log(menu);

const getTianjinfan = menu.get("天津飯");
console.log(getTianjinfan);

const hasGomadango = menu.has("ごま団子");
console.log(hasGomadango);

menu.delete("八宝菜");
console.log(menu);
```

```javascript
// [ 商品名, 価格 ]
const menu = new Map( [
[ "天津飯", 1000 ],
[ "八宝菜",500 ],
[ "ゴマ団子", 200 ],
] );
// 1 解答 300円の"杏仁豆腐"をメニューに追加
menu.set( "杏仁豆腐", 300 );
// 2 解答 "天津飯"の値段をコンソールに出力
console.log( menu.get( "天津飯" ) );
> 1000
// 3 解答 "ゴマ団子"がメニューに存在するか確認
console.log( menu.has( "ゴマ団子" ) );
> true
// 4 解答 "八宝菜"をメニューから削除
menu.delete( "八宝菜" );
```

1. 配列の操作
<br>次の配列(orders)に対して、配列のメソッドを使って1.~5.の操作を行なってください。

```javascript
// [商品名, 個数, 金額]
const orders = [
    ["八宝菜", 1, 600],
    ["餃子", 4, 200],
    ["回鍋肉", 1, 500],
    ["青椒肉絲", 12, 700],
];
```

1. 回鍋肉の注文を取り消します。回鍋肉を配列(orders)から除外してください。

```javascript
const orders = [
    ["八宝菜", 1, 600],
    ["餃子", 4, 200],
    ["回鍋肉", 1, 500],
    ["青椒肉絲", 12, 700],
];

const spliceHuiguorou = orders.splice(2, 1);

console.log(spliceHuiguorou);
console.log(orders);
```

2. すべての商品が1000円より安いことを確認してください。

```javascript
const orders = [
    ["八宝菜", 1, 600],
    ["餃子", 4, 200],
    ["回鍋肉", 1, 500],
    ["青椒肉絲", 12, 700],
];

// const spliceHuiguorou = orders.splice(2, 1);

// console.log(spliceHuiguorou);
// console.log(orders);

const price = 1000;

for(const order of orders) {
    if(order[2] >= price) {
        console.log(`${order[0]}は${price}円以上です。`);
    } else {
        console.log(`${order[0]}は${price}円以下です。`);
    }
}
```

3. オーダーの金額の高いものからソートにしてください。

```javascript
const orders = [
    ["八宝菜", 1, 600],
    ["餃子", 4, 200],
    ["回鍋肉", 1, 500],
    ["青椒肉絲", 12, 700],
];

// const spliceHuiguorou = orders.splice(2, 1);

// console.log(spliceHuiguorou);
// console.log(orders);

// const price = 1000;

// for(const order of orders) {
//     if(order[2] >= price) {
//         console.log(`${order[0]}は${price}円以上です。`);
//     } else {
//         console.log(`${order[0]}は${price}円以下です。`);
//     }
// }

const sortOrders = orders.sort((a, b) => {
    if(a[2] < b[2]) {
        return -1;
    }
    if(a[2] > b[2]) {
        return 1;
    }
    return 0;
})

console.log(sortOrders);
```

4. オーダーを次のフォーマットでそれぞれ出力してください。

```
{商品名}を{金額}円で{個数}注文しました。
```

```javascript
for(const order of orders) {
    console.log(`${order[0]}を${order[2]}円で${order[1]}個注文しました。`);
}
```

5. オーダーの合計金額を次のフォーマットで出力してください。

```javascript
const ordersSum = orders.map(order => {
    let result = order[2] * order[1];
    return result;
});

const total = ordersSum.reduce((acc, cur) => {
    return acc + cur;
});

console.log(`合計金額は${total}です。`);
```

2. 友達との関係

Personオブジェクトで作成される人物ごとの友達リストを、MapとSetを使って管理しようと考えました。次のように、1.~6.の指示に従って、残りの処理を実装してください。

```javascript
class Person {
    constructor(fullname, age, gender) {
        this.fullname = fullname;
        this.age = age;
        this.gender = gender;
    }
}

const taro = new Person('太郎', 18, '男');
const jiro = new Person('次郎', 15, '男');
const saburo = new Person('三郎', 10, '男');
const hanako = new Person('花子', 23, '女');
const hanayo = new Person('花代', 18, '女');

const friends = new Map();
```

```javascript
class Person {
    constructor(fullname, age, gender) {
        this.fullname = fullname;
        this.age = age;
        this.gender = gender;
    }
}

const taro = new Person('太郎', 18, '男');
const jiro = new Person('次郎', 15, '男');
const saburo = new Person('三郎', 10, '男');
const hanako = new Person('花子', 23, '女');
const hanayo = new Person('花代', 18, '女');

const friends = new Map();

friends.set(taro, new Set([jiro, hanayo]));
friends.set(hanako, new Set([hanayo, taro, saburo]));

const taroFriends = friends.get(taro);
taroFriends.add(hanako);

const arrayTaroFrineds = Array.from(taroFriends);

const sortTaroFriends = arrayTaroFrineds.sort((a, b) => {
    if(a.age < b.age) {
        return -1
    }
    if(a.age > b.age) {
        return 1;
    }
    return 0;
});

for(const taroFriend of arrayTaroFrineds) {
    console.log(`${taroFriend.fullname},${taroFriend.age},${taroFriend.gender}`);
}

const { gender } = taro;

const someGender = arrayTaroFrineds.filter( friend => {
    if(gender === friend.gender) {
        return friend.gender;
    }
});

console.log(someGender.length);

const arrayFriends = Array.from(friends);
for(const [key, value] of arrayFriends) {
    let friendStr = '';
    for(const friend of value) {
        friendStr += `[${friend.fullname}]`;
    }
    console.log(`私の名前は${key.fullname }です。友達には${friendStr}がいます。`);
}
```

```javascript
// Personクラス
class Person {
    constructor( fullname, age, gender ) {
        this.fullname = fullname;
        this.age = age;
        this.gender = gender;
    }
}
// 登場人物
const taro = new Person( "太郎", 18, "男" );
const jiro = new Person( "次郎", 15, "男" );
const saburo = new Person( "三郎", 10, "男" );
const hanako = new Person( "花子", 23, "女" );
const hanayo = new Person( "花代", 18, "女" );
// 友達(friends)オブジェクト
const friends = new Map;
// 1 解答 jiroとhanayoを格納したSetオブジェクトをtaroをキーにしてfriendsに追加
friends.set( taro, new Set( [ jiro, hanayo ] ) );
// 2 解答 hanakoの友達として1と同様にhanayo, taro, saburoを追加
friends.set( hanako, new Set( [ hanayo, taro, saburo ] ) );
// 3 解答 taroの友達としてhanakoを追加
const taroFriendSet = friends.get( taro );
taroFriendSet.add( hanako );
// 4 解答 taroの友達を年齢順にコンソールに出力
const taroFriendArray = Array.from( taroFriendSet );
// 年齢を降順にソート
taroFriendArray.sort( ( friendA, friendB ) => friendB.age - friendA.age );
    for( const person of taroFriendArray ) {
        console.log( person.fullname );
    }
    const femaleFriends = taroFriendArray.filter( person => {
    // 同性のpersonは取り除く
    return person.gender !== taro.gender;
});
console.log( femaleFriends.length );
> 2 2人
// 6 解答 friendsマップにキーとして登録されている人物とその友達を一覧で出力
for( const [ person, friendSet ] of friends ) { // ループと分割代入の併用
let friendStr = "";
for( const friend of friendSet ) { // 友達が格納されたSetをループ
    friendStr += `[${friend.fullname}]`;
    }
    console.log( `私の名前は${ person.fullname }です。友達には${ friendStr }がいます。` )
}
> 私の名前は太郎です。友達には[次郎][花代][花子]がいます。
> 私の名前は花子です。友達には[花代][太郎][三郎]がいます。
// 6 別解(発展)
// 分割代入やforEach、reduceなどを使った場合
friends.forEach( ( friendSet, person ) => {
// Setを配列に変換してreduceを使う
let friendStr = Array.from( friendSet )
    .reduce( ( accu, { fullname } ) => `${accu}[${fullname}]`, "");
    console.log( `私の名前は${ person.fullname }です。友達には${ friendStr }がいます。` )
});
```

3. WeakMapとMapの違い
<br>Mapの場合はすべてのデータ型をキーとして利用できますが、WeakMapの場合は`オブジェクト`しかキーとして利用できません。また、Mapの場合はfor...of文などを使用した`反復処理`が可能ですが、WeakMapではできません。キーとして利用したオブジェクトが参照不可になった場合、Mapではキーと値のペアが残り続けるため、`メモリリーク`のリスクが発生します。一方WeakMapではキーオブジェクトが参照不可になるとコレクション内のペアも削除対象となります。この性質を`弱参照`と言います。

## 反復処理

### 練習問題 12.1

```javascript
function rangeIterator(min, max = 10) {
    let i = min;
    return {
        next() {
            if(i < max) {
                return {
                    done: false,
                    value: i++
                }
            } else {
                return {
                    done: true
                }
            }
        }
    }
}

const it = rangeIterator(1, 4);
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
```

```javascript
function rangeIterator( min, max ) {
    let value = min; // 初期値としてminを設定
        return {
            next() {
                if( value < max ) { // valueがmaxより小さいとき
                    return {
                        done: false,
                        value: value++ // valueを値として設定してから+1を行う
                    }
                } else {
                    return {
                        done: true
                }
            }
        }
    }
}
const iterator = rangeIterator( 1, 3 );
console.log( iterator.next().value );
> 1
console.log( iterator.next().value );
> 2
console.log( iterator.next().value );
```

### 練習問題 12.2

```javascript
const html = `<h1>見出し1</h1>
<h2>見出し2</h2>
<h3>見出し3</h3>
<header>ヘッダー </header>`;

function* hTagGen( htmlStr ) {
// h1~h6のマッチを確認
const matches = html.matchAll(/<(h[1-6])>(.+)<\/\1>/g);
for (const matched of matches) {
    // matchedの2番目にはテキストが含まれている
        yield matched[2];
    }
}

// 確認
for( const text of hTagGen( html ) ) {
    console.log( text );
}
```

### 練習問題 12.3

1. 引数で渡した任意個数の製品本体価格から、税込総額を計算して返す関数(totalPrice)を作成してください。

- 第1引数には税率(%)を指定する。
- 第2引数以降には、任意の個数の製品本体価格を指定する。
- 戻り値が整数になるように、少数点以下は切り捨てる

```javascript
const totalPrice = (tax, ...args) => {
    const arry = [...args];
    const sumPrice = arry.reduce((acc, cur) => {
        return acc + cur;
    });

    return Math.floor((1 + tax / 100) * sumPrice);
}

console.log(totalPrice(10, 100, 200, 300));
```

```javascript
function totalPrice( taxRate, ...productPrices ) {
    let sum = 0;
    for ( const price of productPrices ) {
        sum += price;
    }
    // 小数点以下の切り捨てにはMath.floor()を使う
    return Math.floor( ( 1 + taxRate / 100 ) * sum );
}
```

### 練習問題 12.4

1. スプレッド演算子を使い、次の配列に対して、1.~3.の操作を行なってください。

```javascript
const chuka = ["回鍋肉", "青椒肉絲", "餃子"];
const desert = ["杏仁豆腐", "ゴマ団子"];
```

1. chukaを複製してください。

```javascript
const chuka = ["回鍋肉", "青椒肉絲", "餃子"];
const desert = ["杏仁豆腐", "ゴマ団子"];

let copyOfChuka = [...chuka];
console.log(copyOfChuka);
```

2. chukaとdesertを統合した配列を作成してください。

```javascript
const chuka = ["回鍋肉", "青椒肉絲", "餃子"];
const desert = ["杏仁豆腐", "ゴマ団子"];

let copyOfChuka = [...chuka];
console.log(copyOfChuka);

copyOfChukaAndDesert = [...chuka, ...desert];
console.log(copyOfChukaAndDesert);
```

3. chukaとdesertの間に"坦々麺"を追加した配列を作成してください。

```javascript
const chuka = ["回鍋肉", "青椒肉絲", "餃子"];
const desert = ["杏仁豆腐", "ゴマ団子"];

let copyOfChuka = [...chuka];
console.log(copyOfChuka);

copyOfChukaAndDesert = [...chuka, ...desert];
console.log(copyOfChukaAndDesert);

copyOfChukaAndDesertAddDandanmian = [...chuka, "坦々麺", ...desert];
console.log(copyOfChukaAndDesertAddDandanmian);
```

```javascript
const chuka = [ "回鍋肉", "青椒肉絲", "餃子" ];
const desert = [ "杏仁豆腐", "ゴマ団子" ];
// 1 解答 chukaを複製
const newChuka = [ ...chuka ];
> ["回鍋肉", "青椒肉絲", "餃子"]
// 2 解答 chukaとdesertを結合した配列を作成
const merged1 = [ ...chuka, ...desert ];
> ["回鍋肉", "青椒肉絲", "餃子", "杏仁豆腐", "ゴマ団子"]
// 3 解答 chukaとdesertの間に"担々麵"を追加した配列を作成
const merged2 = [ ...chuka, "担々麵", ...desert ];
> ["回鍋肉", "青椒肉絲", "餃子", "担々麵", "杏仁豆腐", "ゴマ団子"]
```

1. イテレーターの作成
<br>引数で与えた範囲の値をステップごとに返すイテレーターを生成するgenStep関数を作成してください。

```javascript
function genStep(min, max = 10, setp) {
    let i = min - setp;
    return {
        next() {
            if(i >= max) {
                return {
                    done: true
                }
            } else {
                return {
                    done: false,
                    value: i += setp
                }
            }
        }
    }
}

const it = genStep(4, 10, 2);
let a = it.next();

while(!a.done) {
    console.log(a.value);
    a = it.next();
}
```

2. ジェネレーターの作成
<br>関数を実行したときの挙動は次のようになる。

```javascript
function* genStep(min, max = 10, setp) {
    for(let i = min; i <= max; i+= setp) {
        yield i;
    }
}

const it = genStep(4, 10, 2);
let a = it.next();

while(!a.done) {
    console.log(a.value);
    a = it.next();
}
```

3. イテレータを使った反復オブジェクトの作成

```javascript
Array.prototype[ Symbol.iterator ] = function () {
    let index = 0;
    // インスタンスにアクセスする際にはthisを使用
    let arry = this;
    return {
        next() {
            if ( index < arry.length ) {
                // インデックスが配列の長さより小さい場合には反復処理を継続
                return {
                    done: false,
                    // インデックスと値をペアで返す
                    value: [ index, arry[ index++ ] ],
                };
            } else {
                return {
                    done: true,
                };
            }
        },
    };
};
for ( let item of [ "Hello", "World" ] ) {
    console.log( item );
}
```

4. ジェネレータを使った反復可能オブジェクトの作成

```javascript
Array.prototype[ Symbol.iterator ] = function* () {
    let arry = this;
    for( let index = 0; index < arry.length; index++ ) {
    // インデックスと値をペアで返す
    yield [ index, arry[ index ] ];
    }
}
for ( let item of [ "Hello", "World" ] ) {
    console.log( item );
}
```

5. スプレッド演算子

```javascript
class Shape {
    constructor(options) {
        const defaults = {
            type: '四角形',
            textColor: '黒',
            borderColor: 'なし',
            bgColor: '白'
        };
        this.options = {...defaults, ...options};
    }

    drow() {
        const { type, textColor, borderColor, bgColor } = this.options;
        console.log(`形: [${type}] 文字色[${textColor}] 枠色[${borderColor}] 背景色[${bgColor}]`);
    }
}

const triangle = new Shape({type: '三角形'});
triangle.drow(); // 形[三角形] 文字色[黒] 枠色[なし] 背景色[白]
```

## 非同期処理

### 練習問題 13.1

1. 次のコードのログA~Cが出力される順番を答えてください。

```javascript
setTimeout(() => {
    console.log("A");
}, 1000);

setTimeout(() => {
    console.log("B");
});

console.log("C");
```

2. 次のdelay関数を1.~3.の指示のとおり実行してください。

```javascript
function delay(fn, message, ms) {
    setTimeout(function() {
        fn(message);
    }, ms);
}
```

### 練習問題 13.2

1. 1秒後に「こんにちは」とコンソールに表示してください。

```javascript
function delay(fn, message, ms) {
    setTimeout(function() {
        fn(message);
    }, ms);
}

delay(console.log, 'こんにちは', 1000);
```

2. 2秒後に「さようなら」とアラートを表示してください。

```javascript
function delay(fn, message, ms) {
    setTimeout(function() {
        fn(message);
    }, ms);
}
delay(alert, 'さようなら', 2000);
```

3. delay関数をネストして呼び出し、1秒後に「1秒経ちました。」、2秒後に「さらに1秒経ちました。」とコンソールに表示してください。

```javascript
function delay(fn, message, ms) {
    setTimeout(function() {
        fn(message);
        setTimeout(function() {
            fn(message);
        }, ms);
    }, ms);
}

delay(console.log, '1秒たちました。', 1000);
```

```javascript
function delay( fn, message, ms ) {
    setTimeout( function() {
        fn( message );
    }, ms );
}
// 1 解答 1秒後に「こんにちは」とコンソールに表示
delay( console.log, "こんにちは", 1000 );
// 2 解答 2秒後に「さようなら」とアラートを表示
delay( alert, "さようなら", 2000 );
// 3 解答 delay関数をネストして呼び出し、1秒後に「1秒経ちました。」、
// 2秒後に「さらに1秒経ちました。」とコンソールに表示
delay( function( message1 ) {
console.log( message1 ); // 「1秒経ちました。」
// delayのコールバック関数内でさらにdelayを実行(delay関数のネスト)
delay( function( message2 ) {
    console.log( message2 ); // 「さらに1秒経ちました。」
    }, "さらに1秒経ちました。", 1000 ); // さらに1秒後
}, "1秒経ちました。", 1000 ); // 1秒後
```

### 練習問題 13.3

1. 次の処理を、Promiseを使って実装してください。

setTimeoutで1秒間待機した後に、現在時刻Dateオブジェクトを取得し、その時の秒数が奇数の場合、偶数の場合で、次の要件に当てはまるようにコンソールメッセージを出力してください。

- 奇数の場合catchメソッドで「${秒数}は奇数のため、エラーとします。」と表示
- 偶数の場合thenメソッドで「${秒数}は奇数のため、成功とします。」と表示
- 処理終了時、奇数、偶数にかかわらず、処理が終了するときに「処理を終了します。」と表示

```javascript
let instance = new Promise((resolve, reject) => {

    setTimeout(() => {

        const date = new Date();
        const dateSeconds = date.getSeconds();

        if(dateSeconds % 2 === 0) {
            resolve(dateSeconds);
        } else {
            reject(dateSeconds);
        }

    }, 1000);

});

instance = instance.then(value => {
    console.log(`${value}は偶数のため、成功とします。`);
});

instance = instance.catch(value => {
    console.log(`${value}は奇数のため、エラーとします。`);
});
```

### 練習問題 13.4

```javascript
new Promise( ( resolve, reject ) => {
    setTimeout( () => {
        const date = new Date; // 現在日時の取得
        const second = date.getSeconds(); // 秒数の取得
        // 2で割った余りが0、または1で条件分岐
        if( second % 2 ) {
            // 奇数
            reject( second ); // catchへ
        } else {
            // 偶数
            resolve( second ); // thenへ
        }
    }, 1000 ); // 1秒待機
}).then( second => {
console.log( `${second}は偶数のため、成功とします。` );
}).catch( second => {
console.error( `${second}は奇数のため、エラーとします。` );
}).finally( () => {
console.log( "処理を終了します。" );
})
```

```javascript
function promiseFactory( count ) {
    // 戻り値としてPromiseインスタンスを返す
    return new Promise( resolve => {
        setTimeout( () => {
            console.log( count ); // ログに表示
            count += 2; // 現在のカウントに2を加算
            resolve( count ); // 次のthenを実行
        }, 1000 );
    });
}
promiseFactory( 0 ) // 0からカウントをスタート
.then( count => { return promiseFactory( count ); } )
// .then( count => promiseFactory( count ) ) のように省略可能
.then( count => { return promiseFactory( count ); } )
.then( count => { return promiseFactory( count ); } );
```

### 練習問題 13.5

- Promise.allは全てのPromiseが`fulfilled`のステータスに遷移するとthenメソッドに移行します。1つでもステータスが`reject`に遷移するとcatchメソッドは呼び出されます。

- Promise.raceは、いずれかのPromiseが`settled`のステータスになったタイミングでthenメソッドまたはcatchメソッドを実行します。

- Promise.anyは、いずれかのPromiseは`fulfilled`になったタイミングでthenメソッドに処理を移行します。また、`すべて`のPromiseの状態がrejectedになったときにはcatchメソッドを実行します。

- Promise.allSettledは`すべて`のPromiseインスタンスの状態が`settled`になったときにthenメソッドに処理を移行します。また、thenメソッドのコールバック関数には、それぞれのメソッドを移行します。また、thenメソッドのコールバック関数には、それぞれPromiseのステータスの状態(status)を含むオブジェクトが配列に格納されて渡されます。

### 練習問題 13.6

```javascript
console.log('A');

setTimeout(() => {
    queueMicritask(() => console.log('B'));
    console.log('C');
});

Promise.resolve().then(() => console.log('D'));

console.log('E');
```

- A => D => E => C => B
  - A => E => D => C => B

### 練習問題 13.7

```javascript
function action(actionName, duration) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`${actionName}`);
            resolve();
        }, duration);
    });
}

async function makeAction() {
    await action('散歩', 500);
    await action('朝食', 200);
    await Promise.all([action('昼食', 500), action('おしゃべり', 100)]);
    await action('夕食', 600);
    await action('夜食', 400);
}

makeAction();
```

### 練習問題 13.8

```javascript
(async () => {
    const response = await fetch('../../teachyourself/practice13/weathernews.json');
    const json = await response.json();

    console.log(json['0']);
})();
```

```javascript
<script>
async function myFetchFn() {
    // ファイルを取得
    const res = await fetch( "daily.json" );
    // JSONファイルの中身の文字列をオブジェクトに変換
    const jsonObj = await res.json();
    console.log( jsonObj.word );
}
// 関数を実行
myFetchFn();
</script>
```

1. 非同期処理とは
<br>ブラウザのJavaScriptを実行するスレッドのことを`メインスレッド`と言います。`メインスレッド`はシングルスレッドのため、`メインスレッド`で実行されるコードはすべて`同期`に処理されます。一方、非同期処理の場合は`メインスレッド`から一度切り離されて、`タスクキュー`にタスクとして追加され、`コールスタック`がからになっtタイミングを、`イベントループ`によって検知し、再び`メインスレッド`に戻ってきて実行されます。

2. Promiseの使い方

```javascript
function run(personName) {
    return new Promise((resolve, reject) => {
        const time = Math.floor(Math.random() * 11);

        setTimeout(() => {
            if(time % 4 === 0) {
                reject({personName});
            } else {
                resolve({persontime, time});
            }
        }, time);
    });
}
```

```javascript
function run(personName) {
    return new Promise((resolve, reject) => {
        const time = Math.floor(Math.random() * 11);

        setTimeout(() => {
            if(time % 4 === 0) {
                reject({personName});
            } else {
                resolve({personName, time});
            }
        }, time);
    });
}

const printTime = ({personName, time}) => console.log(`${personName}のタイムは${time}です。`);

run('太郎')
.then(resolve => {
    printTime(resolve);
    return run('太郎');
}).then(resolve => {
    printTime(resolve);
    return run('次郎');
}).then(resolve => {
    printTime(resolve);
    return run('三郎');
}).catch(({personName}) => {
    console.error(`${personName}がこけました。レースやり直し! `);
});
```

```javascript
Promise.any( [ run( "太郎" ), run( "次郎" ), run( "三郎" ) ] )
.then( ( { personName, time } ) => {
    console.log( `一番最初にゴールしたのは${personName}で、タイムは${time}です。` );
})
.catch( () => {
    console.error( "レースやり直し! " );
});
```

```javascript
Promise.all( [ run( "太郎" ), run( "次郎" ), run( "三郎" ) ] )
.then( ( results ) => {
    for( const { personName, time } of results ) {
        console.log( `${personName}のタイムは${time}です。` );
    }
})
.catch( ( { personName } ) => {
    console.error( `${personName}がこけました。レースやり直し! ` );
});
```

```javascript
Promise.race( [ run( "太郎" ), run( "次郎" ), run( "三郎" ) ] )
.then( ( { personName } ) => {
    console.log( `${personName}がゴールしました。` );
}).catch( ( { personName } ) => {
    console.error( `${personName}がコケました。` );
});
```

```javascript
Promise.race( [ run( "太郎" ), run( "次郎" ), run( "三郎" ) ] )
.then( ( { personName } ) => {
    console.log( `${personName}がゴールしました。` );
}).catch( ( { personName } ) => {
    console.error( `${personName}がコケました。` );
});
```

```javascript
function run( personName ) {
... 省略
}
const printTime = ( { personName, time } ) => console.log( `${personName}のタイムは${time}です。` );
// ここからがPromiseチェーンの書き換え部分
// まず、awaitを使いたいのでasync functionを定義する
async function startRelay() {
let result;
try {
// run関数の戻り値はPromiseインスタンスなので、awaitを先頭に付けることで待機する
result = await run( "太郎" );
printTime( result ); // 太郎の結果
result = await run( "次郎" ); // 次郎スタート
printTime( result ); // 次郎の結果
result = await run( "三郎" ); // 三郎スタート
printTime( result ); // 三郎の結果
} catch ( { personName } ) { // 誰かこけたとき
// Promiseのcatchメソッドはcatch節で書き換え可能
console.error( `${personName}がこけました。レースやり直し! ` );
}
}
// リレー開始
startRelay();
```

```javascript
async function fetchFruit(fileName) {
    const response = await fetch(fileName);
    const json = await response.json();
    return json;
}

(async () => {
    const fruitsJson = await fetchFruit('../../teachyourself/practice13/fruit.json');
    const fruitsArry = Object.entries(fruitsJson);

    const fruitTag = await fetchFruit('../../teachyourself/practice13/fruit-tag.json');
    const fruitsTagArry = Object.entries(fruitTag);

    for([key, value] of fruitsArry) {
        for([k, v] of fruitsTagArry) {
            if(value['key'] === k) {
                console.log(`${value['value']}は次の特徴があります。(${v[0]}, ${v[1]}, ${v[2]})`);
            }
        }
    }
})();
```

```javascript
// JSONファイルをフェッチして、オブジェクトへの変換まで行う関数
// thenの実行結果が戻り値となるため、Promiseインスタンスが返る
function fetchJSON( file ) {
    return fetch( file ).then( res => res.json() );
}
// メイン関数
// JSONファイルを取得して、指定のログを出力する
async function main() {
    // ファイルの取得とJSONメソッドの実行
    // fruits, fruitTagsにはJSONがオブジェクトに変換された状態になる
    const fruits = await fetchJSON( "fruit.json" );
    const fruitTags = await fetchJSON( "fruit-tag.json" );
    // fruitsは配列なのでfor...ofで反復処理を記述できる
    // それぞれのオブジェクトのキー(key)と値(value)を取り出す
    for( const { key, value } of fruits ) {
        // keyでタグを取得
        const tags = fruitTags[ key ];
        // タグは配列のためjoinで文字列として結合
        const tagStr = tags.join( "," );
        // ログ出力
        console.log( `${value}は次の特徴があります。(${ tagStr })` );
    }
}
// メイン関数の実行
main();
```

## DOM

### 練習問題 14.1

```javascript
const idAttr = document.querySelector('.idAttr');
idAttr.textContent = 'これは変更した段落です。';
const allIdAttr = document.querySelectorAll('.idAttr');

const arry = Object.entries(allIdAttr);
console.log(arry[0][1].textContent);

const allPTag = document.querySelectorAll('p');
console.log(allPTag);

const arry2 = Object.entries(allPTag);

for([key, value] of arry2) {
    console.log(key, value.textContent = 'さらに変更した段落です。');
}

const textElem = document.querySelector('[type=text]');
textElem.value = 'Dummyな値';
console.log(textElem);

const senzo = document.querySelector('#classAttr');

const span = document.querySelector("span");
span.closest("p");

document.querySelector("h1 ~ input[type='password']");

document.querySelector("#idAttr > *");

document.querySelector("input[type='text'] + *");
```

### 練習問題 14.2

```javascript
const textContent = document.querySelector('.textContent');
textContent.textContent = '<strong>textContentとinnnerHTML</strong>';

const innerHTML = document.querySelector('.innerHTML');
innerHTML.innerHTML = '<strong>textContentとinnnerHTML</strong>';
```

### 練習問題 14.3

```javascript
// 2秒ごとにcallbackを実行するPromiseチェーン用関数
function moveElement( callback ) {
    // Promiseインスタンスを返す関数を戻り値とする
        return () => new Promise( resolve => {
        setTimeout(() => {
            callback();
            resolve();
        }, 2000);
    });
}
// ターゲット要素
const source = document.querySelector( "#source" );
const answer1 = moveElement(() => {
// 解答 1 h1タグ内のspanタグの前に移動
    const h1 = document.querySelector( ".title" );
    h1.prepend( source );
});
const answer2 = moveElement(() => {
    // 解答 2 h1タグの直後に移動
    const h1 = document.querySelector( ".title" );
    h1.after( source );
});

const answer3 = moveElement(() => {
    // 解答 3 wrapタグの子要素の末尾に移動
    const wrap = document.querySelector( ".wrap" );
    wrap.append( source );
});

const answer4 = moveElement(() => {
    // 解答 4 liタグの2番目の文字の前に移動
    const list = document.querySelector( ".list" );
    const targetLi = list.children[ 1 ];
    targetLi.prepend( source );
});
// Promiseチェーンの実行
answer1()
.then( answer2 )
.then( answer3 )
.then( answer4 )
// ※ Promiseチェーンが難しく感じるようであれば、
// 以下のようにしても同じ挙動になります。
setTimeout( () => {
// 解答 1
setTimeout( () => {
// 解答 2
// ... setTimeoutのネストを解答分だけ作成
} , 2000 );
} , 2000 );
```

### 練習問題 14.4

```javascript
const aTag = document.querySelectorAll('a');

for(const a of aTag) {
    const url = a.getAttribute('href');
    if(/google\.com/.test(url)) {
        a.getAttribute('href', 'https://www.yahoo.co.jp/');
    }
}
```

### 練習問題 14.5

```javascript
const target = document.querySelector('#target');
const targetRect = target.getBoundingClientRect();

console.log(targetRect.y);
console.log(targetRect.right);
console.log(targetRect.width);
console.log(targetRect.height);
```

### 練習問題 14.6

```javascript
const divTag = document.querySelector('div');
divTag.style.backgroundColor = '#888';
console.log(divTag);
divTag.classList.add('color-red');
```

1. DOM
<br>DOMとは、JavaScriptのオブジェクトの形で`HTML`構造を表したもので、JavaScriptではDOMオブジェクトを通して、`HTML`の取得・変更を行います。`HTML`全体の構造は`Document`オブジェクトにツリー構造で格納されます。これを`DOMツリー`と呼びます。また、`DOMツリー`を構成する個々のオブジェクトは`Node`と呼ばれ、これにはHTML要素以外にHTMLコメントやテキスト情報も含まれます。一方、`DOMツリー`の中でも、HTML要素をDOMとして表したものを`Element`と呼びます。

2. 親子関係を表すプロパティ

```javascript
// ※それぞれの取得結果をconsole.logを使って確認してみてください。
const me = document.querySelector("#me");
// 解答 1 子要素をすべて取得
me.children;
// 解答 2 子要素の中の最初の要素を取得
me.firstElementChild;
// 解答 3 子要素の中の最後の要素を取得
me.lastElementChild;
// 解答 4 次の兄弟要素
me.nextElementSibling;
// 解答 5 前の兄弟要素
me.previousElementSibling;
// 解答 6 親要素
me.parentElement;
// 解答 7 次の兄弟要素の子要素
me.nextElementSibling.children;
// 解答 8 前の兄弟要素の子要素の中の最後の要素を取得
me.previousElementSibling.lastElementChild;
```

3. セレクタと要素の変更

```javascript
const mainTitle = document.querySelector('#main-title');
mainTitle.textContent = 'タイトル';

const subTitle = document.querySelector('.sub-title');
subTitle.innerHTML = '<b>サブタイトル</b>';

const me = document.querySelector('.me');
const firstChild = me.children[0];
me.append(firstChild);

const secondChild = document.querySelector('.child.order-2');
me.prepend(secondChild.cloneNode(true));

for(const child of me.children) {
    child.style.color = child.dataset.color;
}

const commentBody = document.querySelector("#comment-body");
commentBody.textContent = 
`#meのborderの上端とHTMLの上端の間隔は${me.offsetTop}pxです。\n` +
`#meのborderの左端とHTMLの左端の間隔は${me.offsetLeft}pxです。\n` +
`ビューポートの上端から#meの枠線の上端までの間隔は${me.getBoundingClientRect().y}px
です。\n` +
`ビューポートの左端から#meの枠線の左端までの間隔は${me.getBoundingClientRect().x}px
です。\n` +
`#meのborderを含めた高さは${me.offsetHeight}pxです。\n` +
`#meのborderを含めた横幅は${me.offsetWidth}pxです。`;
```

## イベント

## 練習問題 15.1

```javascript
const body = document.querySelector('body');
const target = body.querySelector('#target');

target.onmouseenter = function() {
    target.style.background = 'red';
}
target.onmouseleave = function() {
    target.style.background = 'none';
}
```

## 練習問題 15.2

```javascript
const container = document.querySelector("#container");
const target = document.querySelector("#target");

function setEvents(element) {
    const datasets = Object.entries(element.dataset);
    for(const [eventType, color] of datasets) {
        element.addEventListener( eventType, () => {
            element.style.background = color;
        });
    }
}

setEvents(container);
setEvents(target);
```

## 練習問題 15.3

```javascript
const container = document.querySelector( "#container" );
const wrapper = document.querySelector( "#wrapper" );
const target = document.querySelector( "#target" );

function clickAlert( element, isCapture = false ) {
    element.addEventListener( "click", () => {
        const spanText = element.firstElementChild.textContent;
        alert( `${spanText}のクリックイベントが発火しました。` );
    }, isCapture );
}

clickAlert( container );
clickAlert( wrapper );
clickAlert( target );
```

## モジュール

1. モジュールとは、一般に`インターフェイス`が明確に定められた意味のある機能のまとまりのことです。`インターフェイス`のみを外部から使用可能な状態にすることによって、`疎結合`の状態を作成できます。`疎結合`の状態を保つことはコードの`可読性``保守性``再利用性`を保つために非常に重要です。ES6で追加されたESModulesは`ブラウザ`と`Node.js`で使用可能ですが、CommonJSは`Node`のみで使用可能です。

## Node.js

1. Node.jsとは、PC上でJavaScriptを実行するためのソフトウェアです。Node.js上で動作するコードも`ECMAScript`の仕様に準拠するために基本的にはブラウザで動作する`window`オブジェクトは仕様できず、代わりに`global`オブジェクトが使用できます。Node.jsではパッケージ管理ソフトとして`npm`が標準で組み込まれていますが、Facebookが中心となって開発をしている`yarn`というパーケージ管理ソフトをインストールして使用することもできます。
