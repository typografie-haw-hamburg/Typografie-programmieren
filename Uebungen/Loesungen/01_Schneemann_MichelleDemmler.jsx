// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {
  b.clear(b.doc());
b.noStroke();
  b.units(b.MM);
b.size(400,300)

//Hintergrund
b.fill (97, 134, 154)
b.rect(0,0,400,300)

b.fill (255, 255, 255)
for(var i = 0; i < 200; i++){


var size = b. random(0, 5);
var x = b. random(size/2, b.width- size/2);
var y = b. random(size/2, b.height- size/2);

b.ellipse(x, y, size, size);

}

b.fill (97, 134, 154)
b.rect(0,220,400,80)

//Schatten
b.fill (230, 230, 230)
b.ellipse(200, 230, 70, 15);

//Körper
b.stroke(0,0,0);
b.fill (255, 255, 255)
b.ellipse(200, 190, 80, 80);
b.ellipse(175, 140, 20, 50);
b.ellipse(225, 140, 20, 50);
b.ellipse(200, 130, 60, 60);
b.ellipse(200, 80, 50, 50);



//Augen
b.fill (0, 0, 0);
b.ellipse(180, 70, 10, 10);

b.fill (255, 255, 255);
b.ellipse(180, 68, 3, 3);

b.fill (0, 0, 0);
b.ellipse(220, 70, 10, 10);

b.fill (255, 255, 255);
b.ellipse(220, 68, 3, 3);

//Mund
b.fill (0, 0, 0);
b.ellipse(185, 90, 3, 3);
b.fill (0, 0, 0);
b.ellipse(190, 95, 3, 3);
b.fill (0, 0, 0);
b.ellipse(199, 97, 3, 3);
b.fill (0, 0, 0);
b.ellipse(208, 95, 3, 3);
b.fill (0, 0, 0);
b.ellipse(215, 90, 3, 3);

//Nase
b.noStroke();
b.fill (230, 124, 0)
b.beginShape(b.CLOSE);
b.vertex(200, 100);
 b.vertex(205, 80);
  b.vertex(195, 80);
b.endShape();

//Knöpfe
b.fill (0, 0, 0);
b.ellipse(200, 115, 7, 7);
b.fill (0, 0, 0);
b.ellipse(200, 125, 7, 7);
b.fill (0, 0, 0);
b.ellipse(200, 135, 7, 7);

//Hut
b.fill (0, 0, 0);
b.ellipse(200, 58, 50, 15);
b.rect(185, 30, 30, 30);




}

b.go();
