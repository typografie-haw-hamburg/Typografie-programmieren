//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";



function draw() {

b.clear( b.doc() );

//Dateinamen der Textdateien als String in einen Array speichern
var texts = b.loadString("KantLexikon.txt");
b.textFont('Helvetica','Bold');
b.textSize(9);
b.textAlign(Justification.RIGHT_JUSTIFIED,);
//Wird in Textrahmen ausgegeben und in Variablen gespeichert
var frame = b.text(texts, 36, 36, 406, 770);



  
//b.words extrahiert die Wörter aus dem Textrahmen/ Array aus Wörtern erstellen
var words = b.words(frame);

var x = b.random(36, 432);
var y = b.random(36, 636);
b.rect(x, y, 130, 170);



for(var i = 0; i < words.length; i++) {

//Misst die geometrischen Grenzen vom jedem Wort
//b.line(wordBounds.left, wordBounds.baseline, 10, 10);

  
  if(words[i].contents.toLowerCase() == "system") {
  var wordBounds = b.bounds(words[i]);
  b.line(wordBounds.left +  (wordBounds.width / 2) , wordBounds.baseline - 3.5, x+130/2, y+170/2); 
  }
}




}

b.go();
