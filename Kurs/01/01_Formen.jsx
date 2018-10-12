// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {

  clear(doc());

  noFill();
  strokeWeight(4);

  ellipse(210, 297, 80, 80);
  ellipse(80, 150, 30, 60);

  fill(255, 0, 0);
  strokeWeight(1);

  rect(50, 50, 100, 100);
  ellipse(50, 50, 20, 20);

}
