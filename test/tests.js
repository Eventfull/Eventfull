///////////////////////////////////////////////////
///////////////////////////////////////////////////
//                    TESTING                    //

// TO ADD TESTS, REQUIRE TEST FILES INTO THIS FILE

if (process.env.NODE_ENV === 'test'){
  var models = require('../server/db/models/');

  describe('Database Configuration', function(){

    it('will sync models with db schema', function(){
      return models.sequelize.sync();
    });

  });

  describe('Database Testing', function(){

    it('will run tests', function(){
      require('./db/UserSpec')(models);
      require('./db/GigSpec')(models);
      require('./db/LocationSpec')(models);
      require('./db/OrganizationSpec')(models);
    });

    // other db test files should be required here
  });

  describe('API Testing', function(){

    it('will run tests', function () {
      require('./api/ServerSpec');
      require('./api/OrganizationRoutesSpec')(models);
    });

    // api test files should be required here
  });
}
