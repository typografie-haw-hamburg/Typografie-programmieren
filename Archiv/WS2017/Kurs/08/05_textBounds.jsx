// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  b.clear(b.doc());
  b.units(b.MM);

  b.noStroke();
  b.fill(0);

  var cage = b.loadString("lectureOnSomething.txt");

  var tf = b.text(cage, 50, 50, 130, 200);

  // Text in einzelne Wörter zerlegen
  var words = b.words( tf );

  b.fill(255, 0, 0);

  for(var i = 0; i < words.length; i++) {

    if(b.startsWith(words[i].contents, "a")) {

      // vermisst die Abgrenzungen des Worts und speichert in ein Objekt
      // mit Eigenschaften wie .left, .baseline, .height etc.
      var wordBounds = b.bounds( words[i] );

      // Zugriff auf die Eigenschaften
      var x = wordBounds.left;
      var y = wordBounds.baseline;

      b.ellipse(x, y, 2, 2);

    }


  }

}

b.go();
