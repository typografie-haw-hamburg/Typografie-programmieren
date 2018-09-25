// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";


// how to arrange items in front or behind each other


function draw() {

  b.clear(b.doc());

  var rows = 5;
  var columns = 9;
  var rectWidth = 300;
  var rowStep = b.height / rows;
  var horStep = (b.width - rectWidth) / (columns - 1);
  var vertStep = 10;

  for (var i = 0; i < rows; i++) {
    var startColor = b.color(b.random(255), b.random(255), b.random(255));
    var endColor = b.color(b.random(255), b.random(255), b.random(255));

    for (var j = 0; j < columns; j++) {
      var color = b.lerpColor(startColor, endColor, (1 / (columns - 1) * j));
      b.fill(color);

      var rect = b.rect(j * horStep, j * vertStep + i * rowStep, 300, 80);
      rect.name = i + "_" + j;
    }
  }

  // bring an item to the front
  var rect1 = b.nameOnPage("0_5");
  rect1.bringToFront();

  // send an item to the back
  var rect2 = b.nameOnPage("1_5");
  rect2.sendToBack();

  // bring an item forward one step
  var rect3 = b.nameOnPage("2_5");
  rect3.bringForward();

  // send an item backward one step
  var rect4 = b.nameOnPage("3_5");
  rect4.sendBackward();

  // bring an item in front of a certain other item
  // the same works with sendToBack()
  var rect5 = b.nameOnPage("4_5");
  var rect6 = b.nameOnPage("4_7");
  rect5.bringToFront(rect6);


  // make the stroke of the moved items red, so they are better to see
  for (var i = 0; i < rows; i++) {
    var rect = b.nameOnPage(i + "_5");
    rect.strokeColor = b.color(255, 0, 0);
  }


}

b.go();
