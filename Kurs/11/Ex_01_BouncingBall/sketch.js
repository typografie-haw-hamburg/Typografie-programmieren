var x = 200;
var y = 200;
var speedX = 6;
var speedY = 18;
var mySize = 50;

function setup() {
  createCanvas(1000, 600);
}

function draw() {
  background(255, 0, 0);
  ellipse(x, y, mySize, mySize);

  x = x + speedX;
  y = y + speedY;

  if(x > width - mySize / 2) {
    speedX = -speedX;
  }

  if(x < mySize / 2) {
    speedX = -speedX;
  }

  if(y > height - mySize / 2) {
    speedY = -speedY;
  }

  if(y < mySize / 2) {
    speedY = -speedY;
  }
}