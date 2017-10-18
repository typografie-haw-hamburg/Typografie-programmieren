// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  b.clear(b.doc());
  b.units( b.MM );



b.rect(0,0,b.width,b.height);


  b.noFill();
  b.stroke(255,255,255);



b.beginShape();



  for(var i = 0; i < 40; i++) {

    var x = b.random(0, b.width);
    var y = b.random(0, b.height);
    b.vertex(x, y);

 var randomNumber = b.random(0, 10);


  b.println( randomNumber );

  if( randomNumber < 5 ) {


    var x = b.random(0, b.width);
    var y = b.random(0, b.height);
    var size = b.random(2, 6);
  }
  }

  b.endShape();
  var ax=b.random(20,b.width-20);
  var ay=b.random(20,b.height-20);
  var asize= b.random(100,200)

    b.fill(255,255,255);
    var circle = b.ellipse(ax,ay,asize,asize);

  b.blendMode(circle, BlendMode.DIFFERENCE);
}

b.go();