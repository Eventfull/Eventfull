module.exports = function (sequelize, DataTypes) {
  var Location = sequelize.define('Location', {
    name: DataTypes.STRING,
    address_one: DataTypes.STRING,
    address_two: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zip_code: DataTypes.STRING
  }, {
    classMethods: {
      getLocationInfo: function(id){
        return Location.findAll({
          where: {
            id: id
          },
          attributes: [
            "name",
            "address_one",
            "address_two",
            "city",
            "state",
            "zip_code",
          ]
        });
      }
    }
  });
  return Location;
};