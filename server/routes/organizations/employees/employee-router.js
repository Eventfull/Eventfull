var express = require('express');
var employeeRouter = express.Router();
var employeeController = require('./employee-controller');

employeeRouter.get('/', function(req, res){
  // return organizations employees
  // accepts params to filter on availability.
  res.send('returning ' + req.organization_id + ' organizations employees');
});

employeeRouter.post('/', function(req, res){
  // add employee to organization
  res.send('adding employee for the organization ' + req.organization_id);
});

employeeRouter.get('/:employee_id', function(req, res){
  // get employee info
  res.send("getting " + req.params.employee_id +"'s info for the organization " + req.organization_id);
});

employeeRouter.post('/:employee_id', function(req, res){
  // update employee info
  res.send("updating " + req.params.employee_id +"'s info for the organization " + req.organization_id);
});

employeeRouter.delete('/:employee_id', function(req, res){
  // remove employee from organization
  res.send("deleting " + req.params.employee_id +"'s info for the organization " + req.organization_id);
});

module.exports = employeeRouter;