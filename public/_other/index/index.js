const character = document.querySelector('#character');

const block = document.querySelector('#block');

const msg = document.querySelector('.msg');

const jump = () => {

    if(character.classList != 'animate') {
        character.classList.add('animate');
    }

    setTimeout(function() {
        character.classList.remove('animate');
    }, 300);
}

const checkDead = setInterval(() => {

    const characterTop = 
        parseInt(window.getComputedStyle(character)
            .getPropertyValue('top'));

    const blockLeft = 
        parseInt(window.getComputedStyle(block)
            .getPropertyValue('left'));

    if(blockLeft < 20 
        && blockLeft > 0 
            && characterTop >= 130) {
                block.style.animation = 'none';
                block.style.display = 'none';
                msg.innerHTML = 'Oops';
            }
}, 10);

const counterFactory = () => {
    let num = 0;

    const counter = () => {
        num++;
        if(document.querySelector('.msg').innerHTML === 'Oops') {
            document.querySelector('.counter').innerHTML = 0;
        } else {
            document.querySelector('.counter').innerHTML = num;
        }
    }

    return counter;
}

const count = counterFactory();
const btn = document.querySelector('button');

btn.addEventListener('click', jump);
btn.addEventListener('click', count);
