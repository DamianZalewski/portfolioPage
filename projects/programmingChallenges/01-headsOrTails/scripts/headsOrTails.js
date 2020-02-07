let score = 0;
let actualCoin = 'none';
let isGameStarted = false;

let gameScoreInput = document.getElementById("gameScore");
let cardsRemainInput = document.getElementById("cardsRemain");
let cardImg = document.getElementById("actualCard");
let gameStatusInput = document.getElementById("gameStatus");


startNewGame = () => {
    score = 0;
    gameStatusInput.value = "Game started!";
    isGameStarted = true;
    chooseCoin();
    cardsRemainInput.value = actualCoin === 0 ? "head!" : "tail!";
    gameScoreInput.value = score;
}

chooseCoin = () => {
    actualCoin = Math.floor(Math.random() * 2);
    drawCoin();
}

drawCoin = () => {
    if(actualCoin == 0) cardImg.src = "../assets/headsOrTails/coin-head.png" 
    else cardImg.src = "../assets/headsOrTails/coin-tail.png" ;
}


handleArrowClick = (position) => {
    if(!isGameStarted) return 0;
    chooseCoin();
    if( position === "up" && actualCoin === 0 ||
        position === "down" && actualCoin === 1) {
        score += 100;
    } else score -= 100;
    gameScoreInput.value = score;
    cardsRemainInput.value = actualCoin === 0 ? "head!" : "tail!";
}