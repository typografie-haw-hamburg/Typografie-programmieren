// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  b.clear( b.doc());
  /*
  Justification.AWAY_FROM_BINDING_SIDE
  Justification.CENTER_ALIGN
  Justification.CENTER_JUSTIFIED
  Justification.FULLY_JUSTIFIED
  Justification.LEFT_ALIGN
  Justification.RIGHT_ALIGN
  Justification.RIGHT_JUSTIFIED
  Justification.TO_BINDING_SIDE

  VerticalJustification.BOTTOM_ALIGN
  VerticalJustification.CENTER_ALIGN
  VerticalJustification.JUSTIFY_ALIGN
  VerticalJustification.TOP_ALIGN
   */

  var sayThis = "SYSTEM";
  var changeCol = 100;
  var changeVal = 10;
  var box;
  var strokeW = 0.9;

  b.fill(changeCol);
  b.textFont("Arial", "Bold");
  b.textSize(48);

  box = b.text(sayThis, 0, 0, b.width, 80);
  changeCol -= changeVal;
  box.strokeWeight = strokeW;

  b.fill(changeCol);
  b.textAlign(Justification.CENTER_ALIGN);
  box = b.text(sayThis, 0, 100, b.width, 80);
  changeCol -= changeVal;
  box.strokeWeight = strokeW;

  b.fill(changeCol);
  b.textAlign(Justification.RIGHT_ALIGN);
  box = b.text(sayThis, 0, 200, b.width, 80);
  changeCol -= changeVal;
  box.strokeWeight = strokeW;

  b.fill(changeCol);
  b.textAlign(Justification.FULLY_JUSTIFIED);
  box = b.text(sayThis, 0, 400, b.width, 80);
  changeCol -= changeVal;
  box.strokeWeight = strokeW;

  b.fill(changeCol);
  b.textAlign(Justification.FULLY_JUSTIFIED, VerticalJustification.CENTER_ALIGN);
  box = b.text(sayThis, 0, 400, b.width, 80);
  changeCol -= changeVal;
  box.strokeWeight = strokeW;

  b.fill(0, 0, 255);
  b.textAlign(Justification.FULLY_JUSTIFIED, VerticalJustification.BOTTOM_ALIGN);
  box = b.text(sayThis, 0, 500, b.width, 80);
  box.strokeWeight = strokeW;

  for( var i = 0; i < 100; i++){

    var x = b.random(b.width);
    var y = b.random(b.height/0.3);

    var size = b.random(0,50);

    b.line(x, 0, x, y);

  }

  for( var i = 0; i < 100; i++){

    b.fill(0, 0, 255);
    b.stroke(0);

    var x1 = b.random(b.width);
    var y1 = b.random(b.height);

    var size = b.random(0, 30);

    b.ellipse(x1 + i, y1 + i, size, size);

  }
}

b.go();
