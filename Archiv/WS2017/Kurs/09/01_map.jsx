// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  b.clear( b.doc() );
  b.units( b.MM );

  for(var i = 0; i < 40; i++) {

    var x = b.random(b.width);
    var y = b.random(b.height);
    var size = b.random(10, 50);

    // b.map(Eingabewert, minEingang, maxEingang, minAusgang, maxAusgang);

    // je weiter unten ein Kreis, desto höher sein Rotwert
    var red = b.map( y, 0, b.height, 0, 255);

    // je kleiner ein Kreis, desto höher sein Blauwert
    var blue = b.map( size, 10, 50, 255, 0);


    b.fill( red, 0, blue);
    b.ellipse(x, y, size, size);

  }


}

b.go();
