function setup() {
  createCanvas(640, 360);
  background(200);

  getTextFromNode();
}

function getTextFromNode() {
  // sends a get request to the path "/nodetext" and passes the result to the callback function gotTextFromNode
  loadStrings("/nodetext", gotTextFromNode);
}

function gotTextFromNode(nodeText) {
  // draws the text it received from the call
  text(nodeText, 50, 50);
}