var express = require('express');

module.exports = function(app){

  var organizationRouter = express.Router();
  var organizationController = require('./organization-controller')(app);
  var gigRouter = require('./gigs/gig-router')(app);
  var employeeRouter = require('./employees/employee-router')(app);

  // attaches organization_id to request
  organizationRouter.param('organization_id', organizationController.attachOrganizationIDtoRequest);

  ////////////// ROUTES ///////////////
  organizationRouter.post('/', organizationController.createOrganization);
  organizationRouter.get('/:organization_id', organizationController.getOrganizationInfo);
  organizationRouter.post('/:organization_id', organizationController.updateOrganizationInfo);
  organizationRouter.delete('/:organization_id', organizationController.removeOrganization);

  ////////////// SUB-ROUTES ////////////
  organizationRouter.use('/:organization_id/gigs', gigRouter);
  organizationRouter.use('/:organization_id/employees', employeeRouter);

  return organizationRouter;

};
