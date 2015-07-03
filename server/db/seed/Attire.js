// level: DataTypes.ENUM('casual', 'semi-casual', 'formal'),
// color: DataTypes.STRING

var levels = ['casual', 'semi-casual', 'formal'];
var colors = ['blue', 'black', 'white']
module.exports = function(Attire){
  var records = [];
  for (var i = 0; i < 3; i++){
    for (var j = 0 ; j < 3; j++){
      records.push({
        level: levels[j],
        color: colors[i],
        OrganizationId: 1,
      });
    }
  }

  return Attire.bulkCreate(records);
}
