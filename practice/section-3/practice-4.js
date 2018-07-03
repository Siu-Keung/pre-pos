'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var map = getMap(collectionA);
  var results = [];
  for(var key in map){
    objectB.value.forEach(function(item){
      if(item === key){
        map[key] -= parseInt(map[key] / 3);
      }
    });
    results.push({key : key, count : map[key]});
  }
  results.forEach(function(obj){
    console.log('key : ' + obj.key + ", count : " + obj.count);
  });
  return results;

}

function getMap(array){
  var map = new Object();
  array.forEach(function(item){
    var num = 1;
    var key = item;
    if(item.split('-').length != 1) {
      key = item.split('-')[0];
      num = parseInt(item.split('-')[1]);
    }
    if(map.hasOwnProperty(key))
      map[key] += num;
    else
      map[key] = num;
  });
  return map;
}
