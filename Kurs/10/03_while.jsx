// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

// Textgröße exakt an Textrahmen anpassen

function draw() {

  b.clear( b.doc() );
  b.units( b.MM );

  var tf = b.text("Banana", 50, 50, 100, 38);
  var textSize = 3;

  while( tf.overflows == false ) {

    textSize++;
    b.typo(  tf , "pointSize", textSize );

  }

  textSize--;
  b.typo(  tf , "pointSize", textSize );

}

b.go();
