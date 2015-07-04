// required: DataTypes.INTEGER,
// filled: DataTypes.INTEGER

module.exports = function(GigPositions){
  var records = [];
  for (var i = 1; i < 28; i++){
    records.push({
      GigId: i,
      PositionId: Math.ceil(Math.random()*10),
      required: Math.ceil(Math.random()*6),
      filled: 0 // yea...i know
    });
  }

  return GigPositions.bulkCreate(records, {ignoreDuplicates: true});
};