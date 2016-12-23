//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {
b.clear (b.doc());
b.noFill ();
b.strokeWeight (b.random (0.1,20));

for (var i= 0; i < 170; i++){

  var randomWidth = b.random (10, b.width);
  var randomHeight = b.random (10, b.height);

var x = b.random(10,randomWidth);
var y = b.random (randomHeight,10);

b.stroke (b.color(b.random(0,255),0,0));

b.line (x, 10, x ,b.height-10);

b.stroke (b.color(0,0,b.random(0,255)));
b.line (10, y, b.width-10 ,y);





}}

b.go();
