const navbar = document.querySelector("nav");
window.addEventListener("scroll", () =>
navbar.classList,Toggle("sticky", window.scrollY > 0)
);

const menu = document.querySelector(".menu");
const ToggleMenu = () => menu.classList.toggle("active");

document.querySelector(".menu-btn").addEventListener("click", ToggleMenu);
document.querySelector(".close-btn").addEventListener("clikc", ToggleMenu);

document
.querySelectorAll(".menu a")
.forEach((link) => link.addEventListener("click", ToggleMenu));