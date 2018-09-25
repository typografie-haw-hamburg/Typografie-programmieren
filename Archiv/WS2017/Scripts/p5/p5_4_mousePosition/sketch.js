var r;
var b;
var diameter = 80;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255, 0, 0);
  rectMode(CENTER);
}

function draw() {
  r = map(mouseX, 0, width, 0, 255);
  b = map(mouseX, width, 0, 0, 255);
  background(r, 0, b);
  
  if(mouseX > width / 2) {
    ellipse(width - mouseX, height - mouseY, diameter);
  } else {
    rect(width - mouseX, height - mouseY, diameter, diameter);
  }
 }

function mouseClicked() {
  clear();
  diameter= random(2, 200);
  background(255, 0, 0);
}