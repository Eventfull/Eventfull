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

function _addEvent(cateringEvent) {
  _MonthEvents.push(cateringEvent);
  console.log('Added cateringEvent: ',cateringEvent, _MonthEvents);
}

function _removeEvent(index) {
  var removedEvent = _MonthEvents.splice(index, 1);
  console.log('Removed cateringEvent: 'removedEvent);
}

function _eventsCount() {
  console.log('There are ' + _MonthEvents.length + ' events this month');
  return _MonthEvents.length;
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
  },

  getNumberOfEvents: function() {
    return _eventsCount();
  },

  dispatcherIndex: Dispatcher.register(function(payload) {
    var action = payload.action; //action from handleViewAction

    if ( action.actionType === AppConstants.ADD_CALENDAR_EVENT ) {
      _addEvent(payload.action.item);
    } else if ( action.actionType === AppConstants.REMOVE_CALENDAR_EVENT ) {
      _removeEvent(payload.action.index);
    }
    MonthStore.emitChange();
    return true; 
  });
});

module.exports = MonthStore;
