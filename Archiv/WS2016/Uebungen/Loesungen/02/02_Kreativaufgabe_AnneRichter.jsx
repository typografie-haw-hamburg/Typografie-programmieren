//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {

b.clear(b.doc());
b.units(b.MM);


var red = b.color(b.random(0, 255), b.random(0, 255), b.random(0, 255));
var green = b.color(b.random(0, 255), b.random(0, 255), b.random(0, 255));

b.fill( b.gradient(red, green) );
b.stroke(255, 255, 255);
b.ellipse(b.width/2, b.height/2, 100, 100);


for (var i=0; i < 300; i++) {
  var x = b.random(0, b.width);
  var y = b.random(0, b.height);
  var ellipseB = b.random(0, 20);
  var ellipseH = b.random(0, 20);
  b.ellipse(x, y, ellipseB, ellipseH);
}

b.stroke(50);

for (var i=0; i < 10; i++) {
  var x3 = b.random(2, 20);
  var y3 = b.random(2, 20);
  b.line(x3, y3, b.width/2, b.height/2);
}

b.line(b.width/2, 270, b.width/2, b.height/2);
for(var i = 0; i < 3; i++) {
    b.stroke(0, 0, 0);
    b.fill (0, 0, 0);
    b.strokeWeight(5);

    var randomWidth = b.random(10, 370);
    var randomHeight = b.random(10, 130);
 
 
}

}

b.go();
