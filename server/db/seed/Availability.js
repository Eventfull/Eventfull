// day: DataTypes.INTEGER,
// startTime: DataTypes.TIME,
// endTime: DataTypes.TIME

module.exports = function(Availability){
  var records = [];

  for (var j = 1 ; j <= 50; j++){
    for (var i = 1; i <= 7; i++){
      records.push({
        day: i,
        startTime: '10:00:00',
        endTime: '24:00:00',
        UserId: j
      });
    }
  }

  return Availability.bulkCreate(records);
}
