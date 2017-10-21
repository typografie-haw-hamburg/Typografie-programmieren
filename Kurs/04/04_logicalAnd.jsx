// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  b.clear( b.doc() );
  b.units(b.MM);
  b.rectMode(b.CENTER);

  for(var i = 0; i < 200; i++) {

    var x = b.random(b.width);
    var y = b.random(b.height);

    // im mittleren Drittel der Horizontalen wird alles blau gezeichnet, sonst rot
    if(x > b.width / 3  &&  x < (b.width / 3) * 2) {
      b.fill(0, 0, 255);
    } else {
      b.fill(255, 0, 0);
    }

    // im mittleren Drittel der Vertikalen werden Kreise gezeichnet, sonst Quadrate
    if(y > b.height / 3  &&  y < (b.height / 3) * 2) {
      b.ellipse(x, y, 20, 20);
    } else {
      b.rect(x, y, 20, 20);
    }

  }

}

b.go();
