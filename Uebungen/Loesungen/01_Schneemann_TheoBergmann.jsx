// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {
b.clear( b.doc());

b.units(b.MM);
b.size(500,600)

b.noFill();
b.ellipse(125,300,60,60);
b.ellipse(125,248,45,45);
b.ellipse(125,208,35,35);



b.rect(300,200,100,100);
b.line(300,200,400,300);
b.line(400,200,300,300);
b.line(300,200,350,150);
b.line(400,200,350,150);

b.fill(100,100,100);

b.rect(105,185,40,5);
b.rect(115,150,20,40);



b.ellipse(120,205,5,5);
b.ellipse(130,205,5,5);
b.ellipse(125,300,5,5);
b.ellipse(125,300,5,5);
b.ellipse(125,248,5,5);


b.beginShape(b.CLOSE);
  b.vertex(125.5, 220);
  b.vertex(123, 213);
  b.vertex(128, 213);
b.endShape()






}

b.go();
