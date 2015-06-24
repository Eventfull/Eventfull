module.exports = function (sequelize, DataTypes) {
  var Position = sequelize.define('Position', {
    title: DataTypes.STRING
  }, {
    classMethods: {

    }
  });
  return Position;
};