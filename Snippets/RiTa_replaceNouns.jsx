// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";
// @include "basiljs/trych/lib/polyfills.js"
// @include "basiljs/trych/lib/rita-full.js";


function draw() {

  b.clear(b.doc());

  // zufälliges noun im Text durch ein zufälliges noun im Lexicon ersetzen

  var myString = "It was a dark and stormy night and a train and some unicorns.";
  var myRiString = RiString(myString);
  var lexicon = RiLexicon();

  var myPos = myRiString.pos();  // parts of speech
  b.println(myPos);

  b.text(myPos, 200, 200, 1000, 1000)

  var allNounPositions = []; // leerer Array in dem alle nouns-Positionen gesammelt werden

  // collect nouns
  for (var i = 0; i < myPos.length; i++) {
    if(b.startsWith(myPos[i], "nn")) {
      allNounPositions.push(i);
    }
  }

  b.println("Noun positions: " + allNounPositions);

  var randomIndex = b.floor(b.random(0, allNounPositions.length));
  var nounPosition = allNounPositions[randomIndex];

  b.println("NounPosition: " + nounPosition);

  var tf = b.text(myString, 0, 0, 100, 100);
  var myWords = b.words(tf);

  b.typo(myWords[nounPosition], "pointSize", 16);
  b.typo(myWords[nounPosition], "contents", lexicon.randomWord('nn'));


  // Token als Text ausgeben

  var tokenMeanings = {
    nn: "Nomen",
    prp: "Präposition"
  }

  var myToken = "prp";

  b.println(tokenMeanings[myToken]);
}

b.go();
