// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  b.clear( b.doc() );
  b.units( b.MM );

  b.size(200, 200);

  b.noFill();

  b.beginShape(b.CLOSE);

  b.vertex(50, 50);
  b.vertex(100, 80);
  b.vertex(80, 160);
  b.vertex(120, 190);

  b.endShape();

}

b.go();
