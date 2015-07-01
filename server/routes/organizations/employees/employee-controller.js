var models = require('../../../db/models');
var User = models.User;

var employeeController = {

  getEmployees: function (req, res){
    // accepts params (on req.params) to filter on availability.
    var organizationId = req.organization_id;

    User.getEmployees(organizationId).then(function (employees) {
      res.send(employees);
    }).catch(function (err) {
      console.log(err);
    });
    console.log('returning employees of organization id: ' + req.organization_id);
  },

  addEmployee: function (req, res){
    var userParams = {
      OrganizationId: req.organization_id,
      email: req.body.email,
      password: req.body.password,
      roleId: req.body.roleId,
    };

    User.addEmployee(userParams).then(function (employee) {
      res.send(employee);
    }).catch(function (err) {
      console.log(err);
    });
    console.log('adding employee for the organization id: ' + req.organization_id);
  },

  getEmployeeInfo: function (req, res){
    var employeeId = req.params.employee_id;

    User.getEmployeeInfo(employeeId).then(function (employee) {
      res.send(employee);
    }).catch(function (err) {
      console.log(err);
    });
    console.log("getting employee id: " + req.params.employee_id +" information for the organization id: " + req.organization_id);
  },

  updateEmployeeInfo: function (req, res){
    var employeeId = req.params.employee_id;
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
    console.log("updating employee id: " + req.params.employee_id +" information for the organization id: " + req.organization_id);
  },

  removeEmployeeFromOrganization: function (req, res){
    var employeeId = req.params.employee_id;

    User.removeEmployeeFromOrganization(employeeId).then(function (result) {
     res.sendStatus(204);
    }).catch(function (err) {
      console.log(err);
    });
    console.log("deleting employee id: " + req.params.employee_id +" information for the organization id: " + req.organization_id);
  }

};
module.exports = employeeController;