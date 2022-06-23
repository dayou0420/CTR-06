const chuka = ["回鍋肉", "青椒肉絲", "餃子"];
const desert = ["杏仁豆腐", "ゴマ団子"];

let copyOfChuka = [...chuka];
console.log(copyOfChuka);

copyOfChukaAndDesert = [...chuka, ...desert];
console.log(copyOfChukaAndDesert);

copyOfChukaAndDesertAddDandanmian = [...chuka, "坦々麺", ...desert];
console.log(copyOfChukaAndDesertAddDandanmian);
