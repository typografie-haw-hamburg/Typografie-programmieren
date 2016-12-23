//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {

  b.clear(  b.doc()  );

  var textFrame = b.text("Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.", 100, 100, 400, 200);

  var words = b.words(textFrame);


  for (var i = 0; i < words.length; i++) {

    b.typo(words[i], "baselineShift", b.random(-5, 5));

  }

}

b.go();
