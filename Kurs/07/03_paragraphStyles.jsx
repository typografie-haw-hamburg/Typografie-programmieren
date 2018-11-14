// @includepath ~/Documents/;%USERPROFILE%Documents;
// @include basiljs/basil.js;

function draw() {

  clear(doc());

  var tf = text(LOREM + "\r" + LOREM + "\r" + LOREM, 20, 20, 150, 200);

  var myParagraphs = paragraphs(tf);
  var myWords = words(tf);

  // es muss ein Absatzformat und ein Zeichenformat mit den jeweiligen Namen angelegt sein

  // erster Absatz wird mit dem Absatzformat ArialRed formatiert
  applyParagraphStyle(myParagraphs[0], "ArialRed");

  // erster Absatz wird mit dem Absatzformat ArialRed formatiert
  applyCharacterStyle(myWords[59], "Auszeichnung");

}