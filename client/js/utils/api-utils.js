var ServerActionCreator = require('../actions/server-action-creator');
var weekData = require('../weekData');
var dayDataCreator = require('../dayData/day-data-creator');

var _ = require('underscore');

var ApiUtils = {
  addEvent: function (event, callback) {
    // this is currently mocking server side data manipulation
    // NOT the final implementation
    if (weekData.hasOwnProperty(event.date)) {
      weekData[event.date].push(event);
    } else {
      weekData[event.date] = [event];
    }
    callback(weekData);
  },

  getDayData: function(callback){
    var data = dayDataCreator.create()
    callback(data);
  }
};

module.exports = ApiUtils;