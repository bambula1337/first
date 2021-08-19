"use strict";

// DZ 1

// let numberoffilms = +prompt ("сколько фильмов?", "");

// const pers = {
//     count: numberoffilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false

// };
// for(let i = 0; i < 2; i++){

//     const x = prompt("One of the last films"),
//           y = prompt("Rate");

//     (x != null && y != null && x.length > 0 && y.length > 0 && x.length < 50) ? pers.movies[x] = y : i--;
// }
// if(pers.count < 10){
//     alert("Ты слишком мало просмотрел фильмов");
// }else if(10 < pers.count < 30){
//     alert("Ты посмотрел немного фильмов");
// }else if (pers.count > 30){
//     alert("Ты киноман!");
// }else{
//     alert("Ошибка");
// }
// console.log(pers);

// test function

// let x = 2;

// function kek(text){
//     alert(text);
//     x = 2;
// }

// kek("hi");
// switch (x){
//     case 23:
//         console.log("qq");
//         break;
//     default:
//         console.log("x="+x);        
// }


//// Практика 3

let numberoffilms;

function start() {
    numberoffilms = +prompt ("сколько фильмов?", "");
    
    while(numberoffilms == "" || numberoffilms == null || isNaN(numberoffilms)){
        numberoffilms = +prompt ("сколько фильмов?", "");
    }
}

start();

const pers = {
    count: numberoffilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for(let i = 0; i < 2; i++){

        const x = prompt("One of the last films"),
              y = prompt("Rate");
    
        (x != null && y != null && x.length > 0 && y.length > 0 && x.length < 50) ? pers.movies[x] = y : i--;
    }

}

rememberMyFilms();

function lvlOfUser() {
    if(pers.count < 10){
        alert("Ты слишком мало просмотрел фильмов");
    }else if(10 < pers.count < 30){
        alert("Ты посмотрел немного фильмов");
    }else if (pers.count > 30){
        alert("Ты киноман!");
    }else{
        alert("Ошибка");
    }
}
lvlOfUser();


function showMyDB() {
    (pers.privat == false) ? (console.log(pers)) : console.log("privat = true");
}
showMyDB();


function writeYourGender() {
    for(let i = 0; i < 3; i++){
        const x = prompt(`Ваш любимый жанр под номером ${i++}.`);
        pers.genres[--i] = x;
    }

}
writeYourGender();    