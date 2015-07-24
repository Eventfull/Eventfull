var passport = require('./gCalConfig');

var calendarController = {
  signin:  passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login','https://www.googleapis.com/auth/calendar','https://www.googleapis.com/auth/calendar.readonly'] }),

  callback:  passport.authenticate('google', { successRedirect: '/',failureRedirect: '/calendar/failure' }),

  logout:  function (req, res) {
    req.logout();
    req.session.destroy();
    res.redirect('/');
  },

  isAuthenticated:function (req, res) {
    res.send(req.isAuthenticated() ? true : false);
  },

  calendarFailure: function (req, res) {
    console.log('calendar failure error');
    res.sendStatus(404);
  }
};

module.exports = calendarController;
