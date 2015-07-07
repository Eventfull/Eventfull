var express = require('express');

module.exports = function(app){

  var organizationRouter = express.Router();
  var organizationController = require('./organization-controller')(app);
  var gigRouter = require('./gigs/gig-router')(app);
  var employeeRouter = require('./employees/employee-router')(app);

  // attaches organizationId to request
  organizationRouter.param('organizationId', organizationController.attachOrganizationIDtoRequest);

  ////////////// ROUTES ///////////////
  organizationRouter.post('/', organizationController.createOrganization);
  organizationRouter.get('/:organizationId', organizationController.getOrganizationInfo);
  organizationRouter.post('/:organizationId', organizationController.updateOrganizationInfo);
  organizationRouter.delete('/:organizationId', organizationController.removeOrganization);

  ////////////// SUB-ROUTES ////////////
  organizationRouter.use('/:organizationId/gigs', gigRouter);
  organizationRouter.use('/:organizationId/employees', employeeRouter);

  return organizationRouter;

};
