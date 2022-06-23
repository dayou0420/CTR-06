import { nodeOps } from './nodeOps.js';
import { createVnode, patch } from './renderer.js';

function createApp(args) {
    const { render } = args;
    const app = {};
    app.mount = function(selector) {
        const container = nodeOps.qs(selector)
        const nextVnode = render();
        patch(app.vnode, nextVnode, container);
    }
    return app;
}

export { createApp, createVnode as h};
