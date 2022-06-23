const todos = [
    { title: '晩御飯', priority: 2, completd: false },
    { title: 'ゴミ出し', priority: 1, completd: true },
    { title: '食材の買い出し', priority: 3, completd: false },
    { title: '洗濯', priority: 2, completd: true },
    { title: '録画の視聴', priority: 1, completd: false },
];

const newSet = new Set();

for(const todo of todos) {
    switch (todo.completd) {
        case true:
            console.log(`${todo.title}は完了!`);
            break;
        case false:
            newSet.add(todo);
            console.log(`${todo.title}をやらないと!`);
            break;

        default:
            console.error('Opps');
            break;
    }
}

const notCompleted = Array.from(newSet);

notCompleted.sort((a, b) => {
    return b.priority - a.priority;
});

console.log(notCompleted);
console.log(todos);

const printTodo = targetObject => {
    for(const todo of targetObject) {
        switch (todo.completd) {
            case true:
                console.log(`${todo.title}は完了!`);
                break;
            case false:
                console.log(`${todo.title}をやらないと!`);
                break;
    
            default:
                console.error('Opps');
                break;
        }
    }
}

printTodo(notCompleted);
printTodo(todos);
