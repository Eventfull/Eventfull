var moment = require('moment');

exports.sendConfirmationMessage = function(gigInfo, userInfo, locationInfo) {
  //Development 'yes' path
  var yesPath = 'http://localhost:8000/api/email/confirmation/response?' +
    'confirmation=' + encodeURIComponent('Yes') +
    '&gigId=' + encodeURIComponent(gigInfo.id) +
    '&userId=' + encodeURIComponent(userInfo.id);

  //Development 'no' path
  var noPath = 'http://localhost:8000/api/email/confirmation/response?' +
    'confirmation=' + encodeURIComponent('No') +
    '&gigId=' + encodeURIComponent(gigInfo.id) +
    '&userId=' + encodeURIComponent(userInfo.id);

  //Will want to change email to actual users email
  var message = {
    'html': "<h3>Event Details</h3>\
    <ul>\
     <li>" + gigInfo.type + "</li>\
     <li>" + gigInfo.startTime + "</li>\
     <li>" + gigInfo.endTime + "</li>\
     <li>" + gigInfo.date + "</li>\
    </ul>\
    <ul>\
     <li>" + locationInfo.name + "</li>\
     <li>" + locationInfo.addressOne + "</li>\
     <li>" + locationInfo.addressTwo + "</li>\
     <li>" + locationInfo.city + "</li>\
     <li>" + locationInfo.state + "</li>\
     <li>" + locationInfo.zipCode + "</li>\
    </ul>\
    <h3>Confirm Availability</h3>\
    <a href=" + yesPath + "/>Yes</a></p>\
    <a href=" + noPath + "/>No</a></p>",

    'subject': "Catering Event Confirmation",
    'from_email': "hackboxinterviewteam@gmail.com",
    'from_name': "Hackbox Team",
    'to': [{
            'email': "jonewman1020@gmail.com",
            'name': "lo",
            'type': "to"
        }],
    'headers': {
        'Reply-To': "hackboxinterviewteam@gmail.com"
    }
  };

  return message;

};


