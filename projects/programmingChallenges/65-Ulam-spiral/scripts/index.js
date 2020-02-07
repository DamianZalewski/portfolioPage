let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
canvas.width = 400;
canvas.height = 400;
let cw = canvas.width;
let ch = canvas.height;

ctx.fillStyle = "black";
ctx.fillRect(0,0,cw,ch);

let fillColor = 'green';

let actualPosition = [cw/2-1, ch/2-1];
let direction = 'right';
let maxCounter = 1;
let directionCounter = 0;
let primeNumber = 1;

let colorBoxes = document.getElementsByClassName('colorBox');
let hamburgerIcon = document.getElementsByClassName("hamburgerIcon")[0];
let closeIcon = document.getElementsByClassName("closeIcon")[0];
let asideMenu = document.getElementsByTagName('aside')[0];



const setDefault = () => {
    ctx.fillStyle = 'black';
    ctx.fillRect(0,0,cw,ch);
    actualPosition = [cw/2-1, ch/2-1];
    direction = 'right';
    maxCounter = 1;
    directionCounter = 0;
    primeNumber = 1;
}
const switchMobileMenu = () => {
    if(hamburgerIcon.style.display === 'block' || hamburgerIcon.style.display === '') {
        hamburgerIcon.style.display = 'none';
        closeIcon.style.display = 'block';
        asideMenu.style.transform = 'translateX(100%)';
        
    } else {
        hamburgerIcon.style.display = 'block';
        closeIcon.style.display = 'none';
        asideMenu.style.transform = 'translateX(0)';
    }
}


const drawColorBoxes = () => {
    colorBoxes[0].style.backgroundColor = "red";
    colorBoxes[0].addEventListener("click",()=>{changeColor('red')});
    colorBoxes[1].style.backgroundColor = "green";
    colorBoxes[1].addEventListener("click",()=>{changeColor('green')});
    colorBoxes[2].style.backgroundColor = "navy";
    colorBoxes[2].addEventListener("click",()=>{changeColor('navy')});
    colorBoxes[3].style.backgroundColor = "yellow";
    colorBoxes[3].addEventListener("click",()=>{changeColor('yellow')});
}

const drawSpiral = () => {
    ctx.fillStyle = fillColor;
    ctx.fillRect(actualPosition[0], actualPosition[1],1,1);
    for(let j = 0;j<maxCounter;j++) {
       drawDot();
    }
    changeDirection(); 
    if(directionCounter == 2) {
        maxCounter++;
        directionCounter = 0;
    } else directionCounter++;
    if(primeNumber<=250000 ) setTimeout(drawSpiral,1);
}

const drawDot = () => {
    switch(direction) {
        case 'right':
            actualPosition[0]++;
            break;
        case 'bottom':
            actualPosition[1]++;
            break;
        case 'left':
            actualPosition[0]--;
            break;
        case 'top':
            actualPosition[1]--;
            break;
    }
    isPrime(primeNumber) ? 
    ctx.fillRect(actualPosition[0], actualPosition[1],1,1) 
    : null;
    primeNumber++;
}

const changeDirection = () => {
     switch(direction) {
        case 'right':
            direction = 'bottom';
            break;
        case 'bottom':
            direction = 'left';
            break;
        case 'left':
            direction = 'top';
            break;
        case 'top':
            direction = 'right';
            break;
    }
}

const changeColor = (color) => {
    fillColor = color;
    setDefault();
    drawSpiral();
}

const isPrime = num => {
  for(let i = 2; i < num; i++)
    if(num % i === 0) return false;
  return num !== 1 && num !== 0;
}

const init = () => {
    drawColorBoxes();
    drawSpiral();
    hamburgerIcon.addEventListener('click',switchMobileMenu);
    closeIcon.addEventListener('click',switchMobileMenu);
}

init();



