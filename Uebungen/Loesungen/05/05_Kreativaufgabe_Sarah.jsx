//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {
b.clear (b.doc());

//Text
b.textSize (60);
var myText = b.loadString ("poem.txt");
var textframe = b.text (myText, 0,0,b.width,b.height);
var words = b.words (textframe);
b.textFont ("Superclarendon","Black");

var color1 = b.color(0,0,255);
var color2 = b.color(255,0,0);

//Kreise um die Wörter
for ( var i = 0; i < words.length; i++) {
  var color1 = i * 4.5;

  for (var j = 0; j < 1; j++){
    var color2 = j  * 4.5;
    b.fill (b.color (color1,0,color2));

    var bounds = b.bounds ( words [i] );
    b.ellipse (bounds.left - 5, bounds.baseline - 10, 30, 30);

    b.noFill ();
    b.strokeWeight (0.22 * i);
    b.ellipse (bounds.left - 5, bounds.baseline - 10, 60,60);
    b.ellipse (bounds.left - 5, bounds.baseline - 10, 40,40);
    b.ellipse (bounds.left - 5, bounds.baseline - 10, 80,80);
    }
  }
}
b.go();
