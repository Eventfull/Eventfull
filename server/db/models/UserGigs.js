module.exports = function (sequelize, DataTypes) {
  var UserGigs = sequelize.define('UserGigs', {
    adminAccepted: DataTypes.BOOLEAN,
    workerAccepted: DataTypes.BOOLEAN
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
          adminAccepted: params.adminAccepted,
          workerAccepted: params.workerAccepted
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