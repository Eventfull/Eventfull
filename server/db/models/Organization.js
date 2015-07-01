module.exports = function (sequelize, DataTypes) {
  var Organization = sequelize.define('Organization', {
    name: DataTypes.STRING,
    subscription: DataTypes.ENUM('free', 'paid')
  }, {
    classMethods: {

      createOrganization: function (organizationParams) {
        return Organization.create({
          name: organizationParams.name,
          subscription: organizationParams.subscription
        });
      },

      getOrganizationInfo: function (id) {
        return Organization.find({
          where: {
            id: id
          }
        });
      },

      updateOrganizationInfo: function (id, organizationParams) {
        return Organization.update({
          name: organizationParams.name,
          subscription: organizationParams.subscription
        }, {
          where: {
            id: id
          }
        });
      },

      removeOrganization: function (id) {
        return Organization.destroy({
          where: {
            id: id
          }
        });
      }
    }
  });
  return Organization;
};