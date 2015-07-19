var AppConstants = require('../constants/constants');
var EventEmitter = require('events').EventEmitter;
var Dispatcher = require('../dispatcher/dispatcher');
var assign = require('object-assign');
var CHANGE_EVENT = 'change';
var _ = require('underscore');
var moment = require('moment');

//Internal storage containing all data for a given month
var _monthData = {};

//setter method for the _monthData internal storage
var _setMonthData = function (data) {
  _monthData = data;
};

/*
 Function to get gig data in format month expects
 This is a little hacky atm.
 Will improve once we finalize what our data will look like
*/
var _organizeData = function (data) {

  var monthData = {
    startDate: data.startDate,
    endDate: data.endDate,
    data: {}
  };

  var startOfMonth = moment(monthData.startDate, 'YYYY-MM-DD').startOf('month');
  var dayOffset = startOfMonth.day();

  monthData.data = _.groupBy(data.gigs, function(gig) {
    return Math.ceil((moment(gig.date, "YYYY-MM-DD HH:mm:ss").date() + dayOffset) / 7);
  });


  monthData.data = _.mapObject(monthData.data, function(week) {
    return _.groupBy(week, function(gig) {
      return moment(gig.date, "YYYY-MM-DD HH:mm:ss").format('YYYYMMDD');
    });
  });

  return monthData;
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
    case AppConstants.ServerActionTypes.MONTH_DATA_RECEIVED:
      _setMonthData(_organizeData(payload.monthData));
      MonthStore.emitChange();
      break;

    default:
      return true;
  }
});

module.exports = MonthStore;
