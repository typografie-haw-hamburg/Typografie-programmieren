// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  b.clear( b.doc() );
  b.units( b.MM );

  var pageCount = 10;
  var lineLength = 50;

  var step = b.height / (pageCount - 1);
  var colorStep = 255 / (pageCount - 1);

  b.pageCount(1);
  b.page(1);

  b.strokeWeight(5);

  for(var i = 0; i < pageCount; i++) {


    b.stroke(i * colorStep, 0, 0);
    b.line(b.width - lineLength, i * step, b.width, i * step);


    if(i != pageCount - 1) {
      b.addPage();
    }

  }



}

b.go();
