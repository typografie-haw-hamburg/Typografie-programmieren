#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basiljs/bundle/basil.js";


b.colorMode(b.CMYK);
    var white = b.color( 0 ),
        black = b.color( 100 ),
        orange= b.color( 0, 50, 100, 0 );


function draw() {
  b.clear(b.doc());

  snow( 0, 0, b.width, b.height  );
  snowman( b.width/2, b.height/2, b.height/4 ); //  positiion x, y, snowmanHeight

};

b.go();


function snowman( posX, posY, height ) {
  var r = height/3,
      d = r*2;

  b.fill( white );
  b.stroke( black );

  // body
  b.ellipse( posX, posY+d, d*1.5, d*1.5);
  b.ellipse( posX, posY, d*1.2, d*1.2);
  b.ellipse( posX, posY-d, d, d);

  // eyes
  b.fill( black );
  b.ellipse( posX-d*0.1, posY-d*1.2, d*0.2, d*0.2 );  // left
  b.ellipse( posX+d*0.3, posY-d*1.3, d*0.18, d*0.18 );  // right

  //nose
  b.fill( orange );
  b.noStroke();
  for( var i = 1; i<8; i++ ) {
    var v = i*0.015;
    b.ellipse( posX+d*(0.2+v), posY-d*(1.1+v), d*(0.2-v), d*(0.2-v) );  // left
  }

}

function snow( x, y, width, height ) {
  b.noStroke();
  b.fill( black );
  b.rect( x, y, width, height );
  b.fill( white );
  for( var i = 0; i<50; i++) {
    var snowFlake = 10*Math.random();
    b.ellipse(  x + width * Math.random(), y + height * Math.random(), snowFlake, snowFlake);
  }
}

