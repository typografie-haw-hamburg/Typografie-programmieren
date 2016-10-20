//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {

b.clear (b.doc());

//background
var backgroundcolor = b.color( b.random (255));
b.fill ( backgroundcolor);
b.rect ( 0, 0, b.width, b.height);

//random lines
for( var i = 0; i < 40; i++){

  var color1 = b.color( b.random( 255), b.random( 255), b.random( 255));
  var color2 = b.color( b.random (255), b.random (255), b.random (255));

  var x1 = b.random ( b.width)
  var y1 = b.random ( b.height)
  var x2 = b.random ( b.width)
  var y2 = b.random ( b.height)

  b.stroke( color1, color2);
  b.strokeWeight( 3);
  
  b.line( x1, y1, x2, y2);

//text

  b.fill( b.gradient( color1, color2));
  b.textSize( 60 );
  b.textFont( "Fortescue Pro", "Bold");

  b.text( "A", x2 + i * 5, y2 + i * 5, 400, 100); 
}

}

b.go();