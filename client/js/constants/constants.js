var keyMirror = require('keymirror');

var AppConstants = {
  ViewActionTypes: keyMirror({
    ADD_EVENT: null,
<<<<<<< HEAD
    GET_DAY_DATA: null
  }),
  ServerActionTypes: keyMirror({
    EVENT_ADDED: null,
    DAY_DATA_RECIEVED: null
=======
    GET_MONTH_EVENTS: null
  }),
  ServerActionTypes: keyMirror({
    EVENT_ADDED: null,
    FETCHED_MONTH_EVENTS: null
>>>>>>> (refactor)Add flux functioanlity to see previous and next months data
  })
};

module.exports = AppConstants;