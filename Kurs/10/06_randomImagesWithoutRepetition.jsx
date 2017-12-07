// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  b.clear( b.doc() );
  b.units( b.MM );

  b.noStroke();

  b.pageCount(20);

  // leerer Array wird erstellt
  var roboNumbers = [];

  for(var i = 1; i < 107; i++) {
    // Nummer zum Array hinzufügen
    roboNumbers.push(i);
  }

  // roboNumbers ist jetzt ein Array mit allen Nummer von 1 - 106: [1, 2, 3 ... 105, 106]

  for(var i = 1; i < 107; i++) {

    // zufälliger Index des Arrays wird ausgewählt
    var randomIndex = b.floor(b.random(0, roboNumbers.length));

    // die entsprechende Nummer aus dem Array wird abgerufen
    var roboNumber = roboNumbers[randomIndex];

    // Wechsel auf eine zufällige Seite
    var randomPageNumber = b.floor(b.random(1, 21));
    b.page(randomPageNumber);

    // das Bild mit der ausgewählten Nummer wird eingesetzt
    var roboImage = b.image("robo_" + roboNumber + ".png", 50, 50);
    var roboWidth = b.itemWidth(roboImage);
    var roboHeight = b.itemHeight(roboImage);
    var x = b.random(b.width);
    var y = b.random(b.height);
    b.transformImage(roboImage, x, y, roboWidth * 0.3, roboHeight * 0.3);

    // die Nummer des Roboters wird aus dem Array entfernt
    roboNumbers.splice(randomIndex, 1);

    // der Array ist jetzt kürzer, so dass beim nächsten Auswürfeln nur noch weniger Optionen zur Verfügung stehen
  }

}

b.go();
