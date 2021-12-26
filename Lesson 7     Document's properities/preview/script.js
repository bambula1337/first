'use strict';

const box = document.querySelector(".box"),
      button = document.querySelector("button");

let width = box.scrollWidth,
    height = box.scrollHeight;

button.addEventListener("click", (e) =>{
  // box.style.height=`${height}px`;
  // box.style.overflow="visible";
  // console.log(box.scrollTop);
  console.log(box.getBoundingClientRect());
});




