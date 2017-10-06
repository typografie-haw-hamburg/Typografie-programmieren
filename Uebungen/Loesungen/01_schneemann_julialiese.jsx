// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

b.clear(b.doc());
b.units(b.MM);
b.noFill();

b.ellipse(100, 100, 50 ,50);
b.ellipse(100, 165, 80, 80);
b.ellipse(100, 250, 90,90);

b.fill(0, 0, 0);
b.ellipse(90, 90, 5 ,5);
b.ellipse(110, 90, 5, 5);

b.rect(80,40,40,40);

b.ellipse(100,165,5,5);
b.ellipse(100,155,5,5);
b.ellipse(100,145,5,5);

b.ellipse(100,115,5,5);

b.fill(255, 140, 0);
b.beginShape(b.CLOSE);
  b.vertex (100, 95);
  b.vertex(100, 105);
  b.vertex(80, 100);
b.endShape();

}

b.go();
