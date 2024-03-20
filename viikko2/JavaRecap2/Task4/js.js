' use strict'

let array = [3, 7, 2, 10, 8, 4];

function sortArray(array){
    let sortedArray = array.sort((a,b) => a-b);
    return sortedArray;
}

console.log('original array: '+ array)


let sortedArray = sortArray(array);
console.log('Sorted array: '+ sortedArray);
