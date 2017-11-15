// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

// Alternative zum vorherigen Script, die die Linien zu einem bereits bestehenden Dokument hinzufügt

function draw() {

  // wenn mit einem bestehenden Dokument gearbeitet wird, darf nicht b.clear(b.doc()) aufgerufen werden
  b.units( b.MM );

  // ruft die Seitenzahl des aktuellen Dokuments ab
  var pages = b.pageCount();
  var lineLength = 30;

  var step = b.height / (pages - 1);
  var colorStep = 255 / (pages - 1);

  b.page(1);

  b.strokeWeight(5);

  for(var i = 0; i < pages; i++) {

    // springt auf Seite 1, 2, 3 ...
    b.page(i + 1);

    b.stroke(i * colorStep, 0, 0);
    b.line(b.width - lineLength, i * step, b.width, i * step);

  }



}

b.go();
