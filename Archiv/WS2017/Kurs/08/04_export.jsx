// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  b.clear(b.doc());
  b.units(b.MM);

  for(var j = 0; j < 20; j++){

    for(var i = 0; i < 40; i++) {
      var x = b.random(b.width);
      var y = b.random(b.height);
      var s = b.random(20, 80);

      b.fill(b.random(255), b.random(255), b.random(255));

      b.ellipse(x, y, s, s);
    }

    // Speichert die PDFs in einem Order "Bildexport" neben dem InDesign-Dokument
    b.savePDF("Bildexport/Test" + (j + 1) + ".pdf", false);

    b.clear(b.doc());
  }


}

b.go();
