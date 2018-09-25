// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";


// how to apply a characterStyle to some text


function draw() {

  // close open doc without saving
  b.close(false);

  var tf = b.text(b.LOREM, 0, 0, 200, 200);

  // get layer of text frame and rename it
  var textLayer = tf.itemLayer;
  textLayer.name = "Text";

  // create two new layers
  b.layer("Images");
  b.layer("Shapes");


  // move text layer to the front
  textLayer.move(LocationOptions.AT_BEGINNING);

  // for other moving options see: http://www.indesignjs.de/extendscriptAPI/indesign8/#Layer.html#d1e175084__d1e175559

}

b.go();
