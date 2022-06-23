function hello(personName) {
    if(typeof personName === 'string') {
        console.log(`こんにちは${personName}`);
    } else {
        console.log('引数に文字列を渡してください。');
    }
}

hello('Tom');
