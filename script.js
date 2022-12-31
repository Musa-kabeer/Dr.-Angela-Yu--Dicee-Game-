"use strict";
const winner = document.querySelector("h1");
const firstImage = document.querySelector(".img1");
const secondImage = document.querySelector(".img2");
const randomNumber1 = Math.floor(Math.random() * 6 + 1);
const randomNumber2 = Math.floor(Math.random() * 6 + 1);

firstImage.setAttribute("src", "images/dice" + randomNumber1 + ".png");

secondImage.setAttribute("src", "images/dice" + randomNumber2 + ".png");

if (randomNumber1 > randomNumber2) {
  winner.textContent = "🚩 player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  winner.textContent = "player 2 Wins! 🚩";
} else {
  winner.textContent = "Draw!";
}
