'use strict';

function createUpdatedCollection(collectionA, objectB) {
    var array = objectB.value;
    collectionA.forEach(function(obj){
        if(array.indexOf(obj.key) != -1){
            obj.count--;
        }
    });

    return collectionA
}


