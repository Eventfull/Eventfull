module.exports = function (sequelize, DataTypes) {
  var Role = sequelize.define('Role', {
    admin: DataTypes.BOOLEAN,
    staff: DataTypes.BOOLEAN
  }, {
    classMethods: {

    }
  });
  return Role;
};