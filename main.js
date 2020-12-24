const hamburger = document.querySelector(".nav");
const navLinks = document.querySelector(".nav-list");
const links = document.querySelectorAll(".nav-items");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});
