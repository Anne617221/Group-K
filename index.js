var burgerMenu = document.getElementById("burger-menu");
var overlay = document.getElementById("header-nav-mobile");

burgerMenu.addEventListener("click", function () {
  this.classList.toggle("close");
  overlay.classList.toggle("overlay");
});

// One
var productOne = document.getElementById("product-one");
var productOneText = document.getElementById("product-one-text");

productOne.addEventListener("click", function () {
  productOneText.classList.toggle("overlay");
});
// TWO
var productTwo = document.getElementById("product-two");
var productTwoText = document.getElementById("product-two-text");

productTwo.addEventListener("click", function () {
  productTwoText.classList.toggle("overlay");
});

// THRE
var productThree = document.getElementById("product-three");
var productThreeText = document.getElementById("product-three-text");

productThree.addEventListener("click", function () {
  productThreeText.classList.toggle("overlay");
});

// FOUR
var productFour = document.getElementById("product-four");
var productFourText = document.getElementById("product-four-text");

productFour.addEventListener("click", function () {
  productFourText.classList.toggle("overlay");
});
