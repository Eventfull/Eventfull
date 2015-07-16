var mandrillAPI = require('./config.js');
var messages = require('./messages');

exports.sendEmployeeConfirmationMessage = function(gigInfo, userInfo, locationInfo) {
  var async = false;
  mandrillAPI.mandrill_client.messages.send({
    'message':messages.sendConfirmationMessage(gigInfo, userInfo, locationInfo),
    'async': async
  }, function(result) {
       console.log('Email successfully sent!', result);
  }, function(error) {
       console.log('Mandrill email error occured!', error.name);
  });
};
