var AppDispatcher = require('../dispatcher/dispatcher');
var AppConstants = require('../constants/constants');

var ServerActionCreator = {
  eventAdded: function (weekData) {
    AppDispatcher.dispatch({
      actionType: AppConstants.ServerActionTypes.EVENT_ADDED,
      weekData: weekData
    });
  }
};

module.exports = ServerActionCreator;