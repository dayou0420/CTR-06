const person: {
    name: string,
    age: number,
    hobbies: string[],
    role: [number, string]
} = {
    name: 'Bob',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author']
};

let favoriteActivities: string[];
favoriteActivities = ['Sport'];

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}

person.role.push('admin');
person.role[1] = 10;

person.role = [0, 'admin', 'user'];

const ADMIN = 0;
const READ_ONLY = 1;
const AUTHOR = 2;

enum Role {
    ADMIN,
    READ_ONLY,
    AUTHOR
}

const person = {
    name: 'Bob',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN,
};

let favoriteActivities: string[];
favoriteActivities = ['Sport'];

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}

if(person.role === Role.ADMIN) {
    console.log('Admin User');
}


