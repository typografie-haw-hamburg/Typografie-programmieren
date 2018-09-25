// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  b.clear( b.doc() );
  b.units(b.MM);

  b.noFill();
  b.size(200, 200);

  var size = 150;

  // vertikale und horizontale Linien durch die Seitenmitte
  b.line(b.width / 2, 0, b.width / 2, b.height);
  b.line(0, b.height / 2, b.width, b.height / 2);

  // Rechteck und Kreise auf der Seitenmitte
  b.rect(b.width / 2 - size / 2, b.height / 2 - size / 2, size, size);
  b.ellipse(b.width / 2, b.height / 2, size, size);
  b.ellipse(b.width / 2, b.height / 2, size / 2, size / 2);
  b.ellipse(b.width / 2, b.height / 2, size / 4, size / 4);

}

b.go();
