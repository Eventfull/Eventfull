module.exports = function (sequelize, DataTypes) {
  var UserGigs = sequelize.define('UserGigs', {
    admin_accepted: DataTypes.BOOLEAN,
    worker_accepted: DataTypes.BOOLEAN
  }, {
    classMethods: {

      getUserGigs: function (gigId) {
        return UserGigs.findAll({
          where: {
            GigId: gigId
          }
        });
      },

      addEmployeeToGigStaff: function (userGigParams) {
        return UserGigs.create(userGigParams);
      },

      getEmployeeStatus: function (userId) {
        return UserGigs.find({
          where: {
            UserId: userId
          }
        });
      },

      updateEmployeeStatus: function (identifiers, params) {
        return UserGigs.update({
          admin_accepted: params.admin_accepted,
          worker_accepted: params.worker_accepted
          }, {
          where: {
            UserId: identifiers.userId,
            GigId: identifiers.gigId
          }
        });
      },

      removeEmployeeFromGig: function (gigId, userId) {
        return UserGigs.destroy({
          where: {
            UserId: userId,
            GigId: gigId
          }
        });
      }

    }
  });
  return UserGigs;
};