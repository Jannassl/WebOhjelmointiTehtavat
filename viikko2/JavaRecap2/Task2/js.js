'use strict'

const numbers =[];

for(let i = 0; i < 5; i++){
    const num = parseInt(prompt('Anna numero'));
    numbers.push(num);
}
console.log('Numerot: '+ numbers);

const checkNum = parseInt(prompt("Onko numero arrayssa? :"));

if(numbers.includes(checkNum)){
    console.log('Numero '+checkNum+' on listassa');
}
else {
    console.log('Numero '+checkNum+ ' ei ole listassa');
}

numbers.pop();
console.log('Päivitetyt numerot: '+ numbers);

console.log('Järjestetyt numerot: '+ numbers.sort());