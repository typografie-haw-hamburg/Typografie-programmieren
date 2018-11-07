// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {

  clear( doc() );

  // InDesign-Dokument muss gespeichert werden
  // neben dem InDesign-Dokument muss ein Ordner "data" mit der Datei "cage.txt" liegen
  var myText = loadString("cage.txt");

  text(myText, 100, 100, 100, 100);

}