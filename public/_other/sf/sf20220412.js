// class Pet {
//     printInfo() {
//         console.log(`${this.name} is ${this.age} years old`);
//     }
// }

// class Cat extends Pet {
//     constructor(name, age) {
//         super();
//         this.name = name;
//         this.age = age;
//     }
// }

// const myCat = new Cat(name = 'Manolita', age = 6);
// myCat.printInfo();

// const petMixin = {
//     printInfo() {
//         console.log(`${this.name} is ${this.age} years old`);
//     }
// }

// class Cat {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }

// const myCat2 = new Cat(name = 'Oli', age = 15);
// Object.assign(myCat2, petMixin);

// myCat2.printInfo();

// class Pet {
//     printInfo() {
//         console.log(`${this.name} is ${this.age} years old`);
//     }
// }

// class Robot {
//     recharge() {
//         console.log(`${this.name} says: Battery fully charged!`);
//     }
// }

// class RoboCat extends Pet, Robot {
//     constructor(name, age) {
//         super();
//         this.name = name;
//         this.age = age;
//     }
// }

// const myRoboCat = new RoboCat(name = 'R2D2', age = 10);

// myRoboCat.printInfo();
// myRoboCat.recharge();

// const PetMixin =  (SuperClass) => 
//     class extends SuperClass {
//         printInfo() {
//             console.log(`${this.name} is ${this.age} years old`);
//         }
//     }

// class Robot {
//     recharge() {
//         console.log(`${this.name} says: Battery fully charged!`);
//     }
// }

// class RoboCat extends PetMixin(RoboCat) {
//     constructor(name, age) {
//         super();
//         this.name = name;
//         this.age = age;
//     }
// }

// const myRoboCat2 = new RoboCat(name = 'R2D2', age = 42);
// myRoboCat2.printInfo();
// myRoboCat2.recharge();
