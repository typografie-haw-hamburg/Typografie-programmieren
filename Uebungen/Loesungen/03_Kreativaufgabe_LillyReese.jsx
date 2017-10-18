// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  b.clear( b.doc() );
  b.units( b.MM );
  b.size (200, 200);

//Verlauf
var blue = b.color (b.random (0,50), b.random (80,255), b.random (0,255));
var green = b.color (b.random (0,50), b.random (80,255), b.random (0,255));

b.gradientMode(b.RADIAL)
b.fill (b.gradient (blue,green, "bluegreen"));
b.rect (0, 0, b.width, b.height)

//Kontur
b.strokeWeight (1);

var count = prompt ("Wie viele Objekte?")

//Loop
for (var i = 0; i< count; i++){

var x = b.random (0,200);
var y = b.random (0,200);
var size = b.random (5,20);
var distance = b.dist (x,y,b.width/2, b.height/2);

if (size < 10) {
b.fill (100,100,255);
b.rect (x,y,size,size);


} else {
b.fill (0,150,150);
b.line (x,y,-10,50);
b.ellipse (x,y, size,size);

}

}








}

b.go();