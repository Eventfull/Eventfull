var moment = require('moment');

module.exports = function (sequelize, DataTypes) {
  var Gig = sequelize.define('Gig', {
    title: DataTypes.STRING,
    type: DataTypes.STRING,
    date: DataTypes.DATE,
    startTime: DataTypes.TIME,
    endTime: DataTypes.TIME,
    complexity: DataTypes.INTEGER,
    health: DataTypes.INTEGER
  }, {
    classMethods: {

      // accepts object like :
      // {
      //   startDate: STRING,
      //   endDate: STRING ,
      //   includeStaff: BOOLEAN,
      //   organizationId: STRING
      // }

      getGigs: function (info) {
        var start = moment(info.startDate);
        var end = moment(info.endDate);
        var include = [];

        var staffQuery = {
          model: Gig.associations['Users'].target,
          attributes: ['id', 'name', 'email'],
          through: {
            attributes: [['PositionId', 'id'], 'adminAccepted', 'workerAccepted'],
            as: 'Position'
          },
        };

        var positionQuery = {
          model: Gig.associations['Positions'].target,
          attributes: ['title'],
          through: {
            attributes: ['required', 'filled'],
            as: 'statusInfo'
          }
        };

        include.push(positionQuery);
        info.includeStaff && include.push(staffQuery); // just for day view

        return Gig.findAll({
          where: {
            organizationId: info.organizationId,
            date: {
              $between: [start.format('YYYY-MM-DD'), end.format('YYYY-MM-DD')]
            },
          },
          attributes: [
            'OrganizationId',
             'title',
             'type',
             'complexity',
             'health',
             'LocationId',
             'AttireId',
             'startTime',
             'endTime',
             'date'
          ],
          include: include,
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