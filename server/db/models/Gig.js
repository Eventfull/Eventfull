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

      getGigs: function (organizationId, callback) {
        Gigs.findAll({
          where: {
            organizationId: organizationId
          }
        }).then(function(gigs) {
          callback(gigs);
        });
      },

      createGig: function (gigParams, callback) {
        Gig.create(gigParams).then(function(gig) {
          callback(gig);
        });
      },

      getGigInfo: function (id, callback) {
        Gig.find({
          where: {
            id: id
          }
        }).then(function (gig) {
          callback(gig);
        });
      },

      updateGigInfo: function (id, params, callback) {
        Gig.update(params, {
          where: {
            id: id
          }
        }).then(function (gig) {
          callback(gig);
        });
      },

      deleteGig: function (id) {
        Gigs.find({
          where: {
            id: id
          }
        }).then(function (gig) {
          if ( gig === null ) {
            console.log('No gig of id ', gigId, ' to delete');
            callback(false);
          } else {
            gig.destroy().then(function () {
              console.log('deleted gig ', gigId);
              callback(true);
            });
          }
        });
      }




    }
  });
  return Gig;
};