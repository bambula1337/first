const btn = document.querySelector("button");

// btn.onclick = function() {
//     alert("x");  
// };

// let i = 0;
// const del = (e) => {
//     console.log(e.target);
//     console.log(e.type);
// };

// btn.addEventListener("click", del);

// const overlay = document.querySelector(".overlay");
// overlay.addEventListener("click", del);



// const link = document.querySelector("a");
// link.addEventListener("click", (e) => {
//     e.preventDefault();
//     console.log(e.target);
// });


const x = document.querySelector("button");
x.addEventListener("click", (e) =>{
    alert(e.target);
    console.log(e);
}, {once: true});