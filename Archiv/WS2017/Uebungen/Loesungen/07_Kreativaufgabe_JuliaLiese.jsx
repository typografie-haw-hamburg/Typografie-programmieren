// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

b.clear(b.doc());
b.units(b.MM);

b.page(1);
b.pageCount(1);


var count = 5

for(var j = 0; j < count; j++){

b.fill(b.gradient(b.color(255/j - colorStep, 0, 0), b.color(0, 0, 255/j - colorStep)));
b.rect(0, 0, b.width, b.height);

  for(var i = 0; i < count; i++){

var colorStep = 255 / count

b.fill(0);
b.rect(80, 210, 10, 20);
b.rect(10, 120, 20, 10);
b.rect(30, 60, 10, 10);
b.rect(60, 10, 10, 10);
b.rect(100, 10, 10, 10);
b.rect(130, 60, 10, 10);
b.rect(140, 120, 20, 10);

b.beginShape();
b.vertex(90,10);
b.vertex(80, 10);
b.vertex(80, 30);
b.vertex(70, 30);
b.vertex(70, 40);
b.vertex(80, 40);
b.vertex(80, 60);
b.vertex(60, 60);
b.vertex(60, 40);
b.vertex(50, 40);
b.vertex(50, 20);
b.vertex(40, 20);
b.vertex(40, 40);
b.vertex(30, 40);
b.vertex(30, 30);
b.vertex(20, 30);
b.vertex(20, 50);
b.vertex(50, 50);
b.vertex(50, 70);
b.vertex(70, 70);
b.vertex(70, 100);
b.vertex(60, 100);
b.vertex(60, 110);
b.vertex(50, 110);
b.vertex(50, 90);
b.vertex(60, 90);
b.vertex(60, 80);
b.vertex(20, 80);
b.vertex(20, 100);
b.vertex(30, 100);
b.vertex(30, 90);
b.vertex(40, 90);
b.vertex(40, 120);
b.vertex(70, 120);
b.vertex(70, 110);
b.vertex(80, 110);
b.vertex(80, 110);
b.vertex(80, 160);
b.vertex(60, 160);
b.vertex(60, 150);
b.vertex(70, 150);
b.vertex(70, 140);
b.vertex(50, 140);
b.vertex(50, 150);
b.vertex(40, 150);
b.vertex(40, 140);
b.vertex(20, 140);
b.vertex(20, 150);
b.vertex(30, 150);
b.vertex(30, 160);
b.vertex(40, 160);
b.vertex(40, 190);
b.vertex(30, 190);
b.vertex(30, 220);
b.vertex(60, 220);
b.vertex(60, 190);
b.vertex(50, 190);
b.vertex(50, 170);
b.vertex(80, 170);
b.vertex(80, 180);
b.vertex(70, 180);
b.vertex(70, 200);
b.vertex(80, 200);
b.vertex(80,190);
b.vertex(90,190);

b.vertex(90,200);
b.vertex(100, 200);
b.vertex(100, 180);
b.vertex(90, 180);
b.vertex(90, 170);
b.vertex(120, 170);
b.vertex(120, 190);
b.vertex(110, 190);
b.vertex(110, 220);
b.vertex(140, 220);
b.vertex(140, 190);
b.vertex(130, 190);
b.vertex(130, 160);
b.vertex(140, 160);
b.vertex(140, 150);
b.vertex(150, 150);
b.vertex(150, 140);
b.vertex(130, 140);
b.vertex(130, 150);
b.vertex(120, 150);
b.vertex(120, 140);
b.vertex(100, 140);
b.vertex(100, 150);
b.vertex(110, 150);
b.vertex(110, 160);
b.vertex(90, 160);
b.vertex(90, 110);
b.vertex(100, 110);
b.vertex(100, 120);
b.vertex(130, 120);
b.vertex(130, 90);
b.vertex(140, 90);
b.vertex(140, 100);
b.vertex(150, 100);
b.vertex(150, 80);
b.vertex(110, 80);
b.vertex(110, 90);
b.vertex(120, 90);
b.vertex(120, 110);
b.vertex(110, 110);
b.vertex(110, 100);
b.vertex(100, 100);
b.vertex(100, 70);
b.vertex(120, 70);
b.vertex(120, 50);
b.vertex(150, 50);
b.vertex(150, 30);
b.vertex(140, 30);
b.vertex(140, 40);
b.vertex(130, 40);
b.vertex(130, 20);
b.vertex(120, 20);
b.vertex(120, 40);
b.vertex(110, 40);
b.vertex(110, 60);
b.vertex(90, 60);
b.vertex(90, 40);
b.vertex(100, 40);
b.vertex(100, 30);
b.vertex(90, 30);
b.vertex(90, 10);
b.endShape();

// frage pathfinder subtrahieren
b.rect(120, 200, 10, 10);
b.rect(40, 200, 10, 10);
b.rect(80, 70, 10, 30);



  }

  if(j != count - 1){

  b.addPage();
}
}

}

b.go();
