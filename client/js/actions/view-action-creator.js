var AppDispatcher = require('../dispatcher/dispatcher');
var ServerActionCreator = require('./server-action-creator');
var ApiUtils = require('../utils/api-utils');
var AppConstants = require('../constants/constants');

var ViewActionCreator = {
  addEvent: function (event) {
    AppDispatcher.dispatch({
      actionType: AppConstants.ViewActionTypes.ADD_EVENT
    });
    ApiUtils.addEvent(event);
  }
};

module.exports = ViewActionCreator;