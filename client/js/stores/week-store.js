var AppDispatcher = require('../dispatcher/dispatcher');
var AppConstants = require('../constants/constants');
var EventEmitter = require('events').EventEmitter;
var _ = require('underscore');
var assign = require('object-assign');

// Internal object containing all events for the week
var _weekData = {};

// Setter method for the _weekData internal object
var setWeekData = function (data) {
  _weekData = data;
};

var WeekStore = assign({}, EventEmitter.prototype, {

  // Getter method for the _weekData internal object
  getWeekData: function () {
    return _weekData;
  },

  addNewGig: function(gig) {
    var current = this.getWeekData();
    current.push(gig);
  },

  emitChange: function () {
    this.emit('change');
  },

  addChangeListener: function (callback) {
    this.on('change', callback);
  },

  removeChangeListener: function (callback) {
    this.removeListener('change', callback);
  }

});

// Register dispatcher callback function
AppDispatcher.register(function (payload) {
  switch (payload.actionType) {

  case AppConstants.ServerActionTypes.WEEK_DATA_RECEIVED:
    setWeekData(payload.weekData);
    WeekStore.emitChange();
    break;

  case AppConstants.ServerActionTypes.GIG_ADDED:
    WeekStore.addNewGig(payload.gig);
    WeekStore.emitChange();
    break;

  default:
    return true;
  }
});

module.exports = WeekStore;
