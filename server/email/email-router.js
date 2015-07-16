var express = require('express');
var path = require('path');

module.exports = function(app, io){
  app.use(express.static(__dirname));
  var emailRouter = express.Router();

  var emailController = require('./email-controller')(app, io);


  emailRouter.post('/confirmation', emailController.sendEmails);

  emailRouter.get('/confirmation/confirmation.html', function(req,res){
    res.sendFile(path.join(__dirname, './confirmation.html'));
  });

  emailRouter.get('/confirmation/response*', emailController.handleResponse);

  return emailRouter;

};
