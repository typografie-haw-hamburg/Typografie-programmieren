function setup() {
  createCanvas(640, 360);
  textSize(36);
}

function draw() {
  background(200);

  push();
  scale(1, 4);
  text("Stretched word", 10, 30);

  pop();
  text("Regular word", 10, 200);
}