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
    for (let r = 0 ; r < brickRowCount; r++){
        bricks[c][r] = { x: 0, y: 0, status: 1};

    }
}


// Event listeners
document.addEventListener('keydown', keyDownHandler);
document.addEventListener('keyup', keyUpHandler);
document.addEventListener('mousemove', mouseMoveHandler);


function keyDownHandler(e) {
    if (e.key === 'Right' || e.key === 'ArrowRight') rightPressed = true;
    if (e.key === 'Left' || e.key === 'ArrowLeft') leftPressed = true;
    if (e.key === 'r' || e.key === 'R') {
        if (gameOver) resetGame();
    }
}


function keyUpHandler(e) {
    if (e.key === 'Right' || e.key === 'ArrowRight') rightPressed = false;
    if (e.key === 'Left' ||  e.key  === 'ArrowLeft') leftPressed = false;
}

function mouseMoveHandler(e) {
    const relativeX = e.clintX - canvas.offsetLeft;
    if (relativeX > 0 && relativeX < canvas.width){
        paddle.x = relativeX - paddle.width / 2;
    }
}

function collisionDetection() {
    for (let c = 0; c < brickColumnCount; c++) {
        for (let r = 0; r < brickRowCount; r++) {
            const b = bricks[c][r];
            if (b.status === 1) {
                if (ball.x > b.x && ball.x < b.x + brickWidth &&
                    ball.y > b.y && ball.y < b.y + brickHeight) {
                    ball.dy = -ball.dy;
                    b.status = 0;
                    score += 10;
                    scoreDisplay.textContent = Score: ${score};
                    if (score === brickRowCount * brickColumnCount * 10) {
                        alert('You Win!');
                        resetGame();
                    }
                }
            }
        }
    }
}

function drawBall() {
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    ctx.fillStyle = '#fff';
    ctx.fill();
    ctx.closePath();
}

function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddle.x, paddle.y, paddle.width, paddle.height);
    ctx.fillStyle = '#0f0';
    ctx.fill();
    ctx.closePath();
}


