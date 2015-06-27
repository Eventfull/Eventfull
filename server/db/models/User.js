module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define('User', {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    google_id: DataTypes.STRING
  }, {
    classMethods: {

      getEmployees: function (organizationId, callback) {
        User.findAll({
          where: {
            OrganizationId: organizationId
          }
        }).then(function(employees) {
          callback(employees);
        });
      },

      addEmployee: function (organizationId, email, password, roleId, callback) {
        User.create({
          email: employeeEmail,
          password: employeePassword,
          OrganizationId: organizationId,
          roleId: roleId
        }).then(function(employee) {
          callback(employee);
        });
      },

      getEmployeeInfo: function (id, callback) {
        User.find({
          where: {
            id: id
          }
        }).then(function(employee) {
          callback(employee);
        });
      },

      updateEmployeeInfo: function (id, employeeParams, callback) {
        User.update(employeeParams, {
          where: {
            id: id
          }
        }).then(function (employee) {
          callback(employee);
        });
      },

      removeEmployeeFromOrganization: function (eid) {
        User.find({
          where: {
            id: id
          }
        }).then(function(employee) {
          if ( employee === null ) {
            callback(false);
          } else {
            employee.destroy().then(function() {
              callback(true);
            });        
          }
        });
      }
    }
  });
  return User;
};