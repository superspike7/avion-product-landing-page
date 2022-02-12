const myNav = document.querySelector(".header");
window.onscroll = function () {
  if (window.scrollY >= 100) {
    myNav.classList.add("scrolled");
  } else {
    myNav.classList.remove("scrolled");
  }
};

const hamburger = document.querySelector(".hamburger");
const hamburgerMenu = document.querySelector(".mobile-menu");

hamburger.addEventListener("click", (e) => {
  let button = e.target.innerHTML;

  if (button === "☰") {
    e.target.innerHTML = "X";
  } else {
    e.target.innerHTML = "☰";
  }

  hamburgerMenu.classList.toggle("hidden");
});
