//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {

// characterRotation funktioniert anscheinend immer nur pro Zeile.
// Eingestellt wird sie durch die Rotation des letzten Buchstabens (das Umbruchzeichen)

b.clear(b.doc());

  var textFrame = b.text("Lorem ipsum\ndolor sit amet", 100, 100, 400, 200);
  var lines = b.lines(textFrame);

  for (var i = 0; i < lines.length; i++) {

    var characters = b.characters(lines[i]);
    var lastCharacter = characters[-1];

    var angle = b.random(-90, 90);
    b.typo(lastCharacter, "characterRotation", angle);

  }

}

b.go();
