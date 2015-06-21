var randomItemFromArray = require('./helper').randomItemFromArray;

//creates random employee
function createRandomEmployee(){
  return {
    name: randomEmployeeName(),
    rating: Math.ceil(Math.random()*5)
  };
}

function randomEmployeeName(){
  return randomItemFromArray([
    'kyle',
    'chris',
    'james',
    'alex',
    'ryan',
    'josh',
    'ben',
    'kalev',
    'pavan',
    'richard',
    'danny',
    'fred'
  ]);
}

module.exports = {
  create: createRandomEmployee
};