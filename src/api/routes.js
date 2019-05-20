/**
 * Gateway routing.
 */
const ExampleModule = require('./example');

module.exports = (app) => {

  app.use('/api/example', ExampleModule)
  // app.use('/api/example1')
  // ...
  // app.use('/api/example(n)')

}
