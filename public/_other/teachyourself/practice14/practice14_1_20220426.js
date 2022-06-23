const idAttr = document.querySelector('.idAttr');
idAttr.textContent = 'これは変更した段落です。';
const allIdAttr = document.querySelectorAll('.idAttr');

const arry = Object.entries(allIdAttr);
console.log(arry[0][1].textContent);

const allPTag = document.querySelectorAll('p');
console.log(allPTag);

const arry2 = Object.entries(allPTag);

for([key, value] of arry2) {
    console.log(key, value.textContent = 'さらに変更した段落です。');
}

const textElem = document.querySelector('[type=text]');
textElem.value = 'Dummyな値';
console.log(textElem);

const senzo = document.querySelector('#classAttr');

const span = document.querySelector("span");
span.closest("p");

document.querySelector("h1 ~ input[type='password']");

document.querySelector("#idAttr > *");

document.querySelector("input[type='text'] + *");
