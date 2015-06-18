var AppDispatcher = require('../dispatcher/dispatcher');
var AppConstants = require('../constants/constants');

var ServerActionCreator = {
  eventAdded: function (weekData) {
    AppDispatcher.dispatch({
      actionType: AppConstants.ServerActionTypes.EVENT_ADDED,
      weekData: weekData
    });
  },
  recieveDayData: function(dayData){
    AppDispatcher.dispatch({
      actionType: AppConstants.ServerActionTypes.DAY_DATA_RECIEVED,
      dayData: dayData
    });
  },
  fetchedMonthEvents: function (monthData) {
    AppDispatcher.dispatch({
      actionType: AppConstants.ServerActionTypes.FETCHED_MONTH_EVENTS,
      monthData: monthData
    });
  }
};

module.exports = ServerActionCreator;