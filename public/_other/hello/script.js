document.addEventListener('DOMContentLoaded', () => {

    const btn = document.querySelector('#btn');
    const textAni = new TextAnimation('.animate-title');
    btn.addEventListener('click', textAni.animate.bind(textAni));

});

class TextAnimation {
    constructor(el) {
        this.el = document.querySelector(el);
        this.el.innerHTML = this._greeting();
        this.chars = this.el.innerHTML.trim().split('');
        this.el.innerHTML = this._splitText();
    }

    animate() {
        this.el.classList.toggle('inview');
    }

    _splitText() {
        return this.chars.reduce((acc, curr) => {
            curr = curr.replace(/\s+/, '&nbsp;');
            return `${acc}<span class="char">${curr}</span>`;
        }, '');
    }

    _greeting() {
        const nowTime = new Date();
        const nowHour = nowTime.getHours();

        if((nowHour > 5) && (nowHour < 12)) {
            return 'Good morning';
        }  else if((nowHour <= 13) || (nowHour >= 18)) {
            return 'Good afternoon';
        } else {
            return 'Good evening';
        }
    }
}
