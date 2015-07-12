var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var _ = require('underscore');
var Dispatcher = require('../dispatcher/dispatcher');
var AppConstants = require('../constants/constants');
var CHANGE_EVENT = 'change';

var _employeeData = {};
var _unavailableEmployees = {};

var EmployeeStore = assign({}, EventEmitter.prototype, {

  getData: function(){
    return _employeeData;
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

  getEmployee: function(id){
    return _employeeData[id];
  },

  getAvailableEmployees: function(){
    return _.filter(_employeeData, function(id){
      return !_unavailableEmployees[id];
    });
  },

  addToUnavailableEmployees: function(id){
    _unavailableEmployees[id] = true;
  }

});

Dispatcher.register(function(payload){
  switch (payload.actionType){
    case AppConstants.ServerActionTypes.EMPLOYEE_DATA_RECIEVED:
      _employeeData = _.indexBy(payload.employeeData, function(user){
        return user.id;
      });
      EmployeeStore.emitChange();
      break;
  }
});

module.exports = EmployeeStore;