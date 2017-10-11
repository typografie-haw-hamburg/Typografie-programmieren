// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  b.clear( b.doc() );
  b.units(b.MM);

  b.noFill();

  //background
  b.fill (0,0,0);
  b.rect (0,0,b.width,b.height);

  //body
  b.fill (255,255,255);
  b.ellipse (b.width/2,b.height/2+75,125,125); // bot
  b.ellipse (b.width/2,b.height/2,100,100); // mid
  b.ellipse (b.width/2,b.height/2-75,75,75); // top

  b.fill (0,0,0);

  //eyes
  b.ellipse (b.width/2+10,b.height/2-90,10,10);
  b.ellipse (b.width/2-10,b.height/2-75,10,10);

  //mouth
  b.line (b.width/2-20,b.height/2-65,b.width/2+10,b.height/2-60);

  //details
  b.ellipse (b.width/2-2.5,b.height/2,5,5);
  b.ellipse (b.width/2+5,b.height/2+15,5,5);
  b.ellipse (b.width/2,b.height/2-15,5,5);

  //nose
  b.noStroke ();
  b.fill (255,150,0);
  b.beginShape(b.CLOSE);
  b.vertex(120, 70);
  b.vertex(160, 75);
  b.vertex(120, 80);
  b.endShape();

}

b.go();