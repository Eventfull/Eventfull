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
<<<<<<< HEAD

  getDayData: function(){
    AppDispatcher.dispatch({
      actionType: AppConstants.ViewActionTypes.GET_DAY_DATA
    });

    ApiUtils.getDayData(ServerActionCreator.recieveDayData);
=======
  getMonthEvents: function (date) {
    AppDispatcher.dispatch({
      actionType: AppConstants.ViewActionTypes.GET_MONTH_EVENTS
    });
    ApiUtils.getMonthEvents(date, ServerActionCreator.fetchedMonthEvents);
>>>>>>> (refactor)Add flux functioanlity to see previous and next months data
  }
};

module.exports = ViewActionCreator;