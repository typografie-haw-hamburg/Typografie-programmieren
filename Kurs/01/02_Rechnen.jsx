// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  b.clear( b.doc() );
  b.units(b.MM);

  b.size(400, 200);

  b.noFill();

  b.ellipse(b.width / 2, b.height / 2, 100, 100);

}

b.go();
