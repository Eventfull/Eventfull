var Dispatcher = require('./dispatcher/dispatcher');
var AppConstants = require('./constants/constants');
var EventEmitter = require('event').EventEmitter;
var assign = require('object-assign');

// Internal object containing all events for the week
var _weekData = {};

// Setter method for the _weekData internal object
var setWeekData = function(data){
  _weekData = data;
};

var WeekStore = assign({}, EventEmitter.prototype, {

  // Getter method for the _weekData internal object
  getWeekData: function(){
    return _weekData;
  },

  emitChange: function(){
    this.emit('change');
  },

  addChangeListener: function(callback){
    this.on('change', callback);
  },

  removeChangeListener: function(callback){
    this.removeListener('change', callback);
  }
});

// Register dispatcher callback function
Dispatcher.register(function(payload){
  switch(payload.actionType){
    default:
      return true;
  }
});

module.exports = WeekStore;
