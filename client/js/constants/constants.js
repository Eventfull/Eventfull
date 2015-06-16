var keyMirror = require('keymirror');

var AppConstants = {
  ViewActionTypes: keyMirror({
    ADD_EVENT: null
  }),
  ServerActionTypes: keyMirror({
    EVENT_ADDED: null
  })
};

module.exports = AppConstants;