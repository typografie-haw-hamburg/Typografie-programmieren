var x = 100;
var y = 100;
var speed = 5;
var ySpeed = 5;
var circleSize = 80;

function setup() {
  createCanvas(640, 360);
}

function draw() {
  background(255, 0, 0);
  ellipse(x, y, circleSize);
  x = x + speed;
  y = y + ySpeed;
  
  if(y > height - circleSize / 2) {
    ySpeed = ySpeed * 1.2;
    ySpeed = ySpeed * -1;
  }
  
  if(y < circleSize / 2) {
    ySpeed = ySpeed * 1.2;
    ySpeed = ySpeed * -1;    
  }
  
  
  if(x > width - circleSize / 2) {
    speed = speed * 1.2;
    speed = speed * -1;
  }
  
  if(x < circleSize / 2) {
    speed = speed * 1.2;
    speed = speed * -1;    
  }
}