'use strict'

let x1 = parseFloat(prompt("syötä x1"))
let y1 = parseFloat(prompt("syötä y1"))
let x2 = parseFloat(prompt("syötä x2"))
let y2 = parseFloat(prompt("syötä y2"))

let distance = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2))

document.querySelector('#result').innerHTML = "Distance "+  distance