var morgan = require('morgan');
var bodyParser = require('body-parser');
var passport = require('passport');
var session = require('express-session');

// middleware mounted without a path will
// be executed for every request to the app
module.exports = function(app){
  app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(session({ 
    secret: 'keyboard cat',
    saveUninitialized: true,
    resave: true
  }));
  app.use(passport.initialize());
};
