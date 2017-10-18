// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";


function draw() {

 b.clear( b.doc() );
 b.units( b.MM );

 b.fill(0);
 b.rectMode( b.CENTER );
 b.strokeWeight( b.random(0, 20));

 for(var i = 0; i < 100; i++) {

 var color1 = b.color(b.random(100, 255), b.random(100, 255), b.random(100, 255));
 var color2 = b.color(b.random(100, 255), b.random(100, 255), b.random(100, 255));

 var x = b.random(0, 210);
 var y = b.random(0, 297);
 var size = b.random(0, 100);

 var gradient = b.gradient(color1, color2);

if( size < 80) {

 b.fill( gradient ); // verlauf auf kreis

 b.ellipse(x, y, size, size);

} else {

 b.fill(0);

 b.rect(x, y, size, size);

}

}

}

b.go();