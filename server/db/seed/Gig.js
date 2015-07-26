// title: DataTypes.STRING,
// type: DataTypes.ENUM('wedding', 'birthday', 'business'),
// date: DataTypes.DATE,
// startTime: DataTypes.TIME,
// endTime: DataTypes.TIME,
// complexity: DataTypes.INTEGER,
// health: DataTypes.INTEGER
// employeeCostAllocation: DataTypes.INTEGER

function randomItemFromArray(array){
  return array[Math.floor(Math.random()*array.length)];
}

var moment = require('moment');

var titles = [
  'George Washington Event',
  'John Adams Event',
  'Thomas Jefferson Event',
  'James Madison Event',
  'James Monroe Event',
  'John Quincy Event',
  'Andrew Jackson Event',
  'Martin Van Event',
  'William Henry Event',
  'John Tyler Event',
  'James Knox Event',
  'Zachary Taylor Event',
  'Millard Fillmore Event',
  'Franklin Pierce Event',
  'James Buchanan Event',
  'Abraham Lincoln Event',
  'Andrew Johnson Event',
  'Ulysses Simpson Event',
  'Rutherford Birchard Event',
  'James Abram Event',
  'Chester Alan Event',
  'Grover Cleveland Event',
  'Benjamin Harrison Event',
  'Grover Cleveland Event',
  'William McKinley Event',
  'William Howard Event',
  'Woodrow Wilson Event',
  'Warren Gamaliel Event',
  'Calvin Coolidge Event',
];

var types = [
  'Wedding',
  'Birthday',
  'Batmitzvah',
  'Party',
  'Graduation',
  'Launch party',
  'Bachelors party',
  'Bachelorette party'
];

var today = moment();

// NOTE: moments are mutable by their add/subtract methods
var dates = [
  today.subtract(1, 'days').format('YYYY-MM-DD'),
  today.add(1, 'days').format('YYYY-MM-DD'),
  today.add(1, 'days').format('YYYY-MM-DD')
];

module.exports = function(Gig){
  var records = [];
  for (var i = 0; i < titles.length; i++){
    records.push({
      title: titles[i],
      type: randomItemFromArray(types),
      date: randomItemFromArray(dates),
      startTime: '10:00:00',
      endTime: '24:00:00',
      complexity: 10,
      health: 10,
      OrganizationId: 1,
      LocationId: Math.ceil(Math.random()*10),
      AttireId: 1,
      employeeCostAllocation: Math.floor(Math.max(1000, Math.random()*10000))
    });
  }

  return Gig.bulkCreate(records);
}