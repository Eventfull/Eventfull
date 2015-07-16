var mandrill = require('./email-service');
var _ = require('underscore');

module.exports = function(app, io){
  var models = app.get('models');
  var Gigs = models.Gig;
  var UserGigs = models.UserGigs;
  var Users = models.User;
  var Locations = models.Location;

  var emailController = {

    sendEmails: function (req, res) {
      var gigId = req.body.gigId;

      Gigs.getGigInfo(gigId).then(function (gigInfo) {
        Locations.getLocationInfo(gigInfo.LocationId).then(function (locationInfo) {
          UserGigs.getUserGigs(gigId).then(function (userIds) {
            _.each(userIds, function(userId) {
              Users.getEmployeeEmail(userId.UserId).then(function (userInfo) {
                mandrill.sendEmployeeConfirmationMessage(gigInfo.dataValues, userInfo.dataValues, locationInfo.dataValues);
              });
            });
          });
        });
      });
    },

    handleResponse: function (req, res) {
      var gigId = req.query.gigId;
      var userId = parseInt(req.query.userId.split('')[0], 10);
      var workerAccepted = req.query.confirmation;

      UserGigs.updateEmployeeStatus(
        {
          gigId:gigId,
          userId:userId
        },
        {
          workedAccepted: workerAccepted
        }
      ).then(function (result) {
        console.log('Successfuly updated employee acceptance response!');
        io.sockets.emit('email');
        res.redirect('confirmation.html');
      }).catch(function (err) {
        console.log('Error updating worker accepted response!');
        res.sendStatus(404);
      });
    }
  };

  return emailController;

};
