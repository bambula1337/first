'use strict';

const box = document.getElementById("box"),
      btns = document.getElementsByTagName("button"),
      wrapper = document.querySelector(".wrapper"),
      circles = document.getElementsByClassName("circle"),
      hearts = wrapper.querySelectorAll(".heart"),
      firstHeart = wrapper.querySelector(".heart");

box.style.backgroundColor = "green";
box.style.width = "200px";

btns[1].style.borderRadius = "100%";

box.style.cssText = "background-color: green; width: 50px";

const y = document.createElement("button");
const x = document.createTextNode("hello its me!");

y.classList.add("black");
y.style.height = "200px";

document.querySelector(".wrapper").prepend(y);
// wrapper.before(y);
// wrapper.after(y);

// circles[0].remove();
// btns[4].replaceWith(btns[1]);

y.innerHTML = "<h2>Hello</h2>";
// y.textContent = "Hi";

y.insertAdjacentHTML("afterbegin", "<h3>Hello123</h3>");
y.insertAdjacentHTML("afterend", "<h3>Hello123</h3>");
y.insertAdjacentHTML("beforebegin", "<h3>Hello123</h3>");
y.insertAdjacentHTML("beforeend", "<h3>Hello123</h3>");
