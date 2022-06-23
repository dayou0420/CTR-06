const nodeOps = {
    qs(selector, scope) {
        return (scope || document).querySelector(selector);
    },
    create(type) {
        return document.createElement(type);
    },
    setAttr(target, key, value) {
        target.setAttribute(key, value);
    },
    append(parent, target) {
        parent.appendChild(target)
    },
    html(target, value) {
        target.innerHTML = value;
    },
    on(target, eventType, callback) {
        target.addEventListener(eventType, () => {
            callback();
        })
    }
}

let i = 0;

const body = nodeOps.qs('body');
const button = nodeOps.qs('#inc', body);
const div =  nodeOps.create('div');
nodeOps.setAttr(div, 'class', 'green');
nodeOps.append(body, div);
nodeOps.html(div, i);
nodeOps.on(button, 'click', () => {
    nodeOps.html(div, ++i);
})
