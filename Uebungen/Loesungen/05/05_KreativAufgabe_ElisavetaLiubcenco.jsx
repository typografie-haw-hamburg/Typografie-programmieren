//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {

b.clear(b.doc());

  var text = b.loadString("lectureOnSomething.txt")
  

var textFrame = b.text(text, 50, 50, b.width-100, b.height);

  var words = b.words(textFrame);


  for (var i = 0; i < words.length; i++) {

var shift = b.random(-8,8);

    b.typo(textFrame,'pointSize', 30);
    b.typo(words[i], "horizontalScale", b.random(30, 90) );
    b.typo(words[i],'baselineShift',shift);
    b.typo(words[i], 'fillColor', b.color(255,0,0));

  }

  

}


b.go();
