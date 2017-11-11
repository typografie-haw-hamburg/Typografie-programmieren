// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  b.clear( b.doc() );
  b.units( b.MM );
  b.noStroke();

  b.size(200, 200);

  var loops = 20;
  var step = b.height / loops;
  var colorStep = 255 / loops;

  b.println(colorStep);

  // Horizontale Reihe
  for(var j = 0; j < loops; j++) {

    // Senkrechte Reihe
    for(var i = 0; i < loops; i++) {

      b.fill(i * colorStep, 0, j * colorStep);
      b.ellipse( step / 2 + j * step, i * step + step / 2, step - 2, step - 2 );

    }


  }


}

b.go();
