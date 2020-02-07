let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let cw = canvas.width;
let ch = canvas.height;

let counterInput = document.getElementById('counter');
let overlay = document.getElementById("overlay");
let leftMenu = document.getElementById("leftMenu");
let canvasContainer = document.getElementById("canvasContainer");

let triangleInterval;
let defaultPoints = [[cw/2,10],[10,ch-10],[cw-10,ch-10]];
let defaultStartPoint = defaultPoints[0];
let defaultCounter = 0;
let defaultQuantity = 0;
let defaultIsStarted = false;

let points = defaultPoints;
let startPoint = defaultStartPoint;
let counter = defaultCounter;
let quantity = defaultQuantity;
let isStarted = defaultIsStarted;

init = () => {
    points = defaultPoints;
    startPoint = defaultStartPoint;
    counter = defaultCounter;
    quantity = defaultQuantity;
    isStarted = defaultIsStarted;
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, cw, ch);
    ctx.fillStyle = "#fff";
    ctx.fillRect(points[0][0],points[0][1],1,1);
    ctx.fillRect(points[1][0],points[1][1],1,1);
    ctx.fillRect(points[2][0],points[2][1],1,1);
    counterInput.value = counter;
}

drawTriangle = () => {
    let random = Math.floor(Math.random()*3);
    let nextPoint = points[random];
    let destination = [
        Math.floor((startPoint[0]+nextPoint[0]) / 2),
        Math.floor((startPoint[1]+nextPoint[1]) / 2),
    ];
    startPoint = [destination[0], destination[1]];
    ctx.fillRect(destination[0],destination[1],1,1);
    counterInput.value = counter;
    counter++;
    if(quantity<counter) clearInterval(triangleInterval);
    
}   

start = () => {
    if (isStarted) {
        return 0;
    }
    isStarted = true;
    quantity = document.getElementById('quantity').value;
    triangleInterval = setInterval(drawTriangle,1);
}

reset = () => {
    isStarted = false;
    clearInterval(triangleInterval);
    init();
}

openPage = () => {
    overlay.classList.add("overlayUp");
    leftMenu.classList.add("leftMenuAnimation");
    canvasContainer.classList.add("canvasAnimation");
}