var calendarController = require('./calendar-controller.js');
var express = require('express');
var calendarRouter = express.Router();
var User = require('./User');


calendarRouter.get('/', calendarController.signin);

calendarRouter.get('/callback', calendarController.callback);

calendarRouter.post('/checkloggedin', calendarController.isAuthenticated);

calendarRouter.get('/logout', calendarController.logout);

//Temporary Failure route if passport authentication fail
calendarRouter.get('/failure', function() {
  console.log('Something went wrong in authenticating with google');
});

//Temporary route to get all users calendar meta-information
calendarRouter.get('/allCalendars', function (req, res) {
  var responseData = calendarController.getAllCalendars(User, function(responseData) {
    if ( responseData.error ) {
      console.log('Error', responseData.error);
      res.send(500);
    } else {
      console.log('Got all calendars', responseData.data);
      res.send(200, responseData.data);
    }
  });
});

//Temporary route to get specific calendar
calendarRouter.get('/:calendarId', function (req, res) {
  var responseData = calendarController.getAllCalendarEvents(User, function(responseData) {
    if ( responseData.error ) {
      console.log('Error', responseData.error);
      res.send(500);
    } else {
      console.log('Got all calendars', responseData.data);
      res.send(200, responseData.data);
    }
  });
});

//Temporary route to add calendar event
calendarRouter.get('/:calendarId/add', function(req, res){
  var text = req.query.text || 'Hello World';
  calendarController.AddCalendarEvent(text, function (responseData) {
    if ( responseData.error ) {
      console.log('Error', responseData.error);
      res.send(500);
    } else {
      console.log('Got all calendars', responseData.data);
      res.send(200, responseData.data);
    }
  });

});

//Temporary route to remove calendar event
calendarRouter.get('/:calendarId/:eventId/remove', function(req, res){
  var eventId = req.params.eventId;
  calendarController.removeCalendarEvent(eventId, function (responseData) {
    if ( responseData.error ) {
      console.log('Error', responseData.error);
      res.send(500);
    } else {
      console.log('Got all calendars', responseData.data);
      res.send(200, responseData.data);
    }
  });
});


module.exports = calendarRouter;

