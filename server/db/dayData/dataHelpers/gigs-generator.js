var staffGenerator = require('./staff-generator');
var infoCreator = require('./info-creator');

// creates random number of gigs!
function generateGigs(numberOfGigs){
  var gigs = [];
  numberOfGigs = numberOfGigs || (Math.max(3, Math.ceil(Math.random()*8)));

  for (var i = 0; i < numberOfGigs; i++){
    gigs.push(createRandomGig());
  }

  return gigs;
}

function createRandomGig(){
  return {
    staff: staffGenerator.generateStaff(),
    information: infoCreator.create()
  };
}

module.exports = {
  generate: generateGigs
};
