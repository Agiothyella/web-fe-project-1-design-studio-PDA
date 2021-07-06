`use strict`;

// Get Scroll Coordinate ---
// function getScrollTop() {
//   if (typeof window.pageYOffset !== "undefined") {
//     // Most browsers
//     return window.pageYOffset;
//   }
//   const d = document.documentElement;
//   if (typeof d.clientHeight !== "undefined") {
//     // IE in standards mode
//     return d.scrollTop;
//   }
//   // IE in quirks mode
//   return document.body.scrollTop;
// }
// --- Get Scroll Coordinate

// Slideshow Functions ---

// Variable --
let imgIndex =
  Math.floor(Math.random() * document.querySelectorAll(".slider__img").length) +
  1;

let txtIndex =
  Math.floor(
    Math.random() * document.querySelectorAll(".slider__text").length
  ) + 1;

let imgSlide = document.querySelectorAll(".slider__img");
let txtSlide = document.querySelectorAll(".slider__text");
let dotSlide = document.querySelectorAll(".slider__dot");
let timerImg, timerTxt;

// -- Variable

function showSlidesImg() {
  let i;

  for (i = 0; i < imgSlide.length; i++) {
    imgSlide[i].classList.remove("u-slide-visible");
    dotSlide[i].classList.remove("slider__dot--active");
  }
  imgIndex++;

  if (imgIndex > imgSlide.length) {
    imgIndex -= imgSlide.length;
  }

  imgSlide[imgIndex - 1].classList.add("u-slide-visible");
  dotSlide[imgIndex - 1].classList.add("slider__dot--active");
  timerImg = setTimeout(showSlidesImg, 7000);
}

function showSlidesTxt() {
  let i;

  for (i = 0; i < txtSlide.length; i++) {
    txtSlide[i].classList.remove("u-slide-visible");
  }
  txtIndex++;

  if (txtIndex > txtSlide.length) {
    txtIndex -= txtSlide.length;
  }

  txtSlide[txtIndex - 1].classList.add("u-slide-visible");
  timerTxt = setTimeout(showSlidesTxt, 7000);
}

function slid(position) {
  clearTimeout(timerImg);
  clearTimeout(timerTxt);

  imgIndex += position;
  if (imgIndex > imgSlide.length) {
    imgIndex -= imgSlide.length;
  } else if (imgIndex < 1) {
    imgIndex = imgSlide.length;
  }
  txtIndex += position;
  if (txtIndex > txtSlide.length) {
    txtIndex -= txtSlide.length;
  } else if (txtIndex < 1) {
    txtIndex = txtSlide.length;
  }

  for (i = 0; i < imgSlide.length; i++) {
    imgSlide[i].classList.remove("u-slide-visible");
    dotSlide[i].classList.remove("slider__dot--active");
  }
  for (i = 0; i < txtSlide.length; i++) {
    txtSlide[i].classList.remove("u-slide-visible");
  }

  imgSlide[imgIndex - 1].classList.add("u-slide-visible");
  dotSlide[imgIndex - 1].classList.add("slider__dot--active");
  txtSlide[txtIndex - 1].classList.add("u-slide-visible");

  timerImg = setTimeout(showSlidesTxt, 7000);
  timerTxt = setTimeout(showSlidesImg, 7000);
}

showSlidesImg();
showSlidesTxt();
// --- Slideshow Functions

// const banner = document.querySelector(".agt-banner");
// const bannerHeight = banner.offsetHeight;
// const slideshowHeight = document.querySelector(
//   ".slideshow-container"
// ).offsetHeight;
// const botNavHeight = document.querySelector(".agt-banner-nav").offsetHeight;
// const checkpoint = slideshowHeight + 8 - botNavHeight;

// window.onscroll = function () {
//   navbarHide();
//   navBgFade();
// };

// function navBgFade() {
//   let opacity;
//   let scroll = getScrollTop();
//   const bgWhite = document.querySelector(".agt-white");

//   if (scroll > checkpoint && scroll < checkpoint + botNavHeight) {
//     opacity = 0;
//   } else {
//     opacity = 1;
//   }
//   bgWhite.style.backgroundColor = `rgba(255, 255, 255, ${opacity})`;
// }

// function navbarHide() {
//   let scroll = getScrollTop();
//   const topNav = document.querySelector(".agt-top");
//   if (scroll > checkpoint) {
//     topNav.style.opacity = "1";
//     banner.style.opacity = "0";
//   } else {
//     topNav.style.opacity = "0";
//     banner.style.opacity = "1";
//   }
// }
