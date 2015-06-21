var express = require('express');
var app = express();
var port = 8000;

require('./middlewares/middleware')(app);
require('./controllers/controllers')(app);

app.use(express.static(__dirname + '/../dist/client'));

app.listen(port, function(){
  console.log('App now listening on port: ' + port);
});
