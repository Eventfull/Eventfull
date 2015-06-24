module.exports = function (sequelize, DataTypes) {
  var Gig = sequelize.define('Gig', {
    title: DataTypes.STRING,
    type: DataTypes.ENUM('wedding', 'birthday', 'business'),
    date: DataTypes.DATE,
    start_time: DataTypes.TIME,
    end_time: DataTypes.TIME,
    complexity: DataTypes.INTEGER,
    health: DataTypes.INTEGER
  }, {
    classMethods: {

    }
  });
  return Gig;
};