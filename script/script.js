`use strict`;

// Variable --
const slideImg = document.getElementsByClassName("slider__img");
const slideTxt = document.getElementsByClassName("slider__text");
const slideDesign = document.getElementsByClassName("service__design");
const slideDesignText = document.getElementsByClassName("service__text");
const slideDesignImages = document.getElementsByClassName("service__images");
const slideClientMessage = document.getElementsByClassName("client__message");

const progressService = document.querySelector(".service__progress");

let slideDot = document.getElementsByClassName("slider__dot");

let indexImg = Math.floor(Math.random() * slideImg.length) + 1;
let indexTxt = Math.floor(Math.random() * slideTxt.length) + 1;
let indexDesign = Math.floor(Math.random() * slideDesign.length) + 1;
let indexMessage = Math.floor(Math.random() * slideClientMessage.length) + 1;

let indexMessageNext = indexMessage - 1;
let timerHead, timerDesign, timerMessage;
// -- Variable

// Main functions ---------
// Head auto slider ---
function showSlidesHead() {
  removeHead();

  indexImg++;
  indexTxt++;

  indexImg = checkNextSlide(indexImg, slideImg);
  indexTxt = checkNextSlide(indexTxt, slideTxt);

  displayHead();

  timerHead = setTimeout(showSlidesHead, 7000);
}

// -- Head auto slider

// Head manual slider ---
function slideHead(position) {
  clearTimeout(timerHead);

  removeHead();

  indexImg += position;
  indexTxt += position;

  indexImg = checkSlides(indexImg, slideImg);
  indexTxt = checkSlides(indexTxt, slideTxt);

  displayHead();

  timerHead = setTimeout(showSlidesHead, 7000);
}
// --- Head manual slider

// Service auto slider ---
function showSlidesService() {
  removeService();
  removeAnim();

  indexDesign++;

  indexDesign = checkNextSlide(indexDesign, slideDesignText);

  displayService();
  setTimeout(function () {
    addAnim("progress-10s");
  }, 100);

  timerDesign = setTimeout(showSlidesService, 10000);
}
// --- Service auto slider

//  Service manual slider ---
function slideService(activeNumber) {
  clearTimeout(timerDesign);

  removeService();
  removeAnim();

  indexDesign = activeNumber;

  displayService();
  setTimeout(function () {
    addAnim("progress-25s");
  }, 100);

  timerDesign = setTimeout(showSlidesService, 25000);
}
// --- Service manual slider

// Message auto slider ---
function showSlidesMessage() {
  removeMessage();

  indexMessage++;
  indexMessageNext++;

  indexMessageNext = checkNextSlide(indexMessageNext, slideClientMessage);
  indexMessage = checkNextSlide(indexMessage, slideClientMessage);

  slideClientMessage[indexMessage - 1].classList.add("client__message--active");
  slideClientMessage[indexMessageNext - 1].classList.add(
    "client__message--slided"
  );

  timerMessage = setTimeout(showSlidesMessage, 10000);
}

// -- Message auto slider

// Message manual slider ---
function slideMessage(position) {
  clearTimeout(timerMessage);

  indexMessage += position;
  indexMessageNext += position;

  indexMessageNext = checkSlides(indexMessageNext, slideClientMessage);
  indexMessage = checkSlides(indexMessage, slideClientMessage);

  removeMessage();
  displayMessage();

  timerMessage = setTimeout(showSlidesMessage, 10000);
}
// --- Message manual slider
// --------- Main functions

// Modules ---------
// Check next slide ---
function checkNextSlide(index, slide) {
  if (index > slide.length) {
    index = 1;
  }

  return index;
}
// --- Check next slide

// Check slide ---
function checkSlides(index, slide) {
  if (index > slide.length) {
    index = 1;
  } else if (index < 1) {
    index = slide.length;
  }

  return index;
}
// --- Check slide
// Remove head ---
function removeHead() {
  for (i = 0; i < slideImg.length; i++) {
    slideImg[i].classList.remove("u-slide-visible");
    slideDot[i].classList.remove("slider__dot--active");
  }

  for (i = 0; i < slideTxt.length; i++) {
    slideTxt[i].classList.remove("u-slide-visible");
  }
}
// --- Remove head

// Display head ---
function displayHead() {
  slideImg[indexImg - 1].classList.add("u-slide-visible");
  slideTxt[indexTxt - 1].classList.add("u-slide-visible");
  slideDot[indexImg - 1].classList.add("slider__dot--active");
}
// --- Display head

// Display service ---
function displayService() {
  slideDesignText[indexDesign - 1].classList.add("u-slide-display--block");
  slideDesignImages[indexDesign - 1].classList.add("u-slide-display--grid");
  slideDesign[indexDesign - 1].classList.add("service__design--active");
}
// --- Display service

// Remove service ---
function removeService() {
  for (i = 0; i < slideDesign.length; i++) {
    slideDesign[i].classList.remove("service__design--active");
    slideDesignText[i].classList.remove("u-slide-display--block");
    slideDesignImages[i].classList.remove("u-slide-display--grid");
  }
}
// --- Remove service

// Remove animation ---
function removeAnim() {
  progressService.classList.remove("progress-10s");
  progressService.classList.remove("progress-25s");
}
// --- Remove animation

// Add animation ---
function addAnim(animation) {
  progressService.classList.add(animation);
  progressService.classList.add(animation);
}
// --- Add animation

// Remove message ---
function removeMessage() {
  for (i = 0; i < slideClientMessage.length; i++) {
    slideClientMessage[i].classList.remove("client__message--active");
    slideClientMessage[i].classList.remove("client__message--slided");
  }
}
// --- Remove message

// Display message ---
function displayMessage() {
  slideClientMessage[indexMessage - 1].classList.add("client__message--active");
  slideClientMessage[indexMessageNext - 1].classList.add(
    "client__message--slided"
  );
}
// --- Display message
// --------- Modules

showSlidesHead();
showSlidesService();
showSlidesMessage();

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
