const dt = new Date('2022-05-12T03:12:13.333');

const whichDays = (targetDate) => {
    const days = targetDate.getDay();
    switch (days) {
        case 0:
            console.log('Sun');
            break;
        case 1:
            console.log('Mon');
            break;
        case 2:
            console.log('Tue');
            break;
        case 3:
            console.log('Wed');
            break;
        case 4:
            console.log('Thu');
            break;
        case 5:
            console.log('Fri');
            break;
        case 6:
            console.log('Sat');
            break;
        default:
            console.error('SomeError');
            break;
    }
}

console.log(dt);
dt.setDate(15);
whichDays(dt);
dt.setMonth(8);
whichDays(dt);
