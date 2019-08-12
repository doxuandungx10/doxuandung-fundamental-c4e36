// window.onload = () => {

// }

const cvs = document.getElementById("snake");
const ctx = cvs.getContext("2d");

const box = 20;


const ground = new Image();
ground.src = "ground2.png";

const foodImg = new Image();
foodImg.src = "food2.png";


let dead = new Audio();
let eat = new Audio();
let up = new Audio();
let right = new Audio();
let left = new Audio();
let down = new Audio();

let food = {
    x: Math.floor(Math.random() * 38 + 1) * box,
    y: (Math.floor(Math.random() * 30) + 7) * box
}


function collision(head, array) {
    for (let i = 0; i < array.length; i++) {
        if (head.x == array[i].x && head.y == array[i].y) {
            return true;
        }
    }
    return false;
}
// dead.src = "audio/dead.mp3";
// eat.src = "audio/eat.mp3";
// up.src = "audio/up.mp3";
// right.src = "audio/right.mp3";
// left.src = "audio/left.mp3";
// down.src = "audio/down.mp3";

// create the snake

// let snake = [];

// snake[0] = {
//     x: 9 * box,
//     y: 10 * box
// };



// let score = 0;


// let d;

// document.addEventListener("keydown", event => {
//     [
//         [37, 38, 39, 40]
//         // [65, 87, 68, 83]
//     ].forEach((key, index) s=> {
//         if (event.keyCode === key[0] && d != "RIGHT") {
//             left.play();
//             d = "LEFT";
//         } else if (event.keyCode === key[1] && d != "DOWN") {
//             d = "UP";
//             up.play();
//         } else if (event.keyCode === key[2] && d != "LEFT") {
//             d = "RIGHT";
//             right.play();
//         } else if (event.keyCode === key[3] && d != "UP") {
//             d = "DOWN";
//             down.play();
//         }
//     })
// });


// let key = event.keyCode;




// function draw() {

//     ctx.drawImage(ground, 0, 0);

//     for (let i = 0; i < snake.length; i++) {
//         ctx.fillStyle = (i == 0) ? "green" : "white";
//         ctx.fillRect(snake[i].x, snake[i].y, box, box);

//         ctx.strokeStyle = "white";
//         ctx.strokeRect(snake[i].x, snake[i].y, box, box);
//     }

//     ctx.drawImage(foodImg, food.x, food.y);

//     let snakeX = snake[0].x;
//     let snakeY = snake[0].y;

//     if (d == "LEFT") snakeX -= box;
//     if (d == "UP") snakeY -= box;
//     if (d == "RIGHT") snakeX += box;
//     if (d == "DOWN") snakeY += box;

//     if (snakeX == food.x && snakeY == food.y) {
//         score++;
//         eat.play();
//         food = {
//                 x: Math.floor(Math.random() * 40) * box,
//                 y: Math.floor(Math.random() * 30) * box
//             }
//             // we don't remove the tail
//     } else {
//         // remove the tail
//         snake.pop();
//     }


//     let newHead = {
//         x: snakeX,
//         y: snakeY
//     }


//     if (snakeX < 0 || snakeX > 40 * box - 1 || snakeY < 0 || snakeY > 30 * box - 1 || collision(newHead, snake)) {
//         clearInterval(game);
//         dead.play();
//         // alert("Game Over")
//     }

//     snake.unshift(newHead);

//     ctx.fillStyle = "white";
//     ctx.font = "45px Changa one";
//     ctx.fillText(score, 2 * box, 1.6 * box);
// }


// let game = setInterval(draw, 50);






let score2 = 0;
let snake2 = [];
snake2[0] = {
    x: 15 * box,
    y: 12 * box
}
let p;

document.addEventListener("keydown", direction2);

function direction2(event) {
    let key = event.keyCode;
    if (key == 65 && p != "RIGHT") {
        left.play();
        p = "LEFT";
    } else if (key == 87 && p != "DOWN") {
        p = "UP";
        up.play();
    } else if (key == 68 && p != "LEFT") {
        p = "RIGHT";
        right.play();
    } else if (key == 83 && p != "UP") {
        p = "DOWN";
        down.play();
    }
}

function draw2() {

    ctx.drawImage(ground, 0, 0);

    for (let i = 0; i < snake2.length; i++) {
        ctx.fillStyle = (i == 0) ? "red" : "white";
        ctx.fillRect(snake2[i].x, snake2[i].y, box, box);

        ctx.strokeStyle = "red";
        ctx.strokeRect(snake2[i].x, snake2[i].y, box, box);
    }

    ctx.drawImage(foodImg, food.x, food.y);

    let snake2X = snake2[0].x;
    let snake2Y = snake2[0].y;

    if (p == "LEFT") snake2X -= box;
    if (p == "UP") snake2Y -= box;
    if (p == "RIGHT") snake2X += box;
    if (p == "DOWN") snake2Y += box;

    if (snake2X == food.x && snake2Y == food.y) {
        score2++;
        eat.play();
        food = {
            x: Math.floor(Math.random() * 38 + 1) * box,
            y: (Math.floor(Math.random() * 30) + 7) * box
        }
    } else {
        snake2.pop();
    }


    let newHead2 = {
        x: snake2X,
        y: snake2Y
    }


    if (snake2X < box || snake2X > 39 * box - 1 || snake2Y < 7 * box || snake2Y > 36 * box || collision(newHead2, snake2)) {
        clearInterval(game2);
        dead.play();
        Over();
        Over2();
        snake2 = [];
        // alert("Game Over")
    }

    snake2.unshift(newHead2);

    ctx.fillStyle = "white";
    ctx.font = "45px Changa one";
    ctx.fillText(score2, 35 * box, 1.5 * box);
}



let game2 = setInterval(draw2, 100);