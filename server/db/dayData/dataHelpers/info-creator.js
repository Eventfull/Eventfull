var randomItemFromArray = require('./helper.js').randomItemFromArray;

var id = 0;
// creates random info for a given event
function createInfo(){
  return {
    type: randomGigType(),
    time: randomTime(),
    attire: randomAttire(),
    location: randomLocation(),
    gigID: id++
  };
}

function randomGigType(){
  return randomItemFromArray([
    'funeral',
    'birthday',
    'wedding',
    'party',
    'graduation',
    'launchParty',
    'bachelors party'
  ]);
}

function randomTime(){
  return Math.ceil(Math.random()*12) + (Math.random() > 0.5 ? 'pm' : 'am');
}

function randomAttire(){
  return randomItemFromArray([
    'blue',
    'black',
    'polo',
    'tuxedo',
    'suit'
  ]);
}

function randomLocation(){
 return randomItemFromArray([
   'DC',
   'PA',
   'MD',
   'VA',
   'NY',
   'MA'
  ]);
}

module.exports = {
  create: createInfo
};