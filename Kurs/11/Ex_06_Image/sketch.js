var img;
var topLeft = false;

function preload() {
  img = loadImage('img/MonaLisa.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  if(topLeft == false) {
    image(img, 0, 0, mouseX, mouseY);
  } else {
    image(img, mouseX, mouseY, width - mouseX, height - mouseY);
  }
}

function mouseClicked() {
  topLeft = !topLeft;
}