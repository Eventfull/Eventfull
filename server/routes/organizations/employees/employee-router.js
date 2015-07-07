var express = require('express');

module.exports = function(app){
  var employeeRouter = express.Router();
  var employeeController = require('./employee-controller')(app);

  ////////////// ROUTES ////////////////
  employeeRouter.get('/', employeeController.getEmployees);
  employeeRouter.post('/', employeeController.addEmployee);

  employeeRouter.get('/:employeeId', employeeController.getEmployeeInfo);
  employeeRouter.post('/:employeeId', employeeController.updateEmployeeInfo);
  employeeRouter.delete('/:employeeId', employeeController.removeEmployeeFromOrganization);

  return employeeRouter;
};
