/*Note month store isn't yet hooked up to dispather*/
// var Dispatcher = require('../dispatcher/dispatcher');
var AppConstants = require('../constants/constants');
var EventEmitter = require('events').EventEmitter;
var Dispatcher = require('../dispatcher/dispatcher');
var assign = require('object-assign');
var CHANGE_EVENT = 'change';

//Internal storage containing all data for a given month
var _monthData = {};

//setter method for the _monthData internal storage
var _setMonthData = function (data) {
  _monthData = data;
};

var MonthStore = assign({}, EventEmitter.prototype, {
  getMonthData: function () {
    return _monthData;
  },

  emitChange: function () {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function (callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function (callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

Dispatcher.register(function (payload) {
  switch ( payload.actionType ) {

    case AppConstants.ServerActionTypes.FETCHED_MONTH_EVENTS:
      _setMonthData(payload.monthData);
      MonthStore.emitChange();
      break;

    default:
      return true;
  }
});

module.exports = MonthStore;
