'use strict';

//touchstart
//touchmove
//touchend
//touchenter
//touchleave
//touchcancel

//touches
//targetTouches
//changedTouches

const redBox = document.querySelector(".box");

redBox.addEventListener("touchmove", (e) => {
  e.target.style.width = `${e.targetTouches[0].pageX}px`;
  e.target.style.height = `${e.targetTouches[0].pageY}px`;
});