// function run(personName) {
//     return new Promise((resolve, reject) => {
//         const time = Math.floor(Math.random() * 11);

//         setTimeout(() => {
//             if(time % 4 === 0) {
//                 reject({personName});
//             } else {
//                 resolve({personName, time});
//             }
//         }, time);
//     });
// }

// const printTime = ({personName, time}) => console.log(`${personName}のタイムは${time}です。`);

// run('太郎')
// .then(resolve => {
//     printTime(resolve);
//     return run('太郎');
// }).then(resolve => {
//     printTime(resolve);
//     return run('次郎');
// }).then(resolve => {
//     printTime(resolve);
//     return run('三郎');
// }).catch(({personName}) => {
//     console.error(`${personName}がこけました。レースやり直し! `);
// });

async function fetchFruit(fileName) {
    const response = await fetch(fileName);
    const json = await response.json();
    return json;
}

(async () => {
    const fruitsJson = await fetchFruit('../../teachyourself/practice13/fruit.json');
    const fruitsArry = Object.entries(fruitsJson);

    const fruitTag = await fetchFruit('../../teachyourself/practice13/fruit-tag.json');
    const fruitsTagArry = Object.entries(fruitTag);

    for([key, value] of fruitsArry) {
        for([k, v] of fruitsTagArry) {
            if(value['key'] === k) {
                console.log(`${value['value']}は次の特徴があります。(${v[0]}, ${v[1]}, ${v[2]})`);
            }
        }
    }
})();
