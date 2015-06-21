// Controllers will handle web requests, serve templates to
// the user and interact with data models to process and
// retrieve data. A controller should never directly access
// the database - it should rely on model methods.

// This file will be used to attach all of the controllers
// to the app.

var dayController = require('./day-controller');

module.exports = function(app){
  app.use('/api/day', dayController);
};
