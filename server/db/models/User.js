module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define('User', {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    google_id: DataTypes.STRING
  }, {
    classMethods: {

    }
  });
  return User;
};