"use strict";




const btn = document.querySelector("button");

function user(name, auth){
  this.name = name;
  this.auth = auth;
  this.human = true;
}


User.prototype.super = "xxx";

const Ivan = new user("Lolka", "80-8-0qw8dqwj");
const Borya = new user("popla", "w8dqwj");

btn.addEventListener("click", () =>{
  console.log(Ivan);
  console.log(Borya);
});




