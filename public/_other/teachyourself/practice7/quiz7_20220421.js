/**
 * ケース1
 * この場合には2秒後にダイヤログで「こんにちは」が出力されます。
 */

// function delayMessageFactory(callback, perSecond) {
//     function delayMessage(alertMessage) {
//        setTimeout(callback(alertMessage), perSecond);
//     }
//     return delayMessage;
// }

// const dialog = delayMessageFactory(alert, 2000);
// dialog("こんにちは");

// const delayMessageFactory = (callback, perSecond) => 
//     delayMessage = alertMessage => 
//         setTimeout(callback(alertMessage), perSecond);

// const dialog = delayMessageFactory(alert, 2000);
// dialog("こんにちは");

/**
 * ケース2
 * この場合には1秒後にコンソールで「こんばんわ」が出力されます。
 */

// const delayMessageFactory = (callback, perSecond) => {
//     const delayMessage = logMessage => {
//         setTimeout(callback(logMessage), perSecond)
//     }
//     return delayMessage;
// }

// const log = delayMessageFactory(console.log, 2000);
// log("こんばんは");

// const delayMessageFactory = (callback, perSecond) => 
//     delayMessage = logMessage => 
//         setTimeout(callback(logMessage), perSecond);

// const log = delayMessageFactory(console.log, 2000);
// log("こんばんは");
