﻿// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";


// how to apply a characterStyle to some text


function draw() {

  b.clear( b.doc() );

  // save the document in a variable, we need it later to find our style
  var doc = b.doc();
  var tf = b.text("This is my characterStyle.", 100, 100, 200, 200);
  var words = b.words(tf);


  // save our style in a variable, the non-basil-way :(
  var myStyle = doc.characterStyles.item("myCharacterStyle");


  // write our style to the property of our text, e.g. appliedCharacterStyle or appliedParagraphStyle
  words[3].appliedCharacterStyle = myStyle;

}

b.go();
