"use strict";



function pow(item, times, start){
  if(times == 1){
    console.log(item);
  }
  else{
    item = item * start;
    times--;
    pow(item, times,start);
  }
}
let x = 1,
    y = 1,
    z = 1;
document.querySelector("button").addEventListener("click", (e) =>{
  pow(x,y,z);
  x++;
  y++;
  z++;
});