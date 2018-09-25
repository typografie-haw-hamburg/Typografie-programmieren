var x = 200;
var y = 200;
var r = 0;
var b = 0;

function setup() {
  createCanvas(windowWidth - 50, windowHeight - 50);
  background(0, 0, 255);
  rectMode(CENTER);
}

function draw() {
  background(r, 0, b);

  r = map( mouseX, 0 , width, 0, 255);
  b = map( mouseX, width, 0, 0, 255);

  if (mouseX > width / 2) {
    rect(mouseX + random(-5, 5), mouseY + random(-5, 5), 160, 160);
  } else {
    beginShape();
    for(var i = 0; i < 8; i++) {
      vertex(mouseX + random(-120, 120), mouseY + random(-120, 120));
    }
    endShape();
  }
}