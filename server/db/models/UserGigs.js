module.exports = function (sequelize, DataTypes) {
  var UserGigs = sequelize.define('UserGigs', {
    date: DataTypes.DATE,
    admin_accepted: DataTypes.BOOLEAN,
    worker_accepted: DataTypes.BOOLEAN
  }, {
    classMethods: {

    }
  });
  return UserGigs;
};