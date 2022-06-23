function rangeIterator(min, max = 10) {
    let i = min;
    return {
        next() {
            if(i < max) {
                return {
                    done: false,
                    value: i++
                }
            } else {
                return {
                    done: true
                }
            }
        }
    }
}

const it = rangeIterator(1, 4);
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

