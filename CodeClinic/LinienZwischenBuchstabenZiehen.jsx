// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

//Ich möchte, dass alle gleichen Buchstaben miteinander verbunden werden, sodass ich am Ende maximal 26 Linien habe (vermutlich eher weniger, weil nicht alle Buchstaben in dem Text vorkommen)

function draw() {

  b.clear(b.doc());
  b.units(b.MM);

  b.fill(0);

 var text = "This is a talk about, something and naturally also a talk about nothing. About how something and nothing are not opposed to each other but need each other to keep on going. It is difficult to talk when you have something to say precisely because of the words which keep making us say in the way which the words need to stick to and not in the Way which we need for living. For instance someone said Art should come from within then it is profound But it seems to me Art goes within and I dont see the need for should or; then or it or profound.";

  var tf = b.text(text, 50, 50, 130, 200);

  // Text in einzelne Buchstaben zerlegen
var allCharacters = b.characters( tf );


  b.noFill();
  b.stroke(255, 0, 0);

//Linie zwischen Wörtern 
  b.beginShape();

  for(var i = 0; i < allCharacters.length; i++) {

    if(b.startsWith(allCharacters[i].contents, ????)) {

      // vermisst die Abgrenzungen des Worts und speichert in ein Objekt
      // mit Eigenschaften wie .left, .baseline, .height etc.
      var wordBounds = b.bounds( allCharacters[i] );

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
