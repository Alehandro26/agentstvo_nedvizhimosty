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
const sliderDots = document.querySelectorAll(".slides__dots span");
const slideWidth = document.querySelector(".slider__image").clientWidth;
const sliderPrev = document.querySelector(".slider__prev");
const sliderNext = document.querySelector(".slider__next");

sliderDots[0].classList.add("active");

sliderNext.addEventListener("click", () => {
    offset += slideWidth + 30;
    if (offset > slideWidth + 30) {
        offset = 0;
        sliderWrapper.style.transition = "0s";
        sliderDots[0].classList.add("active");
        sliderDots[1].classList.remove("active");
    } else {
        sliderDots[1].classList.add("active");
        sliderDots[0].classList.remove("active");
        sliderWrapper.style.transition = "left .3s ease";
    }
    sliderWrapper.style.left = -offset + "px"; 
});

sliderPrev.addEventListener("click", () => {
    offset -= slideWidth + 30;
    if (offset < 0) {
        offset = slideWidth + 30;
        sliderWrapper.style.transition = "0s";
        sliderDots[0].classList.remove("active");
        sliderDots[1].classList.add("active");
    } else {
        sliderWrapper.style.transition = "left .3s ease";
        sliderDots[0].classList.add("active");
        sliderDots[1].classList.remove("active");
    }
    sliderWrapper.style.left = -offset + "px";   
});

//Progress
const progressBar = document.querySelector(".progress__bar div");
const progressBtn = document.querySelector(".progress__btn");

progressBtn.addEventListener("click", () => {
  const widthBar = Math.ceil(parseInt(window.getComputedStyle(progressBar).width) / 470 * 100);
  progressBar.style.width = (widthBar + 25) + "%";
  progressBar.innerHTML = (widthBar + 25) + " %";

  if (widthBar >= 75) {
    progressBar.innerHTML = "100 %";
    progressBar.style.width = "100%";
  }
});

const infoPopup = document.querySelector(".progress__info");

infoPopup.addEventListener("click", () => {
  infoPopup.classList.toggle("progress__info_active");
});

//ScrollTop
const scrollTop = document.querySelector(".footer__btn");

scrollTop.addEventListener('click', () => scrollTo(0, 0));