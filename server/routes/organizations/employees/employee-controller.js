var models = require('../../../db/models');
var User = models.User;

var employeeController = {

  getEmployees: function (req, res){
    // returns organizations employees
    // accepts params (on req.params) to filter on availability.
    var organizationId = Number(req.organization_id);

    User.getEmployees(organizationId, function (employees) {
      res.send(employees);
    });
    console.log('returning employees of organization' + req.organization_id);
  },

  addEmployee: function (req, res){
    // add employee to organization
    var organizationId = Number(req.organization_id);
    var email = req.body.email;
    var password = req.body.password;
    var roleId = req.body.roleId;

    User.addEmployee(organiationId, email, password, roleId, function (employee) {
      res.send(employee);
    });
    console.log('adding employee for the organization id ' + req.organization_id);
  },

  getEmployeeInfo: function (req, res){
    // get employee info
    var employeeId = req.params.employee_id;

    User.getEmployeeInfo(employeeId, function (employee) {
      res.send(employee);
    });
    console.log("getting " + req.params.employee_id +"'s info for the organization " + req.organization_id);
  },

  updateEmployeeInfo: function (req, res){
    // update employee info. will be available on data
    var employeeId = req.params.employee_id;
    var employeeData = {
      email: req.body.email,
      password: req.body.password,
      googleId: req.body.googleId,
      roleId: req.body.roleId,
      organizationId: req.body.organizationId
    };

    //Sequelize will NOT update undefined fields
    User.updateEmployeeInfo(employeeId, employeeData, function (employee) {
      res.send(employee);
    });
    console.log("updating " + req.params.employee_id +"'s info for the organization " + req.organization_id);
  },

  removeEmployeeFromOrganization: function (req, res){
    // remove employee from organization
    var employeeId = req.params.employee_id;

    User.removeEmployeeFromOrganization(employeeId, function (result) {
      //Temporary true/false. Will replace with robust error checking
      if ( result === true ) {
        res.sendStatus(200);
      } else {
        res.sendStatus(204);
      }
    });
    console.log("deleting " + req.params.employee_id +"'s info for the organization " + req.organization_id);
  }

};
module.exports = employeeController;