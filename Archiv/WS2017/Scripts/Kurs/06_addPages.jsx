//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {

  // Script, das über mehrere Seiten läuft

  b.clear(b.doc());

  b.noFill();

  var pageCount = 5;
  var circleCount = 20;

  for (var j = 0; j < pageCount; j++) {

    // in der ersten Runde müssen wir keine neue Seite hinzufügen, denn die erste Seite ist schon vorhanden
    if(j > 0) {
      b.addPage();
    }


    for(var i = 0; i < circleCount; i++) {

      var x = b.random(0, b.width);
      var y = b.random(0, b.height);
      var size = b.random(10, 50);

      b.ellipse(x, y, size, size);

    }

  }


}

b.go();
