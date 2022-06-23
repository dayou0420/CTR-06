// import { effect, reactive } from "./reactivity.esm-browser.js";

// const obj = reactive({ a: 0 });
// effect(() => {
//     console.log(obj.a);
// });
// obj.a = 1;

import { reactive, effect } from "./reactive20220411.js";

const obj = reactive({
    a: 0
});

effect(() => {
    console.log(obj.a);
});

// trigger();
obj.a = 1;
// trigger();
