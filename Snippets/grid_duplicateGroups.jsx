//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";


// demonstrates how to speed up the drawing of many rectangles by grouping rows and duplicating them


function draw() {

  b.clear(  b.doc()  );

  b.noFill();

  var allRects = [];

  var rectCount = 30;
  var rowCount = 30;

  var rectSize = 15;

  // draw one row of rects
  for (var i = 0; i < rectCount; i++) {
    var myRect = b.rect(rectSize * i, 0, rectSize, rectSize);
    allRects.push(myRect);
  }

  // group all rects of the row into one group
  var myGroup = b.group(allRects);

  // duplicate the group multiple times
  for (var i = 1; i < rowCount; i++) {
    var myDuplicate = b.duplicate(myGroup);
    b.itemY(myDuplicate, i * rectSize);
  }

}

b.go();
