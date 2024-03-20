'use strict'

const fruits = [" apple", " banana", " orange", " grape", " kiwi"];
const vegetables = [];


console.log('fruits: '+ fruits);
console.log('length of fruits'+fruits.length);
console.log('Index 2: '+ fruits[2]);
console.log('Last fruit in list: ');
console.log("Last fruit: "+ fruits[fruits.length -1 ]);

const v1 = prompt("Syötä vihannes");
const v2 = prompt("syötä vihannes");
const v3 = prompt("syötä vihannes");

vegetables.push(v1,v2,v3)

console.log('hedelmät: '+ vegetables)
console.log('Lenght of vegetables: '+ vegetables.length)

