var express = require('express');
var gigRouter = express.Router();
var gigController = require('./gig-controller');

gigRouter.get('/', gigController.getGigs);
gigRouter.post('/', gigController.createGig);

gigRouter.get('/:gig_id', gigController.getGigInfo);
gigRouter.post('/:gig_id', gigController.updateGigInfo);
gigRouter.delete('/:gig_id', gigController.deleteGig);

gigRouter.get('/:gig_id/staff', gigController.getGigStaff);
gigRouter.post('/:gig_id/staff', gigController.addEmployeeToGigStaff);

gigRouter.get('/:gig_id/staff/:employee_id', gigController.getEmployeeStatus);
gigRouter.post('/:gig_id/staff/:employee_id', gigController.updateEmployeeStatus);
gigRouter.delete('/:gig_id/staff/:employee_id', gigController.removeEmployeeFromGig);

module.exports = gigRouter;
