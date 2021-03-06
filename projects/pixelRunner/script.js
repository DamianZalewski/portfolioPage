var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
canvas.width = screen.width;
canvas.height = screen.height;
var cw = canvas.width;
var ch = canvas.height;
// variables
var level = 0;
// player
var playerImage1 = new Image();
playerImage1.src = "img/character1.png";
var playerImage2 = new Image();
playerImage2.src = "img/character2.png";
var playerImage3 = new Image();
playerImage3.src = "img/character3.png";
var barrierImage = new Image();
barrierImage.src = "img/barrier.png";
var playerX = 200;
var playerY = ch - 200;
var playerStartY = playerY;
var playerWidth = 55;
var playerHeight = 55;
//player lifes variables
var playerLifes = 3;
var playerLifesImage = new Image();
playerLifesImage.src = "img/playerLife.png"
var playerLifeX = 30;
var playerLifeY = 30;
var playerLifeWidth = 50;
var playerLifeHeight = 50;
var playerLifeSpace = 20 + playerLifeWidth;
var mortal = true;
//----------------
var playerAnimationTimer = 0;
//----------------
var jump = false;
var jumpHigh = 100;
var jumpCounter = 0;
var jumpSpeed = 10;
var jumpFall = false;
//----------------
var playerAnimationStage = 1;
var floorY = playerY + playerHeight;
//------------
/*
var holesCounter = 0;
var holesArray = [];
var holeWidth = 50;
*/
//-----------------
var birdsCounter = 0;
var birdXArray = [];
var birdYArray = [];
var birdWidth = 40;
var birdHeight = 40;
var birdImage1 = new Image();
birdImage1.src = "img/bird1.png";
var birdImage2 = new Image();
birdImage2.src = "img/bird2.png";
var birdAnimationTimer = 0;
var birdAnimationStage = 0;
var swingCounter = 0;
var swingBool = false;
//-----------------
//-----------------
var stoneCounter = 0;
var stoneXArray = [];
var stoneWidth = 40;
var stoneHeight = 40;
var stoneImage = new Image();
stoneImage.src = "img/stone.png";
var stoneY = floorY - stoneHeight;
//-----------------
//enemy ninja
var ninjaCounter = 0;
var ninjaXArray = [];
var ninjaAnimationTimer = 0;
var ninjaAnimationStage = 0;
var ninjaWidth = 60;
var ninjaHeight = 80;
var ninjaImage1 = new Image();
ninjaImage1.src = "img/ninja1.png";
var ninjaImage2 = new Image();
ninjaImage2.src = "img/ninja2.png";
var ninjaImage3 = new Image();
ninjaImage3.src = "img/ninja3.png";
var ninjaY = floorY - ninjaHeight;
//----------------
var shotsXArray = [];
var shotsYArray = [];
var shotWidth = 30;
var shotHeight = 30;
var shotY = playerY + playerHeight / 2;
var shotCounter = 0;
var shotAmmo = 5;
var shotAmmoReload = 3000;
var bulletImage = new Image();
bulletImage.src = "img/bullet.png";
var bulletImage2 = new Image();
bulletImage2.src = "img/bullet2.png";
var bulletImage3 = new Image();
bulletImage3.src = "img/bullet3.png";
var bulletWidth = 50;
var bulletHeight = 50;
var bulletX = cw - 100;
var bulletY = 20;
var bulletAnimationStage = 0;
var bulletAnimationTimer = 0;
//----------------
var score = 0;
var scoreIncreaseTime = 1000;
//----------------
var gameStage = 0;
//----------------


var changeStateAnimationCount = cw*1.5;
var changeStateAnimationImage = new Image();
changeStateAnimationImage.src = "img/changeAnimation.png";
var stateI;
//----------------------------
var topListBackgroundImage = new Image();
topListBackgroundImage.src = "img/stopMenuBackground.png";
var topListWidth = 400;
var topListHeight = 600;
//---------------------------------
var pickNameBool = true;
var playerName = new Array(5);
playerName = ['-','-','-','-','-'];
var playerIndex = 0;
//---------------------------------
var allowJump = false;
var allowShot = false;
var checkTopListBool = true;
var pickColor = 'red';
// 0 - main menu, 1 - game, 2 - game stop menu, 3 - game over menu   4- instruction screen

// background
var backgroundImage = new Image();
backgroundImage.src = "img/background.png";
var backgroundImage2 = new Image();
backgroundImage2.src = "img/gameBackground2.png";
var backgroundImage3 = new Image();
backgroundImage3.src = "img/gameBackground3.png";
var backgroundX = 0;
var backgroundY = 0;
var backgroundWidth = cw;
var backgroundHeight = ch;

// mainMenuBackground
var mainMenubackgroundImage = new Image();
mainMenubackgroundImage.src = "img/mainMenuBackground.png";
var mainMenubackgroundImage2 = new Image();
mainMenubackgroundImage2.src = "img/mainMenuBackground2.png";
var mainMenuNewGameImage = new Image();
mainMenuNewGameImage.src = "img/mainMenuNewGame.png";
var mainMenuTopImage = new Image();
mainMenuTopImage.src = "img/mainMenuTop.png";

//---------------
var mainMenubuttonWith = 400;
var mainMenubuttonHeight = 100;
var mainMenubuttonX = cw / 2 - mainMenubuttonWith / 2;
var mainMenubuttonY = ch / 2 - mainMenubuttonHeight * 2 + 50;
//-----------------
var stopMenuBackgroundWidth = 500;
var stopMenuBackgroundHeight = 300;
var stopMenuBackgroundImage = new Image();
stopMenuBackgroundImage.src = "img/stopMenuBackground.png";
var stopMenuBackImage = new Image();
stopMenuBackImage.src = "img/gameOverButton.png";
var stopMenuExitImage = new Image();
stopMenuExitImage.src = "img/stopMenuExitButton.png";
var stopMenuX = cw / 2 - stopMenuBackgroundWidth / 2;
var stopMenuY = 100;
var stopMenuButtonWidth = 300;
var stopMenuButtonHeight = 50;
var stopMenuButtonX = stopMenuX + (stopMenuBackgroundWidth / 2) - (stopMenuButtonWidth / 2);
var stopMenuButtonY = stopMenuY + stopMenuBackgroundHeight - 100;
var stopButtonSpace = 100;
var stopMenuAnimationY = -stopMenuBackgroundHeight;
//----------------------------
var gameOverMenuButtonWidth = 350;
var gameOverMenuButtonHeight = 70;
var gameOverMenuButtonX = cw / 2 - gameOverMenuButtonWidth / 2;
var gameOverMenuButtonY = ch / 2+80;
var gameOverImage = new Image();
gameOverImage.src = "img/gameOverButton.png";
var ripImage = new Image();
ripImage.src = "img/rip.png";
var ripWidth = 180;
var ripHeight = 180;
var ripX = cw/2-ripWidth/2;
var ripY = ch/2 - ripHeight/2-60;
//----------------------------
var hitSound = new sound("sounds/sound.mp3");
var introSound = new sound("sounds/intro.mp3");
var gameSound = new sound("sounds/game.wav");
var gameOverSound = new sound("sounds/gameOver.mp3");
    introSound.sound.setAttribute("loop", "loop");
    gameSound.sound.setAttribute("loop", "loop");
    gameOverSound.sound.setAttribute("loop", "loop");   

var rewardImage = new Image();
rewardImage.src = "img/reward.png";
var rewardWidth = 180;
var rewardHeight = 180;
var rewardX = 250;
var rewardY = ch/2 - rewardHeight/2-60;

function drawBackground() {
    ctx.drawImage(backgroundImage, backgroundX, backgroundY, backgroundWidth, backgroundHeight);
    ctx.drawImage(backgroundImage2, backgroundX + backgroundWidth, backgroundY, backgroundWidth, backgroundHeight);
    ctx.drawImage(backgroundImage3, backgroundX + 2 * backgroundWidth, backgroundY, backgroundWidth, backgroundHeight);
    ctx.drawImage(backgroundImage, backgroundX + 3 * backgroundWidth, backgroundY, backgroundWidth, backgroundHeight);
    if (backgroundX < -3 * backgroundWidth) backgroundX = 0;
}

function drawFloor() {
    ctx.fillStyle = "green";
    ctx.fillRect(0, floorY, cw, ch - floorY);
}

function drawStopMenu() {
    if (stopMenuAnimationY < stopMenuY) {
        stopMenuAnimationY += 50;
        drawLogic();
        stopMenuButtonY = stopMenuAnimationY + stopMenuBackgroundHeight - 100;
    }
    ctx.drawImage(stopMenuBackgroundImage, stopMenuX, stopMenuAnimationY, stopMenuBackgroundWidth, stopMenuBackgroundHeight);
    ctx.drawImage(stopMenuExitImage, stopMenuButtonX, stopMenuButtonY, stopMenuButtonWidth, stopMenuButtonHeight);
    ctx.drawImage(stopMenuBackImage, stopMenuButtonX, stopMenuButtonY - stopButtonSpace, stopMenuButtonWidth, stopMenuButtonHeight);
}

//----------------------------
function mainMenu() {
    stopIntervals();
    introSound.play();
    drawMainMenu();
    checkTopListBool = true;
    canvas.addEventListener("click", mainMenuListener, false);
}

function drawMainMenu() {
    if (Math.floor((Math.random() * 100) + 1) % 22 == 0)
        ctx.drawImage(mainMenubackgroundImage2, 0, 0, cw, ch);
    else
        ctx.drawImage(mainMenubackgroundImage, 0, 0, cw, ch);

    ctx.drawImage(mainMenuNewGameImage, mainMenubuttonX, mainMenubuttonY, mainMenubuttonWith, mainMenubuttonHeight);
    ctx.drawImage(mainMenuTopImage, mainMenubuttonX, mainMenubuttonY + mainMenubuttonHeight * 2, mainMenubuttonWith, mainMenubuttonHeight);
    ctx.drawImage(mainMenuTopImage, mainMenubuttonX, mainMenubuttonY + mainMenubuttonHeight * 2, mainMenubuttonWith, mainMenubuttonHeight);
}


// initial game logic 
setInterval(game, 1000 / 60);

var bulletInterval;
var scoreInterval;
var levelInterval;

function changeGameState(i){
    stateI = i;
    gameStage = 5;
    if(changeStateAnimationCount<-cw*2){
           gameStage = stateI; 
         changeStateAnimationCount = cw*1.5;

    }else{ 
    if(changeStateAnimationCount <= -0.5*cw)
    switch (stateI) {
        case 0:
            drawMainMenu();
            break;
        case 1:
            setTimeout(function(){allowJump = true;allowShot = true},500);
            drawBackground();
            drawPlayer();
            drawlifes();
            drawAmmo();
            drawScore();
            break;
        case 3:
            gameOverMenu();
            break;
        case 4:
            instructionScreen();
            break;

    }  
    ctx.drawImage(changeStateAnimationImage, changeStateAnimationCount, 0, cw*1.5, ch);
    changeStateAnimationCount -=100;
  
       
    }

}

function game() {
    switch (gameStage) {
        case 0:
            mainMenu();
            break;
        case 1:
            gameLogic();
            break;
        case 2:
            stopMenu();
            break;
        case 3:
            gameOverMenu();
            break;
        case 4:
            instructionScreen();
            break;
        case 5:
            changeGameState(stateI);
            break;
        case 6:
            topList();
            break;
        case 7:
            drawPickName();
    }

}
//-------------------------


function instructionHandler() {
    document.removeEventListener("keyup", instructionHandler);
    changeGameState(1);
}


function gameOverMenu() {
    gameSound.stop();
    gameOverSound.play();
    stopIntervals();
    document.addEventListener("click", gameOverMenuHandler);
    canvas.removeEventListener("click", shot);
    document.removeEventListener("keydown", keyHandler);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, cw, ch);
    ctx.font = "50px arial";
    ctx.textAlign = "center";
    ctx.fillStyle = "red";
    ctx.fillText("GAME OVER", cw / 2, ch / 2 - 220);
    ctx.fillStyle = "white";
    ctx.fillText("Score: " + score, cw / 2, ch / 2 - 170);
    ctx.drawImage(ripImage,ripX, ripY, ripWidth, ripHeight);
    ctx.drawImage(gameOverImage,gameOverMenuButtonX, gameOverMenuButtonY, gameOverMenuButtonWidth, gameOverMenuButtonHeight);
    if (checkTopListBool) checkTopList(score);
}

function gameOverMenuHandler(ev) {

    if (ev.clientY >= gameOverMenuButtonY &&
        ev.clientY <= gameOverMenuButtonY + gameOverMenuButtonHeight &&
        ev.clientX >= gameOverMenuButtonX &&
        ev.clientX <= gameOverMenuButtonX + gameOverMenuButtonWidth
    ) {
        changeGameState(0);
        document.removeEventListener("click", gameOverMenuHandler);
        gameOverSound.stop();
        fullReset();
    }
}

function gameLevel() {
    level++;
}


//--------------------------
function fullReset() {
    playerY = ch - 200;
    //player lifes variables
    playerLifes = 3;
    mortal = true;
    backgroundX = 0;
    backgroundY = 0;
    //---------------
    playerAnimationTimer = 0;
    //---------------
    jump = false;
    jumpHigh = 100;
    jumpCounter = 0;
    jumpSpeed = 10;
    jumpFall = false;
    //--------------
    playerAnimationStage = 1;
    floorY = playerY + playerHeight;
    //-----------
    /*
 holesCounter = 0;
 holesArray = [];
    */
    //----------------
    birdsCounter = 0;
    birdXArray = [];
    birdYArray = [];
    swingCounter = 0;
    swingBool = false;
    birdAnimationTimer = 0;
    birdAnimationStage = 0;
    //----------------
    //----------------
    stoneCounter = 0;
    stoneXArray = [];
    //----------------
    ninjaCounter = 0;
    ninjaXArray = [];

    ninjaAnimationTimer = 0;
    //--------------
    shotsXArray = [];
    shotsYArray = [];
    shotY = playerY + playerHeight / 2;
    shotCounter = 0;
    shotAmmo = 5;
    shotAmmoReload = 3000;
    bulletX = cw - 100;
    bulletY = 20;
    bulletAnimationStage = 0;
    bulletAnimationTimer = 0;
    //--------------
    score = 0;
    scoreIncreaseTime = 1000;
    //---------------  
    stopMenuAnimationY = -stopMenuBackgroundHeight;
    level = 0;
    //-----------------
    allowJump = false;
    allowShot = false;
    pickNameBool = true;
    playerName = ['-','-','-','-','-'];
    playerIndex = 0;
}


//---------------------------
function stopMenu() {
    stopIntervals();
    canvas.removeEventListener("click", shot);
    document.removeEventListener("keydown", keyHandler);
    document.addEventListener("keydown", stopMenuHandler);
    document.addEventListener("click", stopMenuHandler);
    drawStopMenu();

}

function stopMenuHandler(ev) {
    if (ev.keyCode == 27) {
        document.addEventListener("keydown", keyHandler, false);
        document.removeEventListener("keydown", stopMenuHandler);
        document.removeEventListener("click", stopMenuHandler);
        canvas.addEventListener("click", shot, false);
        stopMenuAnimationY = -stopMenuBackgroundHeight;
            
        gameStage = 1;
        startIntervals();
    } else if (
        ev.clientY >= stopMenuButtonY &&
        ev.clientY <= stopMenuButtonY + stopMenuButtonHeight &&
        ev.clientX >= stopMenuButtonX &&
        ev.clientX <= stopMenuButtonX + stopMenuButtonWidth
    ) {
        // button nr 2 / exit
        fullReset();
        gameSound.stop();
        changeGameState(0);
        document.removeEventListener("keydown", stopMenuHandler);
        document.removeEventListener("click", stopMenuHandler);
        stopMenuAnimationY = -stopMenuBackgroundHeight;

    } else if (
        ev.clientY >= stopMenuButtonY - stopButtonSpace &&
        ev.clientY <= stopMenuButtonY + stopMenuButtonHeight - stopButtonSpace &&
        ev.clientX >= stopMenuButtonX &&
        ev.clientX <= stopMenuButtonX + stopMenuButtonWidth
    ) {
        // button nr 1 / back to the game
        document.addEventListener("keydown", keyHandler, false);
        document.removeEventListener("keydown", stopMenuHandler);
        document.removeEventListener("click", stopMenuHandler);
        canvas.addEventListener("click", shot, false);
        gameStage = 1;
        startIntervals();
        stopMenuAnimationY = -stopMenuBackgroundHeight;
    }

}


function mainMenuListener(ev) {
    if (
        ev.clientY >= mainMenubuttonY &&
        ev.clientY <= mainMenubuttonY + mainMenubuttonHeight &&
        ev.clientX >= mainMenubuttonX &&
        ev.clientX <= mainMenubuttonX + mainMenubuttonWith

    ) {
        init();
        canvas.removeEventListener("click", mainMenuListener);
        introSound.stop();
        changeGameState(4);
    } else if (
        ev.clientY >= mainMenubuttonY + 2 * mainMenubuttonHeight &&
        ev.clientY <= mainMenubuttonY + 3 * mainMenubuttonHeight &&
        ev.clientX >= mainMenubuttonX &&
        ev.clientX <= mainMenubuttonX + mainMenubuttonWith
    ) {
        gameStage = 6;
        canvas.removeEventListener("click", mainMenuListener);
        // ---------------- write functions for top lists !-----------------------
    }
}


//----------------------------
function gameLogic() {
    gameSound.play();
    if(playerLifes==0) changeGameState(3);
    //  tryHole();
    tryBird();
    tryStone();
    tryNinja();
    gameBoard();
    jumpHandler();
    drawLogic();
    update();
    // checkHoleCollision();
    birdPlayerCollision();
    stonePlayerCollision();
    ninjaPlayerCollision();

    birdBulletCollision();
    ninjaBulletCollision(); //!!!!!!!!!!!!!!!!!!!!!!!!!!! NIE DZIALA !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
}

function drawLogic() {
    drawBackground();
    drawPlayer();
    //drawFloor();
    // drawHole();
    drawShot();
    drawlifes();
    drawStone();
    drawBird();
    drawNinja();
    drawAmmo();
    drawScore();
}




function update() {
    backgroundX -= 5 + level;
    playerAnimationTimer++;
    bulletAnimationTimer++;
    ninjaAnimationTimer++;
    birdAnimationTimer++;
    //  moveHole();
    moveBird();
    moveStone();
    moveNinja();
    shotMove();
    birdSwing();
}

function init() {
    document.addEventListener("keydown", keyHandler, false);
    canvas.addEventListener("click", shot, false);
    startIntervals();
}

function stopIntervals() {
    clearInterval(levelInterval);
    clearInterval(bulletInterval);
    clearInterval(scoreInterval);
}

function startIntervals() {
    levelInterval = setInterval(gameLevel, 15000);
    bulletInterval = setInterval(reloadAmmo, shotAmmoReload);
    scoreInterval = setInterval(changeScoreByTime, scoreIncreaseTime);
}

function keyHandler(ev) {
    if(allowJump){ 
    if (ev.keyCode == 27) gameStage = 2;
    else if (ev.keyCode == 32 && !jump) jumpStart();
    }
}


// draw background black game board
function gameBoard() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, cw, ch);
}

