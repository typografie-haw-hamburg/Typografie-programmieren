// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

b.clear ( b.doc());
b.units (b.MM);

var blue = b.color (b.random (0,255), b.random (0,255), b.random (0,255));
var green = b.color (b.random (0,255), b.random (0,255), b.random (0,255));

b.gradientMode(b.LINEAR)
b.fill (b.gradient (blue,green, "bluegreen"));
b.rect (0, 0, b.width, b.height)



//for-loop

for (var i = 0; i< 20; i++){
  //befehle

//Random Size
var size = b.random (5,70);


// Random Position on Page
var x = b.random (size /2,b.width - size/2);
var y = b.random (size /2,b.height- size/2);


b.fill (red, green, blue);

//Random Color
var red = b.random (0,255);
var green = b.random (0,255);
var blue = b.random (0,255);

b.line (x,y, b.width/2, b.height/2)

var ellipse = b.ellipse ( x, y, size, size);
    b.opacity (ellipse, 80)



}





}

b.go();