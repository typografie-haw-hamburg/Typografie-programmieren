// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  b.clear( b.doc() );
  b.units( b.MM );

  b.noFill();


  var x = 120;
  var y = 30;

  var size = 50;

  b.rect(x, y, size, size);

  // b.line(x1, y1, x2, y2);

  b.line(x, y, x + size, y + size);
  b.line(x, y + size, x + size, y);

  b.line(x, y, x + size / 2, y + size / 2);
  b.line(x + size / 2, y - size / 2, x + size, y);


}

b.go();
