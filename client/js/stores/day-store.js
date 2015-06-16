var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var Dispatcher = require('../dispatcher/dispatcher');
var AppConstants = require('../constants/constants');
var CHANGE_EVENT = 'change';

var _dayData = {};

var DayStore = assign({}, EventEmitter.prototype, {

  getData: function(){
    return _dayData;
  },

  emitChange: function(){
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback){
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback){
    this.removeListener(CHANGE_EVENT, callback);
  },

});

Dispatcher.register(function(payload){
  switch (payload.actionType){
    case AppConstants.ServerActionTypes.DAY_DATA_RECIEVED:
      _dayData = payload.dayData;
      DayStore.emitChange();
      break;
  }
});

module.exports = DayStore;