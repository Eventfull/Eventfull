module.exports = function (sequelize, DataTypes) {
  var GigPositions = sequelize.define('GigPositions', {
    required: DataTypes.INTEGER,
    filled: DataTypes.INTEGER
  }, {
    classMethods: {

    }
  });
  return GigPositions;
};