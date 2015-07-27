var expect = require('chai').expect;
var app = require('../../server/server');

describe('App Configuration', function() {

  var server;

  before(function() {
    server = require('../../server/server').get('server');
  });

  after(function() {
    server.close();
  });

  it('should be a function with server and models objects attached', function(done) {
    expect(app).to.be.a('function');
    expect(app.get('models')).to.be.an('object');
    expect(app.get('server')).to.be.an('object');
    done();
  });

  it('should start a server and listen on port 8000', function(done) {
    expect(server.address().port).to.equal(8000);
    done();
  });
});