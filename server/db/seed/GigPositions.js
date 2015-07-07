// required: DataTypes.INTEGER,
// filled: DataTypes.INTEGER

module.exports = function(GigPositions){
  var records = [];
  for (var i = 1; i < 28; i++){
    for (var j = 1; j <= 10; j++){
      records.push({
        GigId: i,
        PositionId: j,
        required: Math.max(5, Math.ceil(Math.random()*10)),
        filled: 0 // yea...i know
      });
    }
  }

  return GigPositions.bulkCreate(records, {ignoreDuplicates: true});
};