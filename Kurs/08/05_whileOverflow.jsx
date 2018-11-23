// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {

  clear(doc());

  var tf = text(LOREM, 50, 50, 100, 150);

  var pointSize = 12;

  // Text wird so lange vergrößert, bis er nicht mehr in den Textrahmen passt
  while(tf.overflows === false) {

    pointSize++;
    typo(tf, "pointSize", pointSize);

  }

  // dann wird die Textgröße wieder um einen Punkt herabgesetzt, damit der Text in den Textrahmen passt
  pointSize--;
  typo(tf, "pointSize", pointSize);

}