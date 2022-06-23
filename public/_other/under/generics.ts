// const names: Array<string> = ['Max', 'Manuel'];
// names[0].split(' ');

// const promise: Promise<string> = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('End');
//     }, 2000);
// });

// promise.then(data => {
//     data.split(' ');
// });

function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

const mergedObj = merge({ name: 'Max', hobbies: ['Sports'] }, { age: 30 });
console.log(mergedObj.age);

interface Lenghy {
    length: number;
}

function countAndDescribe<T extends Lenghy>(element: T): [T, string] {
    let descriptionText = 'Nothing value';

    if (element.length > 0) {
        descriptionText = 'Value: ' + element.length + 'Counted';
    }
    return [element, descriptionText];
}

console.log(countAndDescribe('hello'));

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    return 'Value: ' + obj[key];
}

extractAndConvert({ name: 'Max' }, 'name');

class DataStrage<T extends string | number | boolean> {
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1); // -1
    }

    getItems() {
        return [...this.data];
    }
}

const textStorage = new DataStrage<string>();
textStorage.addItem('Data1');
textStorage.addItem('Data2');
textStorage.removeItem('Data1');
console.log(textStorage.getItems());

const numberStorage = new DataStrage<number>();

// const objStorage = new DataStrage<object>();
// const obj = { name: 'Max' };
// objStorage.addItem(obj);
// objStorage.addItem({ name: 'Manu' });

// objStorage.removeItem(obj);
// console.log(objStorage.getItems());

interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}

function createCourceGoal(title: string, description: string, date: Date): CourseGoal {
   let courseGoal: Partial<CourseGoal> = {};
   courseGoal.title = title;
   courseGoal.description = description;
   courseGoal.completeUntil = date;
   return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ['Max', 'Anna'];
// names.push('Manu');
// names.pop();
