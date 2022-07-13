import { Observable } from 'rxjs';

const someObservable$ = new Observable<string>(subscriber => {
  subscriber.next('Alice');
  subscriber.next('Ben');
  subscriber.next('Charlie');
  subscriber.complete();
});

someObservable$.subscribe(value => console.log(value));

const observable = new Observable<string>((observer: any) => {
    try {
            observer.next('Hey guys!');
            observer.next('How are you?');

            setInterval(() => {
                observer.next('I am good');
            }, 2000);

        } catch (err) {
            observer.error(err);
    }
});

const observer = observable.subscribe({
    next: (x: any) => addItem(x),
    error: (error: any) => addItem(error),
    complete: () => addItem('Completed')
});

setTimeout(() => {
    observer.unsubscribe();
}, 6001);

function addItem(val: string) {
  const node = document.createElement('li');
  const textNode = document.createTextNode(val);
  node.appendChild(textNode);
  document.getElementById('output')!.appendChild(node);
}
