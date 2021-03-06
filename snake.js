const canv = document.getElementById("snake");
const ctx = canv.getContext("2d");

const box = 32;

// get the images
const field = new Image();
field.src = "img/field.png";

const food = new Image();
food.src = "img/food.png";

// Creating the snake
let snake = [];


snake[0] = {
    x: 9 * box,
    y: 10 * box,
};

// Crating the food
let foodPlace = {
    x: Math.floor(Math.random() * 17 + 1) * box,
    y: Math.floor(Math.random() * 15 + 3) * box,
};

// Draw the Game Field
window.onload = function () {
    ctx.drawImage(field, 0, 0);
    ctx.fillStyle = "white";
    ctx.font = "45px Changa one";
    ctx.fillText(score, 2 * box, 1.6 * box);
    ctx.fillStyle = "white";
    ctx.font = "45px Changa one";
    ctx.fillStyle = "white";
    ctx.font = "45px Changa one";
    ctx.fillText("Snake", 7.5 * box, 1.6 * box);
};
let score = 0;
function draw() {
    ctx.drawImage(field, 0, 0);

    for (let i = 0; i < snake.length; i++) {
        ctx.fillStyle = i === 0 ? "#6E6658" : "#A4B3B6";
        ctx.fillRect(snake[i].x, snake[i].y, box, box);

        ctx.strokeStyle = "FBEEC1";
        ctx.strokeRect(snake[i].x, snake[i].y, box, box);
    }

    ctx.drawImage(food, foodPlace.x, foodPlace.y);

    // old head
    let headx = snake[0].x;
    let heady = snake[0].y;


    // move the snake
    if (d === "LEFT") {
        headx -= box;
    }
    if (d === "RIGHT") {
        headx += box;
    }
    if (d === "UP") {
        heady -= box;
    }
    if (d === "DOWN") {
        heady += box;
    }

    // snake eat the food
    if (headx === foodPlace.x && heady === foodPlace.y) {
        foodPlace = {
            x: Math.floor(Math.random() * 17 + 1) * box,
            y: Math.floor(Math.random() * 15 + 3) * box,
        };
        score++;
    } else {
        snake.pop();
    }

    let newHead = {
        x: headx,
        y: heady,
    };

    snake.unshift(newHead);

    checkGameOver();

    ctx.fillStyle = "white";
    ctx.font = "45px Changa one";
    ctx.fillText(score, 2 * box, 1.6 * box);
    ctx.fillStyle = "white";
    ctx.font = "45px Changa one";
    ctx.fillText("Snake", 7.5 * box, 1.6 * box);
}

// ---------------------------------------------------------------------------
let d = "RIGHT";
document.addEventListener("keydown", direction);

function direction(event) {
    // move left
    if (event.keyCode === 37 && d !== "RIGHT") {
        d = "LEFT";
    }
    // move Right
    if (event.keyCode === 39 && d !== "LEFT") {
        d = "RIGHT";
    }
    // move Up
    if (event.keyCode === 38 && d !== "DOWN") {
        d = "UP";
    }
    // move Down
    if (event.keyCode === 40 && d !== "UP") {
        d = "DOWN";
    }
}

// ---------------------------------------------------------------------------
const checkGameOver = () => {
    let head = snake[0];
    if (
        head.x < box ||
        head.x > 17 * box ||
        head.y < 3 * box ||
        head.y > 17 * box ||
        Collision()
    ) {
        clearInterval(game);
        // saveHighScore();
        ctx.font = "30px sans-serif";
        ctx.fillStyle = "red";
        ctx.fillText("GAME OVER", 6.5 * box, 10 * box);
    }
};

// ---------------------------------------------------------------------------
function Collision() {
    let headx = snake[0].x;
    let heady = snake[0].y;
    for (let i = 1; i < snake.length; i++) {
        if (headx === snake[i].x && heady === snake[i].y) {
            return true;
        }
    }
    return false;
}
var game;
let start = document.getElementById("startbtn");
start.addEventListener("click", () => {
    let range = document.getElementById("customRange1");
    game = setInterval(draw, 200 - range.value);
});




// let highScore = [];
//
// function saveHighScore() {
//     let name = document.getElementById("name-input").value;
//     localStorage.setItem(name, score.toString());
//
//     let list = document.getElementById("score-list");
//
//     let counter = 0;
//
//     for (var key in localStorage) {
//         if (counter >= 5) {
//             break;
//         }
//         if (key != "") {
//             let li = document.createElement("li");
//             li.innerHTML = `<p>${key} : ${localStorage[key]}</p>`;
//             list.appendChild(li);
//             counter++;
//         }
//     }
// }
