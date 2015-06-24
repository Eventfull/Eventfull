var express = require('express');
var employeeRouter = express.Router();
var employeeController = require('./employee-controller');

////////////// ROUTES ////////////////
employeeRouter.get('/', employeeController.getEmployees);
employeeRouter.post('/', employeeController.addEmployee);

employeeRouter.get('/:employee_id', employeeController.getEmployeeInfo);
employeeRouter.post('/:employee_id', employeeController.updateEmployeeInfo);
employeeRouter.delete('/:employee_id', employeeController.removeEmployeeFromOrganization);

module.exports = employeeRouter;
