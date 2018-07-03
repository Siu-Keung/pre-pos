'use strict';

function countSameElements(collection) {
    //匹配a[10]
    var format1 = /(.*)\[(\d*)\]/;
    //匹配a-10
    var format2 = /(.*)-(\d*)/;
    //匹配a:10
    var format3 = /(.*):(\d*)/;
    var resultMap = new Object();
    collection.forEach(function(item){
        var key = null, count = null;
        var group = format1.exec(item);
        if(group !== null && group.length ===3)
            ;
        else if((group = format2.exec(item)) !== null && group.length == 3)
            ;
        else if((group = format3.exec(item)) !== null && group.length == 3)
            ;
        else{
            group = [3];
            group[1] = item;
            group[2] = 1;
        }
        key = group[1];
        count = group[2];
        if(resultMap.hasOwnProperty(key)){
            resultMap[key] += parseInt(count);
        }else{
            resultMap[key] = parseInt(count);
        }

    });
    for(var key in resultMap){
        console.log(key + ', ' + resultMap[key]);
    }
  var results = [];
  for(var key in resultMap){
    if(resultMap[key] > 1)
      results.push({name : key, summary : resultMap[key]});
  }
  return results;

}

