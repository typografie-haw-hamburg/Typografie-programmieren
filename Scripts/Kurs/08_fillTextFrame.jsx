//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {
  // vergrößert die Punktgröße des ausgewählten Textrahmens, bis der Textrahmen gefüllt ist

  var tf = b.selection();

  var myPointSize = tf.parentStory.pointSize;


  while(tf.overflows == false) {
    myPointSize++;
    b.typo(tf, "pointSize", myPointSize);
  }

  myPointSize--;
  b.typo(tf, "pointSize", myPointSize);

}

b.go();
