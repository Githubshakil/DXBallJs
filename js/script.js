const canvas = document.getElementById('gameCanvas')
const ctx = canvas.getContext('2d')
const scoreDisplay = document.getElementById('score')
const livesDisplay = document.getElementById('lives')
const gameOverDisplay = document.getElementById('gameOver')


//Game object
let ball = {
    x: canvas.width / 2,
    y: canvas.height - 50,
    radius: 10,
    dx: 4,
    dy: -4
};

let paddle = {
    width: 100,
    height: 10,
    x: canvas.width / 2-50,
    y: canvas.height - 20,
    speed: 8
};

let bricks = [];
const brickRowCount = 5;
const brickColumnCount = 9;
const brickWidth =  75;
const brickHight = 20;
const brickpadding = 10;
const brickOffsetTop = 30;
const brickOffsetLeft = 35;

let score = 0;
let lives = 3;
let rightPressed = false;
let leftPressed = false;
let gameOver = false;

//Initialize bricks

for (let c = 0; c < brickColumnCount; c++){
    bricks[c] = [];
    
}