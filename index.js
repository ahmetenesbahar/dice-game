var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "images/dice" + randomNumber1 + ".png";
var image1 = document.querySelector(".img1");
image1.setAttribute("src", randomDiceImage);

var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";
var image2 = document.querySelector(".img2");
image2.setAttribute("src", randomDiceImage2);

if (randomNumber1 > randomNumber2) {
  document.querySelector(".container h1").innerHTML = "🚩 Player 1 Wins! 🚩";
}

if (randomNumber2 > randomNumber1) {
  document.querySelector(".container h1").innerHTML = "🚩 Player 2 Wins! 🚩";
}

if (randomNumber2 === randomNumber1) {
  document.querySelector(".container h1").innerHTML = "Draw!";
}
