var ServerActionCreator = require('../actions/server-action-creator');
var weekData = require('../weekData');
var dayDataCreator = require('../dayData/day-data-creator');
var monthData = require('../monthData');
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
  },
  getMonthEvents: function ( date, callback ) {
   //this is currently mocking fetching server side data
   //NOT the final implementation
   callback(monthData); //monthData would be the fetched monthData from server
  }
};

module.exports = ApiUtils;