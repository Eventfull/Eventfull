///// Helper function /////

function randomItemFromArray(array){
  return array[Math.floor(Math.random()*array.length)];
}

module.exports = {
  randomItemFromArray: randomItemFromArray,
};


