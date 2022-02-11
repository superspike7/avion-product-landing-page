(function () {
  var queryString = window.location.search;
  var parameters = new URLSearchParams(queryString);

  var email = parameters.get("email");
  var price = parameters.get("price");

  var domEmail = document.querySelector("#email");
  var domPrice = document.querySelector("#price");

  if (email && price) {
    domPrice.innerHTML = `Congratulations! You now have <strong>${price}</strong> access to Chrono Block.`;
    domEmail.innerHTML = `Check your email: <strong>${email}</strong> to start using the app now. Enjoy!`;
  }
})();
