'use strict'


function sortArray(array, order){
    if( order == 'asc'){
        let sortedArray = array.sort((a,b) => a-b);
        return sortedArray;
    }
    else if(order == 'desc'){
        let sortedArray = array.sort((a,b) => b-a);
        return sortedArray;
    }
    
    
}

let array = [3, 7, 2, 10, 8, 4];

console.log('Ascending order '+sortArray(array, 'asc'));

console.log('Descending order: '+sortArray(array, 'desc'));