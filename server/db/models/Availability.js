module.exports = function (sequelize, DataTypes) {
  var Availability = sequelize.define('Availability', {
    day: DataTypes.ENUM(1, 2, 3, 4, 5, 6, 7),
    start_time: DataTypes.TIME,
    end_time: DataTypes.TIME
  }, {
    classMethods: {

    }
  });
  return Availability;
};