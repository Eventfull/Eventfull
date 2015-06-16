var Dispatcher = require('./dispatcher/dispatcher');
var AppConstants = require('./constants/constants');
var EventEmitter = require('event').EventEmitter;
var assign = require('object-assign');
var CHANGE_EVENT = 'change';

var dataCreator = require('../dayData/day-data-creator');
var _dayData = dataCreator.create();

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
  }

});

Dispatcher.register(function(payload){
  switch (payload.actionType){
    // WILL DO SOMETHING HERE WHEN CONNECTING WITH VIEWS
  }
});

module.exports = DayStore;