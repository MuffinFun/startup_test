const navMenu = document.querySelector(".navigate__nav-menu");
const hamburger = document.querySelector(".top-main__hamburger");

window.addEventListener("DOMContentLoaded", () => {
  navMenu.classList.toggle("active-nav");
});

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active-hambrg");
  navMenu.classList.toggle("active-nav");
});
navMenu.addEventListener("mouseleave", () => {
  hamburger.classList.add("active-hambrg");
  navMenu.classList.remove("active-nav");
});
