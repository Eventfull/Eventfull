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

  //Get num days, weeks in a given month
  var currentDate = moment(data.startDate, 'YYYY-MM-DD');
  var numDays = Number(currentDate.endOf('month').format('DD'));
  var numWeeks = Math.ceil(numDays / 7);

  //Populate month with empty object for each week so we have a full calendar
  for (var i=1; i<=numWeeks; i++) {
    monthData.data[i] = {};
  }

  //Fill the day properties of each week as with 'YYYYMMDD' as the key
  var dataKey = '';
  currentDate = moment(data.startDate, 'YYYY-MM-DD');
  for(var j=1; j<=numDays; j++) {
    dataKey = currentDate.format('YYYYMMDD');
    weekNum = Math.ceil(j / 7);
    monthData.data[weekNum][dataKey] = [];
    currentDate = moment(currentDate).add(1,'day');
  }

  //Populate the days with the events
  var day, bucket, dateKey = null;
  _.forEach(data.gigs, function (event) {
    day = Number(moment(event.date, 'YYY-MM-DD').format('DD'));
    bucket = monthData.data[Math.ceil(day/7)];
    dateKey = moment(event.date, 'YYYY-MM-DD').format('YYYYMMDD');
    bucket[dateKey].push(event);
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
