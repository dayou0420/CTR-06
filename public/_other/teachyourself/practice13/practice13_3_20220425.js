let instance = new Promise((resolve, reject) => {

    setTimeout(() => {

        const date = new Date();
        const dateSeconds = date.getSeconds();

        if(dateSeconds % 2 === 0) {
            resolve(dateSeconds);
        } else {
            reject(dateSeconds);
        }

    }, 1000);

});

instance = instance.then(value => {
    console.log(`${value}は偶数のため、成功とします。`);
});

instance = instance.catch(value => {
    console.log(`${value}は奇数のため、エラーとします。`);
});
