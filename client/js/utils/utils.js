var _ = {};

_.each = function(collection, callback){
  if(collection instanceof Array){
    for(var i = 0; i < collection.length; i++){
      callback(collection[i], i, collection);
    }
  }else{
    for(var key in collection){
      callback(collection[key], key, collection);
    }
  }
};

_.map = function(collection, callback){
  var result = [];
  _.each(collection, function(item, key, collection){
    result.push(callback(item, key, collection));
  });
  return result;
};

_.reduce = function(collection, callback, accumulator){
  var start = accumulator === undefined ? 1 : 0;
  accumulator = accumulator === undefined ? collection[0] : accumulator;
  _.each(collection, function(item, key, collection){
    accumulator = start - 1 === key ? accumulator : callback(accumulator, item);
  });
  return accumulator;
};

module.exports = _;