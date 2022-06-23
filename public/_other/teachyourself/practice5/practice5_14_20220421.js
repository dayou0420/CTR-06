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
