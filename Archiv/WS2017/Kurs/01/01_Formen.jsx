// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  b.clear( b.doc() );

  b.units(b.MM);
  b.size(200, 200);

  b.noFill();

  b.rect(20, 80, 200, 50);
  b.ellipse(50, 70, 20, 20);

  b.fill(150);

  b.rect(0, 0, 30, 40);

  b.line(0, 0, b.width, b.height);

}

b.go();
