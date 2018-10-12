// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {

  clear( doc() );

  noFill();

  var length = 200;
  var x = width / 2 - length / 2;
  var y = height / 2 - length / 2;

  // Grundmauern + Diagonale
  rect(x, y, length, length);
  line(x, y, x + length, y + length);
  line(x, y + length, x + length, y);

  // Dach
  line(x, y, x + length / 2, y - length / 2);
  line(x + length / 2, y - length / 2, x + length, y);

}
