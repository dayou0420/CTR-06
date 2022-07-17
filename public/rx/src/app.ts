import { Observable } from 'rxjs';

import { fromFetch } from 'rxjs/fetch';
import { switchMap, of, catchError, map } from 'rxjs';

/**
 * RxJS 7
 */

const observable$ = new Observable<string>(subscriber => {
    console.log('Observable executed');
    subscriber.next('Alice');
});

console.log('Before subscribe');
observable$.subscribe(value => console.log(value));
console.log('After subscribe');

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
