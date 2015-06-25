module.exports = function (sequelize, DataTypes) {
  var UserPositions = sequelize.define('UserPositions', {
    score: DataTypes.INTEGER
  }, {
    classMethods: {

    }
  });
  return UserPositions;
};