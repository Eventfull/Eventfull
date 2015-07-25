var Sequelize = require('sequelize');

var configuration;
if (process.env.DB_NAME && process.env.USERNAME) {
  configuration = {
    db_name: process.env.DB_NAME,
    username: process.env.USERNAME,
    password: null
  };
} else {
  configuration = require('../configuration')[process.env.NODE_ENV || 'development'];
}

var sequelize = new Sequelize(
  configuration.db_name,
  configuration.username,
  configuration.password,
  {logging: false}
);

var models = [
  'Organization',
  'User',
  'Role',
  'Availability',
  'Position',
  'Gig',
  'Location',
  'Attire',
  'UserGigs',
  'GigPositions',
  'UserPositions'
];

models.forEach(function (model) {
  module.exports[model] = sequelize.import(__dirname + '/' + model);
});

(function (m) {
  // Each table is specific to an Organization for future reference
  m.User.belongsTo(m.Organization);
  m.Gig.belongsTo(m.Organization);
  m.Position.belongsTo(m.Organization);
  m.Location.belongsTo(m.Organization);
  m.Attire.belongsTo(m.Organization);

  // Different gigs could have the same location or attire specification
  m.Location.hasMany(m.Gig);
  m.Gig.belongsTo(m.Location);
  m.Attire.hasMany(m.Gig);

  // Specific roles could belong to many different users, but each availability schedule belongs to a single user
  m.Role.hasMany(m.User);
  m.Availability.belongsTo(m.User);
  m.User.hasMany(m.Availability);

  // Gigs have many users and users have many gigs, with each instance having a unique position.
  m.User.belongsToMany(m.Gig, { through: m.UserGigs });
  m.Gig.belongsToMany(m.User, { through: m.UserGigs });
  m.Position.hasOne(m.UserGigs);

  // Gigs have many position requirements and positions belong to many gigs
  m.Gig.belongsToMany(m.Position, { through: m.GigPositions });
  m.Position.belongsToMany(m.Gig, { through: m.GigPositions });

  // Users could have multiple positions and positions have many users
  m.User.belongsToMany(m.Position, { through: m.UserPositions });
  m.Position.belongsToMany(m.User, { through: m.UserPositions });
}(module.exports));

module.exports.sequelize = sequelize;
