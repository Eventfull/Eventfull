// Controllers will handle web requests, serve templates to
// the user and interact with data models to process and
// retrieve data. A controller should never directly access
// the database - it should rely on model methods.

// This file will be used to attach all of the controllers
// to the app.

module.exports = function(app, io){
  var organizationRouter = require('./organizations/organization-router')(app);
  var calendarRouter = require('../calendar/calendar-router');
  var emailRouter = require('../email/email-router')(app, io);

  app.use('/api/organizations', organizationRouter);
  app.use('/calendar', calendarRouter);
  app.use('/api/email', emailRouter);
};
