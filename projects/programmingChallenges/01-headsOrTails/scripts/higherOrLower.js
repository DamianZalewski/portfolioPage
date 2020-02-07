let score = 0;
let originalCards = ['2C','2D','2H','2S',
                     '3C','3D','3H','3S',
                     '4C','4D','4H','4S',
                     '5C','5D','5H','5S',
                     '6C','6D','6H','6S',
                     '7C','7D','7H','7S',
                     '8C','8D','8H','8S',
                     '9C','9D','9H','9S',
                     '10C','10D','10H','10S',
                     'JC','JD','JH','JS',
                     'QC','QD','QH','QS',
                     'KC','KD','KH','KS',
                     'AC','AD','AH','AS'];
let cards = [];
originalCards.forEach((e)=>{cards.push(e)});
let maxCards = cards.length;
let remainCards = maxCards;
let actualCard = "";
let isGameStarted = false;

let gameScoreInput = document.getElementById("gameScore");
let cardsRemainInput = document.getElementById("cardsRemain");
let cardImg = document.getElementById("actualCard");
let gameStatusInput = document.getElementById("gameStatus");

startNewGame = () => {
    if(isGameStarted) resetCards();
    score = 0;
    isGameStarted = true;
    chooseCard();
    drawCard();
    drawRemainCards();
    drawGameStarted();
    drawScore();
}

handleArrowClick = (position) => {
    if(!isGameStarted) return 0;
    let previousCard = actualCard;
    chooseCard();
    previousValue = checkValue(previousCard);
    actualValue = checkValue(actualCard);
    
    if(position === "up") {
        if(actualValue >= previousValue) score += 100; else score -= 100;
    } else if(position === "down"){
        if(actualValue < previousValue) score += 100; else score -= 100;
    }
    
    drawCard();
    drawRemainCards();
    drawScore();
    
    if(remainCards === 0) {
        isGameStarted = false;
        resetCards();
        drawGameOver();
    }
}

chooseCard = () => {
    let randomCard = Math.floor(Math.random() * cards.length);
    actualCard = cards[randomCard] + ".jpg";
    cards.splice(randomCard-1,1);
    remainCards = cards.length;
}

resetCards = () => {
    cards = [];
    originalCards.forEach((e)=>{cards.push(e)});
    remainCards = maxCards;
}

drawGameStarted = () => { gameStatusInput.value = "Game started!"; }

drawGameOver = () => { gameStatusInput.value = "Game over!"; }

drawCard = () => { cardImg.src = "../assets/higherOrLower/"+actualCard; }

drawRemainCards = () => { cardsRemainInput.value = remainCards; }

drawScore = () => { gameScoreInput.value = score; }

checkValue = (card) => {
    let cardValue = 0;
    switch(card[0]) {
        case '2':
            cardValue = 2;
            break;
        case '3':
            cardValue = 3;
            break;
        case '4':
            cardValue = 4;
            break;
        case '5':
            cardValue = 5;
            break;
        case '6':
            cardValue = 6;
            break;
        case '7':
            cardValue = 7;
            break;
        case '8':
            cardValue = 8;
            break;
        case '9':
            cardValue = 9;
            break;
        case '2':
            cardValue = 2;
            break;
        case '1':
            cardValue = 10;
            break;
        case 'J':
            cardValue = 11;
            break;
        case 'Q':
            cardValue = 12;
            break;
        case 'K':
            cardValue = 13;
            break;
        case 'A':
            cardValue = 14;
            break;
    }
    return cardValue;
}