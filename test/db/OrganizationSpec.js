var assert = require('chai').assert;
var models = require('../../server/server.js').get('models');
var moment = require('moment');
var dbTestUtils = require('./helpers/db-test-utils');

describe('Organizations', function(){
  var Organization = models.Organization;

  before(function(){
    return dbTestUtils.clearTables([
      'Organization'
    ]).catch(function(err){
      console.log(err);
    });
  });

  after(function(){
    return dbTestUtils.clearTables([
      'Organization'
    ]).catch(function(err){
      console.log(err);
    });
  });

  describe('Class Methods', function(){
    describe('#createOrganization', function(){
      it('Should have a createOrganization method', function(){
        assert.isFunction(Organization.createOrganization);
      });

      it('Should return a promise', function(){
        assert.instanceOf(Organization.createOrganization({}), models.sequelize.Promise);
      });

      it('Should create an organization', function(){
        return Organization.createOrganization({
          name: 'fakeorg',
          subscription: 'free'
        }).then(function(){
          return Organization.find({
            where: {
              name: 'fakeorg'
            }
          });
        }).then(function(org){
          assert.equal(org.get('name'), 'fakeorg');
          assert.equal(org.get('subscription'), 'free');
        });
      });
    });

    describe('#getOrganizationInfo', function(){
      before(function(){
        return dbTestUtils.clearTables([
          'Organization'
        ]).then(function(){
          Organization.create({
            id: 1,
            name: 'fakeorg',
            subscription: 'free'
          })
        })
      });

      it('Should have a getOrganizationInfo method', function(){
        assert.isFunction(Organization.getOrganizationInfo);
      });

      it('Should return a promise', function(){
        assert.instanceOf(Organization.getOrganizationInfo(1), models.sequelize.Promise);
      });

      it('Should get the info', function(){
        return Organization.getOrganizationInfo(1).then(function(org){
          assert.equal(org.get('name'), 'fakeorg');
          assert.equal(org.get('subscription'), 'free');
        });
      });
    });

    describe('#updateOrganizationInfo', function(){
      before(function(){
        return dbTestUtils.clearTables([
          'Organization'
        ]).then(function(){
          Organization.create({
            id: 1,
            name: 'fakeorg',
            subscription: 'free'
          })
        })
      });

      it('Should have a updateOrganizationInfo method', function(){
        assert.isFunction(Organization.updateOrganizationInfo);
      });

      it('Should return a promise', function(){
        assert.instanceOf(Organization.updateOrganizationInfo(1, {}), models.sequelize.Promise);
      });

      it('Should update the info', function(){
        return Organization.updateOrganizationInfo(1, {
          name: 'newfakeorgname',
          subscription: 'paid'
        }).then(function(){
          return Organization.find({
            where: {
              id: 1
            }
          })
        }).then(function(org){
          assert.equal(org.get('name'), 'newfakeorgname');
          assert.equal(org.get('subscription'), 'paid');
        });
      });
    });

    describe('#removeOrganization', function(){
      beforeEach(function(){
        return Organization.findOrCreate({
          where: {
            id: 1,
            name: 'newfakeorgname',
            subscription: 'paid'
          }
        });
      });

      it('Should have a removeOrganization method', function(){
        assert.isFunction(Organization.removeOrganization);
      });

      it('Should return a promise', function(){
        assert.instanceOf(Organization.removeOrganization(1), models.sequelize.Promise);
      });

      it('Should delete the organization properly', function(){
        return Organization.removeOrganization(1).then(function(){
          return Organization.find({
            where: {
              id: 1
            }
          });
        }).then(function(org){
          assert.equal(org, null);
        });
      });
    });
  });
});

