//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {

b.clear(b.doc());
b.units(b.MM);

// Ellipse

//farben
var red = b.color(b.random(0, 255), b.random(0, 255), b.random(0, 255));
var green = b.color(b.random(0, 255), b.random(0, 255), b.random(0, 255));

b.fill( b.gradient(red, green) );
b.stroke(255, 255, 255);
b.ellipse(b.width/2, b.height/2, 100, 100);

// weiße Linien
b.stroke(255, 255, 255);
for (var i=0; i < 5; i++) {
  var x1 = b.random(0, b.width);
  var y1 = b.random(0, b.height);
  var x2 = b.random(0, b.width);
  var y2 = b.random(0, b.height);
  b.line(x1, y1, x2, y2)
}


// weiße Ellipsen
b.noFill();
for (var i=0; i < 3; i++) {
  var x = b.random(0, b.width);
  var y = b.random(0, b.height);
  var ellipseB = b.random(0, 200);
  var ellipseH = b.random(0, 200);
  b.ellipse(x, y, ellipseB, ellipseH);
}

//schwarze Linien
b.stroke(50);

for (var i=0; i < 10; i++) {
  var x3 = b.random(20, 200);
  var y3 = b.random(20, 200);
  b.line(x3, y3, b.width/2, b.height/2);
}

b.line(b.width/2, 270, b.width/2, b.height/2);


}

b.go();