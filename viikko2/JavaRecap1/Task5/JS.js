'use strict'

const n1 = parseInt(prompt("Anna numero"))

let sum = 0;
for(let i = 0;i <= n1; i++){
    sum +=i
}
document.querySelector('#result').innerHTML="Summa: "+ sum