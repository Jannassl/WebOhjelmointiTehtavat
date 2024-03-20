'use strict'


let num = parseInt(prompt("Syötä positiivinen numero:"))

let table = "<table border='1'>";

for(let i = 1; i <= num; i++){
    table += "<tr>";
    for(let j = 1; j <= num; j++){
        table += "<td>" + i*j + "</td>";
    }
    table += "</tr>";
}

table += "</table>";

document.querySelector('#target').innerHTML = "Syötetty numero: "+ num

document.querySelector('#result').innerHTML = table;