function add(n1: number, n2: number, showResult: boolean, phrase: string) {

    // if(typeof n1 !== 'number' || typeof n2 !== 'number') {
    //     throw new Error('Invalid');
    // }
    // console.log(typeof n1);

    /*
     * 型の指定なし
     * Type Inference
     * 型推論
     */

    const result = n1 + n2;

    if(showResult) {
        console.log(phrase + result);
    } else {
        return result;
    }
}

/*
 * 型の指定なし
 * Type Inference
 * 型推論
 */

let number1: number;
number1 = 5;
// number1 = 'Hello';
const number2 = 2.8;
const printResult = true;
let resultPhrase = 'Result: ';
// resultPhrase = 0;

add(number1, number2, printResult, resultPhrase);

