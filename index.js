// // One
document.addEventListener("DOMContentLoaded", function () {
  var productOne = document.getElementById("home-product-one");
  var productOneText = document.getElementById("home-product-one-text");

  productOne.addEventListener("click", function () {
    productOneText.classList.toggle("overlay");
  });
});
// TWO
document.addEventListener("DOMContentLoaded", function () {
  var productTwo = document.getElementById("home-product-two");
  var productTwoText = document.getElementById("home-product-two-text");

  productTwo.addEventListener("click", function () {
    productTwoText.classList.toggle("overlay");
  });
});

// THRE
document.addEventListener("DOMContentLoaded", function () {
  var productThree = document.getElementById("home-product-three");
  var productThreeText = document.getElementById("home-product-three-text");

  productThree.addEventListener("click", function () {
    productThreeText.classList.toggle("overlay");
  });
});

// FOUR
document.addEventListener("DOMContentLoaded", function () {
  var productFour = document.getElementById("home-product-four");
  var productFourText = document.getElementById("home-product-four-text");

  productFour.addEventListener("click", function () {
    productFourText.classList.toggle("overlay");
  });
});

//form
function validate(e) {
  var fields = document.querySelectorAll(
    '.contact-form-container textarea, .contact-form-container input[type="text"]'
  );
  var regEx;
  var removeSpan;
  var par;
  var check = false;
  var val;
  var errArr = [];

  for (var i = 0; i < fields.length; i++) {
    if (fields[i].value === "") {
      if (fields[i].nextElementSibling.classList.contains("error")) {
        removeSpan = fields[i].nextElementSibling;
        par = fields[i].parentNode;
        par.removeChild(removeSpan);
        fields[i].nextElementSibling.innerHTML =
          fields[i].placeholder + " is required?";
        fields[i].style.boxShadow = "0 0 2px 1px #cc0001";
        check = false;
        errArr.push(fields[i]);
      }
      fields[i].nextElementSibling.innerHTML =
        fields[i].placeholder + " is required?";
      fields[i].style.boxShadow = "0 0 2px 1px #cc0001";
      check = false;
      errArr.push(fields[i]);
    } else {
      // check if message and name values contain valid characters.
      if (fields[i].id !== "email" && fields[i].id !== "phone") {
        val = isValidChar(fields[i]);
        if (val === false) {
          fields[i].nextElementSibling.innerHTML = "Are you trying to HACK ME!";
          fields[i].style.boxShadow = "0 0 2px 1px #cc0001";
          check = false;
          errArr.push(fields[i]);
        } else {
          fields[i].nextElementSibling.innerHTML = "";
          fields[i].style.boxShadow = "none";
          check = true;
        }
      }

      if (fields[i].id === "phone") {
        val = isValidPhone(fields[i]);
        if (val === false) {
          fields[i].nextElementSibling.innerHTML =
            "Your phone number is not valid?";
          fields[i].style.boxShadow = "0 0 2px 1px #cc0001";
          check = false;
          errArr.push(fields[i]);
        } else {
          fields[i].nextElementSibling.innerHTML = "";
          fields[i].style.boxShadow = "none";
          check = true;
        }
      }

      if (fields[i].id === "email") {
        val = isValidEmail(fields[i]);
        if (val === false) {
          fields[i].nextElementSibling.innerHTML =
            "Your email address is not valid?";
          fields[i].style.boxShadow = "0 0 2px 1px #cc0001";
          check = false;
          errArr.push(fields[i]);
        } else {
          fields[i].nextElementSibling.innerHTML = "";
          fields[i].style.boxShadow = "none";
          check = true;
        }
      }
      console.log("Lekkss");
    }
  }

  if (check === false) {
    var count = 0;
    var toErr = setInterval(function () {
      var e = errArr[0].offsetTop + -25;
      var pos = Math.abs(e);
      if (count < pos) {
        count++;
        window.scrollTo(0, count);
      } else {
        clearInterval(toErr);
      }
    }, 1);
  }

  return check;

  // Helper functions.
  function isValidEmail(e) {
    regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var email = e.value;
    if (!regEx.test(email)) {
      return false;
    }
  }

  function isValidChar(e) {
    regEx = /^[a-zA-Z@#$%!?^&*()_+\-=\[\]{};':"\\|,.\/? ]*$/;
    var value = e.value;
    if (!regEx.test(value)) {
      return false;
    }
  }

  function isValidPhone(e) {
    regEx = /^[+]?[(]?[+]?\d{2,4}[)]?[-\s]?\d{2,8}[-\s]?\d{2,8}$/;
    var value = e.value;
    if (!regEx.test(value)) {
      return false;
    }
  }
}
//product page
function addToCart() {
  alert("OUT OF STOCK");
}

//PRODUCt DETAILS
function onIncrease(params) {
  alert("OUT OF STOCK")
  
}

//cart page
// window.onload = function () {
//   showReminder();
// };
// function showReminder() {
//   var confirmation = confirm(
//     "Welcome to Cart page!Your cart is empty! Ready to get started?"
//   );

//   if (confirmation) {
//   } else {
//   }
// }

// FOQ
var faq = document.getElementsByClassName("FAQ-page");
var i;

for (i = 0; i < faq.length; i++) {
  faq[i].addEventListener("click", function () {
    console.log("HERE");
    /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
    this.classList.toggle("FAQ-active");

    /* Toggle between hiding and showing the active panel */
    var body = this.nextElementSibling;
    if (!body.style.display || body.style.display === "none") {
      body.style.display = "block";
    } else {
      body.style.display = "none";
    }
  });
}

//--- GAME ---//
let countSpan = document.querySelector(".game-count span");
let flagImgDiv = document.querySelector(".game-flag-img");
let flagImg = document.querySelector(".game-flag-img img");
let flagOptions = document.querySelector(".game-flag-options ul");
let flagLis = document.querySelectorAll(".game-flag-options ul li");
let score = document.querySelector("h3 span");
let scoreDiv = document.querySelector(".game-score");
let correctAns = document.querySelector(".game-score .game-right span");
let incorrectAns = document.querySelector(".game-score .game-incorrect span");
let btnNewGame = document.querySelector("#game-newGame");

let currentIndex = 0;
let rightAnswer = 0;
const countries = [
  {
    img: "argentina.png",
    options: ["guatemala", "argentina", "uruguay"],
    right_answer: "argentina",
  },
  {
    img: "brazil.png",
    options: ["bolivia", "chile", "brazil"],
    right_answer: "brazil",
  },
  {
    img: "canada.png",
    options: ["canada", "egypt", "tunisia"],
    right_answer: "canada",
  },
  {
    img: "egypt.png",
    options: ["syria", "egypt", "iraq"],
    right_answer: "egypt",
  },
  {
    img: "germany.png",
    options: ["belgium", "ireland", "germany"],
    right_answer: "germany",
  },
  {
    img: "iraq.png",
    options: ["iraq", "syria", "yemen"],
    right_answer: "iraq",
  },
  {
    img: "lebanon.png",
    options: ["canada", "lebanon", "morocco"],
    right_answer: "lebanon",
  },
  {
    img: "mexico.png",
    options: ["italy", "iran", "mexico"],
    right_answer: "mexico",
  },
  {
    img: "somalia.png",
    options: ["vietnam", "somalia", "albania"],
    right_answer: "somalia",
  },
  {
    img: "uzbekistan.png",
    options: ["uzbekistan", "tajikistan", "kyrgyzstan"],
    right_answer: "uzbekistan",
  },
  {
    img: "india.png",
    options: ["niger", "india", "hungary"],
    right_answer: "india",
  },
  {
    img: "sudan.png",
    options: ["palestine", "united arab emirates", "sudan"],
    right_answer: "sudan",
  },
  {
    img: "saudi-arabia.png",
    options: ["palestine", "saudi arabia", "kuwait"],
    right_answer: "saudi arabia",
  },
  {
    img: "hongkong.png",
    options: ["hong kong", "Haiti", "Timor-Leste"],
    right_answer: "hong kong",
  },
  {
    img: "laos.png",
    options: ["Togo", "Haiti", "laos"],
    right_answer: "laos",
  },
  {
    img: "nicaragua.png",
    options: ["nicaragua", "Vanuatu", "Turkmenistan"],
    right_answer: "nicaragua",
  },
  {
    img: "maldives.png",
    options: ["Zambia", "maldives", "Turkmenistan"],
    right_answer: "maldives",
  },
  {
    img: "nauru.png",
    options: ["Zambia", "Vanuatu", "nauru"],
    right_answer: "nauru",
  },
  {
    img: "monaco.png",
    options: ["monaco", "maldives", "Zimbabwe"],
    right_answer: "monaco",
  },
  {
    img: "luxembourg.png",
    options: ["russia", "luxembourg", "netherlands"],
    right_answer: "luxembourg",
  },
  {
    img: "qatar.png",
    options: ["bahrain", "qatar", "lebanon"],
    right_answer: "qatar",
  },
  {
    img: "libya.png",
    options: ["pakistan", "Madagascar", "libya"],
    right_answer: "libya",
  },
  {
    img: "sweden.png",
    options: ["sweden", "denmark", "norway"],
    right_answer: "sweden",
  },
  {
    img: "chad.png",
    options: ["romania", "mali", "chad"],
    right_answer: "chad",
  },
  {
    img: "mali.png",
    options: ["guinea", "mali", "senegal"],
    right_answer: "mali",
  },
  {
    img: "bolivia.png",
    options: ["bolivia", "lithuania", "Benin"],
    right_answer: "bolivia",
  },
  {
    img: "nepal.png",
    options: ["Madagascar", "nepal", "Benin"],
    right_answer: "nepal",
  },
  {
    img: "turkey.png",
    options: ["pakistan", "tunisia", "turkey"],
    right_answer: "turkey",
  },
  {
    img: "thailand.png",
    options: ["thailand", "russia", "luxembourg"],
    right_answer: "thailand",
  },
  {
    img: "zimbabwe.png",
    options: ["ethiopia", "zimbabwe", "mozambique"],
    right_answer: "zimbabwe",
  },
  {
    img: "tajikistan.png",
    options: ["tajikistan", "iran", "hungary"],
    right_answer: "tajikistan",
  },
  {
    img: "mongolia.png",
    options: ["liechtenstein", "kenya", "mongolia"],
    right_answer: "mongolia",
  },
  {
    img: "moldova.png",
    options: ["moldova", "chad", "andorra"],
    right_answer: "moldova",
  },
  {
    img: "uruguay.png",
    options: ["peru", "uruguay", "paraguay"],
    right_answer: "uruguay",
  },
  {
    img: "sierra-leone.png",
    options: ["sierra leone", "rwanda", "uzbekistan"],
    right_answer: "sierra leone",
  },
  {
    img: "colombia.png",
    options: ["ecuador", "venezuela", "colombia"],
    right_answer: "colombia",
  },
  {
    img: "sri-lanka.png",
    options: ["tajikistan", "pakistan", "sri lanka"],
    right_answer: "sri lanka",
  },
  {
    img: "kyrgyzstan.png",
    options: ["kyrgyzstan", "tajikistan", "kazakhstan"],
    right_answer: "kyrgyzstan",
  },
  {
    img: "georgia.png",
    options: ["england", "indonesia", "georgia"],
    right_answer: "georgia",
  },
  {
    img: "tanzania.png",
    options: ["zimbabwe", "tanzania", "mozambique"],
    right_answer: "tanzania",
  },
  {
    img: "china.png",
    options: ["vietnam", "taiwan", "china"],
    right_answer: "china",
  },
  {
    img: "nigeria.png",
    options: ["cameroon", "nigeria", "ghana"],
    right_answer: "nigeria",
  },
  {
    img: "cameroon.png",
    options: ["cameroon", "ghana", "guinea"],
    right_answer: "cameroon",
  },
  {
    img: "niger.png",
    options: ["india", "hungary", "niger"],
    right_answer: "niger",
  },
  {
    img: "south-sudan.png",
    options: ["south sudan", "south africa", "kenya"],
    right_answer: "south sudan",
  },
  {
    img: "chile.png",
    options: ["puerto rico", "chile", "cuba"],
    right_answer: "chile",
  },
  {
    img: "netherlands.png",
    options: ["luxembourg", "netherlands", "russia"],
    right_answer: "netherlands",
  },
  {
    img: "ecuador.png",
    options: ["venezuela", "colombia", "ecuador"],
    right_answer: "ecuador",
  },
  {
    img: "rwanda.png",
    options: ["rwanda", "guinea", "cameroon"],
    right_answer: "rwanda",
  },
  {
    img: "cambodia.png",
    options: ["chad", "nepal", "cambodia"],
    right_answer: "cambodia",
  },
  {
    img: "burundi.png",
    options: ["burundi", "libya", "south africa"],
    right_answer: "burundi",
  },
  {
    img: "eritrea.png",
    options: ["eritrea", "ethiopia", "kenya"],
    right_answer: "eritrea",
  },
  {
    img: "turkmenistan.png",
    options: ["tajikistan", "turkmenistan", "uzbekistan"],
    right_answer: "turkmenistan",
  },
  {
    img: "latvia.png",
    options: ["austria", "bolivia", "latvia"],
    right_answer: "latvia",
  },
  {
    img: "jordan.png",
    options: ["jordan", "palestine", "sudan"],
    right_answer: "jordan",
  },
  {
    img: "austria.png",
    options: ["lithuania", "latvia", "austria"],
    right_answer: "austria",
  },
  {
    img: "serbia.png",
    options: ["slovakia", "serbia", "slovenia"],
    right_answer: "serbia",
  },
  {
    img: "zambia.png",
    options: ["zambia", "zimbabwe", "jamaica"],
    right_answer: "zambia",
  },
  {
    img: "malawi.png",
    options: ["malawi", "mali", "moldova"],
    right_answer: "malawi",
  },
  {
    img: "swaziland.png",
    options: ["slovenia", "malawi", "swaziland"],
    right_answer: "swaziland",
  },
];

function getQuestions() {
  console.log("HOW");

  let questions = countries;
  console.log(questions);
  //Number Of Question Each New Game
  let qCount = 10;
  questionNum(qCount);
  //Random Question Each New Game
  questions = questions.sort(() => Math.random() - Math.random()).slice(0, 10);

  //Add Questions Data
  addQuestionData(questions[currentIndex], qCount);

  flagLis.forEach((li) => {
    li.addEventListener("click", () => {
      let rightAnswer = questions[currentIndex].right_answer;
      li.classList.add("active");
      //Increase Index
      currentIndex++;

      //Check The Answer after 500ms
      setTimeout(() => {
        checkAnswer(rightAnswer, qCount);
      }, 500);

      setTimeout(() => {
        //Remove Previous Image Source
        flagImg.src = "";
        //Remove All Classes (active,success,wrong)
        li.classList.remove("active");
        li.classList.remove("success");
        li.classList.remove("wrong");

        //Add Questions Data To Show The Next Question
        addQuestionData(questions[currentIndex], qCount);
      }, 1000);

      //Show Results
      setTimeout(() => {
        showResults(qCount);
      }, 1002);
    });
  });
}

getQuestions();

function questionNum(num) {
  countSpan.innerHTML = num;
}

function addQuestionData(obj, count) {
  if (currentIndex < count) {
    flagImg.src = `../images/countries/${obj.img}`;
    //Create Options
    flagLis.forEach((li, i) => {
      //Give each Li a dynamic Id
      li.id = `answer_${i + 1}`;
      //Create for Each Li a dynamic data-attribut
      li.dataset.answer = obj[`options`][i];
      //Insert the Option in the li
      li.innerHTML = obj[`options`][i];
    });
  }
}

function checkAnswer(rAnswer, count) {
  let choosenAnswer;
  for (let i = 0; i < flagLis.length; i++) {
    if (flagLis[i].classList.contains("active")) {
      choosenAnswer = flagLis[i].dataset.answer;
      if (rAnswer === choosenAnswer) {
        flagLis[i].classList.add("success");
        rightAnswer++;
        score.innerHTML = rightAnswer;
      } else {
        flagLis[i].classList.add("wrong");
      }
    }
  }
}

//Function To Show result correct and wrong answer
function showResults(count) {
  if (currentIndex === count) {
    flagOptions.innerHTML = "";
    flagImgDiv.innerHTML = "";
    scoreDiv.style.display = "block";
    correctAns.innerHTML = rightAnswer;
    incorrectAns.innerHTML = count - rightAnswer;
  }
}

//To Generate A New Game
btnNewGame.addEventListener("click", () => {
  window.location.reload();
});
