var line1__bars = document.querySelector(".line1__bars-menu");
var line2__bars = document.querySelector(".line2__bars-menu");
var line3__bars = document.querySelector(".line3__bars-menu");
let bars__menu = document.querySelector(".bars__menu");
let menuAncore = document.querySelector(".menu-container__ancore");
let buttonMenu = document.querySelector(".btn-controller");
let navbar = document.querySelector(".navbar");

function animateBars() {
  line1__bars.classList.toggle("activeline1__bars-menu");
  line2__bars.classList.toggle("activeline2__bars-menu");
  line3__bars.classList.toggle("activeline3__bars-menu");
  bars__menu.classList.toggle("bars__menu-active");
  navbar.classList.toggle("navbar-collapse-controller");
  if (line1__bars.classList.contains("activeline1__bars-menu")) {
    menuAncore.textContent = "Close";
  } else {
    menuAncore.textContent = "Menu";
  }
}

function ancoreController() {
  animateBars();
  buttonMenu.click()
}
bars__menu.addEventListener("click", animateBars);
menuAncore.addEventListener("click", ancoreController);
