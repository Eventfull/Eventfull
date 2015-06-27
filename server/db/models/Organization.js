module.exports = function (sequelize, DataTypes) {
  var Organization = sequelize.define('Organization', {
    name: DataTypes.STRING,
    subscription: DataTypes.ENUM('free', 'paid')
  }, {
    classMethods: {

      createOrganization: function (name, subscription, callback) {
        return Organization.create({
          name: name,
          subscription: subscription
        }).then(function(organization) {
          callback(organization);
        });
      },

      getOrganizationInfo: function (id, callback) {
        Organization.find({
          where: {
            id: id
          }
        }).then(function(organization) {
          callback(organization);
        });
      },

      updateOrganizationInfo: function (id, name, subscription, callback) {
        Organization.update({
          name: name,
          subscription: subscription
        }, {
          where: {
            id: id
          }
        }).then(function(organization) {
          callback(organization);
        });
      },

      removeOrganization: function (id, callback) {
        Organization.find({
          where: {
            id : id
          }
        }).then(function(organization) {
          if ( organization === null ) {
            callback(false);
          } else {
            organization.destroy().then(function() {
              callback(true);
            });
          }
        });
      }
    }
  });
  return Organization;
};