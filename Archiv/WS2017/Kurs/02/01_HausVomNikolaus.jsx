// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  b.clear( b.doc() );
  b.units( b.MM );

  b.noFill();

  b.size(200, 200);

  var x = 60;
  var y = 80;

  var size = 70;

  b.rect(x, y, size, size);

  b.line(x, y, x + size, y + size);
  b.line(x, y + size, x + size, y);

  b.line(x, y, x + size / 2, y - size / 2);
  b.line(x + size / 2, y - size / 2, x + size, y);


}

b.go();
