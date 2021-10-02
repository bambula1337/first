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

// let numberoffilms;

// function start() {
//     numberoffilms = +prompt ("сколько фильмов?", "");
    
//     while(numberoffilms == "" || numberoffilms == null || isNaN(numberoffilms)){
//         numberoffilms = +prompt ("сколько фильмов?", "");
//     }
// }

// start();

// const pers = {
//     count: numberoffilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// function rememberMyFilms() {
//     for(let i = 0; i < 2; i++){

//         const x = prompt("One of the last films"),
//               y = prompt("Rate");
    
//         (x != null && y != null && x.length > 0 && y.length > 0 && x.length < 50) ? pers.movies[x] = y : i--;
//     }

// }

// rememberMyFilms();

// function lvlOfUser() {
//     if(pers.count < 10){
//         alert("Ты слишком мало просмотрел фильмов");
//     }else if(10 < pers.count < 30){
//         alert("Ты посмотрел немного фильмов");
//     }else if (pers.count > 30){
//         alert("Ты киноман!");
//     }else{
//         alert("Ошибка");
//     }
// }
// lvlOfUser();


// function showMyDB() {
//     (pers.privat == false) ? (console.log(pers)) : console.log("privat = true");
// }
// showMyDB();


// function writeYourGender() {
//     for(let i = 0; i < 3; i++){
//         const x = prompt(`Ваш любимый жанр под номером ${i++}.`);
//         pers.genres[--i] = x;
//     }

// }
// writeYourGender();    

/// Call Back functions

// function fisrt() {
//     setTimeout(function(){
//         console.log(1);
//     }, 500);

// }

// function second() {
//     console.log(2);
// }

// fisrt();
// second();

// function l(lang, callback) {
//     console.log(`lmao dude ${lang}`);
//     callback();
// }

// l("what", function(){
//     console.log("wtf dude its second text");
// });

///objects

// const options = {
//     name: "test",
//     width: 1360,
//     height: 1024,
//     colors: {
//         border: "black",
//         bg: "red",
//     },
//     makeTest: function() {
//         console.log("test");
//     }
// };

// // delete options.colors;

// // console.log(options);

// let counter = 0;

// for (let key in options) {
//     if (typeof(options[key]) == "object"){
//         for (let i in options[key]){
//             console.log(`Свойство ${i} = ${options[key][i]}`);
//             counter++;
//         }
//     }else{
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//         counter++;
//     }
// }

// console.log(options["colors"]["border"]);

// console.log(counter);

// console.log(Object.keys(options).length);
// options.makeTest();

// const {border,bg} = options.colors;
// console.log(border);

// Масивы и псевдомасивы

// const arr = [1,2,3,4,5];

// // arr.pop();
// // arr.push(12);

// // console.log(arr);

// // for(let value of arr){
// //     console.log(value);
// // }

// arr.forEach(function(x,y,z){
//     console.log(`index ${y} in array ${z}: ${x}`);
// });


///Передача по ссылке и по значению

///OOP

// const hero = {
//     damage: 30,
//     health: 100
// };

// const heroViper = {
//     damage: 40,
// };

// Object.setPrototypeOf(heroViper, hero);

// const heroPudje = Object.create(hero);


//Practice 4





// const pers = {
//     count: 0,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
//     films: function(){
//         pers.count = +prompt ("сколько фильмов?", "");
    
//         while(pers.count == "" || pers.count == null || isNaN(pers.count)){
//             pers.count = +prompt ("сколько фильмов?", "");
//         }
//     },
//     rememberMyFilms: function(){
//         for(let i = 0; i < 2; i++){

//             const x = prompt("One of the last films"),
//                   y = prompt("Rate");
        
//             (x != null && y != null && x.length > 0 && y.length > 0 && x.length < 50) ? pers.movies[x] = y : i--;
//         }
//     },
//     lvlOfUser: function(){
//         if(pers.count < 10){
//             alert("Ты слишком мало просмотрел фильмов");
//         }else if(10 < pers.count < 30){
//             alert("Ты посмотрел немного фильмов");
//         }else if (pers.count > 30){
//             alert("Ты киноман!");
//         }else{
//             alert("Ошибка");
//         }
//     },
//     showMyDB: function(){
//         (pers.privat == false) ? (console.log(pers)) : console.log("privat = true");
//     },
//     writeYourGender: function(){
//         for(let i = 0; i < 3; i++){
//             const x = prompt(`Ваш любимый жанр под номером ${i++}.`);
//             if(x != null && x.length > 0){
//                 pers.genres[--i] = x;
//             }
//             else{
//                 i = i - 2;
//             }
//         }
//         pers.genres.forEach(function(x,y,z){
//             console.log(`Любимый жанр #${y + 1} - это ${x}`);
//         });
        
//     },
//     start: function(){
//         pers.films();
//         pers.rememberMyFilms();
//         pers.lvlOfUser();
//         pers.showMyDB();
//         pers.writeYourGender();  
//     },
//     tooggleVisibleMyDb: function(){
//         (pers.privat == false) ? pers.privat = true : pers.privat = false
//     }
// };

// pers.start();
// console.log(pers.movies);








