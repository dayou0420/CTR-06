const calcAreaOfCircle = (radius, pi = Math.PI) => {
    const result = pi * radius * radius;
    return result;
}

console.log(calcAreaOfCircle(5));
console.log(calcAreaOfCircle(5, 3.14));
