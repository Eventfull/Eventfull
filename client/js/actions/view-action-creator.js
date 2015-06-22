var AppDispatcher = require('../dispatcher/dispatcher');
var ServerActionCreator = require('./server-action-creator');
var ApiUtils = require('../utils/api-utils');
var AppConstants = require('../constants/constants');

var ViewActionCreator = {
  addEvent: function (event) {
    AppDispatcher.dispatch({
      actionType: AppConstants.ViewActionTypes.ADD_EVENT
    });
    ApiUtils.addEvent(event, ServerActionCreator.eventAdded);
  },
  getDayData: function(date){
    AppDispatcher.dispatch({
      actionType: AppConstants.ViewActionTypes.GET_DAY_DATA
    });

    ApiUtils.getDayData(date, ServerActionCreator.recieveDayData);
  },
  getMonthData: function (date) {
    AppDispatcher.dispatch({
      actionType: AppConstants.ViewActionTypes.GET_MONTH_Data
    });
    ApiUtils.getMonthData(date, ServerActionCreator.fetchedMonthData);
  }
};

module.exports = ViewActionCreator;