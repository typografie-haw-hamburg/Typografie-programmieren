// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {


  b.clear(b.doc());
  b.units(b.MM);
  b.size(240, 300);
  b.rectMode(b.CENTER);


  var cage = b.loadString("lectureOnSomething.txt");

  var tf1 = b.text(cage, b.width / 2, 75, 80, 142);
  var tf2 = b.text(cage, b.width / 2, 220, 80, 142);

  // Text in einzelne Wörter zerlegen
  var words1 = b.words( tf1 );
  var words2 = b.words( tf2 );

  b.noFill();
  b.strokeWeight(1.5);
  b.stroke(255, 0, 0);

  // Shape 1
  b.beginShape();

  for(var i = 0; i < words1.length; i++) {

    if(b.startsWith(words1[i].contents, "s")) {

      // vermisst die Abgrenzungen des Worts und speichert in ein Objekt
      // mit Eigenschaften wie .left, .baseline, .height etc.
      var wordBounds = b.bounds( words1[i] );

      // Zugriff auf die Eigenschaften
      var x = wordBounds.left + wordBounds.width / 2;
      var y = wordBounds.baseline;
      var s = wordBounds.width + 2;

      b.vertex( x, y );

    }

  }

  var myShape1 = b.endShape();

  // spiegeln durch negatives Skalieren
  b.scale(-1, 1);

  // Form gespiegelt duplizieren
  var dupShape = b.duplicate(myShape1);

  b.resetMatrix();

  // Shape 2
  b.beginShape();

  for(var i = 0; i < words2.length; i++) {

    if(b.startsWith(words2[i].contents, "s")) {

      // vermisst die Abgrenzungen des Worts und speichert in ein Objekt
      // mit Eigenschaften wie .left, .baseline, .height etc.
      var wordBounds = b.bounds( words2[i] );

      // Zugriff auf die Eigenschaften
      var x = wordBounds.left + wordBounds.width / 2;
      var y = wordBounds.baseline;
      var s = wordBounds.width + 2;

      b.vertex( x, y );

    }

  }

  var myShape2 = b.endShape();

  // Über rechte Kante spiegeln

  // spiegeln durch negatives Skalieren
  b.scale(-1, 1);

  // Ausgangsform vermessen, um später die gespiegelte Form an den rechten Rand schieben zu können
  var w = b.itemWidth(myShape2);
  var x = b.itemX(myShape2);

  // Form gespiegelt duplizieren
  var dupShape = b.duplicate(myShape2);

  // duplizierte Form an den rechten Rand verschieben
  b.itemX(dupShape, x + w);


}

b.go();
