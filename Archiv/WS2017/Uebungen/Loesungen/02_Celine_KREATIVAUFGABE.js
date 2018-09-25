// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  b.clear(b.doc());
  b.units(b.MM);


for(var i = 0; i < 100; i++){

//color


var color = b.color(b.random(100, 255), b.random(0, 0), b.random(0, 0));


b.stroke (color);

// Strichstärke

b.strokeWeight(1.5);



//Punkte enden auf der linken Seite

var xZ = (b.width / 2 , b.width / 2) ;
var yZ = (b.height / 2 , b.height / 2);

var x1 = b. random (0, b.width);
var y1 = b. random (i, i);

var x2 = b.random (0 , b.width);
var y2 = b.random (b.height , b.height);




//line

b.line (xZ, yZ , x1, y1);
b.line (xZ, yZ , x2, y2);


// elipse

var size = b.random (1 , 4)

b.fill (255 , 0 , 0);

b.ellipse (x1 , y1 , size , size );






}


}

b.go();

