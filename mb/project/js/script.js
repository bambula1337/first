'use strict';

const movieDB = {
    movies: [
        "Logan",
        "League of fair",
        "La-la land",
        "Posessetion",
        "Scott Pyligram igainst..."
    ]
};
movieDB.movies.sort();

document.querySelectorAll(".promo__adv img").forEach(item=>{
    item.remove(); 
});

document.querySelector(".promo__genre").textContent = "драма";
document.querySelector(".promo__bg").style.cssText = "background-image: url(./img/bg.jpg)";

const films = document.querySelector(".promo__interactive-list");
films.innerHTML = "";

movieDB.movies.forEach(function(x,y,z){
    films.innerHTML += `<li class="promo__interactive-item">${y+1}) ${z[y]}
                           <div class="delete"></div>
                       </li>`;
});
