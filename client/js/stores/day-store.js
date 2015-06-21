var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var Dispatcher = require('../dispatcher/dispatcher');
var AppConstants = require('../constants/constants');
var CHANGE_EVENT = 'change';

var _dayData = {};

var _moveStaff = function(info){
  // Object {fromGig: 0, toGig: 1, fromGroup: "kitchen-staff", toGroup: "server", employeeID: 1}
  var fromGroup = _dayData.gigs[info.fromGig].staff.approved[info.fromGroup];
  var toGroup = _dayData.gigs[info.toGig].staff.approved[info.toGroup];
  if (!toGroup) toGroup = _dayData.gigs[info.toGig].staff.approved[info.toGroup] = [];

  var employee;
  fromGroup.forEach(function(emp, idx){
    if (emp.employeeID === info.employeeID){
      employee = emp;
      fromGroup.splice(idx, 1);
    }
  });

  toGroup.push(employee);
}

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
    case AppConstants.ViewActionTypes.STAFF_MOVED:
      _moveStaff(payload.info);
      DayStore.emitChange();
      break;
  }
});

module.exports = DayStore;