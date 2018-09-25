// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

 b.clear( b.doc() );
 b.units( b.MM );

 var color1 = b.color(b.random(0, 255), b.random(0, 255), b.random(0, 255));
 var color2 = b.color(b.random(0, 255), b.random(0, 255), b.random(0, 255));

  b.gradientMode(b.RADIAL);
  b.fill(b.gradient(color1, color2, "RandomRadial"));
  b.rect(0, 0, b.width, b.height);

for(var i = 0; i < b.random(0, 2000); i++){

  var size = b.random(2, 100);
  var x1 = b.random(size / 2, b.width - size / 2);
  var y1 = b.random(size / 2, b.width - size / 2);
  var x2 = b.random(size / 2, b.width - size / 2);
  var y2 = b.random(size / 2, b.width - size / 2);

  var red = b.random(0, 15);
  var green = b.random(0, 15);
  var blue = b.random(0, 15);

  var step = b.random(0, 10);

  b.stroke(red, green, blue); // kontur
  b.strokeWeight( b.random(0, 25) );

  b.fill(0);
  b.line(x1 * step, y1 * step, x2, y2);
  b.ellipse(x1, y1 * step, size, size);

 }

}

b.go();
