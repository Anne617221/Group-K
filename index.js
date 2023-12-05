var burgerMenu = document.getElementById("burger-menu");
var overlay = document.getElementById("header-nav-mobile");

burgerMenu.addEventListener("click", function () {
  this.classList.toggle("close");
  overlay.classList.toggle("overlay");
});

// One
var productOne = document.getElementById("home-product-one");
var productOneText = document.getElementById("home-product-one-text");

productOne.addEventListener("click", function () {
  productOneText.classList.toggle("overlay");
});
// TWO
var productTwo = document.getElementById("home-product-two");
var productTwoText = document.getElementById("home-product-two-text");

productTwo.addEventListener("click", function () {
  productTwoText.classList.toggle("overlay");
});

// THRE
var productThree = document.getElementById("home-product-three");
var productThreeText = document.getElementById("home-product-three-text");

productThree.addEventListener("click", function () {
  productThreeText.classList.toggle("overlay");
});

// FOUR
var productFour = document.getElementById("home-product-four");
var productFourText = document.getElementById("home-product-four-text");

productFour.addEventListener("click", function () {
  productFourText.classList.toggle("overlay");
});

//S


//product page
function myAlert() {
  console.log("HELLO");​
  alert("Hello! I am an alert box!");​
  }

