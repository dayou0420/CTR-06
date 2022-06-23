const breakTestArry = ["ぬけない", "not break", "break", "この前で抜ける"];

for(elem of breakTestArry) {
    if(elem === 'break') {
        console.log(elem);
        break;
    }
    console.log(elem);
}
