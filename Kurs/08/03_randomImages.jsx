// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  b.clear(b.doc());
  b.units(b.MM);

  b.noStroke();
  b.page(1);
  b.pageCount(1);

  b.fill(255, 0, 0);

  var pageCount = 20;
  var scaleFactor = 0.3;

  for(var i = 0; i < pageCount; i++) {

    var randomIndex = b.floor( b.random(1, 107) );

    // Bild importieren
    var myImage = b.image("robo_" + randomIndex + ".png" , 0, 0);

    var w = b.itemWidth( myImage );
    var h = b.itemHeight( myImage );

    // Bild transformieren
    b.transformImage( myImage, b.width - w * scaleFactor, b.height - h * scaleFactor, w * scaleFactor, h * scaleFactor);

    // jedes zweite Bild wird mit einem Rechteck rot eingefärbt
    if( i % 2 == 1) {
      var rect = b.rect(b.width - w * scaleFactor, b.height - h * scaleFactor, w * scaleFactor, h * scaleFactor);
      b.blendMode(rect, BlendMode.MULTIPLY)
    }

    if(i != pageCount - 1) {
      b.addPage();
    }

  }


}

b.go();
