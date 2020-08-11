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
        x : Math.floor(Math.random() * 17 + 1) * box,
        y : Math.floor(Math.random() * 15 + 3) * box,
}


function draw() {

    ctx.drawImage(field, 0, 0);
    ctx.drawImage(food,foodPlace.x , foodPlace.y);

    for (let i = 0; i < snake.length; i++) {
        ctx.fillStyle = i == 0 ? "green" : "white";
        ctx.fillRect(snake[i].x, snake[i].y, box, box);

        ctx.strokeStyle = "red";
        ctx.strokeRect(snake[i].x, snake[i].y, box, box);
    }

    // move the snake
    if (d == "LEFT") {
        move(d);
    }
    if (d == "RIGHT") {
        move(d);
    }
    if (d == "UP") {
        move(d);
    }
    if (d == "DOWN") {
        move(d);
    }
    checkGameover();
}



// *************************************************************
let d = "LEFT";
document.addEventListener("keydown", direction);

function direction(event) {
    // move left
    if (event.keyCode == 37 && d != "RIGHT") {
        d = "LEFT";
    }
    // move Right
    if (event.keyCode == 39 && d != "LEFT") {
        d = "RIGHT";
    }
    // move Up
    if (event.keyCode == 38 && d != "DOWN") {
        d = "UP";
    }
    // move Down
    if (event.keyCode == 40 && d != "UP") {
        d = "DOWN";
    }
}

// *************************************************************
function move(d) {
    // move the snake
    if (d == "LEFT") {
        let head = snake[0];
        let newHead = {
            x: head.x - box,
            y: head.y,
        };
        snake.unshift(newHead);
        snake.pop();
    }
    if (d == "RIGHT") {
        let head = snake[0];
        let newHead = {
            x: head.x + box,
            y: head.y,
        };
        snake.unshift(newHead);
        snake.pop();
    }
    // move the snake
    if (d == "UP") {
        let head = snake[0];
        let newHead = {
            x: head.x,
            y: head.y - box,
        };
        snake.unshift(newHead);
        snake.pop();
    }
    // move the snake
    if (d == "DOWN") {
        let head = snake[0];
        let newHead = {
            x: head.x,
            y: head.y + box,
        };
        snake.unshift(newHead);
        snake.pop();
    }
}

// *************************************************************
function checkGameover() {
    let head = snake[0];
    if (
        head.x < box ||
        head.x > 17 * box ||
        head.y < 3 * box ||
        head.y > 17 * box
    ) {
        clearInterval(game);
    }
}
let game = setInterval(draw, 1100);
