// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  b.clear( b.doc() );
  b.units( b.MM );
  b.size(100, 100);


  var tf = b.text(b.LOREM + " " + b.LOREM + " " + b.LOREM, 0, 0, 100, 100);

  // Liste von Wortobjekten
  var myLines = b.lines( tf );

  for(var i = 0; i < myLines.length; i++) {

    b.typo(myLines[i], "skew", i * 3);

  }

}

b.go();
