var axios = require('axios');
var server = 'http://localhost:8000';

var ApiUtils = {

  addGig: function (gig, callback) {
    callback(gig);
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
      return {
        date: date,
        gigs: res.data
      };
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

  getMonthData: function (startDate, endDate, callback) {
    var path = server + '/api/organizations/1/gigs';
    axios.get(path, {
      params: {
        startDate: startDate.format('YYYY-MM-DD'),
        endDate: endDate.format('YYYY-MM-DD')
      }
    }).then(function (res) {
      return {
        startDate: startDate,
        endDate: endDate,
        gigs: res.data
      };
    }).then(callback);
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
