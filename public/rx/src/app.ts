import { Observable } from 'rxjs';

const observable = new Observable<string>((observer: any) => {
    try {
            observer.next('Hey guys!');
            observer.next('How are you?');

            setInterval(() => {
                observer.next('I am good');
            }, 2000);

            // observer.complete();
            // observer.next('This will not send');

        } catch (err) {
            observer.error(err);
    }
});

const observer = observable.subscribe({
    next: (x: any) => addItem(x),
    error: (error: any) => addItem(error),
    complete: () => addItem('Completed')
});

const observer2 = observable.subscribe({
    next: (x: any) => addItem(x),
});

observer.add(observer2);

setTimeout(() => {
    observer.unsubscribe();
}, 6001)

function addItem(val: string) {
    const node = document.createElement('li');
    const textNode = document.createTextNode(val);
    node.appendChild(textNode);
    document.getElementById('output')!.appendChild(node);
}
