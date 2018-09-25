// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  b.clear( b.doc() );
  b.units( b.MM );

b.fill(0, 0, 0);
b.rect(0, 0, b.width, b.height);
var x = 10;
var y = 10;
var random = b.random(5)
var rotation = random




var blue = b.color(0,0,255);
b.noStroke();


//Nees Textblock
b.fill(255,255,255)
b.textAlign(Justification.CENTER_ALIGN, VerticalJustification.CENTER_ALIGN);
b.textSize(76);
b.textFont("GT America","Expanded Ultra Light");
b.text("NEES",0,255,b.width,50);


// Quadrate & Gradient
for( j=0; j<25; j++){

  for( i=0; i<19; i++){

    b.rotate ( rotation + i * 10);

    var red = b.color(255 - j * 10, 0, 0 + i * 10);

    b.rectMode(b.CENTER);
    b.fill(red);
    b.rect(15 + i * 10,15 + j * 10,10,10);

  }
}

}

b.go();