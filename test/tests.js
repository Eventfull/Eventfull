///////////////////////////////////////////////////
///////////////////////////////////////////////////
//                    TESTING                    //

// TO ADD TESTS, REQUIRE TEST FILES INTO THIS FILE

if (process.env.NODE_ENV === 'test'){
  describe('Database Testing', function(){
    this.slow(1000);

    var models = require('../server/db/models/')

    it('will sync with db', function(){
      return models.sequelize.sync()
    });

    it('will run tests', function(){
      require('./db/UserSpec')(models);
      require('./db/GigSpec')(models);
      require('./db/LocationSpec')(models);
      require('./db/OrganizationSpec')(models);
    });

    /// other db test files should be required here
  });

  describe('API Testing', function(){
    require('./api/GigRoutes');
    /// api test files should be required here
  });
}
