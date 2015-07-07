module.exports = function (sequelize, DataTypes) {
  var Availability = sequelize.define('Availability', {
    day: DataTypes.INTEGER,
    startTime: DataTypes.TIME,
    endTime: DataTypes.TIME
  }, {
    classMethods: {

    }
  });
  return Availability;
};