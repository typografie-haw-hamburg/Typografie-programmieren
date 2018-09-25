var video;

function preload() {

}

function setup() {
  createCanvas(600, 600);
  video = createCapture(VIDEO);
  video.hide();
}

function draw() {
  tint(random(255), 0, random(255));
  image(video, 0, 0, mouseX, mouseY);
}