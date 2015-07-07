module.exports = function (sequelize, DataTypes) {
  var Position = sequelize.define('Position', {
    title: DataTypes.STRING
  }, {
    classMethods: {

      getPosition: function(id){
        return Position.find({
          where: {
            id: id
          }
        })
      }
    }
  });
  return Position;
};