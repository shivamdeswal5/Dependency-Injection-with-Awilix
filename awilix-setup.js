const awilix = require('awilix');
const DisplayBooks = require('./displayBooks');
const Library = require('./library');

const container = awilix.createContainer({
    injectionMode: awilix.InjectionMode.PROXY,
    strict: true,
});

function setup() {
    container.register({
        displayBooks: awilix.asClass(DisplayBooks, { lifetime: awilix.Lifetime.SINGLETON }),
        library: awilix.asClass(Library, { lifetime: awilix.Lifetime.SINGLETON }),
    });
}

module.exports = { container, setup };
