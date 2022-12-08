const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const ballRadius = 10;

//set the default co-ordinates
let x = canvas.width/2
let y = canvas.height-30

//set the changes in movement
let dx = -1.2;
let dy = 0.877;
let ballColor = "rgb(60,5,200)"

function randBallColor(){
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);
    
    return `rgb(${r},${g},${b})`;
    
}

function drawBall(){
    ctx.beginPath();
    ctx.arc(x,y,ballRadius,0, Math.PI*2)
    ctx.fillStyle = ballColor;
    ctx.fill();
    ctx.closePath();
}

function draw(){
    //drawing code
    ctx.clearRect(0,0, canvas.width, canvas.height);
    
    drawBall();
    if(x + dx > canvas.width -ballRadius || x + dx < 0 +ballRadius){
        dx = -dx;
        ballColor = randBallColor();
    }
    if(y + dy > canvas.height -ballRadius|| y +dy < 0 +ballRadius){
        dy = -dy;
        ballColor = randBallColor();
    }    
    x+= dx;
    y+= dy;
}

setInterval(draw,10);