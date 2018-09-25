// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  b.clear( b.doc() );
  b.units( b.MM );

  b.noFill();

  var size = 50;
  var xPos = 60;
  var yPos = 0;

  var step = 60;

  b.ellipse(xPos, yPos * step, size, size);

  yPos++;
  b.println(yPos);

  b.ellipse(xPos, yPos * step, size, size);

  yPos++;
  b.println(yPos);

  b.ellipse(xPos, yPos * step, size, size);

  yPos++;
  b.println(yPos);

  b.ellipse(xPos, yPos * step, size, size);

  yPos++;

  b.ellipse(xPos, yPos * step, size, size);
}

b.go();
