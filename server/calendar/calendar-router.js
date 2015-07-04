var calendarController = require('./calendar-controller.js');
var express = require('express');
var calendarRouter = express.Router();

calendarRouter.get('/', calendarController.signin);

calendarRouter.get('/callback', calendarController.callback);

calendarRouter.post('/checkloggedin', calendarController.isAuthenticated);

calendarRouter.get('/logout', calendarController.logout);

//Temporary Failure route if passport authentication fail
calendarRouter.get('/failure', calendarController.calendarFailure);

module.exports = calendarRouter;

