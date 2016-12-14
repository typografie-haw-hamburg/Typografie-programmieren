var x;
var y;
var circleSize = 80;

function setup() {
  createCanvas(640, 360);
  x = width / 2;
  y = height / 2;
}

function draw() {
  
  background(255, 0, 0);
  ellipse(x, y, circleSize);
  
  x = x + random(-3, 3);
  y = y + random(-3, 3);

}