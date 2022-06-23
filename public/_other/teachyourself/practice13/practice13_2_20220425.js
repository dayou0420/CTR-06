function delay(fn, message, ms) {
    setTimeout(function() {
        fn(message);
        setTimeout(function() {
            fn(message);
        }, ms);
    }, ms);
}

// delay(console.log, 'こんにちは', 1000);
// delay(alert, 'さようなら', 2000);
delay(console.log, '1秒たちました。', 1000);
