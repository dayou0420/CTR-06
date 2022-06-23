const totalPrice = (tax, ...args) => {
    const arry = [...args];
    const sumPrice = arry.reduce((acc, cur) => {
        return acc + cur;
    });

    return Math.floor((1 + tax / 100) * sumPrice);
}

console.log(totalPrice(10, 100, 200, 300));
