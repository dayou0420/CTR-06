// const getBody = document.querySelector('body');
// console.log(getBody);
// getBody.style.height = '2000px';

// const intervalId = setInterval(()=> {
//     if(window.scrollY > 1000) {
//         if(window.confirm('画面をとじますか?')) {
//             closed();
//         } else {
//             clearImmediate(intervalId);
//         }
//         confirm('画面をとじますか?');
//     }
// }, 1000);

const startDate = new Date('2023-05-20 00:00');
const endDate = new Date('2023-06-12 00:00');
const dayUnit = 1000 * 60 * 60 * 24;
const diffDays = Math.abs(endDate - startDate) / dayUnit;
console.log(startDate);
console.log(endDate);
console.log(diffDays);
