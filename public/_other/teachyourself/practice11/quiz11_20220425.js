// const orders = [
//     ["八宝菜", 1, 600],
//     ["餃子", 4, 200],
//     ["回鍋肉", 1, 500],
//     ["青椒肉絲", 12, 700],
// ];

// const spliceHuiguorou = orders.splice(2, 1);

// console.log(spliceHuiguorou);
// console.log(orders);

// const price = 1000;

// for(const order of orders) {
//     if(order[2] >= price) {
//         console.log(`${order[0]}は${price}円以上です。`);
//     } else {
//         console.log(`${order[0]}は${price}円以下です。`);
//     }
// }

// const sortOrders = orders.sort((a, b) => {
//     if(a[2] < b[2]) {
//         return -1;
//     }
//     if(a[2] > b[2]) {
//         return 1;
//     }
//     return 0;
// })

// console.log(sortOrders);

// for(const order of orders) {
//     console.log(`${order[0]}を${order[2]}円で${order[1]}個注文しました。`);
// }

// for(const order of orders) {
//     console.log(`${order[0]}を${order[2]}円で${order[1]}個注文しました。`);
// }

// const ordersSum = orders.map(order => {
//     let result = order[2] * order[1];
//     return result;
// });

// const total = ordersSum.reduce((acc, cur) => {
//     return acc + cur;
// });

// console.log(`合計金額は${total}です。`);

class Person {
    constructor(fullname, age, gender) {
        this.fullname = fullname;
        this.age = age;
        this.gender = gender;
    }
}

const taro = new Person('太郎', 18, '男');
const jiro = new Person('次郎', 15, '男');
const saburo = new Person('三郎', 10, '男');
const hanako = new Person('花子', 23, '女');
const hanayo = new Person('花代', 18, '女');

const friends = new Map();

friends.set(taro, new Set([jiro, hanayo]));
friends.set(hanako, new Set([hanayo, taro, saburo]));

const taroFriends = friends.get(taro);
taroFriends.add(hanako);

const arrayTaroFrineds = Array.from(taroFriends);

const sortTaroFriends = arrayTaroFrineds.sort((a, b) => {
    if(a.age < b.age) {
        return -1
    }
    if(a.age > b.age) {
        return 1;
    }
    return 0;
});

for(const taroFriend of arrayTaroFrineds) {
    console.log(`${taroFriend.fullname},${taroFriend.age},${taroFriend.gender}`);
}

const { gender } = taro;

const someGender = arrayTaroFrineds.filter( friend => {
    if(gender === friend.gender) {
        return friend.gender;
    }
});

console.log(someGender.length);

const arrayFriends = Array.from(friends);
for(const [key, value] of arrayFriends) {
    let friendStr = '';
    for(const friend of value) {
        friendStr += `[${friend.fullname}]`;
    }
    console.log(`私の名前は${key.fullname }です。友達には${friendStr}がいます。`);
}