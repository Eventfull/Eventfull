var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var Dispatcher = require('../dispatcher/dispatcher');
var AppConstants = require('../constants/constants');
var CHANGE_EVENT = 'change';
var DATABASE_UPDATE = 'db_update';
var _ = require('underscore');
var moment = require('moment');

var _dayData = {};

var _moveStaff = function(info){

  var fromGig = _dayData.gigs[info.fromGigId];
  var toGig = _dayData.gigs[info.toGigId];
  var employeeToMove;
  var employeeIdx;

  _.each(fromGig.Users, function(employee, idx){
    if (employee.id === info.employeeId){
      employeeToMove = employee;
      employeeIdx = idx;
    }
  });

  fromGig.Users.splice(employeeIdx, 1);
  employeeToMove.Position.id = info.toGroupId;
  toGig.Users.push(employeeToMove);
}


var DayStore = assign({}, EventEmitter.prototype, {

  getData: function (){
    return _dayData;
  },

  getDate: function (){
    return _dayData.date;
  },

  emitChange: function (){
    this.emit(CHANGE_EVENT);
  },

  emitDatabaseUpdate: function () {
    this.emit(DATABASE_UPDATE);
  },

  addChangeListener: function (callback){
    this.on(CHANGE_EVENT, callback);
  },

  addDatabaseChangeListener: function (callback) {
    this.on(DATABASE_UPDATE, callback);
  },

  removeDatabaseChangeListener: function (callback) {
    this.removeListener(DATABASE_UPDATE, callback);
  }

  removeChangeListener: function (callback){
    this.removeListener(CHANGE_EVENT, callback);
  },

});

Dispatcher.register(function(payload){
  switch (payload.actionType){
    case AppConstants.ServerActionTypes.DAY_DATA_RECEIVED:
      _dayData.gigs = _.indexBy(payload.gigs, function(gig){
        return gig.id;
      });
      _dayData.date = payload.date;
      DayStore.emitChange();
      break;
    case AppConstants.ViewActionTypes.STAFF_MOVED:
      _moveStaff(payload.info);
      DayStore.emitChange();
      break;
    case AppConstants.ServerActionTypes.EMAIL_UPDATE_RECEIVED:
      DayStore.emitDatabaseUpdate();
      break;
    default:
      return true;
  }
});

module.exports = DayStore;
