console.log("Awilix ...");

const awilix = require('awilix');
const Lifetime = awilix.Lifetime
const Books = require('./books');
const DisplayBooks = require('./displayBooks');

const container = awilix.createContainer({
  injectionMode: awilix.InjectionMode.PROXY,
  strict: true,
})

function setup(){
  container.register({
    books: awilix.asClass(Books,{ lifetime: Lifetime.SINGLETON }),
    displayBooks: awilix.asClass(DisplayBooks,{ lifetime: Lifetime.SINGLETON })

  })
}

module.exports = {
  container,
  setup,
}