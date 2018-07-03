'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var array = objectB.value;
  collectionA.forEach(function(obj){
    if(array.indexOf(obj.key) != -1){
      obj.count -= parseInt(obj.count / 3);
    }
  });

  collectionA.forEach(function(obj){
    console.log('key : ' + obj.key + ", count : " + obj.count);
  });
  return collectionA;
}


