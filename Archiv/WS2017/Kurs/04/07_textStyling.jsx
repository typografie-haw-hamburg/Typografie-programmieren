// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  b.clear( b.doc() );
  b.units(b.MM);

  b.fill(255, 0, 0);

  var size = b.random(10, 30);

  b.textSize( size );
  b.textFont("Arial");

  var myText = b.text(b.LOREM, 0, 0, 150, b.height);

  var randomSkew = b.random(-40, 40);
  var randomScale = b.random(80, 400);

  // die Namen der Eigenschaften für b.typo() findet ihr im basil.js b.typo Cheatsheet
  // http://basiljs.ch/wp-content/uploads/2013/03/basiljs_b_typo_cheatsheet_v0_2.pdf
  b.typo(myText, "skew", randomSkew);
  b.typo(myText, "horizontalScale", randomScale);
  b.typo(myText, "underline", true);

}

b.go();
