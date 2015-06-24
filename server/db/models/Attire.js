module.exports = function (sequelize, DataTypes) {
  var Attire = sequelize.define('Attire', {
    level: DataTypes.ENUM('casual', 'semi-casual', 'formal'),
    color: DataTypes.STRING
  }, {
    classMethods: {

    }
  });
  return Attire;
};