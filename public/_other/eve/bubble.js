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

document.body.addEventListener('click', clickhandler)
