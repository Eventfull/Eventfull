var moment = require('moment');

module.exports = function(app){

  var models = app.get('models');
  var User = models.User;

  var employeeController = {

    getEmployees: function (req, res){
      var organizationId = req.organizationId;
      var date = moment(req.query.date)
      var weekday = date.day() === 0 ? 7 : date.day(); //to go from 1 to 7

      if (req.query.date === undefined){
        User.getAllEmployees(organizationId).then(function (employees) {
          res.send(employees);
        }).catch(function (err) {
          console.log(err);
        });
      } else {
        User.getAvailableEmployees(organizationId, weekday).then(function(employees){
          res.send(employees);
        }).catch(function(err){
          console.log(err);
        });
      }
      console.log('returning employees of organization id: ' + req.organizationId);
    },

    addEmployee: function (req, res){
      var userParams = {
        OrganizationId: req.organizationId,
        email: req.body.email,
        password: req.body.password,
        roleId: req.body.roleId,
      };

      User.addEmployee(userParams).then(function (employee) {
        res.send(employee);
      }).catch(function (err) {
        console.log(err);
      });
      console.log('adding employee for the organization id: ' + req.organizationId);
    },

    getEmployeeInfo: function (req, res){
      var employeeId = req.params.employeeId;

      User.getEmployeeInfo(employeeId).then(function (employee) {
        res.send(employee);
      }).catch(function (err) {
        console.log(err);
      });
      console.log("getting employee id: " + req.params.employeeId +" information for the organization id: " + req.organizationId);
    },

    updateEmployeeInfo: function (req, res){
      var employeeId = req.params.employeeId;
      var employeeData = {
        email: req.body.email,
        password: req.body.password,
        googleId: req.body.googleId,
        roleId: req.body.roleId,
        organizationId: req.body.organizationId
      };

      User.updateEmployeeInfo(employeeId, employeeData).then(function (employee) {
        res.send(employee);
      }).catch(function (err) {
        console.log(err);
      });
      console.log("updating employee id: " + req.params.employeeId +" information for the organization id: " + req.organizationId);
    },

    removeEmployeeFromOrganization: function (req, res){
      var employeeId = req.params.employeeId;

      User.removeEmployeeFromOrganization(employeeId).then(function (result) {
       res.sendStatus(204);
      }).catch(function (err) {
        console.log(err);
      });
      console.log("deleting employee id: " + req.params.employeeId +" information for the organization id: " + req.organizationId);
    }

  };

  return employeeController;
}