// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  b.clear( b.doc() );
  b.units( b.MM );

  b.noFill();

  var size = 50;
  var xStep = 2;
  var yStep = 1;


  for(var j = 0; j < 5; j++) {

    var xPos = b.random( 0, b.width );
    var yPos = b.random( 0, b.height );

    var loops = b.random( 5, 60 );
    b.println("Loops: " + loops)

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
