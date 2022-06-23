const rabbit = 'ウサギ';
const horse = 'ウマ';
const elephant = 'ゾウ';
const others = '何かわかりません';

let animal = horse;

switch (animal) {
    case rabbit:
        console.log(rabbit);
        break;
    case horse:
        console.log(horse);
        break;
    case elephant:
        console.log(elephant);
        break;

    default:
        console.log(others);
        break;
}