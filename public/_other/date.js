const whichDay = targetDate => {
    const days = targetDate.getDay();
    switch (days) {
        case 0:
            return 'Sun';
        case 1:
            return 'Mon';
        case 2:
            return 'Tue';
        case 3:
            return 'Wed';
        case 4:
            return 'Thu';
        case 5:
            return 'Fri';
        case 6:
            return 'Sat';
        default:
            console.error('SomeError');
            break;
    }
}

const addZero = target => {
    if(target.toString().length === 1) {
        return '0' + target;
    }
    return target;
}

export const now = () => {
    const today = new Date();
    const day = whichDay(today);
    const month = today.getMonth() + 1;
    const date = today.getDate();
    const year = today.getFullYear();
    const hours = today.getHours();
    const minutes = today.getMinutes();
    return `${year},${addZero(month)},${date},${day} ${hours}:${addZero(minutes)}`;
}
