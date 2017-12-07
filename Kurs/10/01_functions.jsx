// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  b.clear( b.doc() );
  b.units( b.MM );

  b.noFill();

  b.size("A4");

  var randomX = b.random(b.width);
  var randomY = b.random(b.height);

  // createHouse(x, y, size);
  createHouse(80, 50, 70);
  createHouse(12, 150, 30);
  createHouse(55, 190, 52);

}

b.go();


// custom function with custom parameters
function createHouse(x, y, size) {

  b.rect(x, y, size, size);

  b.line(x, y, x + size, y + size);
  b.line(x, y + size, x + size, y);

  b.line(x, y, x + size / 2, y - size / 2);
  b.line(x + size / 2, y - size / 2, x + size, y);

}
