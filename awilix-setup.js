console.log("Awilix ...");

import awilix from 'awilix';
const Books = require('./books');
const DisplayBooks = require('./displayBooks');

const container = awilix.createContainer({
  injectionMode: awilix.InjectionMode.PROXY,
  strict: true,
})

function setup(){
  container.register({
    books: awilix.asClass(Books),
    displayBooks: awilix.asClass(DisplayBooks)

  })
}

module.exports = {
  container,
  setup,
}