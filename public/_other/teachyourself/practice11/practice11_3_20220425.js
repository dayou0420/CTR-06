const arry = ["八宝菜", "餃子", "回鍋肉", "青椒肉絲", "餃子"];

const newSet = new Set(arry);
console.log(newSet);

newSet.add("杏仁豆腐", "餃子");
console.log(newSet);

newSet.delete("回鍋肉");
console.log(newSet);

const hasBabao = newSet.has("八宝菜");
console.log(hasBabao);

const arry2 = Array.from(newSet);

const stringArry2 = arry2.join(' ');
console.log(stringArry2);
