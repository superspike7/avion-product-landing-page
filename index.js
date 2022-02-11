const myNav = document.querySelector(".header");
window.onscroll = function () {
  if (window.scrollY >= 100) {
    myNav.classList.add("scrolled");
  } else {
    myNav.classList.remove("scrolled");
  }
};
