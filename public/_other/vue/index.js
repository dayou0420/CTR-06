// import { reactive, effect, computed } from './reactive.js';
// import { createVNode, patch } from './renderer.js';
// import { nodeOps } from './nodeOps.js';
// import { queueJob } from './scheduler.js';

// const obj1 = reactive({
//     a: 0,
//     b: 1
// });

// const computedValue = computed(() => {
//     return obj1.a + 10;
// });

// obj1.a = 1;
// console.log(computedValue.value);

// obj1.a = 2;
// console.log(computedValue.value);

// const container = nodeOps.qs('#app');
// const prevVNode = createVNode();
// const nextVNode1 = createVNode('div', { class: 'green'}, [
//     createVNode('div', { class: 'green'}, 'hello')
// ]);
// const nextVNode2 = createVNode('div', { class: 'green'}, [
//     createVNode('div', { class: 'green'}, 'bye')
// ]);
// patch(prevVNode, nextVNode1, container);
// patch(nextVNode1, nextVNode2, container);

// queueJob(() => {
//     console.log('a');
// })

// console.log('end');
