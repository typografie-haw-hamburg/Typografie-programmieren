//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {

b.clear(b.doc());

  var textFrame = b.text("Lorem ipsum dolor sit amet, consetetur", 100, 100, 400, 200);

  var words = b.characters(textFrame);

for (var i = 0; i < words.length; i++) {

 var angle = b.random(-90, 90)

    b.typo(words[i], "characterRotation", angle );

  }

}





b.go();
