module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define('User', {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    googleId: DataTypes.STRING,
    name: DataTypes.STRING,
  }, {
    classMethods: {

      getAllEmployees: function (organizationId) {
        return User.findAll({
          where: {
            OrganizationId: organizationId
          }
        });
      },

      getAvailableEmployees: function(organizationId, day){
        return User.findAll({
          attributes: ['id', 'name', 'email'],
          where: {
            OrganizationId: organizationId
          },
          include: [{
            model: User.associations['Availabilities'].target,
            where: {
              day: day
            },
            attributes: ['day', 'startTime', 'endTime']
          }]
        });
      },

      addEmployee: function (userParams) {
        return User.create(userParams);
      },

      getEmployeeInfo: function (id) {
        return User.find({
          where: {
            id: id
          }
        });
      },

      updateEmployeeInfo: function (id, employeeParams) {
        return User.update(employeeParams, {
          where: {
            id: id
          }
        });
      },

      removeEmployeeFromOrganization: function (id) {
        return User.destroy({
          where: {
            id: id
          }
        });
      }
    }
  });
  return User;
};