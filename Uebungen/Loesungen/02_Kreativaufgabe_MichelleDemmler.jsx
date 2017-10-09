// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {
  b.clear(b.doc());
  b.units(b.MM);
b.size(400,400)

var Anzahl = (2, 5);

for(var i = 0; i < Anzahl; i++) {
var red2 = b.random(200, 255);
var green2 = b.random(200, 255);
var blue2 = b.random(200, 255);
}

b.fill (red2, blue2, green2);
b.rect (0, 0, 400, 400);

for(var i = 0; i < 10; i++) {

var red = b.random(100, 200);
var green = b.random(100, 200);
var blue = b.random(100, 200)
var size = b.random (3, 10);

var x2 = b.random(5, 395)
var y2 = b.random(225, 400)
var x3 = b.random(5, 395)
var y3 = b.random(0, 175)

b.stroke(red, blue, green);

b.line(-200, 200, x2, y2);
b.line(600, 200, x2, y2);

b.line(-200, 200, x3, y3);
b.line(600, 200, x3, y3);

b. fill (red, blue, green);
b.ellipse (x2, y2, size, size);
b.ellipse (x3, y3, size, size);

b.strokeWeight(b.random (1, 5))

}


}

b.go();
