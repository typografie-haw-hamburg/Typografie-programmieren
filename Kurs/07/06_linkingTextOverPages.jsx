// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  b.clear( b.doc() );
  b.units( b.MM );

  b.pageCount(1);
  b.page(1);

  var pages = 5;

  // Text aus Datei laden
  var cageText = b.loadString("lectureOnSomething.txt");

  var prevTextFrame = b.text(cageText, 50, 50, 50, 50);

  for(var i = 0; i < pages - 1; i++) {
    b.addPage();

    var currentTextFrame = b.text("", 50, 50, 50, 50);
    b.linkTextFrames(prevTextFrame, currentTextFrame);

    prevTextFrame = currentTextFrame;

  }

}

b.go();
