const divs = document.querySelectorAll('div');

let duration = 0;

function getCurentDuration() {
    return duration += 500;
}

const clickhandler = function(event) {
    const divEl = event.currentTarget;

    setTimeout(function() {

        divEl.style.background = 'var(--red)';

        setTimeout(function() {

            divEl.style.background = 'none';

        }, 1000);

    }, getCurentDuration());
}


divs.forEach(function(div) {
    div.addEventListener('click', clickhandler);
});

const div2 = document.querySelector('#div2');
div2.addEventListener('click', function(event) {
    event.stopPropagation()
});

document.body.addEventListener('click', clickhandler)
