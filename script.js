"use strict";

let numberoffilms = prompt ("сколько фильмов?", "");

const pers = {
    count: numberoffilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};
const x = prompt("One of the last films"),
    y = prompt("Rate"),
    z = prompt("One of the last films"),
    e = prompt("Rate");   
pers.movies[x] = y;
pers.movies[z] = e;
console.log(pers);