interface Admin {
    name: string;
    privileges: string[];
}

interface Emploee {
    name: string;
    starDate: Date;
}

type ElevatedEmploee = Admin & Emploee;

const e1: ElevatedEmploee = {
    name: 'Max',
    privileges: ['create-server'],
    starDate: new Date(),
}

type Combinable = string | number;
type Numeric = number | boolean;

type Univarsal = Combinable & Numeric;

function add(a: string, b: string): string;
function add(a: number, b: number): number;
function add(a: Combinable, b: Combinable) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}

const result = add('Hello', 'TypeScript');
// const result = add(1, 1);
result.split(' ');

const fetchedUserDate = {
    id: 'u1',
    name: 'user1',
    job: {
        title: 'Developer',
        description: 'TypeScript'
    }
};

console.log(fetchedUserDate?.job?.title);

const userInput = undefined;

const storeDate = userInput ?? 'DEFAULT';

console.log(storeDate);

// type UnknownEmployee = Emploee | Admin;

// function printEmployeeInformation(emp: UnknownEmployee):void {
//     if ('privileges' in emp) {
//         console.log(emp.privileges);
//     }
//     if ('starDate' in emp) {
//         console.log(emp.starDate);
//     }
// }

// printEmployeeInformation(e1);

// class Car {
//     drive() {
//         console.log('Driving...');
//     }
// }

// class Truck {
//     drive() {
//         console.log('Truck Driving...');
//     }

//     loadCargo(amount: number) {
//         console.log('Loading some cargo' + amount);
//     }
// }

// type Vihecle = Car | Truck;

// const v1 = new Car();
// const v2 = new Truck();

// function useVihecle(vihecle: Vihecle) {
//     vihecle.drive();

//     if (vihecle instanceof Truck) {
//         vihecle.loadCargo(1000);
//     }
// }

// useVihecle(v1);
// useVihecle(v2);

// interface Bird {
//     type: 'bird',
//     flyingSpeed: number;
// }

// interface Horse {
//     type: 'horse',
//     runningSpeed: number;
// }

// type Animal = Bird | Horse;

// function moveAnimal(animal: Animal) {
//     let speed;
//     switch (animal.type) {
//         case 'bird':
//             speed = animal.flyingSpeed;
//             break;
//         case 'horse':
//             speed = animal.runningSpeed;
//     }
//     console.log('Moving Speed' + speed);
// }

// moveAnimal({ type: 'bird', flyingSpeed: 10 });

// // const paragraph = document.querySelector('p');

// // const paragraph = document.getElementById('message-output');

// // const userInputElemnt = <HTMLInputElement>document.getElementById('user-input')!;

// // const userInputElemnt = document.getElementById(
// //     'user-input'
// // )! as HTMLInputElement;

// // userInputElemnt.value = 'hello';

// const userInputElemnt = document.getElementById(
//     'user-input'
// );

// if (userInputElemnt) {
//     (userInputElemnt as HTMLInputElement).value = 'hello';
// }

// interface ErrorContainer {
//     [prop: string]: string
// }

// const errorBag: ErrorContainer = {
//     email: 'This email is not correct.',
//     username: 'Can not includes symbol in username.'
// };
