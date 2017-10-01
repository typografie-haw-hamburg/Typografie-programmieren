// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  b.clear( b.doc() );
  b.units(b.MM);

  b.noFill();
  b.size(400, 400);

  var laenge = 200;

  b.println(laenge);

  // vertikale und horizontale Linien durch die Seitenmitte
  b.line(b.width / 2, 0, b.width / 2, b.height);
  b.line(0, b.height / 2, b.width, b.height / 2);

  // Rechteck und Kreise auf der Seitenmitte
  b.rect(b.width / 2 - laenge / 2, b.height / 2 - laenge / 2, laenge, laenge);
  b.ellipse(b.width / 2, b.height / 2, laenge, laenge);
  b.ellipse(b.width / 2, b.height / 2, laenge / 2, laenge / 2);
  b.ellipse(b.width / 2, b.height / 2, laenge / 4, laenge / 4);

}

b.go();
