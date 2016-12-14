var img;

function preload() {
  img = loadImage("images/MonaLisa.jpg");
}

function setup() {
  createCanvas(600, 600);
}

function draw() {
  image(img, 0, 0, mouseX, mouseY);
}