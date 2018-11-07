// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {

  // der ausgewählte Textrahmen im Dokument wird verarbeitet
  // wichtig: hier darf kein clear()-Befehl am Anfang stehen, sonst wird alles gelöscht und es gibt keine Auswahl mehr
  var tf = selection();
  var myWords = words(tf);

  var red = color(255, 0, 0);

  for(var i = 0; i < myWords.length; i++) {

    if(myWords[i].contents.length === 4) {
      typo(myWords[i], "underline", true);
    }

  }

}