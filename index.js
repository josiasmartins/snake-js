const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

let speed = 7;

let tileCount = 20;
let tileSize = canvas.width / tileCount - 2;
let headX = 10;
let headY = 10;

let appleX = 5;
let appleY = 5;

let xVelocity = 0;
let yVelocity = 0;

// game loop
function drawGame() {
    clearScreen();
    changeSnakePosition();
    drawApple();
    drawSnake();
    setInterval(drawGame, 1000/ speed);
}

function clearScreen() {
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.clientWidth, canvas.height);
}

function changeSnakePosition() {
    headX = headX + xVelocity;
    headY = headY + yVelocity;
}

function drawSnake() {
    ctx.fillStyle = 'green';
    ctx.fillRect(headX * tileCount, headX * tileCount, tileSize, tileSize)
}


document.body.addEventListener('keydown', keyDown);

function keyDown(event) {
    // Up
    if (event.KeyCode == 38) {
        if (yVelocity == 1)
            return;
        yVelocity = -1;
        xVelocity = 0;
        console.log('ibag up')
    }

    // down
    if (event.keyCode == 40) {
        if (yVelocity == -1)
            return;
        yVelocity = 1;
        xVelocity = 0;
        console.log("ibag down")
    }

    // left 
    if (event.keyCode == 37) {
        if (xVelocity == 1)
            return;
        yVelocity = 0;
        xVelocity = -1;
        console.log('ibag left')
    }

    // right 
    if (event.keyCode == 39) {
        if (xVelocity == -1)
            return;
        yVelocity = 0;
        xVelocity = 1;
        console.log('ibag right')
    }
}

drawGame();
// requestAnimationFrame
// setInterval xtimes per a seccond 
// setTimeOut -- 