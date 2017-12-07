// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  b.clear( b.doc() );
  b.units( b.MM );

  b.noFill();

  b.size("A4");

  var blue = b.color(0, 0, 255);

  // createHouse(x, y, size, color);

  // use a color in a variable
  createHouse(85, 50, 70, blue );

  // use a color created with b.color() in the function parameters
  createHouse(12, 150, 30, b.color(255, 120, 150));

  // use a single number which acts like a greyscale value
  createHouse(55, 190, 52, 200);

}

b.go();


// custom function with custom parameters
function createHouse(x, y, size, color) {

  b.stroke(color);

  b.rect(x, y, size, size);

  b.line(x, y, x + size, y + size);
  b.line(x, y + size, x + size, y);

  b.line(x, y, x + size / 2, y - size / 2);
  b.line(x + size / 2, y - size / 2, x + size, y);

}
