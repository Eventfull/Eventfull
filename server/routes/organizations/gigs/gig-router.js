var express = require('express');

module.exports = function(app){
  var gigRouter = express.Router();
  var gigController = require('./gig-controller')(app);

  ////////////// ROUTES ////////////////
  gigRouter.get('/', gigController.getGigs);
  gigRouter.post('/', gigController.createGig);

  gigRouter.get('/:gigId', gigController.getGigInfo);
  gigRouter.post('/:gigId', gigController.updateGigInfo);
  gigRouter.delete('/:gigId', gigController.deleteGig);

  gigRouter.get('/:gigId/staff', gigController.getGigStaff);
  gigRouter.post('/:gigId/staff', gigController.addEmployeeToGigStaff);

  gigRouter.get('/:gigId/staff/:employeeId', gigController.getEmployeeStatus);
  gigRouter.post('/:gigId/staff/:employeeId', gigController.updateEmployeeStatus);
  gigRouter.delete('/:gigId/staff/:employeeId', gigController.removeEmployeeFromGig);

  return gigRouter;
};
