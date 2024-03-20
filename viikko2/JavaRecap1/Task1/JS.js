'use strict'

const c = prompt("Anna asteet")
const  f = (c * 9/5) + 32
const k = parseFloat(c) + 273.15

document.querySelector('#target1').innerHTML = "Asteet muutettu c -> "+ f 
document.querySelector('#target2').innerHTML = "Asteet muutettu c -> "+ k 