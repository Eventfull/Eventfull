var _ = require("underscore");
// accepts array of strings which represent table names
// clears all records from those table

module.exports = function(models){
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

  return {
   clearTables: clearTables
  };
};
