const arry = [ 10, "文字列", 20, true, 23, 47 ];

let sum = 0;

for(let i of arry) {
    if(typeof i === 'number' ) {
        let val = i;
        sum += val;
    }
}

console.log(sum);
