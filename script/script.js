`use strict`;

// Variable --
const slideImg = document.getElementsByClassName("slider__img");
const slideTxt = document.getElementsByClassName("slider__text");
const slideDesign = document.getElementsByClassName("service__design");
const designText = document.getElementsByClassName("service__text");
const designImages = document.getElementsByClassName("service__images");

let indexImg = Math.floor(Math.random() * slideImg.length) + 1;
let indexTxt = Math.floor(Math.random() * slideTxt.length) + 1;
let indexDesign = Math.floor(Math.random() * slideDesign.length) + 1;

let timerHead, timerDesign;
// -- Variable

// Head auto slider ---
function showSlidesHead() {
  for (i = 0; i < slideImg.length; i++) {
    slideImg[i].classList.remove("u-slide-visible");
    slideTxt[i].classList.remove("u-slide-visible");
  }
  indexImg++;
  indexTxt++;

  if (indexImg > slideImg.length) {
    indexImg = 1;
  }

  if (indexTxt > slideTxt.length) {
    indexTxt = 1;
  }

  slideImg[indexImg - 1].classList.add("u-slide-visible");
  slideTxt[indexTxt - 1].classList.add("u-slide-visible");
  timerHead = setTimeout(showSlidesHead, 7000);
}

// -- Head auto slider

// Head manual slider ---
function slideHead(position) {
  clearTimeout(timerHead);

  indexImg += position;
  indexTxt += position;

  if (indexImg > slideImg.length) {
    indexImg = 1;
  } else if (indexImg < 1) {
    indexImg = slideImg.length;
  }

  if (indexTxt > slideTxt.length) {
    indexTxt = 1;
  } else if (indexTxt < 1) {
    indexTxt = slideTxt.length;
  }

  for (i = 0; i < slideImg.length; i++) {
    slideImg[i].classList.remove("u-slide-visible");
  }

  for (i = 0; i < slideTxt.length; i++) {
    slideTxt[i].classList.remove("u-slide-visible");
  }

  slideImg[indexImg - 1].classList.add("u-slide-visible");
  slideTxt[indexTxt - 1].classList.add("u-slide-visible");

  timerHead = setTimeout(showSlidesHead, 7000);
}
// --- Head manual slider

// Service auto slider ---
function showSlidesService() {
  for (i = 0; i < designText.length; i++) {
    designText[i].classList.remove("u-slide-display--block");
    designImages[i].classList.remove("u-slide-display--grid");
  }

  for (i = 0; i < slideDesign.length; i++) {
    slideDesign[i].classList.remove("service__design--active");
  }

  indexDesign++;

  if (indexDesign > designText.length) {
    indexDesign = 1;
  }

  designText[indexDesign - 1].classList.add("u-slide-display--block");
  designImages[indexDesign - 1].classList.add("u-slide-display--grid");
  slideDesign[indexDesign - 1].classList.add("service__design--active");

  timerDesign = setTimeout(showSlidesService, 10000);
}
// -- Service auto slider

function slideService(activeNumber) {
  clearTimeout(timerDesign);

  indexDesign = activeNumber;

  for (i = 0; i < designText.length; i++) {
    designText[i].classList.remove("u-slide-display--block");
    designImages[i].classList.remove("u-slide-display--grid");
  }

  for (i = 0; i < slideDesign.length; i++) {
    slideDesign[i].classList.remove("service__design--active");
  }

  designText[indexDesign - 1].classList.add("u-slide-display--block");
  designImages[indexDesign - 1].classList.add("u-slide-display--grid");
  slideDesign[indexDesign - 1].classList.add("service__design--active");

  timerDesign = setTimeout(showSlidesService, 25000);
}

showSlidesHead();
showSlidesService();

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

// function currentSlideService(activeNumber) {
//   showSlidesService((indexDesign = activeNumber));
// }
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
