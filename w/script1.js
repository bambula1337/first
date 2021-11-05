"use strict";

// console.log(document.documentElement);
// console.log(document.body.childNodes);
// console.log(document.body.firstChild);
// console.log(document.body.lastChild);


// console.log(document.querySelector(".x").parentNode.parentNode.parentNode);

console.log(document.body.firstElementChild);

console.log(document.querySelector(".x").parentElement);

console.log(document.querySelector("[data-current='3']").nextSibling);

console.log(document.querySelector("[data-current='3']").previousElementSibling);


for (let i  of document.body.childNodes){
    if(i.nodeName == "#text"){
        continue;
    }
    console.log(i);
}
