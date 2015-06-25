var dayDataCreator = require('../../../db/dayData/day-data-creator');
var _dayData = dayDataCreator.create(new Date('Jun 21 2015'));

////////////
// the lastRemoved variable and methods below are just a super hacky way
// of persisting the employee we are removing, since I did't
// create persitent employee data (they are linked with the
// gig). This hack will be removed once the db is up, since
// we have an employees table.

var lastRemoved;

var _removeEmployeeFromGig = function(gig_id, employee_id){
  var staff = _dayData.gigs[gig_id].staff.approved;
  employee_id = parseInt(employee_id, 10);
  for (var type in staff){
    staff[type].forEach(function(employee, idx, employees){
      if (employee.employeeID === employee_id){
        lastRemoved = employee;
        employees.splice(idx, 1);
      }
    });
  }
};

var _addEmployeeToGig = function(gig_id, employee, group){
  _dayData.gigs[gig_id].staff.approved[group] = _dayData.gigs[gig_id].staff.approved[group] || [];
  _dayData.gigs[gig_id].staff.approved[group].push(employee);
};

////////////////////////////////

var gigController = {

  getGigs: function(req, res){
    res.json(_dayData);
  },

  createGig: function(req, res){
    res.send("creating new gigs for org " + req.organization_id);
  },

  getGigInfo: function(req, res){
    res.send('getting gig info for ' + req.params.gig_id + " for org " + req.organization_id);
  },

  updateGigInfo: function(req, res){
    res.send('updating gig info for ' + req.params.gig_id + " for org " + req.organization_id);
  },

  deleteGig: function(req, res){
    res.send('deleting gig ' + req.params.gig_id + " for org " + req.organization_id);
  },

  getGigStaff: function(req, res){
    res.send('getting staff for ' + req.params.gig_id + " for org " + req.organization_id);
  },

  addEmployeeToGigStaff: function(req, res){
    var gig_id = req.params.gig_id;
    var employeeID = parseInt(req.body.employeeID, 10);
    var group = req.body.group;

    // we'll need to add a way to grab employee and add it. this is a hack
    if (lastRemoved && lastRemoved.employeeID === employeeID){
      _addEmployeeToGig(gig_id, lastRemoved, group);
    }
    res.sendStatus(200);
  },

  getEmployeeStatus: function(req, res){
    res.send('getting employee status for gig ' + req.params.gig_id + ' for employee ' + req.params.employee_id + " for org " + req.organization_id);
  },

  updateEmployeeStatus: function(req, res){
    res.send('updating employee status for gig ' + req.params.gig_id + ' for employee ' + req.params.employee_id + " for org " + req.organization_id);
  },

  removeEmployeeFromGig: function(req, res){
    var gig_id = req.params.gig_id;
    var employee_id = req.params.employee_id;
    _removeEmployeeFromGig(gig_id, employee_id);
    res.sendStatus(200);
  }

};

module.exports = gigController;