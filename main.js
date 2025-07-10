"use strict"

const page = document.querySelector(".page");
const openButton = document.querySelector(".header__nav__btn-open");
const closeButoon = document.querySelector(".header__nav__btn-close");
const navMenu = document.querySelector("#navigation-menu");

openButton.addEventListener("click", openNavigationMenu);
closeButoon.addEventListener("click", closeNavigationMenu);
closeButoon.addEventListener("keydown", handleEscapeKey);
page.addEventListener("click", handleClickOnBackground);
window.addEventListener("resize", adjustNavigationMenuState);

function openNavigationMenu(event) {
  navMenu.removeAttribute("hidden");
  this.setAttribute("aria-expanded", "true");
  navMenu.classList.toggle("nav-menu-open");
  page.classList.add("overflow-hidden", "overlay");
  closeButoon.focus();
}

function closeNavigationMenu(event) {
  navMenu.setAttribute("hidden", "true");
  openButton.setAttribute("aria-expanded", "false");
  navMenu.classList.toggle("nav-menu-open");
  page.classList.remove("overflow-hidden", "overlay");
  openButton.focus();
}

function handleEscapeKey(event) {
  if (event.code == "Escape") {
    closeNavigationMenu();
  }
}

function handleClickOnBackground(event) {
  if (openButton.getAttribute("aria-expanded") === "false") return;
  const target = event.target.closest(".header__nav");
  if (!target) closeNavigationMenu();
}

function adjustNavigationMenuState(event) {
  const isMobileWindow = window.matchMedia("(max-width: 45.5rem)").matches;
  if (isMobileWindow) return;
  if (openButton.getAttribute("aria-expanded") === "false") return;
  closeNavigationMenu();
}