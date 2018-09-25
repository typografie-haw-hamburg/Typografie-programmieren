// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  b.clear( b.doc() );
  b.units( b.MM );


  var input = prompt ("enter password", "ein wenig, sad, sehr sad, sad sad sad 2002");



  var size = 200;
  var x = b.width /2
  var y = b.height /2

  b.fill(0);
  b.rect (0,0,b.width,b.height);

  b.fill (255);
  b.textFont ("Akzidenz-Grotesk Pro", "Regular Extended");
  b.textSize(b.random(20,80));
  b.textKerning (b.random(500));
  b.textAlign (Justification.CENTER_JUSTIFIED);
  b.text (input, 0, b.random(b.height), b.width, 100);

  b.stroke(255);
  b.noFill();
  b.strokeWeight (0.3);

  var step = 10
  var cycles = b.random (5,30)


for (var i = 0; i < cycles; i++) {

  b.stroke(255-i*13);
  b.ellipse (x,y, size -i*step,size);
  b.ellipse (x,y, size,size -i*step);
}
  b.stroke(255);
  b.strokeWeight (0.8);
  b.ellipse (x,y, size, size);

}

b.go();
