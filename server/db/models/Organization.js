module.exports = function (sequelize, DataTypes) {
  var Organization = sequelize.define('Organization', {
    name: DataTypes.STRING,
    subscription: DataTypes.ENUM('free', 'paid')
  }, {
    classMethods: {

    }
  });
  return Organization;
};