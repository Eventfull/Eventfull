var keyMirror = require('keymirror');

var AppConstants = {
  ViewActionTypes: keyMirror({
    ADD_EVENT: null,
    GET_DAY_DATA: null
  }),
  ServerActionTypes: keyMirror({
    EVENT_ADDED: null,
    DAY_DATA_RECIEVED: null,
    GET_MONTH_DATA: null,
    FETCHED_MONTH_DATA: null
  }),
};

module.exports = AppConstants;