var axios = require('axios');
var weekData = require('../weekData');
var server = 'http://localhost:8000';

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

  getDayData: function(date, callback){
    // get day data and pass it to callback
    axios.get(server + '/api/day/' + date).then(function(res){
      return res.data;
    }).then(callback);
  }
};

module.exports = ApiUtils;