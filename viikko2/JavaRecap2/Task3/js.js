'use strict'

const numbers = [];


while(true){
    
    const num = prompt('Anna numero/ "done" lopettaa');
    if(num =='done'){
        break
    }
    else{
        numbers.push(parseInt(num));
    }
}
let evenNumbers = []; 
for(let n of numbers){
    if(n %2== 0){
        evenNumbers.push(n);

    }
}
if(evenNumbers.length == 0){
    document.querySelector('#result').innerHTML = "Parillisia lukuja : none";
}
else {
    document.querySelector('#result').innerHTML= 'Parillisia lukuja: '+ evenNumbers;
}



