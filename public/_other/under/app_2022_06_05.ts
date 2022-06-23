const add = (a: number, b: number = 1) => {
    return a + b;
}
console.log(add(2));
const hello = (value: string) => value;
console.log(hello('hello'));
const bye = (value: string) => value;
console.log(bye('bye-bye'));
const printOutput: (output: string | number) => void = output => {
    console.log(output);
};
printOutput(add(2, 5));
