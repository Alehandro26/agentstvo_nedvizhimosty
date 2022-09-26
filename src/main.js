import "./assets/styles/scss/main.scss";

// Menu
const sublinks = document.querySelectorAll(".nav__sublinks");
const sublinksClickHandler = (e) => e.target.classList.toggle("active");
sublinks.forEach((link) =>
  link.addEventListener("click", sublinksClickHandler)
);

// Select
const selects = document.querySelectorAll(".select");
selects.forEach((select) => {
  const items = select.querySelectorAll(".select__item");
  const input = select.querySelector(".select__root input");
  items.forEach((item) =>
    item.addEventListener("click", (e) => {
      input.value = item.textContent;
    })
  );
  select.addEventListener("click", () => select.classList.toggle("active"));
});

//Slider
let offset = 0;
const sliderWrapper = document.querySelector(".slider__wrapper");
const sliderLength = document.querySelectorAll(".slider__image");
const sliderDots = document.querySelectorAll(".slides__dots span");
const slideWidth = document.querySelector(".slider__image").clientWidth;
const sliderPrev = document.querySelector(".slider__prev");
const sliderNext = document.querySelector(".slider__next");
const sliderGap = parseInt(window.getComputedStyle(document.querySelector(".slider__wrapper")).gap);

sliderDots[0].classList.add("active");

sliderNext.addEventListener("click", () => {
    offset += slideWidth + sliderGap;
    if (offset > (slideWidth + sliderGap) * (sliderLength.length - 1)) {
        offset = 0;
        sliderWrapper.style.transition = "0s";
        sliderDots[0].classList.add("active");
        sliderDots[1].classList.remove("active");
        sliderDots[2].classList.remove("active");
    } else if (offset > slideWidth + sliderGap) {
        sliderDots[2].classList.add("active");
        sliderDots[0].classList.remove("active");
        sliderDots[1].classList.remove("active");
        sliderWrapper.style.transition = "left .3s ease";
    } else {
        sliderDots[2].classList.remove("active");
        sliderDots[0].classList.remove("active");
        sliderDots[1].classList.add("active");
        sliderWrapper.style.transition = "left .3s ease";
    }
    sliderWrapper.style.left = -offset + "px"; 
});

sliderPrev.addEventListener("click", () => {
    offset -= slideWidth + sliderGap;
    if (offset < 0) {
        offset = (slideWidth + sliderGap) * (sliderLength.length - 1);
        sliderWrapper.style.transition = "0s";
        sliderDots[0].classList.remove("active");
        sliderDots[1].classList.remove("active");
        sliderDots[2].classList.add("active");
    } else if (offset < slideWidth + sliderGap) {
        sliderDots[0].classList.add("active");
        sliderDots[1].classList.remove("active");
        sliderDots[2].classList.remove("active");
        sliderWrapper.style.transition = "left .3s ease";
    } else {
        sliderWrapper.style.transition = "left .3s ease";
        sliderDots[1].classList.add("active");
        sliderDots[0].classList.remove("active");
        sliderDots[2].classList.remove("active");
    }
    sliderWrapper.style.left = -offset + "px";   
});

//Progress
const progressBar = document.querySelector(".progress__bar div");
const progressBtn = document.querySelector(".progress__btn");
const progressBarWidth = document.querySelector(".progress__bar").clientWidth;

progressBtn.addEventListener("click", () => {
  const widthBar = Math.ceil(parseInt(window.getComputedStyle(progressBar).width) / progressBarWidth * 100);
  progressBar.style.width = (widthBar + 25) + "%";
  progressBar.innerHTML = (widthBar + 25) + " %";

  if (widthBar >= 75) {
    progressBar.innerHTML = "100 %";
    progressBar.style.width = "100%";
    progressBar.style.padding = "0";
  }
});

const infoPopup = document.querySelector(".progress__info");

infoPopup.addEventListener("click", () => {
  infoPopup.classList.toggle("progress__info_active");
});

//ScrollTop
const scrollTop = document.querySelector(".footer__btn");

scrollTop.addEventListener('click', () => scrollTo(0, 0));

//Mobile menu 
const burger = document.querySelector('.header__button');
const popupMob = document.querySelector('.popup');
const linksMenu = document.querySelectorAll('.popup__link');

burger.addEventListener('click', () => {
    burger.classList.toggle('header__button_active');
    popupMob.classList.toggle('popup_active');
  } 
);

linksMenu.forEach(e => e.addEventListener('click', () => {
  burger.classList.remove('header__button_active');
  popupMob.classList.remove('popup_active');
}));