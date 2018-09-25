// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  b.clear( b.doc() );
  b.units( b.MM );
  b.fill(0, 0, 0);
  b.rect(0, 0, b.width, b.height);

for(var i = 0; i < 50; i++){
  var x1 = b.random(10, b.width);
  var x2 = b.random(10, b.width);
  var y1 = b.random(10, b.height);
  var y2 = b.random(10, b.height);

  b.stroke(255, 255, 255);


  if( y2 < 50){

    b.strokeWeight(10);
  b.line(x1, y2, x2, y2);
  }else if( y2 < 100){

    b.strokeWeight(8);
  b.line(x1, y2, x2, y2);
  }
  else if( y2 < 150){

    b.strokeWeight(6);
  b.line(x1, y2, x2, y2);
  }else if( y2 < 200){

    b.strokeWeight(4);
  b.line(x1, y2, x2, y2);
  }
  else{

    b.strokeWeight(2);
  b.line(x1, y2, x2, y2);
  }





  }
}

b.go();
