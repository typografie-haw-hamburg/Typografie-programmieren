// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  b.clear( b.doc() );
  b.units(b.MM);

  var textFrameWidth = 120;
  var textFrameHeight = 20;

  b.textAlign(Justification.CENTER_ALIGN);

  for(var i = 0; i < 20; i++) {

    var x = b.random(b.width - textFrameWidth);
    var y = b.random(b.height - textFrameHeight);


    b.textSize(6 + i * 2)
    b.text("Textrahmen Nr. " + (i + 1), x, y, textFrameWidth, textFrameHeight);

  }

}

b.go();
