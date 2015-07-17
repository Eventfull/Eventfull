var assert = require('chai').assert;
var models = require('../../server/server.js').get('models');
var dbTestUtils = require('./helpers/db-test-utils');

describe('Users', function(done){
  var User = models.User;
  var Organization = models.Organization;

  before(function(){
      return dbTestUtils.clearTables([
        'User',
        'Organization'
      ]).then(function(){
        return Organization.create({
          id: 1,
          name: 'fake',
          subscription: 'free'
        });
      }).catch(function(err){
        console.log(err);
      });
    });

    after(function(){
      return dbTestUtils.clearTables([
        'User',
        'Organization'
      ]);
    });

  describe('Class Methods', function(){

    describe('#addEmployee', function(){
      it('Should have a addEmployee method', function(){
        assert.isFunction(User.addEmployee, 'we can get employees');
      });

      it('Should return a promise', function(){
        assert.instanceOf(User.addEmployee(), models.sequelize.Promise, 'returns a promise');
      });

      it('Should be able to add an employee', function(done){
        var employee = {
          email: 'fakeemail@gmail.com',
          password: 'fakepassword',
          googleId: '',
          name: 'fakerfaker'
        };

        User.addEmployee(employee).then(function(){
          return User.find({
            where: {
              name: 'fakerfaker'
            }
          });
        }).then(function(empFromDb){
          assert.strictEqual(empFromDb.get('name'), employee.name);
          assert.strictEqual(empFromDb.get('email'), employee.email);
          assert.strictEqual(empFromDb.get('password'), employee.password);
          assert.strictEqual(empFromDb.get('googleId'), employee.googleId);
          done();
        }).catch(function(err){
          console.log(err);
          done();
        });
      });
    });

    describe('#getEmployees', function(){

      // insert some employees to get
      before(function(done){
        User.bulkCreate([{
          email: 'fakeemail1@gmail.com',
          password: 'fakepassword1',
          googleId: '',
          name: 'fakerfaker1',
          OrganizationId: 1
        }, {
          email: 'fakeemail2@gmail.com',
          password: 'fakepassword2',
          googleId: '',
          name: 'fakerfaker2',
          OrganizationId: 1
        }]).then(function(){
          done();
        }).catch(function(err){
          console.log(err);
        });
      });

      it('Should have a getAllEmployees method', function(){
        assert.isFunction(User.getAllEmployees, 'we can get employees');
      });

      it('Should return a promise', function(){
        assert.instanceOf(User.getAllEmployees(), models.sequelize.Promise, 'returns a promise');
      });

      it('Should be able to getAllEmployees', function(done){
        User.getAllEmployees(1).then(function(employees){
          assert.instanceOf(employees, Array, 'should return an array of employees');
          assert.equal(employees.length, 2, 'should have all of the employees');
          done();
        });
      });
    });

    describe('#getEmployeeInfo', function(){

      before(function(done){
        return dbTestUtils.clearTables([
          'User'
        ]).then(function(){
          return User.create({
              email: 'fakeemail1@gmail.com',
              password: 'fakepassword1',
              googleId: '',
              name: 'fakerfaker1',
              OrganizationId: 1,
              id: 1
          });
        }).then(function(){
          done();
        }).catch(function(err){
          assert(err, undefined, 'before getEmployeeInfo failed');
          console.log(err);
        });
      });

      it('Should have a getEmployeeInfo method', function(){
        assert.isFunction(User.getEmployeeInfo, 'we can get employees');
      });

      it('Should return a promise', function(){
        assert.instanceOf(User.getEmployeeInfo(), models.sequelize.Promise, 'is a promise');
      });

      it('Should get then employee info', function(done){
        User.getEmployeeInfo(1).then(function(user){
          assert.equal(user.email, 'fakeemail1@gmail.com');
          assert.equal(user.password, 'fakepassword1');
          assert.equal(user.googleId, '');
          assert.equal(user.name, 'fakerfaker1');
          done();
        }).catch(function(err){
          console.log(err);
          done();
        });
      });
    });

    describe('#updateEmployeeInfo', function(){

      // destroy all user and create one to update info on
      before(function(done){
        return dbTestUtils.clearTables([
          'User'
        ]).then(function(){
          return User.create({
            email: 'fakeemail1@gmail.com',
            password: 'fakepassword1',
            googleId: '',
            name: 'fakerfaker1',
            OrganizationId: 1,
            id: 1
          });
        }).then(function(){
          done();
        }).catch(function(err){
          console.log(err, 'failed to destroy all users');
        });
      });

      it('Should have a updateEmployeeInfo method', function(){
        assert.isFunction(User.updateEmployeeInfo, 'we can get employees');
      });

      it('Should return a promise', function(){
        assert.instanceOf(User.updateEmployeeInfo(1, {}), models.sequelize.Promise, 'is a promise');
      });

      it('Should update employee info', function(done){
        User.updateEmployeeInfo(1, {
          name: 'fakers mcgee',
          email: 'superfaker@faker.com'
        }).then(function(){
          return User.find({
            where: {
              id: 1
            }
          });
        }).then(function(user){
          assert.equal(user.name, 'fakers mcgee', 'changed name');
          assert.equal(user.email, 'superfaker@faker.com', 'changed email');
          done();
        }).catch(function(err){
          console.log(err);
        });
      });
    });

    describe('#removeEmployeeFromOrganization', function(){
      before(function(done){
        return dbTestUtils.clearTables([
          'User'
        ]).then(function(){
          return User.create({
            email: 'fakeemail1@gmail.com',
            password: 'fakepassword1',
            googleId: '',
            name: 'fakerfaker1',
            OrganizationId: 1,
            id: 1
          });
        }).then(function(){
          done();
        }).catch(function(err){
          console.log(err, 'failed to destroy all users');
        });
      });

      it('Should have a removeEmployeeFromOrganization method', function(){
        assert.isFunction(User.removeEmployeeFromOrganization, 'we can get employees');
      });

      it('Should return a promise', function(){
        assert.instanceOf(User.removeEmployeeFromOrganization(), models.sequelize.Promise, 'is a promise');
      });

      it('Should remove the employee', function(done){
        User.removeEmployeeFromOrganization(1).then(function(){
          return User.find({
            where: {
              id: 1
            }
          });
        }).then(function(user){
          assert.equal(user, undefined, 'no user there');
          done();
        });
      });
    });
  });
});
