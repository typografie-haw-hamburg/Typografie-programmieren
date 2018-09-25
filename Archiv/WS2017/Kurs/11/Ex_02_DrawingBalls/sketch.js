var circleSize = 150;

function setup() {
  createCanvas(1000, 600);
  background(255, 0, 0);
}

function draw() {
  ellipse(mouseX, mouseY, circleSize, circleSize);

  var diff = random(-20, 20);
  circleSize = circleSize + diff;
}

function mouseClicked() {
  clear();
  var r = random(255);
  var g = random(255);
  var b = random(255);
  background(r, g, b);
  circleSize = 150;
}