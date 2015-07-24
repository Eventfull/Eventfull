var moment = require('moment');

module.exports = function(app){
  var models = app.get('models');
  var Gig = models.Gig;
  var UserGigs = models.UserGigs;
  var User = models.User;
  var Location = models.Location;

  var gigController = {

    getGigs: function (req, res) {
      var info = {
        organizationId: req.organizationId,
        startDate: req.query.startDate,
        endDate: req.query.endDate,
        includeStaff: req.query.startDate === req.query.endDate
      };

      Gig.getGigs(info).then(function(gigs){
        res.send({
          gigs: gigs
        });
      }).catch(function (err) {
        console.log(err);
      });

      console.log('Retrieving gigs for organization id: ', req.organizationId);
    },

    createGig: function (req, res){
      var gig = req.body.gig;
      var gigParams = {
        title: gig.title,
        type: gig.type,
        date: gig.date,
        startTime: gig.startTime,
        endTime: gig.endTime,
        complexity: gig.complexity,
        health: gig.health,
        OrganizationId: req.organizationId,
        LocationId: gig.locationId,
        AttireId: gig.attireId
      };

      Gig.createGig(gigParams).then(function (gig) {
        res.send(gig);
      }).catch(function (err) {
        console.log(err);
      });

      console.log("creating new gigs for organization id: " + req.params.organizationId);
    },

    getGigInfo: function (req, res){
      var gigId = req.params.gigId;

      Gig.getGigInfo(gigId).then(function (gig) {
        res.send(gig);
      }).catch(function (err) {
        console.log(err);
      });
      console.log('getting gig info for gig id: ' + req.params.gigId + " for organization id:  " + req.organizationId);
    },

    updateGigInfo: function (req, res){
     var gigId = req.params.gigId;
     var gigParams = {
        title: req.body.title,
        type: req.body.type,
        date: req.body.date,
        startTime: req.body.startTime,
        endTime: req.body.endTime,
        complexity: req.body.complexity,
        health: req.body.health,
        OrganizationId: req.params.organizationId,
        LocationId: req.body.location,
        AttireId: req.body.attire
      };

      Gig.updateGigInfo(gigId, gigParams).then(function (gig) {
        res.send(gig);
      }).catch(function (err) {
        console.log(err);
      });
      console.log('updating gig information for gig id: ' + req.params.gigId + " for organizaiton id: " + req.organizationId);
    },

    deleteGig: function (req, res){
      var gigId = req.params.gigId;

      Gig.deleteGig(gigId).then(function (result) {
        res.sendStatus(204);
      }).catch(function (err) {
        console.log(err);
      });
      console.log('deleting gig id:' + req.params.gigId + " for organization id: " + req.organizationId);
    },

    getGigStaff: function (req, res){
      var employees = []; //holds staff for a specific gig
      var gigId = req.params.gigId;

      UserGigs.getUserGigs(gigId, function (userGigs) {
        return Sequelize.Promise.map(userGigs, function (userGig) {
          return User.getEmployeeInfo(userGig.UserId);
        });
      }).then(function (employees) {
        res.send(employees);
      }).catch(function (err) {
        console.log(err);
      });
      console.log('getting staff for gig id: ' + req.params.gigId + " for organization id: " + req.organizationId);
    },

    addEmployeeToGigStaff: function (req, res){
      var userGigParams = {
        UserId: parseInt(req.body.employeeId, 10),
        GigId: parseInt(req.params.gigId, 10),
        PositionId: req.body.positionId,
        adminAccepted: req.body.adminAccepted,
        workerAccepted: req.body.workerAccepted,
      };

      //Careful with admin/woker accepted...
      UserGigs.addEmployeeToGigStaff(userGigParams).then(function (userGig) {
        res.send(userGig);
      }).catch(function (err) {
        console.log(err);
      });
      console.log('Adding employee id: ', req.body.employeeId, ' to gig id: ', req.params.gigId);
    },

    getEmployeeStatus: function (req, res){
      var userId = req.params.employeeId;

      UserGigs.getEmployeeStatus(userId).then(function (userGig) {
        res.send(userGig);
      }).catch(function (err) {
        console.log(err);
      });
      console.log('getting employee status for gig id: ' + req.params.gigId + ' for employee id: ' + req.params.employeeId + " for organization id: " + req.organizationId);
    },

    updateEmployeeStatus: function (req, res){
      var userGigParams = {
        adminAccepted: req.body.adminAccepted,
        workerAccepted: req.body.workerAccepted
      };

      var identifiers = {
        gigId: req.params.gigId,
        userId: req.params.employeeId
      };

      UserGigs.updateEmployeeStatus(identifiers, userGigParams).then(function (userGig) {
       res.send(userGig);
      }).catch(function (err) {
        console.log(err);
      });
      console.log('updating employee status for gig id: ' + req.params.gigId + ' for employee id: ' + req.params.employeeId + " for org id: " + req.organizationId);
    },

    removeEmployeeFromGig: function (req, res){
      var gigId = req.params.gigId;
      var userId = req.params.employeeId;

      UserGigs.removeEmployeeFromGig(gigId, userId).then(function (result) {
        res.sendStatus(204);
      }).catch(function (err) {
        console.log(err);
      });
      console.log('removing employee id: ', userId, ' from gig id: ', gigId);
    },

  };

  return gigController;
};
