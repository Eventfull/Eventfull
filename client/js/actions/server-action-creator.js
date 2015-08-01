var AppDispatcher = require('../dispatcher/dispatcher');
var AppConstants = require('../constants/constants');

var socket = io.connect('http://localhost:8000');
socket.on('email', function () {
  ServerActionCreator.receiveEmailUpdate();
});

var ServerActionCreator = {
  gigAdded: function (gig) {
    AppDispatcher.dispatch({
      actionType: AppConstants.ServerActionTypes.GIG_ADDED,
      gig: gig
    });
  },
  receiveDayData: function(dayData){
    AppDispatcher.dispatch({
      actionType: AppConstants.ServerActionTypes.DAY_DATA_RECEIVED,
      gigs: dayData.gigs,
      date: dayData.date
    });
  },
  receiveWeekData: function (weekData) {
    AppDispatcher.dispatch({
      actionType: AppConstants.ServerActionTypes.WEEK_DATA_RECEIVED,
      weekData: weekData
    });
  },
  receiveMonthData: function (monthData) {
    AppDispatcher.dispatch({
      actionType: AppConstants.ServerActionTypes.MONTH_DATA_RECEIVED,
      monthData: monthData
    });
  },
  receiveAvailableEmployees: function (employeeData){
    AppDispatcher.dispatch({
      actionType: AppConstants.ServerActionTypes.EMPLOYEE_DATA_RECEIVED,
      employeeData: employeeData
    });
  },
  receiveEmailUpdate: function () {
    AppDispatcher.dispatch({
      actionType: AppConstants.ServerActionTypes.EMAIL_UPDATE_RECEIVED
    });
  }
};

module.exports = ServerActionCreator;
