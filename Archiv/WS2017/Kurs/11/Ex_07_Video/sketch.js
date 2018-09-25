var video;
var topLeft = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  video = createCapture(VIDEO);
}

function draw() {
  tint(random(255), 0, random(255));
  if(topLeft == true) {
    image(video, 0, 0, mouseX, mouseY);
  } else {
    image(video, mouseX, mouseY, width - mouseX, height - mouseY);
  }
}

function mouseClicked() {
  topLeft = !topLeft;
}