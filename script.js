"use strict";

// DZ 1

let numberoffilms = +prompt ("сколько фильмов?", "");

const pers = {
    count: numberoffilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};
for(let i = 0; i < 2; i++){

    const x = prompt("One of the last films"),
          y = prompt("Rate");

    (x != null && y != null && x.length > 0 && y.length > 0 && x.length < 50) ? pers.movies[x] = y : i--;
}
if(pers.count < 10){
    alert("Ты слишком мало просмотрел фильмов");
}else if(10 < pers.count < 30){
    alert("Ты посмотрел немного фильмов");
}else if (pers.count > 30){
    alert("Ты киноман!");
}else{
    alert("Ошибка");
}
console.log(pers);
