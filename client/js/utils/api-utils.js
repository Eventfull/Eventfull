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
    var path = server + '/api/organizations/1/gigs/';

    // get day data and pass it to callback
    axios.get(path, {
      params: {
        startDate: date.format('YYYY-MM-DD'),
        endDate: date.format('YYYY-MM-DD'),
      }
    }).then(function(res){
      return res.data;
    }).then(callback);
  },

  getWeekData: function (startDate, endDate, callback) {
    var path = server + '/api/organizations/1/gigs/';

    axios.get(path, {
      params: {
        startDate: startDate,
        endDate: endDate
      }
    }).then(function (res) {
      return res.data;
    }).then(callback);
  },

  getMonthData: function (date, callback) {
    //this is currently mocking fetching server side data
    //NOT the final implementation
    callback(monthData); //monthData would be the fetched monthData from server
  },

  addEmployeeToGig: function(employeeId, gigId, positionId){
    var gigsPath = server + '/api/organizations/1/gigs';
    var pathAdd = gigsPath + '/' + gigId + '/staff/';

    return axios.post(pathAdd, {
        employeeId: employeeId,
        positionId: positionId,
        adminAccepted: true,
        workerAccepted: false,
    });
  },

  removeEmployeeFromGig: function(employeeId, gig){
    var gigsPath = server + '/api/organizations/1/gigs';
    var pathDelete = gigsPath + '/' + gig + '/staff/' + employeeId + '/';
    return axios.delete(pathDelete);
  },


  moveStaff: function(info){
    return ApiUtils.removeEmployeeFromGig(info.employeeId, info.fromGigId).then(function(res){
      return ApiUtils.addEmployeeToGig(info.employeeId, info.toGigId, info.toGroupId);
    });
  },

  getAvailableEmployees: function(date, callback){
    var path = server + '/api/organizations/1/employees';
    axios.get(path, {
      params: {
        date: date.format('YYYY-MM-DD')
      }
    }).then(function(res){
      return res.data;
    }).then(callback);
  }

};

module.exports = ApiUtils;