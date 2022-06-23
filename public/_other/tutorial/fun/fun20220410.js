const fun = {
    name: 'Rem',
    hello: function(value) {
        return value;
    },
    fn: function(a, b=1) {
        return `${a}, ${b}`;
    },
    hello2: function() {
        return 'hello';
    },
    bye: function() {
        return 'bye';
    },
    fn2: function(cb) {
        return cb(this.name);
    },
    hello3: function(name) {
        return `hello ${name}`;
    }
}

module.exports = fun;
