// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {
  b.units(b.MM);

  b.clear(b.doc());

b.fill( b.color( b.random(255), b.random(255), b.random(255) ) );
b.rect(0,0,b.width,b.height);


b.stroke( b.color( b.random(255), b.random(255), b.random(255) ) );



for(var i = 0; i < 50; i++){

  var x1 = b.random(0,b.width);
  var x2 = b.random(0,b.width);
  var x3 = b.random(0,b.width);

  var y1 = b.random(0,b.height);
  var y2 = b.random(0,b.height);
  var y3 = b.random(0,b.height);


  b.line (x1, y1, x2, y2);
  b.line (x2, y2, x3, y3);
  b.line (x3, y3, x1, y1);

}

b.stroke( b.color( b.random(255), b.random(255), b.random(255) ) );
b.noFill();

for(var i = 0; i < 50; i++){

  var x4 = b.random (10,b.height/2);
  var x5 = b.random (0,100);

  var y4 = b.random (40,b.height/2);
  var y5 = b.random (0,100);


 b.rect(x4,y4,x5,y5);

}


}

b.go();
