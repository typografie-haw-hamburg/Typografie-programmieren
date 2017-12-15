// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  b.revert();
  b.units(b.MM);

  b.noStroke();

  b.textSize(48);

  var tf = b.text(b.LOREM, 20, 20, 160, 100);
  var mask = b.rect(40, 20, 40, 100);

  intersectObjects(tf, mask);
}

b.go();


function intersectObjects(object, mask) {
  var outlines = object.createOutlines(true)[0];

  if(outlines instanceof Group) {
    while(outlines.polygons.length > 1){
      outlines.polygons[0].addPath(outlines.polygons[1]);
    }
    var id = b.millis().toString();
    outlines.polygons[0].name = id;

    outlines.ungroup();

    outlines = b.doc().polygons.item(id);
  }

  mask.intersectPath(outlines);

  return outlines;
}
