import { Observable, subscribeOn } from 'rxjs';

import { fromFetch } from 'rxjs/fetch';
import { switchMap, of, catchError, map, from, fromEvent } from 'rxjs';

/**
 * RxJS 7
 */

const triggerButton = document.querySelector('button#trigger') as HTMLElement;

// const subscription = fromEvent<MouseEvent>(triggerButton, 'click')
// .subscribe(
//     event => console.log(event.type, event.x, event.y)
// );


const triggerClick$ = new Observable<MouseEvent>(subscriber => {
    // triggerButton.addEventListener('click', event => {
    //     console.log('Event callback executed');
    //     subscriber.next(event);
    // });

    const clickHandlerFn = (event: any) => {
        console.log('Event callback executed');
        subscriber.next(event);
    }

    triggerButton.addEventListener('click', clickHandlerFn);

    return () => {
        triggerButton.removeEventListener('click', clickHandlerFn);
    }
});

const subscription = triggerClick$.subscribe(
    event => console.log(event.type, event.x, event.y)
);

setTimeout(() => {
    console.log('Unsubscribe');
    subscription.unsubscribe();
}, 5000);

// fromEvent<MouseEvent>(triggerButton, 'click').subscribe(
//     event => console.log(event.type, event.x, event.y)
// );

// const triggerClick$ = new Observable<MouseEvent>(subscriber => {
//     triggerButton.addEventListener('click', event => {
//         subscriber.next(event);
//     });
// });

// triggerClick$.subscribe(
//     event => console.log(event.type, event.x, event.y)
// );

// const somePromise = new Promise((resolve, reject) => {
//     // resolve('Resilve!');
//     reject('Rejected!');
// });

// const observableFromPromise$ = from(somePromise);

// observableFromPromise$.subscribe({
//     next: value => console.log(value),
//     error: err => console.log('Error: ', err),
//     complete: () => console.log('Completed')
// });

// from(['Alice', 'Ben', 'Charlie']).subscribe({
//     next: value => console.log(value),
//     complete: () => console.log('Completed')
// });

// ourOwnOf('Alice', 'Ben', 'Charlie').subscribe({
//     next: value => console.log(value),
//     complete: () => console.log('Completed')
// });

// const name$ = new Observable<string>(subscriber => {
//     subscriber.next('Alice');
//     subscriber.next('Ben');
//     subscriber.next('Charlie');
//     subscriber.complete();
// });

// name$.subscribe({
//     next: value => console.log(value),
//     complete: () => console.log('Completed')
// });

// function ourOwnOf(...args: string[]): Observable<string> {
//     return new Observable<string>(subscriber => {
//         for(let i = 0; i < args.length; i++) {
//             subscriber.next(args[i]);
//         }
//         subscriber.complete();
//     });
// }

// const helloButton = document.querySelector('button#hello')!;

// const helloClick$ = new Observable<MouseEvent>(subscriber => {
//     helloButton.addEventListener('click', (event) => {
//         subscriber.next(event as MouseEvent);
//     });
// });

// helloClick$.subscribe(event => console.log('Sub: 1', event.type, event.x, event.y));

// setTimeout(() => {
//     console.log('Subscription 2 starts');
//     helloClick$.subscribe(event => console.log('Sub: 2', event.type, event.x, event.y));
// }, 5000);

// const ajax$ = ajax<any>('https://random-data-api.com/api/name/random_name');

// ajax$.subscribe(
//     data => console.log('Sub 1:', data.response.first_name)
// );

// ajax$.subscribe(
//     data => console.log('Sub 2:', data.response.first_name)
// );

// ajax$.subscribe(
//     data => console.log('Sub 3:', data.response.first_name)
// );

// const interval$ = new Observable<number>(subscriber => {
//     let counter = 1;

//     const intervalId = setInterval(() => {
//         console.log('Emitted', counter);
//         subscriber.next(counter++);
//     }, 2000);

//     return () => {
//         clearInterval(intervalId);
//     };
// });

// const subscription = interval$.subscribe(value => console.log(value));

// setTimeout(() => {
//     console.log('Unsubscribe');
//     subscription.unsubscribe();
// }, 7000);

// const observable$ = new Observable<string>(subscriber => {
//     console.log('Observable executed');
//     subscriber.next('Alice');
//     subscriber.next('Ben');

//     setTimeout(() => subscriber.error(new Error('Failure')), 2000);

//     setTimeout(() => {
//         subscriber.next('Charlie');
//         subscriber.complete();
//     }, 4000);

//     return () => {
//         console.log('Teardown');
//     };
// });

// console.log('Before subscribe');
// observable$.subscribe({
//     next: value => console.log(value),
//     error: err => console.log(err.message),
//     complete: () => console.log('Completed')
// });
// console.log('After subscribe');

// const observable$ = new Observable<string> (subscriber => {
//     console.log('Observable executed');
//     subscriber.next('Alice');
//     setTimeout(() => subscriber.next('Ben'), 2000);
//     setTimeout(() => subscriber.next('Charlie'), 4000);
// });

// console.log(observable$);

// console.log('Subscrition 1 start');
// observable$.subscribe(value => console.log('Subscriotion 1:', value));

// setTimeout(() => {
//     console.log('Subscrition 2 start');
//     observable$.subscribe(value => console.log('Subscriotion 2:', value));
// }, 1000);

// const someObservable$ = new Observable<string>(subscriber => {
//   subscriber.next('Alice');
//   subscriber.next('Ben');
//   subscriber.next('Charlie');
//   subscriber.complete();
// });

// someObservable$.subscribe(value => console.log(value));

// const observer = {
//     next: (value: any) => console.log(value)
// }

// observable$.subscribe({
//     next: (value: any) => console.log(value)
// });

// const subscription = observable$.subscribe(value => console.log(value));

// setTimeout(() => {
//     console.log('Unsubscribe');
//     subscription.unsubscribe();
// }, 3000);

/**
 * fromFetch content
 */

const data$ = fromFetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0').pipe(
    switchMap(response => {
        if (response.ok) {
            // OK return data
            return response.json();
        } else {
            // Server is returning a status requiring the client to try something else.
            return of({ error: true, message: `Error ${ response.status }` });
        }
    }),
    catchError(err => {
        // Network or other error, handle appropriately
        console.error(err);
        return of({ error: true, message: err.message })
    })
).pipe(
    map(value => value),
    map(value => value.results)
);

data$.subscribe({
    next: result => { for (const pokemon of result) { addItem(pokemon.name);} },
    complete: () => addItem('done: 151')
});

function addItem(val: string) {
    const node = document.createElement('li');
    const textNode = document.createTextNode(val);
    node.appendChild(textNode);
    document.getElementById('output')!.appendChild(node);
}

/**
 * DOM content
 */

// const observable = new Observable<string>((observer: any) => {
//     try {
//             observer.next('Hey guys!');
//             observer.next('How are you?');

//             setInterval(() => {
//                 observer.next('I am good');
//             }, 2000);

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
// }, 6001);

// function addItem(val: string) {
//   const node = document.createElement('li');
//   const textNode = document.createTextNode(val);
//   node.appendChild(textNode);
//   document.getElementById('output')!.appendChild(node);
// }
