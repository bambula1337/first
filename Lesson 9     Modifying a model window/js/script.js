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

const hide = function (item) {
  item.style.display = "none";
};

const show = function (item = allTabs, indexOfItem = 0, btns = allbtns) {
  allTabs.forEach(e => {
    hide(e);
  });
  item[indexOfItem].style.display = "block";
  document.querySelector(".tabheader__item_active").classList.remove("tabheader__item_active");
  btns[indexOfItem].classList.add("tabheader__item_active");

};

allTabs.forEach(e => {
  hide(e);
});
show();

btnsParent.addEventListener("click", (e) => {
  if (e.target && e.target.matches(".tabheader__item")) {
    allbtns.forEach((item, indexOfItem) => {
      if (item == e.target) {
        show(allTabs, indexOfItem, allbtns);
      }
    });
  }
});

/////Timer



const saler = new Date('2021-12-29');

function timer(saleDate) {
  const now = new Date();
  const mlsc = Date.parse(saleDate) - Date.parse(now),
    days = Math.floor(mlsc / (1000 * 60 * 60 * 24)),
    hours = Math.floor((mlsc / (1000 * 60 * 60)) % 24),
    minutes = Math.floor((mlsc / (1000 * 60)) % 60),
    seconds = Math.floor((mlsc / 1000) % 60);
  return {
    "totalr": mlsc,
    "days": days,
    "hours": hours,
    "minutes": minutes,
    "seconds": seconds,
  };
}

function setClock(selector, sale) {
  const parent = document.querySelector(selector),
    day = parent.querySelector("#days"),
    hour = parent.querySelector("#hours"),
    minute = parent.querySelector("#minutes"),
    second = parent.querySelector("#seconds"),
    timeInterval = setInterval(updateClock, 1000),
    title = document.querySelector("#timer-title");

  updateClock();

  function updateClock() {
    const total = timer(sale);

    day.textContent = lenght(total.days);
    hour.textContent = lenght(total.hours);
    minute.textContent = lenght(total.minutes);
    second.textContent = lenght(total.seconds);

    if (total.totalr <= 0) {
      clearInterval(timeInterval);
      day.textContent = "0";
      hour.textContent = "0";
      minute.textContent = "0";
      second.textContent = "0";
      title.textContent = "Действие акции истекло";

    }
  }
}

function lenght(item, number = 10) {
  if (item >= number) {
    return item;
  } else {
    return "0" + item;
  }
}

setClock(".timer", saler);



////Creating a modal window


const modalbtn = document.querySelectorAll("[data-modal]"),
      modalclose = document.querySelector("[data-closemodal]"),
      modalwindow = document.querySelector(".modal");



const modal = {
  modalSOR: function (display = "none", overflow = "visible", modalwindower) {
    modalwindower.style.display = display;
    document.body.style.overflow = overflow;
  },
  connect: function (modal, trigger, close) {
    trigger.forEach((e) => {
      e.addEventListener("click", () => {
        this.modalSOR("block", "hidden", modal);
      });
    });
    close.addEventListener("click", () => {
      this.modalSOR("none", "visible", modal);
    });
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        this.modalSOR("none", "visible", modal);
      }
    });
    document.addEventListener("keydown", (e) => {
      if (e.code == "Escape" && modal.style.dispay == "block") {
        this.modalSOR("none", "visible", modal);
      }
    });
  },
  check: function(){
    console.log(document.documentElement.scrollTop);
    if(window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight){
      modalwindow.style.display = "block";
      document.body.style.overflow = "hidden";
      document.removeEventListener("scroll", modal.check);
      console.log("succesful deleted");
    }
    else{
      console.log("less than x");
    }
  }
};

modal.connect(modalwindow, modalbtn, modalclose);


///Modifying a model window


window.addEventListener("scroll", modal.check);
const timeout = setTimeout(modal.modalSOR, 20000, "block", "hidden", modalwindow);