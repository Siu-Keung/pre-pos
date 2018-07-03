'use strict';

function collectSameElements(collectionA, objectB) {
  var results = [];
  for(var i = 0; i < collectionA.length; i++){
    var obj = collectionA[i];
    var exists = isExisted(obj.key, objectB.value);
    if(exists)
      results.push(obj.key);
  }
  return results;
}

function isExisted(elem, collection){
  for(var i = 0; i < collection.length; i++){
    if(collection[i] === elem)
      return true;
  }
  return false;
}
