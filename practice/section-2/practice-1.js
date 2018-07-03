'use strict';

function countSameElements(collection) {
    var result = new Object();
    collection.forEach(function(item){
          if(result.hasOwnProperty(item))
            result[item]++;
          else
            result[item] = 1;
    });
    var resultArray = [];
    for(var key in result){
        resultArray.push({key : key, count : result[key]});
    }
    return resultArray;
}

