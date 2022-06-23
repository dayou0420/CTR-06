const handler = {
    get(targert, key, receiver) {
        const res = Reflect.get(targert, key, receiver);
        return res;
    },
    set(targert, key, value, receiver){
        const res = Reflect.set(targert, key, value, receiver);
        trigger();
        return res;
    }
}

function reactive(targert) {
    return new Proxy(targert, handler);
}

let activeEffect = null;

function effect(fn) {
    activeEffect = fn;
}
function trigger() {
    activeEffect();
}

export { effect, trigger, reactive };
