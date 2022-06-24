const nodeOps = {
    qs(selector, scope) {
        return (scope || document).querySelector(selector);
    },
    html(target, value) {
        target.innerHTML = value;
    },
    on(target, eventType, callback) {
        target.addEventListener(eventType, () => {
            callback();
        });
    }
};

nodeOps.on(document, 'DOMContentLoaded', () => {
    const body = nodeOps.qs('body');
    const title = nodeOps.qs('.title', body);

    const nowTime = function() {
        const date = new Date();
        return date;
    }

    const whichDay = targetDate => {
        const day = 'day';
        const days = targetDate.getDay();
        switch (days) {
            case 0:
                return 'Sun' + day;
            case 1:
                return 'Mon' + day;
            case 2:
                return 'Tues' + day;
            case 3:
                return 'Wednes' + day;
            case 4:
                return 'Thurs' + day;
            case 5:
                return 'Fri' + day;
            case 6:
                return 'Satur' + day;
            default:
                console.error('SomeError');
                break;
        }
    }

    const greet = (() => {
        const nowHour = nowTime().getHours();
        const day = whichDay(nowTime());
        const good = 'Good';
        // const you = 'U';
        const you = '';

        if((nowHour >= 5) && (nowHour < 12)) {
            return `${good} ${day} Morning ${you}`;
        } else if(nowHour === 12) {
            return `${day} Noon ${you}`;
        } else if((nowHour >= 13) && (nowHour <= 18)) {
            return `${good} ${day} Afternoon ${you}`;
        } else {
            return `${good} ${day} Evening ${you}`;
        }
    })();

    setTimeout(() => nodeOps.html(title, greet), 1000);
});
