// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  b.clear( b.doc() );
  b.units( b.MM );

  b.noFill();

  // wir springen auf Seite 1
  b.page(1);

  // Seitenanzahl wird auf 1 gesetzt
  b.pageCount(1);

  // neue, geplante Seitenanzahl
  var pages = 5;

  for(var j = 0; j < pages; j++) {

    for(var i = 0; i < 20; i++) {

      var x = b.random( 0, b.width );
      var y = b.random( 0, b.height );
      var size = b.random( 20, 40);
      var corner = b.random( 0, 10);

      b.rect(x, y, size, size, corner);

    }

    if(j != pages - 1) {
      // neue Seite wird hinzugefügt
      b.addPage();
    }

  }


}

b.go();
