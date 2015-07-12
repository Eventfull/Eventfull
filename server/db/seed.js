/// seeds db with data

var models = [
  'Organization',
  'User',
  // 'Role',
  'Availability',
  'Position',
  'Location',
  'Attire',
  'Gig',
  'UserGigs',
  'GigPositions',
  'UserPositions'
]

module.exports = function(sequelize){
  console.log('DATABASE SEED BEGINS');
  require('./seed/' + 'Organization')(sequelize['Organization']).then(function(){
    return require('./seed/' + 'User')(sequelize['User']);
  }).then(function(){
    return require('./seed/' + 'Position')(sequelize['Position']);
  }).then(function(){
    return require('./seed/' + 'Location')(sequelize['Location']);
  }).then(function(){
    return require('./seed/' + 'Attire')(sequelize['Attire']);
  }).then(function(){
    return require('./seed/' + 'Gig')(sequelize['Gig']);
  }).then(function(){
    return require('./seed/' + 'UserGigs')(sequelize['UserGigs']);
  }).then(function(){
    return require('./seed/' + 'GigPositions')(sequelize['GigPositions']);
  }).then(function(){
    return require('./seed/' + 'UserPositions')(sequelize['UserPositions']);
  }).then(function(){
    return require('./seed/' + 'Availability')(sequelize['Availability']);
  }).then(function(){
    console.log('DATABASE SEED COMPLETE');
  }).catch(function(err){
    console.log(err);
  })
}