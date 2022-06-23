const chuka = ['八宝菜', '餃子', '回鍋肉', '青椒肉絲'];

console.log(chuka);
chuka.push('天津飯');
console.log(chuka);
chuka.unshift('チャーハン');
console.log(chuka);
chuka.shift();
console.log(chuka);
chuka.pop();
console.log(chuka);
chuka.shift(chuka[2]);
console.log(chuka);

const found = chuka.indexOf('餃子');
console.log(chuka[found]);

const dofu = ['杏仁豆腐', 'ごま豆腐'];
const chuka2 = chuka.concat(dofu);
console.log(chuka2);

console.log('\n==========');

const chuka3 = new Array();

for(let i = 1; i <= 3; i++) {
    chuka3.push(chuka2[i]);
}
console.log(chuka3);

const reverseChuka = chuka3.reverse();
console.log(reverseChuka);

const includesBabao = chuka3.includes('八宝菜');
console.log(includesBabao);
