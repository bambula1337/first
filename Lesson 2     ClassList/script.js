"use strict";

const btns = document.querySelectorAll("button"),
      btnsParent = document.querySelector(".btn-block"),
      btn = document.createElement("button");

// console.log(btns[0].classList.length);
// console.log(btns[0].classList.add("red", "xxx"));
// console.log(btns[0].classList.remove("blue"));
// console.log(btns[0].classList.toggle("red"));

// if(btns[1].classList.contains("xxx")){
//   console.log("x");
// }

// btns[0].addEventListener("click", (e) =>{
//   // btns[1].classList.toggle("red");
//   (btns[1].classList.contains("red")) ? btns[1].classList.remove("red") : btns[1].classList.add("red");
// });


// btnsParent.addEventListener("click", (e) =>{
//   if(e.target && e.target.tagName == "BUTTON"){
//     console.log("x");
//   }
// });


btnsParent.addEventListener("click", (e) =>{
  if(e.target && e.target.matches("button.red")){
    console.log("x");
  }
});


btn.classList.add("red"); 
btnsParent.append(btn);


