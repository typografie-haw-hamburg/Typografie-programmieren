// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {

  clear(doc());

  // rectMode(CENTER);
  noFill();

  var circleSize = 80;

  ellipse(width / 2, height / 2, circleSize, circleSize);
  ellipse(width / 2, height / 2, circleSize * 2, circleSize * 2);
  ellipse(width / 2, height / 2, circleSize * 3, circleSize * 3);
  ellipse(width / 2, height / 2, circleSize * 4, circleSize * 4);

}
