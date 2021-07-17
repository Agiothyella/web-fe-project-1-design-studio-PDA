`use strict`;

// Variable -------
// Popup ---
const popup = document.querySelectorAll(".popup");
const popupL = document.querySelector(".popup--landscape");
const popupP = document.querySelector(".popup--potrait");
const overlay = document.querySelector(".popup__overlay");
const triggerClosePopup = document.querySelectorAll(".popup__close");
const triggerShowPopupL = document.querySelectorAll(".art__artwork--landscape");
const triggerShowPopupP = document.querySelectorAll(".art__artwork--potrait");
// --- Popup

// Slider ---
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
// --- Slider

// Small nav ---
const navigation = document.querySelector(".nav");
const smallNav = document.querySelector(".nav__small");
const smallNavList = document.querySelectorAll(".nav__small-item");
// --- Small nav
// ------- Variable

// Main functions ---------
// Popup ---
function closePopup() {
  for (let i = 0; i < popup.length; i++) {
    popup[i].classList.remove("u-display--block", "open-popup");
  }
  overlay.classList.remove("u-display--block", "open-overlay");
}

function openPopup(popupPass) {
  popupPass.classList.add("u-display--block", "open-popup");
  overlay.classList.add("u-display--block", "open-overlay");
}

function addShowListener(which, popupPass) {
  for (let i = 0; i < which.length; i++) {
    which[i].addEventListener("click", function () {
      openPopup(popupPass);
    });
  }
}
// --- Popup

// Slider --------
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

  timerMessage = setTimeout(showSlidesMessage, 12000);
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

  timerMessage = setTimeout(showSlidesMessage, 12000);
}
// --- Message manual slider
// -------- Slider

// Show small nav ---
function showNavSmall() {
  smallNav.classList.toggle("nav-visible");
}
// --- Show small nav
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
    slideImg[i].classList.remove("u-visible");
    slideDot[i].classList.remove("slider__dot--active");
  }

  for (i = 0; i < slideTxt.length; i++) {
    slideTxt[i].classList.remove("u-visible");
  }
}
// --- Remove head

// Display head ---
function displayHead() {
  slideImg[indexImg - 1].classList.add("u-visible");
  slideTxt[indexTxt - 1].classList.add("u-visible");
  slideDot[indexImg - 1].classList.add("slider__dot--active");
}
// --- Display head

// Display service ---
function displayService() {
  slideDesignText[indexDesign - 1].classList.add("u-display--block");
  slideDesignImages[indexDesign - 1].classList.add("u-display--grid");
  slideDesign[indexDesign - 1].classList.add("service__design--active");
}
// --- Display service

// Remove service ---
function removeService() {
  for (i = 0; i < slideDesign.length; i++) {
    slideDesign[i].classList.remove("service__design--active");
    slideDesignText[i].classList.remove("u-display--block");
    slideDesignImages[i].classList.remove("u-display--grid");
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

// Main -----
// Popup ---
for (let i = 0; i < triggerClosePopup.length; i++) {
  triggerClosePopup[i].addEventListener("click", closePopup);
}

overlay.addEventListener("click", closePopup);

document.addEventListener("keydown", function (event) {
  console.log(event.key);
  if (event.key === "Escape") {
    closePopup();
  }
});
// --- Popup

// Sticky nav---
const stickyNav = new Waypoint({
  element: document.querySelector(".js-nav-waypoint"),
  handler: function (direction) {
    navigation.classList.toggle("sticky-nav");
  },
});
// --- Sticky nav

// // Show small nav ---
// const showNav = new Waypoint({
//   element: document.querySelector(".js-nav-waypoint"),
//   handler: function (direction) {
//     smallNav.classList.remove("nav-visible");
//   },
// });
// // --- Show small nav

// Hide small nav ---
for (let i = 0; i < smallNavList.length; i++) {
  smallNavList[i].addEventListener("click", function () {
    smallNav.classList.remove("nav-visible");
  });
}
// --- Hide small nav

// Sliders ---
showSlidesHead();
showSlidesService();
showSlidesMessage();
// --- Sliders

// Popup ---
addShowListener(triggerShowPopupL, popupL);
addShowListener(triggerShowPopupP, popupP);
// --- Popup
// ----- Main
