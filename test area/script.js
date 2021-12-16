"use strict";



let arr = [1,2,3];

let total = arr.reduce((acc,e) => {
  console.log(`accum: ${acc} and element: ${e}`);
  return acc + e;
}, 10);



document.querySelector("button").addEventListener("click", (e) =>{
  console.log(arr);
  console.log(total);
});