// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  b.clear( b.doc() );
  b.units( b.MM );

  b.noFill();

  b.stroke(255, 0, 0);

  for(var i = 0; i < 30; i++){
    var red = b.random(0, 255);
    var green = b.random(0, 255);
    var blue = b.random(0, 255);

    b.fill(red, green, blue);

    var size = b.random(20, 60);

    var x = b.random(size / 2, b.width - size / 2);
    var y = b.random(size / 2, b.height - size / 2);

    b.ellipse(x, y, size, size);

  }

}

b.go();
