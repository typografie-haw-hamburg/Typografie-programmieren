// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  b.clear( b.doc() );
  b.units( b.MM );

  b.noFill();

  for(var i = 0; i < 20; i++){

    var x = b.random(0, b.width);
    var y = b.random(0, b.height);

    b.ellipse(x, y, 80, 80);

  }

}

b.go();
