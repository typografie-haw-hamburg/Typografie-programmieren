//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {

  b.clear(b.doc());

  b.textFont('Helvetica\tBold');
  b.textSize(22);

  var lorem = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient.  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient";

  var firstTextFrame = b.text(lorem, 50, 50, 100, 100);

  var previousTextFrame = firstTextFrame;
  var counter = 0;

  while ( previousTextFrame.overflows == true ) {
    b.addPage();
    var textFrame = b.text('', 50, 50, 100, 100);
    b.linkTextFrames(previousTextFrame, textFrame);

    previousTextFrame = textFrame;
  }

}

b.go();
