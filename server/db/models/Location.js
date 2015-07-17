module.exports = function (sequelize, DataTypes) {
  var Location = sequelize.define('Location', {
    name: DataTypes.STRING,
    addressOne: DataTypes.STRING,
    addressTwo: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zipCode: DataTypes.STRING
  }, {
    classMethods: {
      getLocationInfo: function(id){
        return Location.find({
          where: {
            id: id
          },
          attributes: [
            "name",
            "addressOne",
            "addressTwo",
            "city",
            "state",
            "zipCode",
          ]
        });
      }
    }
  });
  return Location;
};