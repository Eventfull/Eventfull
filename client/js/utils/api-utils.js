var ServerActionCreator = require('../actions/server-action-creator');
var weekData = require('../weekData');
var _ = require('underscore');

var ApiUtils = {
  addEvent: function (event) {
    // this is currently mocking server side data manipulation
    // NOT the final implementation
    if (weekData.hasOwnProperty(event.date)) {
      weekData[event.date].push(event);
    } else {
      weekData[event.date] = [event];
    }
    ServerActionCreator.eventAdded(weekData);
  }
};

module.exports = ApiUtils;