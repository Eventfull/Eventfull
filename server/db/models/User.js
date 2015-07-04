module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define('User', {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    google_id: DataTypes.STRING,
    name: DataTypes.STRING,
  }, {
    classMethods: {

      getEmployees: function (organizationId) {
        return User.findAll({
          where: {
            OrganizationId: organizationId
          }
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