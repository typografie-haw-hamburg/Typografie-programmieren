//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {

b.clear (    b.doc()   );

b.colorMode(b.RGB);


b.noStroke ();

for (var i = 0; i < 180; i++) {


  var rotation = b.radians (1);
  b.rotate (rotation);
  
  b.stroke (255,255,255);
  var ellipse = b.ellipse (b.width/2,b.height/2, 300 - i, 400 - i);
  b.image ('Hahn.jpg', ellipse, 50, 500, 666);

  // Striche Weiß
  b.strokeWeight (1 - i * 0.005);
  b.stroke ( 255,255,255) ;
  b.line (0, b.height/2, b.width, b.height/2)


  // // Striche Schwarz 171 in den Loop eingeben
  // var rotation = b.radians (1.1);
  // b.rotate (rotation);

  // b.strokeWeight (1 - i * 0.005);
  // b.stroke ( 0,0,0) ;
  // b.line (0, b.height/2, b.width, b.height/2)
  // }
}

}

b.go();
