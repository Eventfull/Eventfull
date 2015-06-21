var morgan = require('morgan');
var bodyParser = require('body-parser');

// middleware mounted without a path will
// be executed for every request to the app
module.exports = function(app){
  app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
};
