const space = document.getElementById('space');
const context = space.getContext('2d');

let count = document.getElementById('count');
let lineLength = document.getElementById('length')

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
        if (this.y + this.vy > canvas.height - 10 || this.y + this.vy < 10) {
            this.velocityY = -this.velocityY;
        }
    }
}