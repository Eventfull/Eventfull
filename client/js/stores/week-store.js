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
    var newGig = {
      complexity: 10,
      date: "2015-07-16T00:00:00.000Z",
      endTime: "24:00:00",
      health: 10,
      startTime: "10:00:00",
      title: "John Tyler Event",
      type: "Wedding"
    };
    current.push(newGig);
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
