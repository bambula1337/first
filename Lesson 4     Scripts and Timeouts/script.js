"use strict";

// const delayFunc = setInterval(function(text) {
//   console.log(text);
//   document.querySelector(".wrapper").classList.add("red");
// }, 2000, "hello");

// const someFunc = function(){
//   console.log("hello dude)");
// };


// const delaysomeFunc = setTimeout(someFunc, 5000);

// setTimeout(someFunc, 10000);

// someFunc();

// document.addEventListener("click", () => {
//   clearInterval(delayFunc);
// });


const myAnimFunc = function(){
  const elem = document.querySelector(".box");
  let pos = 0;

  const intervalOfBox = setInterval(frameFunc, 100);
  function frameFunc(){
    if(pos == 300){
      clearInterval(intervalOfBox);
    }
    else{
      pos++;
      elem.style.top = pos + "px";
      elem.style.left = pos + "px";
    }
  }
};

document.addEventListener("click", myAnimFunc());

