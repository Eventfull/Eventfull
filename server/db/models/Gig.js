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

      getGigs: function (organizationId) {
        return Gig.findAll({
          where: {
            organizationId: organizationId
          }
        });
      },

      createGig: function (gigParams) {
        return Gig.create(gigParams);
      },

      getGigInfo: function (id) {
        return Gig.find({
          where: {
            id: id
          }
        });
      },

      updateGigInfo: function (id, params) {
        return Gig.update(params, {
          where: {
            id: id
          }
        });
      },

      deleteGig: function (id) {
        return Gig.destroy({
          where: {
            id: id
          }
        });
      }
    }
  });
  return Gig;
};