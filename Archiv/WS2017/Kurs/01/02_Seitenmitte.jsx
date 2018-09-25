// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  b.clear( b.doc() );
  b.units(b.MM);

  b.size(200, 100);

  b.noFill();

  b.ellipse(b.width / 2, b.height / 2, 80, 80);

}

b.go();
