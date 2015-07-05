'use strict';
module.exports = {
  up: function(migration, DataTypes, done) {
    migration.addColumn('User', 'google_access_token', DataTypes.STRING).then(function () {
      done();
    })
  },
  down: function(migration, DataTypes, done) {
    migration.removeColumn('User', 'google_access_token').then(function() {
      done();
    });
  }
};
