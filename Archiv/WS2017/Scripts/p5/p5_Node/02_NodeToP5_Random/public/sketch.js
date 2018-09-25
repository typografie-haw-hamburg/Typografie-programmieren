function setup() {
  createCanvas(640, 360);
}

function draw() {
  getTextFromNode();
}

function getTextFromNode() {
  loadStrings("/nodetext", gotTextFromNode);
}

function gotTextFromNode(nodeText) {
  // redraws the background and draws the new random number each time the callback function is called
  background(200);
  text("A random number sent from Node.js: " + nodeText, 50, 50);
}