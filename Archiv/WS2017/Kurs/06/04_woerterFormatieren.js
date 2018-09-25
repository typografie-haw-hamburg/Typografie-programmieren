// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  b.clear( b.doc() );
  b.units( b.MM );


  var tf = b.text(b.LOREM, 0, 0, 100, 100);

  // Liste von Wortobjekten
  var myWords = b.words( tf );

  // einzelne Wörter verändern
  b.typo(  myWords[3] , "skew"     , 24);
  b.typo(  myWords[8] , "pointSize", 45);
  b.typo(  myWords[42], "fillColor", b.color(255, 0, 0));


}

b.go();
