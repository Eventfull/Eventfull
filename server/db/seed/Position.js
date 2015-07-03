// title: DataTypes.STRING

var positions = [
  'kitchen staff',
  'server',
  'bartender',
  'coat-check',
  'drop station',
  'captain',
  'kitchen manager',
  'bar - back',
  'bar captain',
  'driver',
];

module.exports = function(Position){
  var records = [];

  positions.forEach(function(pos){
    records.push({
      title: pos,
      OrganizationId: 1
    });
  });

  return Position.bulkCreate(records);
};