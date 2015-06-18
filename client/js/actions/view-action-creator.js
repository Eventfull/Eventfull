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
    
    // hardcoded for now, will change.
    ApiUtils.getDayData(new Date('Jun 21 2015'), ServerActionCreator.recieveDayData);
  },

  getMonthData: function (date) {
    AppDispatcher.dispatch({
      actionType: AppConstants.ViewActionTypes.GET_MONTH_DATA
    });

    ApiUtils.getMonthData(date, ServerActionCreator.fetchedMonthData);
  },

  moveStaff: function(info){
    AppDispatcher.dispatch({
      actionType: AppConstants.ViewActionTypes.STAFF_MOVED,
      info: info
    });

    ApiUtils.moveStaff(info).then(ViewActionCreator.getDayData);
  }

};

module.exports = ViewActionCreator;