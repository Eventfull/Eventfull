var gcal = require('google-calendar');

var calendar = {
  addCalendarGig: function (user, gigTitle) {
    var accessToken = user.accessToken;
    var calendar_id = user.calendar_id;
    // Renaming catering gigs'events' to conform with Googles API which uses 'events'
    var eventDescription = gigName;
    return gcal(accessToken).events.quickAdd(calendar_id, eventDescription).then(function (data) {
      return data;
    }).catch(function (err) {
      console.log('add Calendar Gig error ', err);
      return {};
    });
  },

  removeCalendarGig: function (user, gigId) {
    var accessToken = user.accessToken;
    var calendarId = user.calendar_id;
    // Renaming catering gigs'events' to conform with Googles API which uses 'events'
    var eventId = gigId;
    return gcal(accessToken).events.delete(calendar_id, eventId).then( function (data) {
      return data;
    }).catch(function (err) {
      console.log('remove Calendar Gig error ', err);
      return {};
    });
  },

  getAllCalendars: function (user, req, res) {
    var accessToken = user.accessToken;
    return gcal(accessToken).calendarList.list.then(function (calendars) {
      return calendars;
    }).catch(function (err) {
      console.log('get all calendars error', err);
    });
  },

  getAllCalendarGigs: function (user, req, res) {
    var accessToken = user.accessToken;
    var calendar_id = user.calendar_id;
    return gcal(accessToken).events.list(calendar_id, {maxResults:1}).then(function (data) {
      if (data.nextPageToken) {
        return gcal(accessToken).gigs.list(calendar_id, {maxResults:1, pageToken:data.nextPageToken}).then(function(data) {
          return data.items;
        });
      } else {
        return data;
      }
    }).catch(function (err) {
      console.log('get all calendar gigs ', err);
    });
  }
};

module.exports = calendar;



