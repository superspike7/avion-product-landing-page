console.log("hello");
(function () {
  var queryString = window.location.search;
  var parameters = new URLSearchParams(queryString);
  var email = parameters.get("email");
  var price = parameters.get("price");

  var domEmail = document.querySelector("#email");
  var domPrice = document.querySelector("#price");

  domEmail.textContent = `Thank you ${email}!`;
  domPrice.textContent = `You purchased the [${price}] option!`;
})();
