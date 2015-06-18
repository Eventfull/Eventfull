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
  getMonthEvents: function (date) {
    AppDispatcher.dispatch({
      actionType: AppConstants.ViewActionTypes.GET_MONTH_EVENTS
    });
    ApiUtils.getMonthEvents(date, ServerActionCreator.fetchedMonthEvents);
  }
};

module.exports = ViewActionCreator;