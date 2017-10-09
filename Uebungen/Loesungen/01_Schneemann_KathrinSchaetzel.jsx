// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {
b.clear(b.doc());
b.units(b.MM);


b.noFill();

var size = 50;

b.ellipse(100, 150, size, size);
b.fill(255, 255, 255);
b.ellipse(100, 150 - 30, size - 10, size - 10);
b.ellipse(100, 90, size - 20, size - 20);
b.fill(94, 94, 94);
b.rect(87.5, 57, 25, 25);
b.fill(205, 102, 29);
b.beginShape(b.CLOSE);
  b.vertex(104, 90);
  b.vertex(120, 93);
  b.vertex(104, 95);
b.endShape();





}

b.go();
