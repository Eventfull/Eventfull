var keyMirror = require('keymirror');

var AppConstants = {
  ViewActionTypes: keyMirror({
    ADD_EVENT: null,
    GET_DAY_DATA: null,
    GET_WEEK_DATA: null,
    GET_MONTH_DATA: null,
    STAFF_MOVED: null
  }),
  ServerActionTypes: keyMirror({
    EVENT_ADDED: null,
    DAY_DATA_RECIEVED: null,
    WEEK_DATA_RECEIVED: null,
    FETCHED_MONTH_DATA: null,
    EMPLOYEE_DATA_RECEIVED: null
  })
};

module.exports = AppConstants;