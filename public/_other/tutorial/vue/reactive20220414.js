const handler = {
    get(target, key, receiver) {
        const res = Reflect.get(target, key, receiver);
        console.log('%c[reactive:get', 'background: #198754; color: #fff', key, res);
        track(target);
        return res;
    },
    set(target, key, value, receiver) {
        const res = Reflect.set(target, key, value, receiver);
        console.log('%c[reactive:set]', 'background: #dc3545; color: #fff', key, value);
        trigger(target);
        return res;
    }
}

function reactive(target) {
    return new Proxy(target, handler);
}

let acticeEffect = null;
function effect(fn) {
    acticeEffect = fn;
    acticeEffect();
}

const targetMap = new WeakMap();
function track(target) {
    console.log('%c[effect:register]', 'background: #0d6efd; color: #fff', target, acticeEffect);
    targetMap.set(target, acticeEffect);
}

function trigger(target) {
    const effect = targetMap.get(target);
    effect();
}

export { effect, trigger, reactive };
