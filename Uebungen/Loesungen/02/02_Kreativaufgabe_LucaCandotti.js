//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {

  b.clear ( b.doc() );

  var xmid = b.width/2;
  var ymid = b.height/2;

  // Zufällige Anordnung von drei Strichen übereinander
  for ( var i = 0; i < 50; i++ ) {

    var x1 = b.random( 0, b.width );
    var y1 = b.random ( 0, b.height );
    var x2 = b.random ( 0, b.height );
    var y2 = b.random( 0, b.width );

    var size = 20;

    var randomizer = b.random(4,8);

    b.stroke( 0 );

    b.strokeWeight ( randomizer );
    b.line ( x1, y1, x2, y1 ); 

    b.strokeWeight ( randomizer / 2 ); 
    b.line ( x1, y1 - randomizer * 2, x2, y1 - randomizer * 2 ); 

    b.strokeWeight ( randomizer / 3 ); 
    b.line ( x1, y1 - randomizer * 4, x2, y1 - randomizer * 4 );

  }

  // Kreis mittig mit Vergrößerung
  for ( var j = 0; j < 110; j++ ) {

    b.noFill();
    b.stroke( 0, 0, 255 ); 
    b.strokeWeight(1.5);
    var kreiszaehler = 10; 

    b.stroke( 255 ); 
    var kreis = b.ellipse( xmid, ymid, kreiszaehler*j, kreiszaehler*j );

  }

}

b.go();