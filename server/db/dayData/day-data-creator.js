/////////////////////////////////////////////////////////////////
//   Hopefully we can continually modify this code as we change
//   the schema, so we can always have sweet data generators!
///////////////////////////////////////////////////////////////////

var gigsGenerator = require('./dataHelpers/gigs-generator');
var staffGenerator = require('./dataHelpers/staff-generator');

// returns a random date, an array of gigs with staff approved to work,
// and an array of pending employees waiting to be approved.
// there will be duplicate names and stuff, this is mainly for display
function createDayData(date, numberOfGigs){
  return {
    date: date || randomDate(new Date(2016,0,1), new Date(2017,0,1)),
    gigs: gigsGenerator.generate(numberOfGigs),
    pending: staffGenerator.generatePending()
  };
}

function randomDate(startDate, endDate){
  return new Date(startDate.getTime() + Math.random()*(endDate.getTime() - startDate.getTime()));
}

module.exports = {
  create: createDayData
};

/* SAMPLE DATA STRUCTURE
day = {
  date: 'June 23, 2015',
  gigs: [
    {
      staff: {
        approved: {
          'kitchen-staff': [{
            name: 'kyle',
            rating: 5,
            employeeID
          }],
          'server': [... more employee objects],
          'bartender': [... more employee objects],
          ... other groups
        },
        needed: {
          'kitchen-staff': 10,
          'server': 5,
          ..... for each group
        }
      },
      information: {
        type: 'wedding',
        time: '12pm',
        attire: 'black',
        location: 'DC'
      }
    },
    ... more gigs
  ],
  pending: [... more employee objects]
}
*/