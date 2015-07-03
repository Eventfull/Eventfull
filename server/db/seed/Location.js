// name: DataTypes.STRING,
// address_one: DataTypes.STRING,
// address_two: DataTypes.STRING,
// city: DataTypes.STRING,
// state: DataTypes.STRING,
// zip_code: DataTypes.STRING

function randomItemFromArray(array){
  return array[Math.floor(Math.random()*array.length)];
}

var locationNames = [
  'Candlelight Farms Inn',
  'The Lake House',
  'Saint Clements Castle',
  'The Marina at American Wharf',
  'The Hangar at Candlelight Farms',
  'Priam Vineyards',
  'Anchor Inn',
  'The Villa',
  'Historic Waverly Mansion',
  'Historic Oakland Manor',
  'Newton White Mansion',
  'Oxon Hill Manor',
  'Walters Art Museum',
  'The Admiral Benbow Inn',
  'Mystic Seaport',
  'Peabody Museum of Natural History at Yale University',
  'Mystic Aquarium & Institution For Exploration',
  'Gillette Castle State Park',
  'Roseland Cottage',
  'The Bamboo Lounge',
  'The Braidwood Inn',
  'The Halfway House'
];

var addresseOnes = [
  '1234 Fake Street',
  '2345 Faker Street',
  '3456 Monroe Avenue',
  '4576 Washington Avenue',
  '7045 Halloween Blvd',
  '6789 Fremont Street',
  '6395 Fredrich Street',
  '6712 Lincoln Street',
  '6734 Montgomery Street',
];

var cities = [
  'DC',
  'Baltimore',
  'Columbia',
  'Silver Spring',
  'Annapolis',
  'College Park',
  'Gaithersburg',
  'Rockville',
  'Chesapeake',
  'Richmond',
  'Alexandria',
  'Hampton ',
  'Roanoke ',
  'Portsmouth'
];

var states = [
  'MD',
  'VA',
  'PA',
];

module.exports = function(Location){
  var records = [];
  for (var i = 0; i < locationNames.length; i++){

    records.push({
      name: locationNames[i],
      address_one: randomItemFromArray(addresseOnes),
      address_two: '',
      city: randomItemFromArray(cities),
      state: randomItemFromArray(states),
      zip_code: 20905,
      OrganizationId: 1
    });
  }

  return Location.bulkCreate(records);
}
