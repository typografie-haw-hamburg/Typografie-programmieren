// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  b.revert();
  b.units( b.MM );

  b.noFill();

  for(var i = 0; i < 20; i++) {

    b.fill(i * 20, 0, 0);

    b.ellipse(i * 5, i * 20, 15, 15);

  }

}

b.go();
