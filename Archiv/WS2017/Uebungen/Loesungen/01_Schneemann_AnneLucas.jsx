// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

b.clear(b.doc());
b.units(b.MM);
b.noFill();



//Körper:
b.fill(255, 255, 255);

var x = 105
var y = 100

b.ellipse(x, y, 40, 40);
b.ellipse(x, y+20+30, 60, 60);
b.ellipse(x, y+20+60+40, 80, 80);

//Nase:
b.fill(180, 90, 0);

b.beginShape(b.CLOSE);
  b.vertex(x, 100);
  b.vertex(130, 105);
  b.vertex(x, 110);
b.endShape();

//Knöpfe:
b.fill(0)

b.ellipse(x, 135, 5, 5);
b.ellipse(x, 150, 5, 5);
b.ellipse(x, 165, 5, 5);

//Augen:
b.ellipse(95, 95, 5, 5);
b.ellipse(115, 95, 5, 5);

b.noFill();

b.ellipse(95, 95, 5, 8);
b.ellipse(115, 95, 5, 8);

//Hut:
b.fill(0)

b.rect(85, 85, 40, 2);
b.rect(90, 70, 30, 15);


}

b.go();
