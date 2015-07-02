var passport = require('./gCalConfig');
var gcal = require('google-calendar');

module.exports.signin = passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login','https://www.googleapis.com/auth/calendar','https://www.googleapis.com/auth/calendar.readonly'] });

module.exports.callback = passport.authenticate('google', { successRedirect: '/',failureRedirect: '/calendar/failure' });

module.exports.logout = function (req, res) {
  req.logout();
  req.session.destroy();
  res.redirect('/');
};

module.exports.isAuthenticated = function (req, res) {
  res.send(req.isAuthenticated() ? true : false);
};

module.exports.AddCalendarEvent = function (callback) {
  var accessToken = user.accessToken;
  var calendarId = user.calendarID;
  gcal(accessToken).events.quickAdd(calendarId, text, function(err, data) {
    if (err) {
      callback({error:err});
    }
    callback({data: data});
  });
};

module.exports.removeCalendarEvent = function (eventId, callback) {
  var accessToken = user.accessToken;
  var calendarId = user.calendarID;
  gcal(accessToken).events.delete(calendarId, eventId, function(err, data) {
    if (err) {
      callback({error: err});
    }
    callback({data: data});
  });
};

module.exports.getAllCalendars = function (user, callback) {
  var accessToken = user.accessToken;
  gcal(accessToken).calendarList.list(function(err, data) {
    if (err) {
      callback({error: err});
    }
    callback({data: data});
  });
};

module.exports.getAllCalendarEvents = function (user, callback) {
  var accessToken = user.accessToken;
  var calendarId = user.calendarID;
  gcal(accessToken).events.list(calendarId, {maxResults:1}, function(err, data) {
    console.log('eventslist', err, data);
    if (err) {
      callback({error: err});
    }
    else if (data.nextPageToken) {
      gcal(accessToken).events.list(calendarId, {maxResults:1, pageToken:data.nextPageToken}, function(err, data) {
        callback({data: data.items});
      });
    } else {
      callback({data: data});
    }
  });
};
