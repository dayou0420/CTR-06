document.addEventListener('DOMContentLoaded', () => {

    const World = function(arry) {
        this.arry = arry;
        this.getName = function() {
            const randNum = Math.floor( Math.random() * this.arry.length );
            const name = this.arry[randNum];
            return name;
        }
        this.hello = function() {
            const nowTime = new Date();
            const nowHour = nowTime.getHours();
            const helloId = document.querySelector('.title');
    
            if((nowHour > 5) && (nowHour < 12)) {
                helloId.innerHTML = `Morning ${this.getName()}`;
            }  else {
                helloId.innerHTML = `Hello ${this.getName()}`;
            }
        }
    }

    const world = new World(['Tom', 'Bob', 'John', 'Taro', 'Kate']);
    world.hello();

    const elem = document.querySelector('.title');
    const str = elem.innerHTML.trim().split('');

    let concatStr = '';

    for(let c of str) {
        c = c.replace(/\s+/, '&nbsp;');
        concatStr += `<span class="char">${c}</span>`;
    }

    elem.innerHTML = concatStr;

    console.log(concatStr);
});
