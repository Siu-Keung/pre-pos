'use strict';

function collectSameElements(collectionA, collectionB) {
  var resultsArray = [];
  for(var i = 0; i < collectionA.length; i++){
    var elem = collectionA[i];
    var j = 0;
    for(; j < collectionB.length; j++){
      if(collectionB[j] instanceof Array){
        var exist = judge(collectionA[i], collectionB[j]);
        if(exist)
          resultsArray.push(collectionA[i]);
      }
    }
  }
  return resultsArray;

}


function judge(elem, collection) {
  for(var i = 0; i < collection.length; i++){
    if(collection[i] === elem)
      return true;
  }
  return false;

}
