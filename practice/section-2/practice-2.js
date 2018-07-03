'use strict';

function countSameElements(collection) {
  var result = new Object();
  collection.forEach(function(item){
    var group = item.split('-');
    var num = 1;
    var key = item;
    if(group.length !== 1){
      num = parseInt(group[1]);
      key = group[0];
    }
    if(result.hasOwnProperty(item))
      result[key] += num;
    else
      result[key] = num;
  });
  var resultArray = [];
  for(var key in result){
    if(result[key] > 1)
      resultArray.push({key : key, count : result[key]});
    console.log(key + ':' + result[key])
  }
  return resultArray;
}

