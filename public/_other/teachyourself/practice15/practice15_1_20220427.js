const body = document.querySelector('body');
const target = body.querySelector('#target');

target.onmouseenter = function() {
    target.style.background = 'red';
}
target.onmouseleave = function() {
    target.style.background = 'none';
}
