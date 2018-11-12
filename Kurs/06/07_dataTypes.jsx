// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {

  // Number
  var myNumber = 3;
  var myFloatNumber = 4.5;
  var myNegativeNumber = -5;

  // String
  var myName = "Timo";

  // Array
  var myArray = ["bli", "bla", "blub"];
  var myNumbers = [5, 6, 7, 8];
  var myObjects = [myRect, myTextFrame];

  // Booleans
  var myTruth = true;
  var myBla = false;

  // Object
  // siehe nächstes Script

  // basil-Objects
  var tf = text(LOREM, 50, 50, 50, 50);
  // z.B. nützlich für
  opacity(tf, 50);
  typo(tf, "pointSize", 24);
  typo(tf, "underline", true);

  var myImage = image(...);
  var myFile = file(...);

}