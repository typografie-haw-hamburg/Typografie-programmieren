// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

// random function does not behave really randomly at all in some environments
// at some iMac on CC2017 it only produced values between 0 and 2 (or so)
// when b.revert() was replaced by b.clear( b.doc() ) again, it started working again
// tested with an unsaved doc, so after b.revert() it always got re-created from scratch
// possibly b.random() always produces similar values right after doc creation?

function draw() {

  b.revert();
  b.units( b.MM );

  b.rectMode( b.CENTER );

  var x = b.width / 2;
  var y = b.height / 2;

  var randomNumber = b.random(0, 10);
  b.println(randomNumber);


  if( randomNumber < 5 ) {

    b.fill(255, 0, 0);
    b.ellipse(x, y, 80, 80);

  } else {

    b.fill(0, 0, 255);
    b.rect(x, y, 80, 80);

  }

}

b.go();
