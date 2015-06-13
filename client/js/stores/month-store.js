/*Note month store isn't yet hooked up to dispather*/
// var Dispatcher = require('../dispatcher/dispatcher');
var AppConstants = require('../constants/constants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

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
    this.emit('change');
  },

  addChangeListener: function (callback) {
    this.on('change', callback);
  },

  removeChangeListener: function (callback) {
    this.removeListener('change', callback);
  }
});



module.exports = MonthStore;
