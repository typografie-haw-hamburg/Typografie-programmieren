// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";


// how to move a graphic within an image frame


function draw() {

  b.clear( b.doc() );

  // import image
  var img = b.image("image.jpg", 0, 0);

  // save graphic of the frame in variable
  var graphic = img.graphics[0];

  // move graphic in the frame
  b.itemX(graphic, 50);
  b.itemY(graphic, 50);

}

b.go();
