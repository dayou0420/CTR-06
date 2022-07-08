var titile: string = 'Angular';
titile = 'Angular!';

var n: number = 9;

var isOpen: boolean = true;

var keywords: (string | number)[] = ['name', 'email', 'body', 0];

var payment: [number, string, number] = [1, 'apple', 0];

var object: { [key:string]: string } = { name: 'bob', id: 'test' };

var post: object = [{ id: 12, content: 'lorem ipsum' }];

var sample: string | number | boolean;

sample = 'Bob';
sample = 100;
sample = true;

enum KeyCode {
    BackSpace = 8,
}

console.log(KeyCode.BackSpace);

enum ErrorCode {
    OK = 200,
    BAD_RESPONSE = 400,
    UNAUTHORIZED = 401
}

console.log(ErrorCode.OK);

enum Character {
    Bob,
    Dad,
    Mam
}

console.log(Character.Bob);

var something: any = 'foo';
something = 100;
something = true;
something = { id: 1 };

var el: Element | null = document.querySelector('#app');
var foo: undefined = undefined;

var unkown = 'string';
//unkown = 10;
