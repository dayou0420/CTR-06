const date = new Date('2022-05');

const firstDay = new Date( date.getFullYear(), date.getMonth(), 1 );
const lastDay = new Date( date.getFullYear(), date.getMonth() + 1, 0 );
const thirtyDaysLater = new Date( date.getFullYear(), date.getMonth(), date.getDate() + 30 );
const twentyMonthsLater = new Date( thirtyDaysLater.getFullYear(), thirtyDaysLater.getMonth() + 20, thirtyDaysLater.getDate() );

const whichDay = targetDate => {
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

whichDay(firstDay);
whichDay(lastDay);
console.log(thirtyDaysLater);
console.log(twentyMonthsLater);
