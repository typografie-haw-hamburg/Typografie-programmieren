// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  b.clear(b.doc());
  b.units( b.MM );
  b.noFill();

  b.size(90, 260);

  b.rect(10, 10, 70, 70, 20);
  b.rect(10, 100, 70, 70, 5, 15, 25, 35);
  b.rect(10, 180, 70, 70, 0, 15, 0, 15);


}

b.go();
