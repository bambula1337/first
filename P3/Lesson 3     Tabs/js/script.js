"use strict";


///My first code and attempt


// const foodImg = document.querySelector("[data-foodImg]"),
//       text = document.querySelector(".tabcontent__descr"),
//       foodTabsParent = document.querySelector(".tabheader__items"),
//       listOfSrc = foodTabsParent.querySelectorAll(".tabheader__item"),
//       parentOfInfoTab = document.querySelector(".tabcontent");

// const inhtmlOfTabs = {
//   vegy: `<img src="img/tabs/vegy.jpg" alt="vegy" data-foodImg>
//   <div class="tabcontent__descr">
//       Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Для людей, которые интересуются спортом; активных и здоровых. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!
//   </div>`,
//   elite: `<img src="img/tabs/elite.jpg" alt="elite">
//   <div class="tabcontent__descr">
//       Меню “Премиум” - мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!                                     
//   </div>`,
//   post: `<img src="img/tabs/post.jpg" alt="post">
//   <div class="tabcontent__descr">
//       Наше специальное “Постное меню” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения. Полная гармония с собой и природой в каждом элементе! Все будет Ом!                                     
//   </div>`,
//   hamburger: `<img src="img/tabs/hamburger.jpg" alt="hamburger">
//   <div class="tabcontent__descr">
//       Меню "Сбалансированное" - это соответствие вашего рациона всем научным рекомендациям. Мы тщательно просчитываем вашу потребность в к/б/ж/у и создаем лучшие блюда для вас.
//   </div>`
// };

// foodTabsParent.addEventListener("click", (e) =>{
//   if(e.target.className == "tabheader__item"){
//     document.querySelector(".tabheader__item_active").classList.remove("tabheader__item_active");
//     e.target.classList.add("tabheader__item_active");
//     parentOfInfoTab.innerHTML = `${inhtmlOfTabs[e.target.attributes[1].value]}`;
//   }
// });

////Second code and attempt

const allTabs = document.querySelectorAll(".tabcontent"),
      allbtns = document.querySelectorAll(".tabheader__item"),
      btnsParent = document.querySelector(".tabheader__items");

const hide = function(item){
  item.style.display = "none";
};

const show = function(item = allTabs,indexOfItem = 0,btns = allbtns){
  allTabs.forEach(e =>{
    hide(e);
  });
  item[indexOfItem].style.display = "block";
  document.querySelector(".tabheader__item_active").classList.remove("tabheader__item_active");
  btns[indexOfItem].classList.add("tabheader__item_active");
  
};

allTabs.forEach(e =>{
  hide(e);
});
show();

btnsParent.addEventListener("click", (e) => {
  if(e.target && e.target.matches(".tabheader__item")){
    allbtns.forEach((item, indexOfItem) =>{
      if(item == e.target){
        show(allTabs,indexOfItem,allbtns);
      }
    });
  }
});