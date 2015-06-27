var models = require('../../../db/models');
var Gig = models.Gig;
var UserGigs = models.UserGigs;
var User = models.User;
var async = require('async');
////////////////////////////////

var gigController = {

  getGigs: function(req, res){
    //FIX ME: the organiation_id isn't appearing on the params
    var organizationId = req.params.organization_id || 1;

    Gig.getGigs(organizationId, function (gigs) {
      res.send(gigs);
    });
    console.log('Retrieving gigs for organization ', organizationId);
  },

  createGig: function(req, res){
    var gigParams = {
      title: req.body.title,
      type: req.body.type,
      date: req.body.date,
      start_time: req.body.startTime,
      end_time: req.body.endTime,
      complexity: req.body.complexity,
      health: req.body.health,
      OrganizationId: req.params.organization_id,
      LocationId: req.body.location,
      AttireId: req.body.attire
    };

    Gig.createGig(gigParams, function (gig) {
      res.send(gig);
    });

   console.log("creating new gigs for org " + req.params.organization_id);
  },

  getGigInfo: function(req, res){
    var gigId = req.params.gig_id;

    Gig.getGigInfo(gigId, function (gig) {
      res.send(gig);
    });
    console.log('getting gig info for gig id ' + req.params.gig_id + " for org " + req.organization_id);
  },

  updateGigInfo: function (req, res){
   var gigId = req.params.gig_id;
   var gigParams = {
      title: req.body.title,
      type: req.body.type,
      date: req.body.date,
      start_time: req.body.startTime,
      end_time: req.body.endTime,
      complexity: req.body.complexity,
      health: req.body.health,
      OrganizationId: req.params.organization_id,
      LocationId: req.body.location,
      AttireId: req.body.attire
    };

    Gig.updateGigInfo(gigId, gigParams, function (gig) {
      res.send(gig);
    });
    console.log('updating gig info for ' + req.params.gig_id + " for org " + req.organization_id);
  },

  deleteGig: function(req, res){
    var gigId = req.params.gig_id;

    Gig.deleteGig(id, function (result) {
      if ( result === true ) {
        res.send(200);
      } else {
        res.send(204);
      }
    });
    console.log('deleting gig ' + req.params.gig_id + " for org " + req.organization_id);
  },

  getGigStaff: function (req, res){
    var employees = []; //holds staff for a specific gig
    var gigId = req.params.gig_id;

    UserGigs.getUserGigs(gigId, function (userGigs) {
      //need to use async forEach here
      async.forEach(userGigs, function (userGig) {
        User.getEmployeeInfo(userGig.UserId, function (employee) {
          employees.push(employee);
        });
      });
    });
    console.log('getting staff for ' + req.params.gig_id + " for org " + req.organization_id);
  },

  addEmployeeToGigStaff: function (req, res){

    var userGigParams = {
      date: req.body.date,
      UserId: parseInt(req.body.employeeId, 10),
      GigId: parseInt(req.params.gig_id, 10),
      PositionId: req.body.positionId,
      admin_accepted: req.body.admin_accepted,
      worker_accepted: req.body.admin_accepted,
      group: req.body.group
    };

    //Careful with admin/woker accepted...
    UserGigs.addEmployeeToGigStaff(userGigParams, function (userGig) {
      res.send(userGig);
    });
    console.log('Adding employee id ', employeeId, ' to gig id ', gigId);
  },

  getEmployeeStatus: function (req, res){
    var userId = req.params.employee_id;

    UserGigs.getEmployeeStatus(userId, function (userGig) {
      res.send(userGig);
    });
    console.log('getting employee status for gig ' + req.params.gig_id + ' for employee ' + req.params.employee_id + " for org " + req.organization_id);
  },

  updateEmployeeStatus: function (req, res){
    var userId = req.params.employee_id;
    var gigId = req.params.gig_id;
    var adminStatus = req.body.admin_accepted;
    var workerStatus = req.body.worker_accepted;

   UserGigs.updateEmployeeStatus(userId, gigId, adminStatus, workerStatus, function (userGig) {
    res.send(userGig);
   });
    console.log('updating employee status for gig ' + req.params.gig_id + ' for employee ' + req.params.employee_id + " for org " + req.organization_id);
  },

  removeEmployeeFromGig: function (req, res){
    var gigId = req.params.gig_id;
    var userId = req.params.employee_id;

   UserGigs.removeEmployeeFromGig(gigId, userId, function (result) {
    //Temporary true/false. Will replace with robust error checking
    if ( result === true) {
      res.sendStatus(200);
    } else {
      res.sendStatus(204);
    }
   });
   console.log('removing employee id ', userId, ' from gig id ', gigId);
  },

};

module.exports = gigController;