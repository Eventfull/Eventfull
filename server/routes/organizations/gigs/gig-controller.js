module.exports = function(app){
  var models = app.get('models');
  var Gig = models.Gig;
  var UserGigs = models.UserGigs;
  var User = models.User;
  var Location = models.Location;

  var gigController = {

    getGigs: function (req, res){
      var info = {
        organizationId: req.organization_id,
        startDate: req.query.startDate,
        endDate: req.query.endDate,
        includeStaff: req.query.startDate === req.query.endDate
      };

      Gig.getGigs(info).then(function (gigs) {
        return models.sequelize.Promise.map(gigs, function(gig){
          return Location.getLocationInfo(gig.LocationId).then(function(info){
            this.location = info[0].toJSON();
            return this;
          }.bind(gig.toJSON()));
        });
      }).then(function(gigs){
        res.send(gigs);
      }).catch(function (err) {
        console.log(err);
      });

      console.log('Retrieving gigs for organization id: ', req.organization_id);
    },

    createGig: function (req, res){
      var gigParams = {
        title: req.body.title,
        type: req.body.type,
        date: req.body.date,
        start_time: req.body.startTime,
        end_time: req.body.endTime,
        complexity: req.body.complexity,
        health: req.body.health,
        OrganizationId: req.organization_id,
        LocationId: req.body.location,
        AttireId: req.body.attire
      };

      Gig.createGig(gigParams).then(function (gig) {
        res.send(gig);
      }).catch(function (err) {
        console.log(err);
      });

     console.log("creating new gigs for organization id: " + req.params.organization_id);
    },

    getGigInfo: function (req, res){
      var gigId = req.params.gig_id;

      Gig.getGigInfo(gigId).then(function (gig) {
        res.send(gig);
      }).catch(function (err) {
        console.log(err);
      });
      console.log('getting gig info for gig id: ' + req.params.gig_id + " for organization id:  " + req.organization_id);
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

      Gig.updateGigInfo(gigId, gigParams).then(function (gig) {
        res.send(gig);
      }).catch(function (err) {
        console.log(err);
      });
      console.log('updating gig information for gig id: ' + req.params.gig_id + " for organizaiton id: " + req.organization_id);
    },

    deleteGig: function (req, res){
      var gigId = req.params.gig_id;

      Gig.deleteGig(gigId).then(function (result) {
        res.sendStatus(204);
      }).catch(function (err) {
        console.log(err);
      });
      console.log('deleting gig id:' + req.params.gig_id + " for organization id: " + req.organization_id);
    },

    getGigStaff: function (req, res){
      var employees = []; //holds staff for a specific gig
      var gigId = req.params.gig_id;

      UserGigs.getUserGigs(gigId, function (userGigs) {
        return Sequelize.Promise.map(userGigs, function (userGig) {
          return User.getEmployeeInfo(userGig.UserId);
        });
      }).then(function (employees) {
        res.send(employees);
      }).catch(function (err) {
        console.log(err);
      });
      console.log('getting staff for gig id: ' + req.params.gig_id + " for organization id: " + req.organization_id);
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
      UserGigs.addEmployeeToGigStaff(userGigParams).then(function (userGig) {
        res.send(userGig);
      }).catch(function (err) {
        console.log(err);
      });
      console.log('Adding employee id: ', req.params.employeeId, ' to gig id: ', req.params.gig_id);
    },

    getEmployeeStatus: function (req, res){
      var userId = req.params.employee_id;

      UserGigs.getEmployeeStatus(userId).then(function (userGig) {
        res.send(userGig);
      }).catch(function (err) {
        console.log(err);
      });
      console.log('getting employee status for gig id: ' + req.params.gig_id + ' for employee id: ' + req.params.employee_id + " for organization id: " + req.organization_id);
    },

    updateEmployeeStatus: function (req, res){
      var userGigParams = {
        admin_accepted: req.body.admin_accepted,
        worker_accepted: req.body.worker_accepted
      };

      var identifiers = {
        gigId: req.params.gig_id,
        userId: req.params.employee_id
      };

      UserGigs.updateEmployeeStatus(identifiers, userGigParams).then(function (userGig) {
       res.send(userGig);
      }).catch(function (err) {
        console.log(err);
      });
      console.log('updating employee status for gig id: ' + req.params.gig_id + ' for employee id: ' + req.params.employee_id + " for org id: " + req.organization_id);
    },

    removeEmployeeFromGig: function (req, res){
      var gigId = req.params.gig_id;
      var userId = req.params.employee_id;

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