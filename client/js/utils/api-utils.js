var axios = require('axios');
var weekData = require('../weekData');
var server = 'http://localhost:8000';
var monthData = require('../monthData');

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
    var path = server + '/api/organizations/smc/gigs/';

    // get day data and pass it to callback
    axios.get(path, {
      params: {
        date: date
      }
    }).then(function(res){
      return res.data;
    }).then(callback);
  },

  getMonthData: function (date, callback) {
   //this is currently mocking fetching server side data
   //NOT the final implementation
   callback(monthData); //monthData would be the fetched monthData from server
  },

  addEmployeeToGig: function(employeeID, gig, group){
    var gigsPath = server + '/api/organizations/smc/gigs';
    var pathAdd = gigsPath + '/' + gig + '/staff/';
    return axios.post(pathAdd, {
        employeeID: employeeID,
        group: group
    });
  },

  removeEmployeeFromGig: function(employeeID, gig){
    var gigsPath = server + '/api/organizations/smc/gigs';
    var pathDelete = gigsPath + '/' + gig + '/staff/' + employeeID + '/';
    return axios.delete(pathDelete);
  },


  moveStaff: function(info){
    return ApiUtils.removeEmployeeFromGig(info.employeeID, info.fromGig).then(function(res){
      return ApiUtils.addEmployeeToGig(info.employeeID, info.toGig, info.toGroup);
    })
  }

};

module.exports = ApiUtils;