var express = require('express');
var app = express();
var port = 8000;

app.set('models', require('./db/models'));

require('./middlewares/middleware')(app);
require('./routes/routes')(app);

app.use(express.static(__dirname + '/../dist/client'));

app.get('models').sequelize.sync().then(function () {
  var server = app.listen(port, function () {
    console.log('App now listening on port: ' + server.address().port);
  });
});
