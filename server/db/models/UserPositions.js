module.exports = function (sequelize, DataTypes) {
  var UserPositions = sequelize.define('UserPositions', {
    score: DataTypes.INTEGER,
    salary: DataTypes.INTEGER
  }, {
    classMethods: {

    }
  });
  return UserPositions;
};