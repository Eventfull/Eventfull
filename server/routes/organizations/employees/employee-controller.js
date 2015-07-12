var moment = require('moment');

module.exports = function(app){

  var models = app.get('models');
  var User = models.User;
  var dayMap = {
    Monday: 1,
    monday: 1,
    Tuesday: 2,
    tuesday: 2,
    Wednesday: 3,
    wednesday: 3,
    Thursday: 4,
    thursday: 4,
    Friday: 5,
    friday: 5,
    Saturday: 6,
    saturday: 6,
    Sunday: 7,
    sunday: 7,
  };

  var employeeController = {

    getEmployees: function (req, res){
      var organizationId = req.organizationId;
      var weekday = moment(req.query.date).format('dddd');

      if (req.query.date === undefined){
        User.getAllEmployees(organizationId).then(function (employees) {
          res.send(employees);
        }).catch(function (err) {
          console.log(err);
        });
      } else {
        User.getAvailableEmployees(organizationId, dayMap[weekday]).then(function(employees){
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