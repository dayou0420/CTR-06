// function genStep(min, max = 10, setp) {
//     let i = min - setp;
//     return {
//         next() {
//             if(i >= max) {
//                 return {
//                     done: true
//                 }
//             } else {
//                 return {
//                     done: false,
//                     value: i += setp
//                 }
//             }
//         }
//     }
// }

// const it = genStep(4, 10, 2);
// let a = it.next();

// while(!a.done) {
//     console.log(a.value);
//     a = it.next();
// }

// function* genStep(min, max = 10, setp) {
//     for(let i = min; i <= max; i+= setp) {
//         yield i;
//     }
// }

// const it = genStep(4, 10, 2);
// let a = it.next();

// while(!a.done) {
//     console.log(a.value);
//     a = it.next();
// }

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
