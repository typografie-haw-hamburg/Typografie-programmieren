//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {

  b.clear(b.doc());
  b.units(b.MM);
  b.noFill();

  var side = 50;
  
  b.rect(0, 0, side, side);
  b.rect(0, 0, side * 2, side * 2);
  b.rect(0, 0, side * 3, side * 3);

}

b.go();
