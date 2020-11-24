var randomNumber1 = Math.floor(Math.random() * 6) + 1; // Random number between 1-6
var diceRandomNumber = "dice" + randomNumber1 + ".png"; // var displays dice#.png
var randomImageSource = "images/" + diceRandomNumber; //images/dice#.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var diceRandomNumber2 = "dice" + randomNumber2 + ".png";
var randomImageSource = "images/" + diceRandomNumber2;

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource);


if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins";
} else {
    document.querySelector("h1").innerHTML = "Tie";
}