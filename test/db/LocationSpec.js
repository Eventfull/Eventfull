var assert = require('chai').assert;

module.exports = function(models){

  var dbTestUtils = require('./helpers/db-test-utils')(models);

  describe('Locations', function(){
    var Location = models.Location;
    var Organization = models.Organization;
    before(function(){
      return dbTestUtils.clearTables([
        'Location',
        'Organization'
      ]).then(function(){
        return Organization.create({
          name: 'fake org',
          subscription: 'free',
          id: 1
        });
      }).then(function(){
        return Location.create({
          name: 'fake location',
          addressOne: '123 fake street',
          addressTwo: '',
          city: 'Metropolis',
          state: 'MD',
          zipCode: '12345',
          OrganizationId: 1,
          id: 1
        });
      });
    });

    after(function(){
      return dbTestUtils.clearTables([
        'Location',
        'Organization'
      ]);
    });

    describe('Class Methods', function(){
      describe('#getLocationInfo', function(){
        it('Should have a getLocationInfo method', function(){
          assert.isFunction(Location.getLocationInfo);
        });

        it('Should return a promise', function(){
          assert.instanceOf(Location.getLocationInfo(), models.sequelize.Promise);
        });

        it('Should return a promise', function(){
          assert.instanceOf(Location.getLocationInfo(), models.sequelize.Promise);
        });

        it('Should get the location info', function(){
          return Location.getLocationInfo(1).then(function(location){
            assert.equal(location.get('name'), 'fake location');
            assert.equal(location.get('addressOne'), '123 fake street');
            assert.equal(location.get('addressTwo'), '');
            assert.equal(location.get('city'), 'Metropolis');
            assert.equal(location.get('state'), 'MD');
            assert.equal(location.get('zipCode'), '12345');
          });
        });
      })
    });
  });
}