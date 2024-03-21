'use strict'

const kerrat = parseInt(prompt("Monta leffaa? "));

const elokuvat = [];

for(let i = 0; i < kerrat; i++){
    let title = prompt("Syötä leffan nimi:");
    let arvostelu = parseInt(prompt("Anna arvostelu (1-5):"));
    elokuvat.push({title: title, arvostelu: arvostelu});
}

elokuvat.sort((a, b) => b.arvostelu - a.arvostelu);

let highestRatedMovie = elokuvat[0];

let movieList = "<ul>";
for(let movie of elokuvat){
    movieList += "<li>" + movie.title + " - " + movie.arvostelu + "</li>";
}
movieList += "</ul>";

document.querySelector('#result').innerHTML = "Paras leffa:  " + highestRatedMovie.title + " - " + highestRatedMovie.arvostelu + "<br>" + movieList;