module.exports = function (sequelize, DataTypes) {
  var Availability = sequelize.define('Availability', {
    day: DataTypes.INTEGER,
    start_time: DataTypes.TIME,
    end_time: DataTypes.TIME
  }, {
    classMethods: {

    }
  });
  return Availability;
};