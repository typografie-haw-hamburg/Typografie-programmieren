//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/bundle/basil.js";
//@include "basiljs/lib/polyfills.js"
//@include "basiljs/lib/rita-full.js";


function draw() {

  // using RiTa functions
  b.println( RiTa.pluralize("mouse") );
  b.println( RiTa.getPhonemes("It was a dark and stormy night") );

  // using the lexicon
  var lexicon = RiLexicon();
  b.println( lexicon.randomWord() );

  // random noun from lexicon and pluralizing it
  var randomNoun = lexicon.randomWord('nn');
  b.println( randomNoun );
  b.println( RiTa.pluralize(randomNoun) );

  // using RiString to get the parts of speech
  var s = "It was a dark and stormy night.";
  var r = RiString(s);
  b.println( r.pos() );

}


b.go();
