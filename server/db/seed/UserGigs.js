// date: DataTypes.DATE,
// admin_accepted: DataTypes.BOOLEAN,
// worker_accepted: DataTypes.BOOLEAN

module.exports = function(UserGigs){
  var i = 150;
  var records = [];
  while(i--){
    records.push({
      UserId: Math.ceil(Math.random()*50),
      GigId: Math.ceil(Math.random()*29),
      admin_accepted: true,
      worker_accepted: true,
      PositionId: Math.ceil(Math.random()*10)
    });
  }

  return UserGigs.bulkCreate(records, {ignoreDuplicates: true});
};