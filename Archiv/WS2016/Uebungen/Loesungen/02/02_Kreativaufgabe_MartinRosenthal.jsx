//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {

b.units ( b.MM);

b.clear (document);

for( var i = 0; i <= 30; i++) {

var x0 = b.random (-10, 0);
var y0 = b.random (-10, 0);
var x1 = b.random (10, b.width);
var y1 = b.random (10, b.height);



//Geradengleichung, um Kreis auf einen Punkt auf der Gerade zu setzen
var m = (y1 - y0)/(x1-x0);
var f = y0 - m * x0;

var mitteX = b.random(x0, x1);
var mitteY = m * mitteX + f;

// Kreisdurchmesser
var dia = b.random (4, 50);
var dia1 = b.random (4, dia-2)

b.strokeWeight( b. random(1,3))
b.line (x0, y0, x1, y1);


b.fill(0, 0, 0)
b.ellipse (mitteX, mitteY, dia, dia);


b.ellipse (x1, y1, dia1, dia1);










//b.ellipse (mitteX, mitteY, radius, radius);




//b.beginShape();
//b.vertex (x0, y0, 100,50,120,70);
//b.vertex (x1, y1, 100, 50, 120, 70);
//b.endShape();



}



}

b.go();
