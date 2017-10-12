// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  b.clear( b.doc() );
  b.units( b.MM );

  b.rectMode( b.CENTER );

  var randomNumber = b.random(0, 10);


  b.println( randomNumber );

  if( randomNumber < 5 ) {

    b.fill(255, 0, 0);
    b.ellipse(b.width / 2, b.height / 2, 80, 80);

  } else {

    b.fill(0, 0, 255);
    b.rect(b.width / 2, b.height / 2, 80, 80);

  }


}

b.go();
