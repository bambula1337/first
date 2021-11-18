'use strict';

document.addEventListener("DOMContentLoaded", () =>{
    const movieDB = {
        movies: [
            "Logan",
            "League of fair",
            "La-la land",
            "Posessetion",
            "Scott Pyligram igainst..."
        ]
    };
    const confirmButton = document.querySelector("button"),
          adverts = document.querySelectorAll(".promo__adv img"),
          genre = document.querySelector(".promo__genre"),
          bgPhoto = document.querySelector(".promo__bg");
    const removeElement = (item) =>{
        item.remove();
    };
    
    const sort = (item) => {
        item.sort();
    };

    const change = (item1,textContent1,item2,styleCssText) =>{
        item1.textContent = textContent1;
        item2.style.cssText = styleCssText;
    };
    change(genre,"драма",
    bgPhoto,"background-image: url(./img/bg.jpg)");
    const addFilmsOnPage = () =>{
        const films = document.querySelector(".promo__interactive-list");
        films.innerHTML = "";
        sort(movieDB.movies);
        movieDB.movies.forEach(function(x,y,z){
            if(x.length > 21){
                films.innerHTML += `<li class="promo__interactive-item">${y+1}) ${z[y].slice(0,21)}...
                                   <div class="delete"></div>
                               </li>`;
            }
            else{
                films.innerHTML += `<li class="promo__interactive-item">${y+1}) ${z[y]}
                                   <div class="delete"></div>
                               </li>`;
            }
        });
        document.querySelectorAll(".delete").forEach((item,index) => {
            item.addEventListener("click", () => {
                item.parentElement.remove();
                movieDB.movies.splice(index,1);
                addFilmsOnPage();
            });
        });
        
    };
    
    confirmButton.addEventListener("click", (e) =>{
        let inputNewFilm = document.querySelector(".adding__input");
        confirmButtomFuction(e,movieDB.movies,inputNewFilm);
        addFilmsOnPage();

    });
    
    const confirmButtomFuction = (e,array,input) =>{
        const favorite = document.querySelector("[type = 'checkbox']");
        e.preventDefault();
        array.push(input.value);
        input.value = "";
        if(favorite.checked){
            console.log("Добавляем любимый фильм");
            favorite.checked = false;
        }
        
    };
    adverts.forEach(removeElement);
    addFilmsOnPage();
});