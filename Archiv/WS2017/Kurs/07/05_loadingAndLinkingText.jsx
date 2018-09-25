// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  b.clear( b.doc() );
  b.units( b.MM );

  // Text aus Datei laden
  var cageText = b.loadString("lectureOnSomething.txt");

  // geladenen String in Textrahmen setzen
  var tfa = b.text(cageText, 20, 20, 50, 50);

  var tfb = b.text("", 80, 80, 50, 50);

  b.linkTextFrames( tfa  , tfb  );

}

b.go();
