'use strict';

function collectSameElements(collectionA, objectB) {
  var resultArray = getSameElements(collectionA, objectB['value']);
  return resultArray;
}


function getSameElements(collectionA, collectionB) {
  var results = [];
  for(var i = 0; i < collectionA.length; i++){
    var j = 0;
    for(; j < collectionB.length; j++){
      if(collectionA[i] === collectionB[j])
        break;
    }
    if(j !== collectionB.length)
      results.push(collectionA[i]);
  }
  return results;
}
