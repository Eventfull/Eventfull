var assert = require('chai').assert;
var models = require('../../server/server.js').get('models');
var moment = require('moment');
var dbTestUtils = require('./helpers/db-test-utils');

describe('Gigs', function(){
  var Gig = models.Gig;
  var Organization = models.Organization;

  before(function(){
    return dbTestUtils.clearTables([
      'Gig',
      'Organization'
    ]).then(function(){
      return Organization.create({
        id: 1,
        name: 'fakeorg',
        subscription: 'free'
      });
    }).catch(function(err){
      console.log(err);
    });
  });

  describe('Class Methods', function(){
    describe('#getGigs', function(){
      it('Should have a getGigs method', function(){
        assert.isFunction(Gig.getGigs);
      });

      it('Should return a promise', function(){
        var today = moment();
        assert.instanceOf(Gig.getGigs({
          startDate: today.format('YYYY-MM-DD'),
          endDate: today.format('YYYY-MM-DD')
        }), models.sequelize.Promise);
      });

      //pending tests which needs to be implemented
      it('Should have a promise which resolves to gigs in an array');
      it('Should filter based on dates');
    });

    describe('#createGig', function(){
      it('Should have a createGig method', function(){
        assert.isFunction(Gig.createGig);
      });

      it('Should return a promise', function(){
        var today = moment();
        assert.instanceOf(Gig.createGig({
          title: 'Fake event',
          date: today.format('YYYY-MM-DD'),
          startTime: '10:00:00',
          endTime: '22:00:00',
          complexity: 5,
          health: 0,
          id: 1
        }), models.sequelize.Promise);
      });

      it('Should save the gig in the db', function(){
        var today = moment();
        return Gig.find({
          where: {
            id: 1
          }
        }).then(function(gig){
          assert.equal(gig.get('title'), 'Fake event');
          assert.equal(gig.get('startTime'), '10:00:00');
          assert.equal(gig.get('endTime'), '22:00:00');
          assert.equal(gig.get('complexity'), 5);
        });
      });
    });

    describe('#getGigInfo', function(){
      before(function(){
        var today = moment();
        return dbTestUtils.clearTables([
          'Gig'
        ]).then(function(){
          return Gig.create({
            title: 'Fake event',
            date: today.format('YYYY-MM-DD'),
            startTime: '10:00:00',
            endTime: '22:00:00',
            complexity: 5,
            health: 0,
            type: 'wedding',
            id: 1,
            OrganizationId: 1
          });
        });
      });

      it('Should have a getGigInfo method', function(){
        assert.isFunction(Gig.getGigInfo);
      });

      it('Should return a promise', function(){
        assert.instanceOf(Gig.getGigInfo(1), models.sequelize.Promise);
      });

      it('Should return promise which resolves to the correct gigInfo', function(){
        var today = moment();
        return Gig.getGigInfo(1).then(function(gig){
          assert.instanceOf(gig, Object);
          assert.equal(gig.get('id'), 1);
          assert.equal(gig.get('title'), 'Fake event');
          assert.equal(gig.get('type'), 'wedding');
          assert.equal(gig.get('startTime'), '10:00:00');
          assert.equal(gig.get('endTime'), '22:00:00');
          assert.equal(gig.get('complexity'), 5);
          assert.equal(gig.get('health'), 0);
          assert.equal(gig.get('OrganizationId'), 1);
        });
      });
    });

    describe('#updateGigInfo', function(){
      before(function(){
        var today = moment();
        return dbTestUtils.clearTables([
          'Gig'
        ]).then(function(){
          return Gig.create({
            title: 'Fake event',
            date: today.format('YYYY-MM-DD'),
            startTime: '10:00:00',
            endTime: '22:00:00',
            complexity: 5,
            health: 0,
            type: 'wedding',
            id: 1,
            OrganizationId: 1
          });
        });
      });

      it('Should have a updateGigInfo method', function(){
        assert.isFunction(Gig.updateGigInfo);
      });

      it('Should return a promise', function(){
        assert.instanceOf(Gig.updateGigInfo(1, {}), models.sequelize.Promise);
      });

      it('Should return promise which resolves to the correct gigInfo', function(){
        var today = moment();
        return Gig.updateGigInfo(1, {
          type: 'birthday',
          title: 'super fake event',
          complexity: 2
        }).then(function(){
          return Gig.find({
            where: {
              id: 1
            }
          });
        }).then(function(gig){
          assert.instanceOf(gig, Object);
          assert.equal(gig.get('id'), 1);
          assert.equal(gig.get('title'), 'super fake event');
          assert.equal(gig.get('type'), 'birthday');
          assert.equal(gig.get('startTime'), '10:00:00');
          assert.equal(gig.get('endTime'), '22:00:00');
          assert.equal(gig.get('complexity'), 2);
          assert.equal(gig.get('health'), 0);
          assert.equal(gig.get('OrganizationId'), 1);
        });
      });
    });

    describe('#deleteGig', function(){
      beforeEach(function(){
        var today = moment();
        return dbTestUtils.clearTables([
          'Gig'
        ]).then(function(){
          return Gig.create({
            where: {
              title: 'Fake event',
              date: today.format('YYYY-MM-DD'),
              startTime: '10:00:00',
              endTime: '22:00:00',
              complexity: 5,
              health: 0,
              type: 'wedding',
              id: 1,
              OrganizationId: 1
            }
          });
        });
      });

      it('Should have a deleteGig method', function(){
        assert.isFunction(Gig.deleteGig);
      });

      it('Should return a promise', function(){
        assert.instanceOf(Gig.deleteGig(1), models.sequelize.Promise);
      });

      it('Should return promise which resolves to the correct gigInfo', function(){
        var today = moment();
        return Gig.deleteGig(1).then(function(){
          return Gig.find({
            where: {
              id: 1
            }
          });
        }).then(function(gig){
          assert.equal(null, gig);
        });
      });
    });
  });
});

