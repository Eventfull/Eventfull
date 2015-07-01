var express = require('express');
var organizationRouter = express.Router();
var organizationController = require('./organization-controller');
var gigRouter = require('./gigs/gig-router');
var employeeRouter = require('./employees/employee-router');

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

module.exports = organizationRouter;
