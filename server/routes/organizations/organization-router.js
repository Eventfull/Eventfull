var express = require('express');
var organizationRouter = express.Router();
var gigRouter = require('./gigs/gig-router');
var employeeRouter = require('./employees/employee-router');

organizationRouter.post('/', function(req, res){
  // create organization
  res.send('creating organization')
});

organizationRouter.get('/:organization_id', function(req, res){
  // return organization info
  res.send('getting info for organization ' + req.params.organization_id)
});


organizationRouter.post('/:organization_id', function(req, res){
  // return organization info
  res.send('update for organization ' + req.params.organization_id)
});

// finds organization and attach it to request so other routers can
// use it.
organizationRouter.param('organization_id', function(req, res, next, organization_id){
  // would be a call to the organization controller to lookup in db.
  req.organization_id = organization_id;
  next();
});

organizationRouter.use('/:organization_id/gigs', gigRouter);
organizationRouter.use('/:organization_id/employees', employeeRouter);

module.exports = organizationRouter;