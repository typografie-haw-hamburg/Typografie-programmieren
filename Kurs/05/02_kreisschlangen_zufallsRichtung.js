// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  b.clear( b.doc() );
  b.units( b.MM );

  b.noFill();

  var size = 50;


  for(var j = 0; j < 5; j++) {
    // random direction
    var xStep = b.random(-2, 2);
    var yStep = b.random(-2, 2);

    // random starting point
    var xPos = b.random( 0, b.width );
    var yPos = b.random( 0, b.height );

    // random length
    var loops = b.random( 5, 60 );

    if(loops < 30) {
      b.stroke(0, 0, 255);
    } else {
      b.stroke(255, 0, 0);
    }

    for(var i = 0; i < loops; i++) {

      b.ellipse(xPos + i * xStep, yPos + i * yStep , size, size);

    }

  }

}

b.go();
