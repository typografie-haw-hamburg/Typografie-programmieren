// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {

  clear(doc());

  var myFile = selectFile();
  var myString = loadString(myFile);

  text(myString, 50, 50, 100, 100);

}