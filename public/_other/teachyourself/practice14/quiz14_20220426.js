// const mainTitle = document.querySelector('#main-title');
// mainTitle.textContent = 'タイトル';

// const subTitle = document.querySelector('.sub-title');
// subTitle.innerHTML = '<b>サブタイトル</b>';

// const me = document.querySelector('.me');
// const firstChild = me.children[0];
// me.append(firstChild);

// const secondChild = document.querySelector('.child.order-2');
// me.prepend(secondChild.cloneNode(true));

// for(const child of me.children) {
//     child.style.color = child.dataset.color;
// }

// const commentBody = document.querySelector("#comment-body");
// commentBody.textContent = 
// `#meのborderの上端とHTMLの上端の間隔は${me.offsetTop}pxです。\n` +
// `#meのborderの左端とHTMLの左端の間隔は${me.offsetLeft}pxです。\n` +
// `ビューポートの上端から#meの枠線の上端までの間隔は${me.getBoundingClientRect().y}px
// です。\n` +
// `ビューポートの左端から#meの枠線の左端までの間隔は${me.getBoundingClientRect().x}px
// です。\n` +
// `#meのborderを含めた高さは${me.offsetHeight}pxです。\n` +
// `#meのborderを含めた横幅は${me.offsetWidth}pxです。`;


const todoList = document.querySelector('#todo-list');

const todoItemTmpl = document.querySelector('#todo-item-tmpl');

const todoItem = todoItemTmpl.content;

function createTodoItem(value) {
    const newItem = todoItem.cloneNode(true);
    const newTitle = newItem.querySelector('.todo-title');
    newTitle.textContent = value;
    todoList.append(newItem);
}

createTodoItem('First');
createTodoItem('Second');
createTodoItem('Third');

function deleteTodoItem(item) {
    item.remove();
}

setTimeout(() => {
    deleteTodoItem(todoList.firstElementChild);
}, 1000);

function completeTodoItem(item) {
    item.classList.toggle('completed');
}

setTimeout(() => {
    completeTodoItem(todoList.lastElementChild);
}, 2000);
