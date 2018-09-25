// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  b.clear( b.doc() );
  b.units( b.MM );

  var red = b.random(0, 255);
  var green = b.random(0, 255);
  var blue = b.random(0, 255);

  b.println(red + ", " + green + ", " + blue);


  b.fill(red, green, blue);

  var x = b.random(0, b.width);
  var y = b.random(0, b.height);

  var size = b.random(10, 200);

  b.println("Random size: " + size + "mm");

  b.ellipse(x, y, size, size);

}

b.go();
