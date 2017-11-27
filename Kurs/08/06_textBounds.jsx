// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  b.clear(b.doc());
  b.units(b.MM);

  b.fill(0);

  var cage = b.loadString("lectureOnSomething.txt");

  var tf = b.text(cage, 50, 50, 130, 200);

  // Text in einzelne Wörter zerlegen
  var words = b.words( tf );

  b.noFill();
  b.stroke(255, 0, 0);

  b.beginShape();

  for(var i = 0; i < words.length; i++) {

    if(b.startsWith(words[i].contents, "s")) {

      // vermisst die Abgrenzungen des Worts und speichert in ein Objekt
      // mit Eigenschaften wie .left, .baseline, .height etc.
      var wordBounds = b.bounds( words[i] );

      // Beispielswerte
      // wordBounds.baseline: 56.8923740
      // wordBounds.left: 123.987097
      // wordBounds.height: 5.73689
      // wordBounds.width: 20.982374509

      // Zugriff auf die Eigenschaften
      var x = wordBounds.left + wordBounds.width / 2;
      var y = wordBounds.baseline;
      var s = wordBounds.width + 2;

      b.vertex( x, y );

    }

  }

  b.endShape();

}

b.go();
