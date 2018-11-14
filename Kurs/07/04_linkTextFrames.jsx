// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {

  clear(doc());

  var myFile = file("~/Desktop/data/Eisenach.txt");
  var myString = loadString( myFile );

  var tf1 = text(myString, 20, 20, 100, 100);
  var tf2 = text("", 20, 150, 100, 100);

  linkTextFrames(tf1, tf2);

}