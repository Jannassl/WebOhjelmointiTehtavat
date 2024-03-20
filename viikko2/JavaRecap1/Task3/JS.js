'use strict'

let s1 = parseInt(prompt("Anna 1.sivun pituus"))
let s2 = parseInt(prompt("Anna 2.sivun pituus"))
let s3 = parseInt(prompt("Anna 3.sivun pituus"))

let kolmionTyyppi;

if (s1 === s2 && s2 === s3) {
  kolmionTyyppi = "Equilateral";
} else if (s1 === s2 || s1 === s3 || s2 === s3) {
  kolmionTyyppi = "Isosceles";
} else {
  kolmionTyyppi = "Scalene";
}

document.querySelector('#result').innerHTML = "kolmion tyyppi on: " + kolmionTyyppi;