var Dispatcher = require('./dispatcher/dispatcher');
var AppConstants = require('./constants/constants');
var EventEmitter = require('event').EventEmitter;

var _MonthEvents = [];

for(var i=0; i<28; i++) {
  _MonthEvents.push({
    eventName:'wedding',
    eventLocation: 'DC',
    requiredStaff: 100,
    time: '10:00AM'
  });
}

var MonthStore = assign(EventEmitter.prototype, {
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function( callback ) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function( callback ) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  getEvents: function() {
    return _MonthEvents;
  }
});

module.exports = MonthStore;
