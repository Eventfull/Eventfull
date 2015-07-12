var AppDispatcher = require('../dispatcher/dispatcher');
var ServerActionCreator = require('./server-action-creator');
var ApiUtils = require('../utils/api-utils');
var AppConstants = require('../constants/constants');
var moment = require('moment');

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

    ApiUtils.getDayData(date, ServerActionCreator.receiveDayData);
  },

  getWeekData: function (date) {
    AppDispatcher.dispatch({
      actionType: AppConstants.ViewActionTypes.GET_WEEK_DATA
    });

    var startDate = moment("2015-07-04").format('YYYY-MM-DD');
    var endDate = moment("2015-07-10").format('YYYY-MM-DD');

    ApiUtils.getWeekData(startDate, endDate, ServerActionCreator.receiveWeekData);
  },

  getMonthData: function (date) {
    AppDispatcher.dispatch({
      actionType: AppConstants.ViewActionTypes.GET_MONTH_DATA
    });

    ApiUtils.getMonthData(date, ServerActionCreator.fetchedMonthData);
  },

  moveStaff: function(info, date){
    AppDispatcher.dispatch({
      actionType: AppConstants.ViewActionTypes.STAFF_MOVED,
      info: info
    });

    ApiUtils.moveStaff(info).then(ViewActionCreator.getDayData.bind(null, date));
  },

  getAvailableEmployees: function(date){
    ApiUtils.getAvailableEmployees(date, ServerActionCreator.receiveAvailableEmployees);
  }

};

module.exports = ViewActionCreator;