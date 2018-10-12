// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {

  clear(doc());

  var rectSize = 120;

  line(width / 2, 0, width / 2, height);
  line(0, height / 2, width, height / 2);

  noStroke();
  rect(width / 2 - rectSize / 2, height / 2 - rectSize / 2, rectSize, rectSize);

}
