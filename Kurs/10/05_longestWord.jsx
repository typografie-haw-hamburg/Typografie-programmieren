// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  b.clear( b.doc() );
  b.units( b.MM );

  var tf = b.text("", 50, 50, 100, 200);
  b.placeholder(tf);

  var allWords = b.words(tf);

  var mostLetters = 0;
  var longestWord;

  for (var i = 0; i < allWords.length; i++) {

    if(allWords[i].length > mostLetters) {
      mostLetters = allWords[i].length;
      longestWord = allWords[i];
    }

  }

  alert("Das längest Wort ist " + longestWord.contents + " mit " + mostLetters + " Buchstaben.");

}

b.go();
