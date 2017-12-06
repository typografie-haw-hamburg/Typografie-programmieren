//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {

  b.clear(b.doc());
  b.units(b.MM);

  b.size("A4");

  var tf = b.text(b.LOREM + "\rLars Klingbeil (SPD):\r" + b.LOREM, 50, 50, 100, 200);


  // var myWords = b.words(tf);
  var myParagraphs = b.paragraphs(tf);

  // b.applyParagraphStyle(myParagraphs[0], "rot");
  // b.applyParagraphStyle(myWords[201], "rot");

  for (var i = 0; i < myParagraphs.length; i++) {
    var paragraphWords = b.words(myParagraphs[i]);
    var lastWord = paragraphWords[-1];

    b.println(lastWord.contents);

    if(b.endsWith(lastWord.contents, ":")) {

      // b.println("Hello");

      // Absatz in Wörter zerlegen

      var lastWordClean = b.trimWord(lastWord.contents);

      b.println(lastWordClean);
    }
  }

}

b.go();



