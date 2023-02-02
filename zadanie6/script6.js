const space = document.getElementById('space');
const context = space.getContext('2d');

let count = 40;
let lineLength = 100;

let balls = [];

class Ball{

    constructor(x, y, velocityX, velocityY) {
        this.x = x;
        this.y = y;
        this.velocityX = velocityX;
        this.velocityY = velocityY;
    }

    drawBall() {
        context.beginPath();
        context.arc(this.x, this.y, 10, 0, 2 * Math.PI);
        context.fillStyle = '#000000'
        context.fill();
        context.closePath();
    }

    update(){
        this.x += this.velocityX;
        this.y += this.velocityY;
    }

    bounceBack (){
        if (this.x + this.velocityX > space.width - 10 || this.x + this.velocityX < 10) {
            this.velocityX = -this.velocityX;
        }
        if (this.y + this.velocityY > space.height - 10 || this.y + this.velocityY < 10) {
            this.velocityY = -this.velocityY;
        }
    }
}

function getVelocity() {
    return (Math.random() * 10) -1;
}

function getPositionX() {
    return Math.random() * (space.width - 10 * 2) + 10;
}


function getPositionY() {
    return Math.random() * (space.height - 10 * 2) + 10;
}

function createBalls() {
    for (let i = 0;i<count;i++) {
        let ball = new Ball(getPositionX(),getPositionY(),getVelocity(), getVelocity());
        balls.push(ball);
    }
}

function drawAllBalls() {
    context.clearRect(0,0, space.width, space.height);
    for (let i = 0; i<count; i++) {
        let ball = balls[i];
        ball.drawBall();

        for (let j = i +1; j<count;j++) {
            let ball2 = balls[j];
            let distance = Math.sqrt(Math.pow(ball.x - ball2.x, 2) + Math.pow(ball.y - ball2.y, 2));
            if(distance < lineLength) {
                context.beginPath()
                context.moveTo(ball.x,ball.y)
                context.lineTo(ball2.x, ball2.y)
                context.stroke();
                context.closePath();
            }
        }
    }
}

function updateSpace() {
    for (let i = 0; i<count;i++) {
        balls[i].update();
        balls[i].bounceBack();
    }
}

function startAnimation() {
    let interval = setInterval(
        function () {
            drawAllBalls();
            updateSpace();
        }, 1000/60);
    document.getElementById('reset').addEventListener('click', function (){
        clearInterval(interval);
        context.clearRect(0,0, space.width, space.height);
    })
}

document.getElementById('start').addEventListener('click', function (){
    count = document.getElementById('count').value;
    lineLength = document.getElementById('length').value;
    createBalls();
    startAnimation();
});


