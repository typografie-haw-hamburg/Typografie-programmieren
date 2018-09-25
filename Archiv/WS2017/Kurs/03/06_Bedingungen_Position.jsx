// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  b.clear(b.doc());
  b.units( b.MM );

  b.rectMode( b.CENTER );

  for(var i = 0; i < 40; i++) {

  var randomNumber = b.random(0, 10);

    var x = b.random(0, b.width);
    var y = b.random(0, b.height);

    if( y < b.height / 2) {
      b.fill(255, 0, 0);
    } else {
      b.fill(0, 0, 255);
    }

    if( randomNumber < 5 ) {
      b.ellipse(x, y, 40, 40);
    } else {
      b.rect(x, y, 40, 40);
    }

  }

}

b.go();
