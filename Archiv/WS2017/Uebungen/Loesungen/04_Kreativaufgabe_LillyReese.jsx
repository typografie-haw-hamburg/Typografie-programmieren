// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {
b.clear( b.doc() );
b.units( b.MM );

var blue = b.color (b.random (0,100), b.random (100,255), b.random (100,255));
var green = b.color (b.random (0,100), b.random (0,255), b.random (0,255));

b.gradientMode(b.LINEAR)
b.fill (b.gradient (blue,green, "bluegreen"));
b.rect (0, 0, b.width, b.height)


for (var i = 0; i < 14; i++){

  var color2 = b.random (0,255);
  var color3 = b.random (0,255);

  b.fill (0,color2,color3);


  b.textSize (20 + i* 10);
  b.textAlign(Justification.LEFT_ALIGN);
  b.textFont ("DIN", "Bold");
  b.text ("HEADLINE", 0, i * 20, 400, 400);

  }










}

b.go();