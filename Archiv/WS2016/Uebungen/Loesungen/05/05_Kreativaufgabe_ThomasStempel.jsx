//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {
  //b.clear(b.doc())

var sel = b.selection();
var words = b.words(sel);

for(var i = 0; i < words.length; i++){
  b.typo(words[i], "baselineShift", b.random(-5, 35));
  b.typo(words[i], "pointSize", b.random(5, 35));
  b.typo(words[i], "verticalScale", b.random(100, 270));
} 


}

b.go();
