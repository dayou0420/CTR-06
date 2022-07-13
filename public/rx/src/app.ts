import { Observable } from 'rxjs';
import { fromEvent } from 'rxjs';

// const observable = new Observable<string>((observer: any) => {
//     try {
//             observer.next('Hey guys!');
//             observer.next('How are you?');

//             setInterval(() => {
//                 observer.next('I am good');
//             }, 2000);

//             // observer.complete();
//             // observer.next('This will not send');

//         } catch (err) {
//             observer.error(err);
//     }
// });

// const observer = observable.subscribe({
//     next: (x: any) => addItem(x),
//     error: (error: any) => addItem(error),
//     complete: () => addItem('Completed')
// });

// setTimeout(() => {
//     observer.unsubscribe();
//     const observer2 = observable.subscribe({
//         next: (x: any) => addItem(`Subscribe2 ${x}`)
//     })
// }, 1000);

// const observer2 = observable.subscribe({
//     next: (x: any) => addItem(x),
// });

// observer.add(observer2);

// setTimeout(() => {
//     observer.unsubscribe();
// }, 6001);

const observable = fromEvent(document, 'mousemove');

setTimeout(() => {
    const subscription = observable.subscribe({
        next: (x: any) => addItem(x)
    });
}, 2000);

function addItem(val: string) {
    const node = document.createElement('li');
    const textNode = document.createTextNode(val);
    node.appendChild(textNode);
    document.getElementById('output')!.appendChild(node);
}
