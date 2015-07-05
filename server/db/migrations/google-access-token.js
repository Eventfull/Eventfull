'use strict';
module.exports = {
  up: function(migration, DataTypes, done) {
    migration.addColumn(
      'Users',
      'access-token',
      DataTypes.STRING
    ).then(function () {
      done();
    }).error(function (err) {
      console.log(err);
    });
  },
  down: function(migration, DataTypes, done) {
    migration.removeColumn(
      'Users',
      'access-token'
    ).then(function () {
      done();
    }).error(function(err) {
      console.log(err);
    })
  }
};
