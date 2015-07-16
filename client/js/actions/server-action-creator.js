var AppDispatcher = require('../dispatcher/dispatcher');
var AppConstants = require('../constants/constants');

var ServerActionCreator = {
  eventAdded: function (weekData) {
    AppDispatcher.dispatch({
      actionType: AppConstants.ServerActionTypes.EVENT_ADDED,
      weekData: weekData
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
  fetchedMonthData: function (monthData) {
    AppDispatcher.dispatch({
      actionType: AppConstants.ServerActionTypes.FETCHED_MONTH_DATA,
      monthData: monthData
    });
  },
  receiveAvailableEmployees: function(employeeData){
    AppDispatcher.dispatch({
      actionType: AppConstants.ServerActionTypes.EMPLOYEE_DATA_RECEIVED,
      employeeData: employeeData
    });
  }
};

module.exports = ServerActionCreator;