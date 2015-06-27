module.exports = function (sequelize, DataTypes) {
  var UserGigs = sequelize.define('UserGigs', {
    date: DataTypes.DATE,
    admin_accepted: DataTypes.BOOLEAN,
    worker_accepted: DataTypes.BOOLEAN
  }, {
    classMethods: {

      getUserGigs: function (gigId, callback) {
        UserGigs.findAll({
          where: {
            GigId: gigId
          }
        }).then(function (userGigs) {
          callback(userGigs);
        });
      },

      addEmployeeToGigStaff: function (userGigParams, callback) {
        UserGigs.create(userGigParams).then( function (userGig) {
          callback(userGig);
        });
      },

      getEmployeeStatus: function (userId, callback) {
        UserGigs.find({
          where: {
            UserId: userId
          }
        }).then(function(userGig){
          callback(userGig);
        });
      },

      updateEmployeeStatus: function (userId, gigId, adminStatus, workerStatus, callback) {
        UserGigs.update({
          admin_accepted: adminStatus,
          worker_accepted: workerStatus
          }, {
          where: {
            UserId: userId,
            GigId: gigId
          }
        }).then(function(userGig){
          callback(userGig);
        });
      },

      removeEmployeeFromGig: function (gigId, userId, callback) {
        UserGigs.find({
          where: {
            UserId: userId,
            GigId: gigId
          }
        }).then(function(user) {
          if ( !user ) {
            callback(false);
          } else {
            user.destroy().then(function() {
              callback(true);
            });
          }
        });
      }

    }
  });
  return UserGigs;
};