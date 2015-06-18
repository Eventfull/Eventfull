var express = require('express');
var dayRouter = express.Router();

// TEMPORARY USE BEFORE MODELS ARE CREATED
var dayDataCreator = require('../db/dayData/day-data-creator');
var _dayData = {};

dayRouter.get('/:day', function(req, res){
  var date = new Date(parseInt(req.params.day));
  var key = date.toDateString(); // Use day/year string as key for data object

  // creates data if it doesn't already exist.
  _dayData[key] = _dayData[key] || dayDataCreator.create(date);
  res.json(_dayData[key]);
});

module.exports = dayRouter;
