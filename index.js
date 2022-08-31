var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "images/dice" + randomNumber1 + ".png";
var image1 = document.querySelector(".img1");
image1.setAttribute("src", randomDiceImage);
var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";
var image2 = document.querySelector(".img2");
image2.setAttribute("src", randomDiceImage2);
// // Dice 1
// if (randomNumber1 === 1) {
//   document.querySelector(".img1").setAttribute("src",images/dice1.png);
// }
// if (randomNumber1 === 2) {
//   document.querySelector(".img1").setAttribute("src",images/dice2.png);
// }
// if (randomNumber1 === 3) {
//   document.querySelector(".img1").setAttribute("src",images/dice3.png);
// }
// if (randomNumber1 === 4) {
//   document.querySelector(".img1").setAttribute("src",images/dice4.png);
// }
// if (randomNumber1 === 5) {
//   document.querySelector(".img1").setAttribute("src",images/dice5.png);
// }
// if (randomNumber1 === 6) {
//   document.querySelector(".img1").setAttribute("src",images/dice6.png);
// }

// // Dice 2
// if (randomNumber2 === 1) {
//   document.querySelector(".img2").setAttribute("src",images/dice1.png);
// }
// if (randomNumber2 === 2) {
//   document.querySelector(".img2").setAttribute("src",images/dice2.png);
// }
// if (randomNumber2 === 3) {
//   document.querySelector(".img2").setAttribute("src",images/dice3.png);
// }
// if (randomNumber2 === 4) {
//   document.querySelector(".img2").setAttribute("src",images/dice4.png);
// }
// if (randomNumber2 === 5) {
//   document.querySelector(".img2").setAttribute("src",images/dice5.png);
// }
// if (randomNumber2 === 6) {
//   document.querySelector(".img2").setAttribute("src",images/dice6.png);
// }

// Win or Lose

if (randomNumber1 > randomNumber2) {
  document.querySelector(".container h1").innerHTML = "🚩 Player 1 Wins! 🚩";
}

if (randomNumber2 > randomNumber1) {
  document.querySelector(".container h1").innerHTML = "🚩 Player 2 Wins! 🚩";
}

if (randomNumber2 === randomNumber1) {
  document.querySelector(".container h1").innerHTML = "Draw!";
}
