var should = require('chai').should();
var expect = require('chai').expect;

var app = require('../../server/server');
var request = require('supertest')(app);

module.exports = function (models) {
  var dbTestUtils = require('../db/helpers/db-test-utils')(models);

  describe('Organizations', function () {
    var Organization = models.Organization;

    before(function () {
      return dbTestUtils.clearTables([
        'Organization'
      ]).catch(function (err) {
        console.log(err);
      });
    });

    afterEach(function () {
      return dbTestUtils.clearTables([
        'Organization'
      ]).catch(function (err) {
        console.log(err);
      });
    });


    it('should post an organization to the database', function (done) {
      var organization = { name : 'our-busyness', subscription : 'paid' };
      request
        .post('/api/organizations/')
        .send(organization)
        .expect(200)
        .end(function (err, res) {
          Organization.find({
            where: {
              name: 'our-busyness'
            }
          }).then(function (org) {
            expect(org.name).to.equal('our-busyness');
            expect(org.subscription).to.equal('paid');
            done();
          });
        });
    });

    it('should return the correct organization utilizing the organization parameter', function (done) {
      Organization.createOrganization({
        name: 'fakeorg',
        subscription: 'free'
      }).then(function (org) {
        request
          .get('/api/organizations/' + org.id)
          .set('Accept', 'application/json')
          .expect(200)
          .end(function (err, res) {
            expect(res.body).to.be.a('object');
            expect(res.body.name).to.equal('fakeorg');
            expect(res.body.subscription).to.equal('free');
            console.log(err);
            done();
          });
      });
    });

    it('should update an existing organization when posting with an organization id parameter', function (done) {
      var updatedOrganization = { name : 'google', subscription : 'paid' };

      Organization.createOrganization({
        name: 'fakeorg',
        subscription: 'free'
      }).then(function (org) {
        request
          .post('/api/organizations/' + org.id)
          .send(updatedOrganization)
          .expect(200)
          .end(function (err, res) {
            Organization.find({
              where: {
                id: org.id
              }
            }).then(function (org) {
              expect(org.name).to.equal('google');
              expect(org.subscription).to.equal('paid');
              done();
            });
          });
      });
    });

    it('should remove an organization with a delete request and organization id parameter', function (done) {
      var updatedOrganization = { name : 'google', subscription : 'paid' };

      Organization.createOrganization({
        name: 'fakeorg',
        subscription: 'free'
      }).then(function (org) {
        request
          .del('/api/organizations/' + org.id)
          .expect(204)
          .end(function (err, res) {
            Organization.findAll().then(function (orgs) {
              expect(orgs).to.deep.equal([]);
              done();
            });
          });
      });
    });

  });
};
