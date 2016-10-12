//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {
  b.clear(b.doc())

 
for(var i = 0; i < 300; i++) {
var blue = b.color(0, 0, 255);
var red = b.color(255, 0, 0);

//b.noFill();
var posX = b.random(70, 500);
var posY = b.random(70, 700);
var randomwidth = b.random(0, 200);
var randomheight = b.random(0, 200);

b.ellipse(posX, posY, randomwidth, randomheight);
if (i <250){
  b.stroke(blue);
}
if (i >250){
  b.stroke(red);
}


}




}

b.go();