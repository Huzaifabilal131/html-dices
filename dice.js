var number = [
	"./images/dice1.png",
	"./images/dice2.png",
	"./images/dice3.png",
	"./images/dice4.png",
	"./images/dice5.png",
	"./images/dice6.png",
];

var random1 = Math.floor(Math.random() * 6);

var randomImage = number[random1];

document.querySelectorAll(".img2")[0].setAttribute("src", randomImage);
var count = [
	"./images/dice1.png",
	"./images/dice2.png",
	"./images/dice3.png",
	"./images/dice4.png",
	"./images/dice5.png",
	"./images/dice6.png",
];

var random2 = Math.floor(Math.random() * 6);

var randomImage2 = count[random2];
document.querySelectorAll(".img2")[1].setAttribute("src", randomImage2);

if (random1 > random2) {
	h1Text = "Player 1 Wins 🎉";
} else if (random1 < random2) {
	h1Text = "Player 2 Wins 🎉";
} else {
	h1Text = "It's a Draw 🤝";
}
var h1Text = (document.querySelector("h1").innerHTML = h1Text);
