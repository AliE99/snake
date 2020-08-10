const canv = document.getElementById("snake");
const ctx = canv.getContext("2d");


// get the images
const field = new Image();
field.src = "img/field.png";    

const food = new Image();
food.src = "img/food.png"

function draw() {
    ctx.drawImage(field , 0 ,0);
}

let game = setInterval(draw,100)