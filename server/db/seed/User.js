// email: DataTypes.STRING,
// password: DataTypes.STRING,
// googleId: DataTypes.STRING,
// name: DataTypes.STRING,

var names = [
  'Mona Steffensen',
  'Catherine Land',
  'Marion Coady',
  'Kirk Flore',
  'Jewell Miguel',
  'Coretta Trego',
  'Dionne Legaspi',
  'Lorilee Brawn',
  'Anneliese Kantz',
  'Shelli Benda',
  'Mei Struthers',
  'Amos Ducharme',
  'Glenna Mcmickle',
  'Grady Gilyard',
  'Stephane Parada',
  'Euna Melendrez',
  'Shiela Jessee',
  'Bryant Feldmann',
  'Nathaniel Weingart',
  'Tonita Acy',
  'Jolynn Mom',
  'Shawna Deitch',
  'Jin Anglin',
  'Galen Kendall',
  'Luigi Schreier',
  'Jacquie Reedy',
  'Dana Kolbe',
  'Joaquin Narciso',
  'Joanna Preble',
  'Mikaela Smithers',
  'Charles Aguillard',
  'Torri Northington',
  'Francesco Sykora',
  'Lenard Westmoreland',
  'Lorita Reiley',
  'Charlsie Valenzuela',
  'Edmundo Helmers',
  'Ilana Mccollom',
  'Octavio Remley',
  'Florencio Brennan',
  'Royce Mello',
  'Carlotta Lampton',
  'Lucille Trabert',
  'Jeromy Justin',
  'Weston Derringer',
  'Taren Little',
  'Charlene Doud',
  'Renea Masek',
  'Nanette Yonts',
  'Cliff Stegman',
];

module.exports = function(User){
  var records = [];

  for (var i = 0; i < names.length; i++){
    records.push({
      name: names[i],
      email: 'fake@example.com',
      password: '',
      googleId: '',
      OrganizationId: 1
    });
  }

  return User.bulkCreate(records);
}




