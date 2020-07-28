//console.log("Up and running!");

let cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}

];
let cardsInPlay = [];
let resetButton = document.getElementById('reset');
let score = 0;


//console.log(score)

function createBoard () {
	for (let i = 0; i < cards.length; i++) {
		let cardElement = document.createElement('img');
		cardElement.setAttribute('src','images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
};

function checkForMatch () {
	
	if(cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
		updateScore();
		resetBoard ();
	}
	else {
		alert("Sorry, try again.");
		resetBoard ();
	}
};


function resetBoard () {
	for (let i = 0; i < cards.length; i++) {
		let cardElement = document.querySelector('img');
		cardElement.remove();
		console.log('removeboard'+i);
	};
	cardsInPlay = [];
	createBoard();

};
function flipCard () {
	let cardId = this.getAttribute('data-id');
	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].suit);
	console.log(cards[cardId].cardImage);
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute('src', cards[cardId].cardImage);

	if (cardsInPlay.length === 2){
		checkForMatch ();
	}
};


function updateScore () {
	if(score<2) {
		let scoreIn = score;
		let scoreString = '' + (scoreIn+1);
		console.log(scoreString);
		document.getElementById('current-score').textContent = scoreString;
		return score++;
	}
	console.log(score);
	if(score===2) {
		resetBoard ();
		score=0;
		scoreString = '' + score;
		document.getElementById('current-score').textContent = scoreString;
	}
}


resetButton.addEventListener('click', resetBoard);

createBoard();
