// name: DataTypes.STRING,
// subscription: DataTypes.ENUM('free', 'paid')

module.exports = function(Organization){
  return Organization.create({
    name: 'smc',
    subscription: 'free'
  });
}