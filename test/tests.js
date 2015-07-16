///////////////////////////////////////////////////
///////////////////////////////////////////////////
//                    TESTING                    //

// TO RUN TESTS, REQUIRE TESTS INTO THIS FILE

if (process.env.NODE_ENV === 'test'){

  describe('Database Testing', function(){
    require('./db/UserSpec');
    require('./db/GigSpec');
    /// other db test files should be required here
  });

  describe('API Testing', function(){
    require('./api/GigRoutes');
    /// api test files should be required here
  });
}