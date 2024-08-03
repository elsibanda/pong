const GameBoard = document.querySelector("#GameBoard");
const ctx = GameBoard.getContext("2d");
const ScoreText = document.querySelector("#ScoreText");
const resetBtn = document.querySelector("#resetBtn");
const gameWidth = GameBoard.width;
const gameHeight = GameBoard.height;
const boardBackground = "forestgreen";
const paddle1Color = "lightblue";
const paddle2Color = "red";
const paddleboarder = "black";
const ballcolor = "orange";
const ballbordercolor = "black";
const ballRadius = 12.5;
const paddleSpeed = 50;
let intervalID;
let ballSpeed =1;
let ballx = gameWidth/2;
let ballY = gameHeight/2;
let ballXDirection = 0;
let ballYDirection = 0;
let player1Score = 0;
let player2Score = 0;
let paddle1 ={
    width:25,
    height: 100,
    x:0,
    y:0
}
let paddle2 ={
    width:25,
    height: 100,
    x:gameWidth -25 ,
    y:gameHeight -100  
}

window.addEventListener("keydown", changeDirection);
resetBtn.addEventListener("click", resetGame);

gameStart();

function gameStart(){};
function nextTick(){};
function clearBoard(){};
function drawPaddles(){
    ctx.strokeStyle = paddleboarder;
    ctx.fillStyle = paddle1Color;
    ctx.fillRect(paddle1.x,paddle1.y,paddle1.width,paddle1.height);
    ctx.strokeRect(paddle1.x,paddle1.y,paddle1.width,paddle1.height);
};
function createBall(){};
function moveBall(){}
function drawBall(){};
function checkCollision(){};
function changeDirection(){};
function updateScore(){};
function resetgame(){};