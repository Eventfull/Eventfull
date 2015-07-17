var _ = require("underscore");
var models = require('../../../server/server.js').get('models');

// accepts array of strings which represent table names
// clears all records from those tables

var clearTables = function(tables){
  return models.sequelize.Promise.all(_.map(tables, function(table){
      return models[table].destroy({
        where: {
          id: {
            $ne: null
          }
        }
      });
    })
  );
}

module.exports = {
 clearTables: clearTables
};
